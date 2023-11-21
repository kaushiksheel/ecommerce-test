"use client";
import Image from "next/image";
import React from "react";
import { SelectComp } from "@/components/select";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Shoe } from "@/types/shoes";
import { useStore } from "@/zustand/useStore";
import Link from "next/link";

export const CartItem = ({ item }: { item: Shoe }) => {
  const { removeFromCart, selectQuantity } = useStore();

  return (
    <div className=" border rounded-sm  p-3 flex justify-between items-center mb-3">
      <div className="flex items-center space-x-4">
        <Image
          width={80}
          height={80}
          className="object-cover rounded-lg"
          src={item.img}
          alt="a shoe"
        />
        <Link href={`/shoe/${item.slug}`}>{item.name}</Link>
      </div>
      <div className="flex items-center space-x-6">
        <SelectComp
          id={item.id}
          selectQuantity={selectQuantity}
          label="select quantity"
          values={[1, 2, 3, 4, 5] as any}
          title="quantity"
        />
        <p className="font-semibold">${item.price}</p>
        <Button
          onClick={() => removeFromCart(item.id)}
          variant="outline"
          size="icon"
        >
          <Trash2 size={20} />
        </Button>
      </div>
    </div>
  );
};
