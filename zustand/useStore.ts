import { Shoe } from "@/types/shoes";
import { create } from "zustand";
type State = {
  shoes:Shoe[]
  cart: Shoe[];
  addToCart: (shoe: Shoe) => void;
  removeFromCart: (shoeId: number) => void;
  selectQuantity: (shoeId: number, quantity: number) => void;
  selecteSize: (shoeId: number, size: string) => void;
  filterByGender:(isMenChecked?:boolean,isWomenChecked?:boolean)=>void
  // setShoes:(shoes:Shoe[])=>void
};

export const useStore = create<State>((set) => ({
  cart: [],
  shoes:[],
  addToCart: (shoe: Shoe) => {
    set((state) => ({ cart: [...state.cart, shoe] }));
  },
  removeFromCart: (shoeId: number) => {
    set((state) => ({ cart: state.cart.filter((s) => s.id !== shoeId) }));
  },
  selectQuantity: (shoeId: number, quantity: number) => {
    set((state) => ({
      cart: state.cart.map((shoe) =>
        shoe.id === shoeId ? { ...shoe, quantity } : shoe
      ),
    }));
  },
  selecteSize: (shoeId: number, size: string) => {
    set((state) => ({
      cart: state.cart.map((shoe) =>
        shoe.id === shoeId ? { ...shoe, selectedSize: size } : shoe
      ),
    }));
  },
  filterByGender:(isMenChecked?:boolean,isWomenChecked?:boolean)=>{
    set((state)=>({

    }))
  },
  // setShoes:(shoes: Shoe[]) => {
  //   set((state) => ({ shoes: [...state.shoes, shoes] }));
  // }
}));
