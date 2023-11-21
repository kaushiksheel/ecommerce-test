"use client";
import React, { useState } from "react";
import { Checkbox as CheckBx } from "./ui/checkbox";

export const Checkbox = ({
  title,
  id,
  isChecked,
  setIsChecked,
}: {
  title: string;
  id: string;
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <CheckBx
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        id={id}
      />
      <label
        htmlFor={id}
        className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  );
};
