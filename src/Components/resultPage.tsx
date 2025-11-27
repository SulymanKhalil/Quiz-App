const Result = ({ goHome, score }: { goHome: () => void; score: number }) => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-success-subtle">
      <div
        className="card p-5 shadow-lg text-center"
        style={{ maxWidth: "450px" }}
      >
        <h1 className="text-success fw-bold mb-3">Quiz Finished!</h1>

        <h2 className="mb-4">
          Your Score: <span className="text-primary">{score}</span> / 20
        </h2>

        <button className="btn btn-dark btn-lg" onClick={goHome}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
