import "./QuickQuestions.css";

function QuickQuestions({ questions, onQuestionClick }) {
  return (
    <div className="quick-questions">

      {questions.map((question, index) => (
        <button
          key={index}
          className="question-chip"
          onClick={() => onQuestionClick(question)}
        >
          {question}
        </button>
      ))}

    </div>
  );
}

export default QuickQuestions;