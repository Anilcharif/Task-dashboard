"use client";

import type { Task } from "./types";

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

function formatDate(dateString?: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
  });
}

export function TaskList({ tasks, onToggle, onRemove }: Props) {
  if (!tasks.length) {
    return <p className="highlight">Aucune tâche pour ce filtre pour l&apos;instant.</p>;
  }

  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <div className="task-main">
            <span className="task-title">{task.title}</span>
            <div className="task-meta">
              <span
                className={
                  "tag " +
                  (task.category === "study"
                    ? "study"
                    : task.category === "dev"
                    ? "dev"
                    : "personal")
                }
              >
                {task.category === "study"
                  ? "Études"
                  : task.category === "dev"
                  ? "Dev / projet"
                  : "Perso"}
              </span>
              <span
                className={
                  "tag " +
                  (task.status === "done" ? "status-done" : "status-todo")
                }
              >
                {task.status === "done" ? "Terminé" : "À faire"}
              </span>
              {task.dueDate && (
                <span className="tag">
                  🎯 Pour le {formatDate(task.dueDate)}
                </span>
              )}
            </div>
            {task.notes && <p className="task-notes">{task.notes}</p>}
          </div>
          <div className="task-actions">
            <button type="button" onClick={() => onToggle(task.id)}>
              {task.status === "done" ? "Remettre en cours" : "Marquer terminé"}
            </button>
            <button type="button" onClick={() => onRemove(task.id)}>
              Supprimer
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
