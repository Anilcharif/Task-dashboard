import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Task Planner · Next.js",
  description:
    "Petit planificateur de tâches pour organiser les révisions, le dev et le perso. Réalisé avec Next.js et stockage local.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
