import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-10">
        <div className="flex flex-col pb-5 items-center">
          <div className="font-bold text-6xl">34 C</div>
          <div>Satus</div>
          <span className="font-light"> Updated date</span>
          <div> other Details</div>
        </div>

        <div className="w-full pb-2">
          <span className="flex items-start font-medium text-3xl">Daily</span>
        </div>

        <div className=" flex gap-5 ">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
