export type TaskCategory = "study" | "dev" | "personal";
export type TaskStatus = "todo" | "done";

export type Task = {
  id: string;
  title: string;
  category: TaskCategory;
  status: TaskStatus;
  notes?: string;
  dueDate?: string;
  createdAt: string;
};
