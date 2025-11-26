"use client";

import type { Filter } from "./useTasks";

type Props = {
  filter: Filter;
  onChange: (next: Filter) => void;
  total: number;
};

export function FilterBar({ filter, onChange, total }: Props) {
  function setCategory(category: Filter["category"]) {
    onChange({ ...filter, category });
  }

  function setStatus(status: Filter["status"]) {
    onChange({ ...filter, status });
  }

  return (
    <div className="tasks-header">
      <div>
        <h2>Tâches</h2>
        <small>{total} au total (stockées dans ce navigateur)</small>
      </div>
      <div className="filters">
        <button
          type="button"
          className={
            "filter-pill " + (filter.category === "all" ? "active" : "")
          }
          onClick={() => setCategory("all")}
        >
          Tout
        </button>
        <button
          type="button"
          className={
            "filter-pill " + (filter.category === "study" ? "active" : "")
          }
          onClick={() => setCategory("study")}
        >
          Études
        </button>
        <button
          type="button"
          className={
            "filter-pill " + (filter.category === "dev" ? "active" : "")
          }
          onClick={() => setCategory("dev")}
        >
          Dev
        </button>
        <button
          type="button"
          className={
            "filter-pill " +
            (filter.category === "personal" ? "active" : "")
          }
          onClick={() => setCategory("personal")}
        >
          Perso
        </button>
        <button
          type="button"
          className={
            "filter-pill " + (filter.status === "all" ? "active" : "")
          }
          onClick={() => setStatus("all")}
        >
          Tous statuts
        </button>
        <button
          type="button"
          className={
            "filter-pill " + (filter.status === "todo" ? "active" : "")
          }
          onClick={() => setStatus("todo")}
        >
          À faire
        </button>
        <button
          type="button"
          className={
            "filter-pill " + (filter.status === "done" ? "active" : "")
          }
          onClick={() => setStatus("done")}
        >
          Terminés
        </button>
      </div>
    </div>
  );
}
