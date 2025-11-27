const HomePage = ({ startQuiz }: { startQuiz: () => void }) => {
  return (
    <div className="px-3 min-vh-100 d-flex justify-content-center align-items-center bg-dark text-light">
      <div
        className="card p-5 shadow-lg text-center"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="mb-3 text-primary fw-bold">Quiz App</h1>
        <p className="text-muted">
          Solve 10 fast, tricky mind questions — each with a 2-minute timer.
        </p>
        <button className="btn btn-primary btn-lg mt-3" onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default HomePage;
