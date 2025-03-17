import { useState } from "react";
import Form from "./form";

function Bulletin({ text }) {
  const [showForm, setShowForm] = useState(false);

  if (text) {
    return (
      <div className="board">
        <p className="text">{text}</p>
      </div>
    );
  }

  return (
    <div className="board">
      {showForm ? (
        <Form setShowForm={setShowForm} />
      ) : (
        <button onClick={() => setShowForm(true)}>add</button>
      )}
    </div>
  );
}

export default Bulletin;
