"use client";
import React from "react";
import { Shoe } from "@/types/shoes";
import { AccordianComp } from "./accordian";
import { Button } from "./ui/button";
import { useStore } from "@/zustand/useStore";
import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";

export const ShoeDetails = ({ data }: { data: Shoe }) => {
  const { status } = useSession();
  const { toast } = useToast();
  const { addToCart, cart } = useStore();

  const handleAddToCart = () => {
    if (cart.includes(data)) {
      toast({
        variant: "default",
        title: "Error",
        description: "Item already in cart",
        className: "text-xl",
      });
    } else {
      addToCart(data);
    }
  };
  return (
    <div className="w-full  ">
      <h3 className="font-medium text-2xl">{data?.name}</h3>
      <p className="my-2">$ {data?.price}</p>
      <Button onClick={handleAddToCart} className="w-full my-5">
        Add to cart
      </Button>
      <p className="desc">{data?.overview}</p>
      <AccordianComp title="Benefits">
        <ul className="list-disc list-inside">
          {data?.benefits.map((benefit) => (
            <li key={benefit.id}>{benefit.text}</li>
          ))}
        </ul>
      </AccordianComp>

      <AccordianComp title="Product Information">
        {data?.product_information.text}
      </AccordianComp>
    </div>
  );
};
