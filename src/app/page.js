import Link from "next/link";
import { Navbar } from "@/features/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="border d-flex align-items-center justify-content-center"
        style={{ height: "90vh", boxSizing: "border-box" }}
      >
        <section className="m-5 border text-center shadow-lg p-5 mb-5 bg-body rounded">
          <h1>Click the start button to begin your quiz</h1>
          <p>Good luck</p>
          <Link href="/quizpage" className="btn btn-success btn-lg">
            Start
          </Link>
        </section>
      </main>
    </>
  );
}
