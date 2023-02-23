"use client";

import Link from "next/link";
import useColorStore from "@/lib/store";

interface IColorStore {
  color: string;
  changecolor: () => void;
}

export function Dash() {
  const color = useColorStore((state) => state.color);
  const changeColor = useColorStore((state) => state.changecolor);

  return (
    <div>
      <h1>{color}</h1>
      <Link href="/">Home</Link>
      <br />
      <button onClick={changeColor}>change</button>
    </div>
  );
}
