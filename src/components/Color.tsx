"use client";

import Link from "next/link";
import useColorStore from "@/lib/store";
import { useEffect, useState } from "react";

export function Color() {
  const [cor, setCor] = useState<string>("");

  const color = useColorStore((state) => state.color);
  const changeColor = useColorStore((state) => state.changecolor);

  useEffect(() => {
    setCor(color);
  }, [color]);

  return (
    <div className="mx-5 my-5">
      <div className="flex justify-center rounded-lg">
        <h2 className="text-lg bg-black text-white rounded-full px-3">
          Home Page
        </h2>
      </div>
      <h2 className="text-lg bg-gray-600 text-white px-3">{cor}</h2>
      <Link href="/dash" className="text-blue-500 text-sm">
        Dash
      </Link>
      <br />
      <button
        onClick={changeColor}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
      >
        change
      </button>
    </div>
  );
}
