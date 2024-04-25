import { create } from "zustand";

export const useStore = create((set) => ({
  play: true,
  setPlay: (play) => set({ play }),
}));
