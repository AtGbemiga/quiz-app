"use client";
import { useState } from "react";
import { data } from "../data/data";
import { useDispatch } from "react-redux";
import { userAnswer } from "../quesAns/quesAnsSlice";
import Link from "next/link";

const Submit = () => (
  <Link href="/submitted">
    <button className="btn btn-success ms-auto">Submit</button>
  </Link>
);

export const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const currentItem = data[currentIndex];
  const isLastQuestion = currentIndex === data.length - 1;

  const dispatch = useDispatch();

  function handleNext() {
    dispatch(userAnswer(selectedOption));
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setSelectedOption("");
  }

  const questionInNumber = currentIndex + 1;
  const totalArrayLength = data.length;
  const progressPercentage = ((currentIndex + 1) / totalArrayLength) * 100;

  const canSave = !selectedOption;

  const buttonText = isLastQuestion ? <Submit /> : "Next";

  return (
    <div
      className="container col-sm-9 col-md-9 col-lg-6 border shadow-sm p-5 mb-5 bg-body rounded"
      style={{ marginTop: "-10rem" }}
    >
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${progressPercentage}%` }}
          aria-valuenow={progressPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p>
        {questionInNumber} of {totalArrayLength} questions
      </p>
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
              <label htmlFor="optionOne" className="form-check-label">
                {" "}
                {currentItem.optionOne}
              </label>
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
              <label htmlFor="optionTwo" className="form-check-label">
                {" "}
                {currentItem.optionTwo}
              </label>
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
              <label htmlFor="optionThree" className="form-check-label">
                {" "}
                {currentItem.optionThree}
              </label>
            </div>
          </section>
        </div>
      </div>
      <button
        disabled={canSave}
        onClick={handleNext}
        type="button"
        className="btn btn-success ms-auto"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
