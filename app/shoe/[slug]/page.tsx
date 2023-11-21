import { getShoeBySlug } from "@/api/getShoeBySlug";
import { ImageGallery } from "@/components/image-gallery";
import { ShoeDetails } from "@/components/shoe-details";
import React from "react";

async function ShoeInfo({ params }: { params: { slug: string } }) {
  const data = await getShoeBySlug(params.slug);
  const thumbnails = data?.thumbnails.map((thumbnail) => thumbnail.img);

  return (
    <>
      <div className="container mt-3 grid grid-cols-1 md:grid-cols-3 gap-20  ">
        <ImageGallery thumbnails={thumbnails.slice(0, 7)} />
        <ShoeDetails data={data} />
      </div>
    </>
  );
}

export default ShoeInfo;
