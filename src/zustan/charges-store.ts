import { create } from 'zustand'

interface ChargesState {
  amount: number
  charges: number
  totalAmount: number
  isModalOpen: boolean
  setAmount: (amount: number) => void
  setCharges: (charges: number) => void
  setModalOpen: (isOpen: boolean) => void
  resetState: () => void
}

export const useChargesStore = create<ChargesState>((set) => ({
  amount: 0,
  charges: 0,
  totalAmount: 0,
  isModalOpen: false,
  setAmount: (amount) => set((state) => ({ 
    amount,
    totalAmount: amount + state.charges 
  })),
  setCharges: (charges) => set((state) => ({ 
    charges,
    totalAmount: state.amount + charges 
  })),
  setModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  resetState: () => set({ 
    amount: 0, 
    charges: 0, 
    totalAmount: 0 
  })
}))
