import { Card } from "../../features/components/Card";
import { Navbar } from "@/features/components/Navbar";

const QuizPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center border"
        style={{ height: "90vh", boxSizing: "border-box" }}
      >
        <Card />
      </div>
    </>
  );
};

export default QuizPage;
