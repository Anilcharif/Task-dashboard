"use client";

import { useEffect, useState } from "react";
import type { Task, TaskCategory, TaskStatus } from "./types";

const STORAGE_KEY = "next-task-planner::tasks";

export type Filter = {
  category: "all" | TaskCategory;
  status: "all" | TaskStatus;
};

const defaultFilter: Filter = {
  category: "all",
  status: "all",
};

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>(defaultFilter);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setTasks(parsed);
      }
    } catch {
      // on ignore les erreurs de parsing
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // on ignore les erreurs de stockage
    }
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter.category !== "all" && task.category !== filter.category) {
      return false;
    }
    if (filter.status !== "all" && task.status !== filter.status) {
      return false;
    }
    return true;
  });

  function addTask(input: {
    title: string;
    category: TaskCategory;
    notes?: string;
    dueDate?: string;
  }) {
    const now = new Date().toISOString();
    const task: Task = {
      id: crypto.randomUUID(),
      title: input.title.trim(),
      category: input.category,
      notes: input.notes?.trim() || undefined,
      dueDate: input.dueDate || undefined,
      status: "todo",
      createdAt: now,
    };
    setTasks((prev) => [task, ...prev]);
  }

  function toggleStatus(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "todo" ? "done" : "todo",
            }
          : task,
      ),
    );
  }

  function removeTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id != id));
  }

  return {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleStatus,
    removeTask,
  };
}
