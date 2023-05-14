'use client'
import { useState } from "react";
import { data } from "../data/data";
import { useDispatch } from "react-redux";
import { userAnswer } from "../quesAns/quesAnsSlice";

export const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const currentItem = data[currentIndex];

  const dispatch = useDispatch();

  function handleNext() {
    dispatch(userAnswer(selectedOption));
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setSelectedOption("");
  }

  return (
    <div className="container col-sm-9 col-md-9 col-lg-6 border shadow-sm p-5 mb-5 bg-body rounded" style={{marginTop: "-10rem"}}>
      <div>
        <div>
        <h1>{currentItem.question}</h1>
        <section>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="optionOne"
              name="choice"
              value={currentItem.optionOne}
              checked={selectedOption === currentItem.optionOne}
              onChange={() => setSelectedOption(currentItem.optionOne)}
            />
            <label htmlFor="optionOne" className="form-check-label"> {currentItem.optionOne}</label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              id="optionTwo"
              name="choice"
              value={currentItem.optionTwo}
              checked={selectedOption === currentItem.optionTwo}
              onChange={() => setSelectedOption(currentItem.optionTwo)}
            />
            <label htmlFor="optionTwo" className="form-check-label"> {currentItem.optionTwo}</label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="radio"
              id="optionThree"
              name="choice"
              value={currentItem.optionThree}
              checked={selectedOption === currentItem.optionThree}
              onChange={() => setSelectedOption(currentItem.optionThree)}
            />
            <label htmlFor="optionThree" className="form-check-label"> {currentItem.optionThree}</label>
          </div>
        </section>    
        </div>
      </div>
      <button onClick={handleNext} type="button" className="btn btn-success ms-auto">
        Next
      </button>
    </div>
  );
};

export default Card;