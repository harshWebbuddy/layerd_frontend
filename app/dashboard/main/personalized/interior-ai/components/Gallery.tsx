"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";
import { roomStyles } from "./constants/data";
import { DotLoader } from "react-spinners";

interface GalleryImage {
  id: string;
  imageUrl: string;
  roomStyle: string;
  roomType: string;
  userId: string;
  createdAt: Date;
  privacyValue: string;
  clerkUserId: string;
}

interface GalleryProps {
  outputImage: string;
  roomStyle: string;
  roomType: string;
  privacyValue: string;
  clerkUserId: string;
}

const imageUrls = [
  "/assets/interior_demo1.jpg",
  "/assets/interior_demo2.jpg",
  "/assets/interior_demo3.jpg",
];

const Gallery = ({
  outputImage,
  roomStyle,
  roomType,
  privacyValue,
  clerkUserId,
}: GalleryProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [triggerRefresh, setTriggerRefresh] = useState<boolean>(false);

  const filters = roomStyles.map((item) => item.value);
  filters.unshift("All");

  const storeImage = async () => {
    try {
      const response = await fetch("/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: outputImage,
          roomStyle,
          roomType,
          privacyValue,
          clerkUserId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to store image");
      }

      setTriggerRefresh((prev) => !prev);
    } catch (error) {
      console.error("Error storing image:", error);
    }
  };

  const fetchImages = useCallback(async (filter: string) => {
    setLoading(true);
    try {
      const url = new URL("/api/public", window.location.origin);
      if (filter !== "All") {
        url.searchParams.append("style", filter);
      }

      const response = await fetch(url.toString());
      const data = await response.json();

      if (response.ok) {
        setGalleryImages(data);
      } else {
        setGalleryImages([]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (outputImage) {
      storeImage();
    }
  }, [outputImage]);

  useEffect(() => {
    fetchImages(selectedFilter);
  }, [selectedFilter, triggerRefresh, fetchImages]);

  return (
    <main className="text-white h-full">
      <header className="py-20">
        <h1
          className="text-5xl font-bold leading-snug text-center"
          data-aos="fade-down"
        >
          Latest Renders
        </h1>
      </header>
      <section className=" w-full mx-auto">
        <div className="w-full flex overflow-x-scroll no-scrollbar border-b border-gray-400">
          {filters.map((filter: string, index: number) => (
            <div
              key={index}
              onClick={() => setSelectedFilter(filter)}
              className={clsx(
                "whitespace-nowrap py-3 px-6 cursor-pointer text-gray-400",
                filter === selectedFilter &&
                  "text-white border-b-[4px] border-white rounded-t-full"
              )}
              data-aos="fade-up"
            >
              {filter}
            </div>
          ))}
        </div>
      </section>

      {loading ? (
        <section
          className="h-[50vh] text-white grid place-content-center w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-8"
          data-aos="fade-in"
        >
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <DotLoader />
            <h2 className="text-4xl font-bold leading-tight tracking-wider text-white uppercase">
              OUR DESIGNS
            </h2>
            <p className="text-lg text-gray-100 opacity-80">
              Explore our curated collection of exquisite interior designs that
              will transform your space.
            </p>
          </div>
        </section>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {galleryImages?.length > 0 ? (
            galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="w-full aspect-square rounded-lg overflow-hidden"
                data-aos="zoom-in"
              >
                <Image
                  src={image.imageUrl}
                  alt={`Room design - ${image.roomStyle}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center ">
              <section className="grid mt-4 place-content-center">
                <div className="flex gap-x-4">
                  {imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`image ${index + 1}`}
                      className="w-full h-full object-cover"
                      data-aos="fade-up"
                    />
                  ))}
                </div>
              </section>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default Gallery;
