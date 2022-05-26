import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-around gap-10 px-8 lg:flex-row">
      <img
        className="left-40 h-52 lg:absolute lg:h-[30rem]"
        src="/404.gif"
        alt=""
      />
      <div className="z-10 flex flex-col gap-10 text-center lg:gap-20">
        <p className="text-4xl font-black text-white lg:text-9xl">404</p>
        <h1 className="text-3xl font-black text-white lg:text-6xl">
          Oops.. Where's The Page?
        </h1>
        <div className="text-center">
          <Link href="/">
            <span
              className="inline-block transform cursor-pointer rounded-full bg-black px-8 py-3 text-lg 
          font-medium text-white transition duration-500 hover:-translate-y-1"
            >
              Return to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
