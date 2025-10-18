import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, summary: string) {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        title,
        description: summary,
        id: Math.random(),
      };
      return [...prev, newGoal];
    });
  }

  function handledeleteGoal(id: number) {
    setGoals((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        Your Course Goals
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handledeleteGoal} />
    </main>
  );
}
