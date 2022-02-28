import create from "zustand";
import { Ship } from "../ship";

interface ShipStoreContent {
  ships: Ship[];
}

export interface ShipStore extends ShipStoreContent {
  add: (s: Ship) => void;
  cleanup: () => void;
}

export const useShip = create<ShipStore>((set) => ({
  ships: [],
  add: (s: Ship) => {
    set((state) => ({ ships: [...state.ships, s] }));
  },
  cleanup: () => {
    set((state) => ({ ships: [] }));
  }
}));
