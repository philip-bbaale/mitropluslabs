"use client";
import Image from "next/image";
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Home() {
  return (
    <main className=" container_box">
      <div className="grid-cols-12">
        <div className="gird-cols-6">
          <h1 className="text-violet-400">
            Blockchain, Metaverse & Artificial Intelligence for Africa
          </h1>
        </div>
        <div className="grid-cols-6">
          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene="https://prod.spline.design/iWwNSLDMIpdH0Xmq/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
