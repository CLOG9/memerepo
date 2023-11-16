"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("");
  const [state2, setState2] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex  flex-col items-center gap-7">
        <p>hey, wech howa ismk?</p>
        <input
          type="text"
          onChange={(e) => {
            setState(e.target.value);
            setState2(false);
          }}
          className="text-black"
        />
        <button className="text-blue-500" onClick={() => setState2(true)}>
          Validate
        </button>
      </div>
      {state2 === true && (
        <div className="flex  flex-col items-center gap-7">
          <Image alt="hhhh" src={"/hh.jpeg"} width={200} height={200} />
          <p>eya roh 9wd {state} HHHHH</p>
        </div>
      )}
    </main>
  );
}
