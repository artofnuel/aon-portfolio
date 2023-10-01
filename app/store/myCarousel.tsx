import { create } from "zustand";

type CarouselStore = {
  currentIndex: number;
  reset: () => void;
  next: () => void;
  prev: () => void;
};

const useCarouselStore = create<CarouselStore>((set) => ({
  currentIndex: 0,
  reset: () =>
    set((state) => ({
      currentIndex: (state.currentIndex = 0),
    })),
  next: () =>
    set((state) => ({
      currentIndex: state.currentIndex + 1,
    })),
  prev: () =>
    set((state) => ({
      currentIndex: state.currentIndex - 1,
    })),
}));

export default useCarouselStore;
