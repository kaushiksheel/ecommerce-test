"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Shoe } from "@/types/shoes";
import { useStore } from "@/zustand/useStore";
import { toast } from "./use-toast";
import { useSession } from "next-auth/react";

export const ShoeCard = ({ image, shoe }: { image: string; shoe: Shoe }) => {
  const { status } = useSession();
  const { addToCart, cart } = useStore();

  const handleAddToCart = () => {
    if (status === "authenticated") {
      if (cart.includes(shoe)) {
        toast({
          variant: "default",
          title: "Error",
          description: "Item already in cart",
        });
      } else {
        addToCart(shoe);
      }
    } else {
      toast({
        variant: "default",
        title: "Error",
        description: "Please login to add to cart",
        className: "text-xl",
      });
    }
  };
  return (
    <Card className="w-full p-2">
      <CardHeader className="relative group w-full h-[200px]   rounded-lg overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover group-hover:scale-105 transition-all ease-linear"
          alt="shoe"
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="mt-4 text-center">
        <CardTitle className="text-lg">
          <Link href={`/shoe/${shoe.slug}`}>{shoe.name}</Link>
        </CardTitle>
        <p className="mt-2 text-gray-500 font-semibold">$432.3</p>
      </CardContent>

      <Button onClick={handleAddToCart} className="mx-auto grid mb-2">
        Add to Cart
      </Button>
    </Card>
  );
};
