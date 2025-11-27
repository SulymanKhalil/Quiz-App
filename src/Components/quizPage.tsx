import { useState, useEffect } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question:
      "I speak without a mouth and hear without ears. I have nobody, but I comealive with wind. What am I?",
    options: ["Echo", "Shadow", "Fire", "Soundwave"],
    answer: "Echo",
  },
  {
    question: "What has keys but can’t open locks?",
    options: ["Piano", "Map", "Code", "Keyboard"],
    answer: "Piano",
  },
  {
    question: "What has hands but can’t clap?",
    options: ["Clock", "Robot", "Glove", "Statue"],
    answer: "Clock",
  },
  {
    question: "What can travel around the world while staying in a corner?",
    options: ["Stamp", "Airplane", "Shadow", "Coin"],
    answer: "Stamp",
  },
  {
    question: "What gets wetter as it dries?",
    options: ["Towel", "Sun", "Ice", "Sponge"],
    answer: "Towel",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    options: ["Footsteps", "Time", "Water", "Sand"],
    answer: "Footsteps",
  },
  {
    question: "What has one eye but can’t see?",
    options: ["Needle", "Storm", "Potato", "Cyclops"],
    answer: "Needle",
  },
  {
    question: "What has a neck but no head?",
    options: ["Bottle", "Shirt", "Guitar", "Snake"],
    answer: "Bottle",
  },
  {
    question: "What comes down but never goes up?",
    options: ["Rain", "Sun", "Shadow", "Ball"],
    answer: "Rain",
  },
  {
    question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    options: ["Candle", "Tree", "Pencil", "Mountain"],
    answer: "Candle",
  },
];

const QuizPage = ({ finishQuiz }: { finishQuiz: (score: number) => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    setTimeLeft(120);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleNext();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prev) => prev + 2);
    }

    if (currentQuestion + 1 === questions.length) {
      finishQuiz(selectedOption === questions[currentQuestion].answer ? score + 2 : score)
      return
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
  };

  const handleSkip = () => {
    if (currentQuestion + 1 === questions.length) {
      finishQuiz(score);
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption(null);
  };

  return (
    <div className="px-3 min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "600px" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-primary">
            Question {currentQuestion + 1} / {questions.length}
          </h5>
          <span className={`badge ${timeLeft <= 20 ? "bg-danger" : "bg-success"} fs-6`}>
            ⏳ {timeLeft}s
          </span>
        </div>
  
        <h4 className="mb-4">{questions[currentQuestion].question}</h4>
  
        <div className="d-grid gap-2">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              className={`btn ${
                selectedOption === option ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
  
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-danger" onClick={handleSkip}>
            Skip
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
