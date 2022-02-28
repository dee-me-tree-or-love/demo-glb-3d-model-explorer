import create from "zustand";
import { Fish } from "../fish";

interface FishStoreContent {
  fishes: Fish[];
}

export interface FishStore extends FishStoreContent {
  add: (f: Fish) => void;
  cleanup: () => void;
}

export const useFish = create<FishStore>((set) => ({
  fishes: [],
  add: (f: Fish) => {
    set((state) => ({ fishes: [...state.fishes, f] }));
  },
  cleanup: () => {
    set((state) => ({ fishes: [] }));
  }
}));
