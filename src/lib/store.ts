import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IColorStore {
  color: string;
  changecolor: () => void;
}

const useColorStore = create<IColorStore>()((set) => ({
  color: "azul",
  changecolor: () =>
    set((state) => ({ color: state.color === "azul" ? "verde" : "azul" })),
}));

export default useColorStore;
