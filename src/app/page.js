import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-gray-100 bg-gray-700">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">I&apos;m Sumit Kumar</h1>
        <p className="text-xl mb-8">
          Backend Developer | API Specialist | Golang Enthusiast
        </p>
        <button className="btn btn-primary">View My Resume</button>
      </div>
    </div>
  );
}
