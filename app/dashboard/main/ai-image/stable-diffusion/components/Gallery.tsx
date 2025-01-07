"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Gallery({ images }: { images: string[] }) {
  const initializeColumns = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1568) return 5;
      if (window.innerWidth > 1268) return 4;
      if (window.innerWidth > 640) return 3;
      if (window.innerWidth > 368) return 2;
      return 1;
    }
    return 5;
  };

  const [columns, setColumns] = useState(initializeColumns());

  const resizeListener = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1280) setColumns(5);
      else if (window.innerWidth > 1024) setColumns(4);
      else if (window.innerWidth > 640) setColumns(3);
      else if (window.innerWidth > 368) setColumns(2);
      else setColumns(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const handleDownload = (imageUrl: string) => {
    window.open(imageUrl, "_blank");
  };
  console.log("images", images);
  return (
    <div className="flex flex-row gap-1.5 mt-6">
      {Array.from({ length: columns }, (_, columnIndex) => (
        <div key={columnIndex} className="flex flex-col w-full gap-1.5">
          {images.map(
            (image, index) =>
              index % columns === columnIndex && (
                <div key={index} className="group relative">
                  <img src={image} alt="image" className="w-full rounded-xl" />
                  <div
                    className="opacity-0 absolute inset-0 z-[1] bg-black group-hover:opacity-80 
                                rounded-xl transition duration-200 cursor-pointer"
                  />
                  <div
                    className="absolute top-0 right-0 flex flex-col gap-3 mx-4 my-3 
                                invisible opacity-0 group-hover:visible group-hover:opacity-100 z-[2]"
                  >
                    <button onClick={() => handleDownload(image)}>
                      <Image
                        src="/main/ai/download.svg"
                        alt="download"
                        width={25}
                        height={25}
                        className="select-none hover:scale-110 transition-transform"
                        draggable={false}
                      />
                    </button>
                    <button>
                      <Image
                        src="/main/share.svg"
                        alt="share"
                        width={25}
                        height={25}
                        className="select-none hover:scale-110 transition-transform"
                        draggable={false}
                      />
                    </button>
                    <button>
                      <Image
                        src="/main/delete.svg"
                        alt="delete"
                        width={25}
                        height={25}
                        className="select-none hover:scale-110 transition-transform"
                        draggable={false}
                      />
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
}
