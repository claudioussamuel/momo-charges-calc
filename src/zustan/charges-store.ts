import { create } from 'zustand'

interface ChargesState {
  amount: number
  charges: number
  totalAmount: number
  setAmount: (amount: number) => void
  setCharges: (charges: number) => void
  resetState: () => void
}

export const useChargesStore = create<ChargesState>((set) => ({
  amount: 0,
  charges: 0,
  totalAmount: 0,
  setAmount: (amount) => set((state) => ({ 
    amount,
    totalAmount: amount + state.charges 
  })),
  setCharges: (charges) => set((state) => ({ 
    charges,
    totalAmount: state.amount + charges 
  })),
  resetState: () => set({ 
    amount: 0, 
    charges: 0, 
    totalAmount: 0 
  })
}))
