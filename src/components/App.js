import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(questions => {
        setQuestions(questions)
      })
  }, [])

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function onDeleteItem() {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(questions => {
        setQuestions(questions)
      })
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} onDeleteItem={onDeleteItem} />}
    </main>
  );
}

export default App;
