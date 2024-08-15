import "./App.css";
import { LessonCard } from "./LessonCard";

const lessons = JSON.parse(window.localStorage.getItem("lessons"));

const dayPartsTitles = [
  "Day 1: Morning",
  "Day 1: Afternoon",
  "Day 2: Morning",
  "Day 2: Afternoon",
  "Day 3: Morning",
  "Day 3: Afternoon",
  "Day 4: Morning",
  "Day 4: Afternoon",
  "Concurrency: Morning",
  "Concurrency: Afternoon",
];

function App() {
  return (
    <>
      <header></header>
      <main>
        <details>
          <summary>{dayPartsTitles[0]}</summary>
          {lessons[0][0].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[1]}</summary>
          {lessons[0][1].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[2]}</summary>
          {lessons[1][0].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[3]}</summary>
          {lessons[1][1].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[4]}</summary>
          {lessons[2][0].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[5]}</summary>
          {lessons[2][1].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[6]}</summary>
          {lessons[3][0].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[7]}</summary>
          {lessons[3][1].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[8]}</summary>
          {lessons[4][0].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
        <details>
          <summary>{dayPartsTitles[9]}</summary>
          {lessons[4][1].map(({ title, value }) => (
            <LessonCard
              lessonTitle={title}
              initialLessonState={`${value}`}
              key={title}
            ></LessonCard>
          ))}
        </details>
      </main>
    </>
  );
}

export default App;
