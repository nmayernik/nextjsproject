import Image from "next/image";

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
      <div>
        <section className="mb-6">
          <h1 className="mb-3 text-2xl font-bold">Projects</h1>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold">Select Projects</h2>
          <p>
            Next.js is a minimalistic framework for creating server-rendered
            React applications.
          </p>
        </section>
      </div>

    </div>
  );
}
