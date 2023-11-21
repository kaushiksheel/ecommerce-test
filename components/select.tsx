"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectComp({
  label,
  values,
  title,
  id,
  selectQuantity,
}: {
  label: string;
  values: [];
  title: string;
  id: number;
  selectQuantity: (id: number, value: number) => void;
}) {
  return (
    <Select onValueChange={(value) => selectQuantity(id, parseInt(value))}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select Quantity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Quantity</SelectLabel>
          {values.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
