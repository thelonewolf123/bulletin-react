import { useState } from "react";
import { useAppContent } from "pocketbase-react";

function Form({ setShowForm }) {
  const [state, setState] = useState();
  const { actions } = useAppContent("secrets");

  return (
    <div className="form">
      <textarea onChange={(e) => setState(e.target.value)}></textarea>
      <button
        onClick={() => {
          actions.create({ message: state });
          setShowForm(false);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
