import { getAllShoes } from "@/api/getAllShoes";
import { ShoeCard } from "@/components/ui/shoe-card";
import React from "react";

async function Home() {
  const data = await getAllShoes();

  return (
    <div className="">
      
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4">
        {data?.map((shoe) => (
          <ShoeCard key={shoe.id} image={shoe.img} shoe={shoe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
