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
    <div>
      <h1>{cor}</h1>
      <Link href="/dash">Dash</Link>
      <br />
      <button onClick={changeColor}>change</button>
    </div>
  );
}
