"use client";
import { CartItem } from "@/components/cart-item";
import { useStore } from "@/zustand/useStore";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

const imgLink =
  "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";

function Cart() {
  const { cart } = useStore();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container">
      <div className="grid grid-cols-3 mt-5 gap-10">
        <div className="col-span-2">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <Card className="w-full h-fit">
          <CardHeader>
            <CardTitle>Cart Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p>
                {totalQuantity} x ${subtotal}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full">Confirm Payment</Button>
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
            <div className=" flex "></div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Cart;
