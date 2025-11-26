"use client";

import { useState, FormEvent } from "react";
import type { TaskCategory } from "./types";

type Props = {
  onSubmit: (input: {
    title: string;
    category: TaskCategory;
    notes?: string;
    dueDate?: string;
  }) => void;
};

export function TaskForm({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<TaskCategory>("study");
  const [notes, setNotes] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title,
      category,
      notes,
      dueDate,
    });

    setTitle("");
    setNotes("");
    setDueDate("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="title">Tâche</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Révision algo, maquette React, sport..."
          />
        </div>
        <div className="form-group" style={{ maxWidth: 160 }}>
          <label htmlFor="category">Catégorie</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as TaskCategory)}
          >
            <option value="study">Études</option>
            <option value="dev">Dev / Projet</option>
            <option value="personal">Perso</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="notes">Notes (optionnel)</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Détail, lien GitHub, chapitre à voir, etc."
          />
        </div>
        <div className="form-group" style={{ maxWidth: 160 }}>
          <label htmlFor="dueDate">Pour quand ?</label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
      <div className="btn-row">
        <button type="submit" className="btn btn-primary">
          Ajouter la tâche
        </button>
      </div>
    </form>
  );
}
