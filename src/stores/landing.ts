import create from 'zustand'

interface LandingState {
  isOpenMenu: boolean
  setIsOpenMenu: (isOpen: boolean) => void
}

export const useLandingStore = create<LandingState>((set) => ({
  isOpenMenu: false,
  setIsOpenMenu: (isOpen: boolean) => set(() => ({ isOpenMenu: isOpen })),
}))
