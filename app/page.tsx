"use client";

import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import { FilterBar } from "../components/FilterBar";
import { useTasks } from "../components/useTasks";

export default function HomePage() {
  const { tasks, filteredTasks, filter, setFilter, addTask, toggleStatus, removeTask } =
    useTasks();

  const doneCount = tasks.filter((t) => t.status === "done").length;
  const todoCount = tasks.filter((t) => t.status === "todo").length;

  return (
    <div className="page">
      <header>
        <div className="brand">
          <span className="brand-mark">TP</span>
          <div className="brand-text">
            <strong>Task Planner</strong>
            <small>Un petit outil pour organiser les journées chargées</small>
          </div>
        </div>
        <p className="tagline">
          Ajoute tes tâches (révisions, dev, perso) et suis ce que tu as terminé, directement
          dans ton navigateur.
        </p>
      </header>

      <main>
        <section>
          <div className="hero">
            <h1>Planifie ton temps entre études, dev et perso</h1>
            <p>
              L&apos;idée : un outil simple que tu ouvres en début de journée pour noter les
              révisions, les tâches de développement et les choses perso à ne pas oublier.
              Les données restent stockées dans ton navigateur (localStorage).
            </p>
            <div className="badges">
              <span className="badge">Next.js</span>
              <span className="badge">React</span>
              <span className="badge">LocalStorage</span>
              <span className="badge">Petit outil perso utile</span>
            </div>
          </div>

          <div className="card">
            <h2>Nouvelle tâche</h2>
            <p>
              Commence par ajouter ce que tu veux faire aujourd&apos;hui ou cette semaine :
              une session de révision, une fonctionnalité à coder, un appel perso...
            </p>
            <TaskForm onSubmit={addTask} />
          </div>

          <div className="card tasks-card">
            <FilterBar
              filter={filter}
              onChange={setFilter}
              total={tasks.length}
            />

            <TaskList
              tasks={filteredTasks}
              onToggle={toggleStatus}
              onRemove={removeTask}
            />
          </div>
        </section>

        <aside className="sidebar">
          <div className="card">
            <h3>Aperçu rapide</h3>
            <p className="highlight">
              <strong>{doneCount}</strong> tâche(s) terminée(s) ·{" "}
              <strong>{todoCount}</strong> à faire
            </p>
            <p className="highlight" style={{ marginTop: "0.35rem" }}>
              C&apos;est un petit projet Next.js pensé comme un outil réel : pratique au
              quotidien, et pas juste une démo visuelle.
            </p>
          </div>
          <div className="card">
            <h3>Comment l&apos;utiliser</h3>
            <ul style={{ listStyle: "none", fontSize: "0.8rem", color: "#9ca3af" }}>
              <li>• Ajoute 3 à 5 tâches importantes pour la journée.</li>
              <li>• Utilise les catégories pour séparer études / dev / perso.</li>
              <li>• Coche ce que tu termines au fur et à mesure.</li>
              <li>• Le lendemain, tu gardes ce qui reste à faire et tu ajustes.</li>
            </ul>
          </div>
        </aside>
      </main>

      <footer>
        <span>Task Planner – projet Next.js pensé comme un petit outil du quotidien.</span>
        <span>Les tâches restent enregistrées dans ce navigateur via localStorage.</span>
      </footer>
    </div>
  );
}
