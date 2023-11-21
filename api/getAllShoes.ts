import { Shoe } from "@/types/shoes";

export const getAllShoes = async (): Promise<Shoe[]> => {
  {
    const res = await fetch("https://jordan-shoes.p.rapidapi.com/shoes", {
      headers: {
        "X-RapidAPI-Key": process.env.X_RapidAPI_Key!,
        "X-RapidAPI-Host": process.env.X_RapidAPI_Host!,
      },
    });
    const data = await res.json();

    return data;
  }
};
