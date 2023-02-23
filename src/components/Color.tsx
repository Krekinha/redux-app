"use client";

import useColorStore from "@/lib/store";
import Link from "next/link";

interface IColorStore {
    color: string;
    changecolor: () => void;
  }

export function Color() {
  const color = useColorStore((state) => state.color);
  const changeColor = useColorStore((state) => state.changecolor)

  return (
    <div>
      <h1>{color}</h1>
      <Link href="/dash">Dash</Link>
      <br />
      <button onClick={changeColor}>change</button>
    </div>
  );
}