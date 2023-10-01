import { create } from "zustand";

type MyStore = {
  isOpen: boolean;
  toggleNav: () => void;
  falseNav: () => void;
};

const useMyStore = create<MyStore>()((set) => ({
  isOpen: false,
  toggleNav: () => set((state) => ({ isOpen: !state.isOpen })),
  falseNav: () => set((state) => ({ isOpen: (state.isOpen = false) })),
}));

export default useMyStore;
