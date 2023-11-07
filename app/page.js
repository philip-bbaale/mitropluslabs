"use client";
import Image from "next/image";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <main className="container_box">
      <div className=" flex justify-center gap-5">
        <div className=" grid lg:w-1/2 my-10 gap-5">
          <h1 className=" header1 text-center">
            Blockchain, Metaverse & <br></br> Artificial Intelligence <br></br>{" "}
            <span className=" text-yellow-600">for Africa</span>
          </h1>
          <p className="text2 text-center">
            Bridging The Gap Between the New Emerging Digital world With the
            Existing Mainstream Financial infrastructure and architecture.
          </p>
        </div>
      </div>
    </main>
  );
}
