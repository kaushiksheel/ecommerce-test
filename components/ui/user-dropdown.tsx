"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";

export const UserDropdown = () => {
  const { status, data } = useSession();
  console.log(data)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            placeholder="k"
            src={data?.user?.image! || "https://github.com/shadcn.png"}
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>Profile</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        {status === "authenticated" ? (
          <DropdownMenuCheckboxItem onClick={() => signOut()}>
            Logout
          </DropdownMenuCheckboxItem>
        ) : (
          <DropdownMenuCheckboxItem onClick={() => signIn()}>
            Login
          </DropdownMenuCheckboxItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
