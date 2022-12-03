import create from 'zustand'

interface LandingState {
  isLoaded: boolean
  setIsLoaded: (isloaded: boolean) => void
}

export const useLoadingStore = create<LandingState>((set) => ({
  isLoaded: false,
  setIsLoaded: (isLoaded: boolean) => set(() => ({ isLoaded })),
}))
