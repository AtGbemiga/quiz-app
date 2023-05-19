import { Navbar } from "@/features/components/Navbar";

const SubmittedPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div
          style={{ position: "absolute", left: "45%", top: "20%", zIndex: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="86"
            height="86"
            fill="currentColor"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              className="text-success fs-1"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
        </div>
        <section
          style={{ position: "fixed", top: "20%", width: "89%" }}
          className="m-5 border text-center shadow-lg p-5 mb-5 bg-body rounded"
        >
          Submitted Successfully!
        </section>
      </main>
    </div>
  );
};

export default SubmittedPage;
