"use client";
import React from "react";
import { Button } from "./ui/button";
import { useStore } from "@/zustand/useStore";

export const SelectSize = ({
  is_available,
  size,
  id,
  selectedSize,
}: {
  id: number;
  size: string;
  is_available: boolean;
  selectedSize?: string;
}) => {
  const { selecteSize: selectShoeSize } = useStore();
  return (
    <Button
      onClick={() => {
        selectShoeSize(id, size);
      }}
      disabled={!is_available}
      key={id}
      variant={selectedSize === size ? "secondary" : "outline"}
    >
      {size}
    </Button>
  );
};
