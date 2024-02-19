// import Image from "next/image";
import { ProductsModel } from "@/utils/type";
import Link from "next/link";

// import React from 'react'
const Card = ({ data }: { data: ProductsModel }) => {
  return (
    <>
      <div className="px-4 py-5 bg-transparent hover:scale-95 transition-all hover:ease-in duration-150 flex flex-col gap-2">
        <img
          className="object-cover rounded-xl"
          src="https://i.pinimg.com/474x/9f/e3/b5/9fe3b56b082db6cf30e6b5cd4a47d2c3.jpg"
          alt=""
        />
        <Link
          href={`/products/${data?._id}`}
          className="flex max-md:flex-col justify-between"
        >
          <h1 className="text-2xl tracking-tighter max-md:text-xl font-semibold">
            {data?.name}
          </h1>
          <p className="text-2xl max-md:text-md font-bold tracking-wide">
            {data?.price}
          </p>
        </Link>
      </div>
    </>
  );
};

export default Card;
