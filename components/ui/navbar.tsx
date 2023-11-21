"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../toggle-theme";
import { UserDropdown } from "./user-dropdown";
import { ShoppingBag } from "lucide-react";
import { useStore } from "@/zustand/useStore";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const { cart } = useStore();

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container flex h-14 items-center w-full">
        <div className="flex justify-between items-center w-full">
          <Link href={"/shoes"} className="font-semibold text-xl">
            ShoeStore
          </Link>
          <div className="flex space-x-6 items-center">
            <Link href="/cart" className="relative">
              <ShoppingBag size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3  w-5 h-5 text-white rounded-full  bg-purple-600 grid place-content-center">
                  {cart.length}
                </span>
              )}
            </Link>
            <ModeToggle />
            <UserDropdown />
          </div>
        </div>
      </nav>
    </header>
  );
};
