import styles from "./LessonCard.module.css";
import { useState } from "react";

export function LessonCard({ lessonTitle, initialLessonState }) {
  const [lessonState, setLessonState] = useState(initialLessonState);

  const dotClassName =
    lessonState === "1"
      ? styles.state1
      : lessonState === "2"
      ? styles.state2
      : styles.state0;

  const hadleChange = (event) => {
    setLessonState(`${event.target.value}`)

    // Guardar los cambios en el localStorage
    let lessons = JSON.parse(window.localStorage.getItem("lessons"))
    lessons[0][0].find(function(element, index) {
      if(element.title === lessonTitle) {
        lessons[0][0][index].value = event.target.value
        window.localStorage.setItem("lessons", JSON.stringify(lessons))
        alert("Your change are save")
      }
    })
  }

  return (
    <article>
      <svg width="24" height="24" viewBox="0 0 24 24" className={dotClassName}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
      </svg>
      <strong>{lessonTitle}</strong>
      <select name="state" defaultValue={initialLessonState} onChange={hadleChange}>
        <option value="0">Sin empezar</option>
        <option value="1">Sin terminar</option>
        <option value="2">Terminada</option>
      </select>
    </article>
  );
}
