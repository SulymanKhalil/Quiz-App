import HomePage from "./Components/homePage";
import QuizPage from "./Components/quizPage";
import Result from "./Components/resultPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  return (
    <>
      {!quizStarted && !quizFinished && (
        <HomePage startQuiz={() => setQuizStarted(true)} />
      )}

      {quizStarted && !quizFinished && (
        <QuizPage
          finishQuiz={(score: number) => {
            setFinalScore(score);
            setQuizStarted(false);
            setQuizFinished(true);
          }}
        />
      )}

      {quizFinished && (
        <Result
          score={finalScore}
          goHome={() => {
            setQuizFinished(false);
            setFinalScore(0);
          }}
        />
      )}
    </>
  );
}

export default App;
