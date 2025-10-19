import type { ReactNode } from "react";
import type { CourseGoal as CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        No course goals set yet. Please start adding!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 3) {
    warningBox = (
      <InfoBox mode="warning">Too much goals. Please delete some!</InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal
              key={goal.id}
              id={goal.id}
              title={goal.title}
              onDeleteGoal={onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
