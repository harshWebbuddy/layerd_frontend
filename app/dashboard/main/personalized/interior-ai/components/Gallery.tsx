"use client";
import Image from "next/image";
import clsx from "clsx";
import { roomStyles } from "./constants/data";
import Motion from "@/components/ui/Motion";

interface GalleryProps {
  images: Array<{
    id: string;
    imageUrl: string;
    roomStyle: string;
    roomType: string;
    createdAt: Date;
    privacyValue: string;
  }>;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function Gallery({
  images,
  selectedFilter,
  onFilterChange,
}: GalleryProps) {
  const filters = roomStyles.map((item) => item.value);
  filters.unshift("All");

  const filteredImages =
    selectedFilter === "All"
      ? images
      : images.filter((img) => img.roomStyle === selectedFilter);

  return (
    <Motion
      transition={{ duration: 0.5 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <main className="text-white h-full bg-[#1A1B1E] rounded-3xl p-8 mt-12">
        <header className="py-12">
          <h1
            className="text-5xl font-bold text-center bg-gradient-to-r from-primary-orange to-primary-yellow bg-clip-text text-transparent"
            data-aos="fade-down"
          >
            Your Generated Designs
          </h1>
          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Browse through your collection of AI-generated interior designs.
            Filter by style to find the perfect inspiration for your space.
          </p>
        </header>

        <section className="w-full mx-auto">
          <div className="w-full flex overflow-x-scroll no-scrollbar border-b border-gray-800 mb-12">
            {filters.map((filter: string, index: number) => (
              <div
                key={index}
                onClick={() => onFilterChange(filter)}
                className={clsx(
                  "whitespace-nowrap py-3 px-20 cursor-pointer transition-all duration-300",
                  "hover:text-primary-orange",
                  filter === selectedFilter
                    ? "text-primary-orange border-b-[4px] border-primary-orange"
                    : "text-gray-400"
                )}
              >
                {filter}
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <Motion
                key={image.id}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={image.imageUrl}
                    alt={`Room design - ${image.roomStyle}`}
                    width={500}
                    height={500}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-lg mb-1">
                        {image.roomType}
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary-orange" />
                        <p className="text-gray-300">{image.roomStyle}</p>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {new Date(image.createdAt).toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Motion>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="max-w-md mx-auto space-y-4">
                {/* <div className="w-16 h-16 mx-auto rounded-full bg-gray-800 grid place-items-center">
                  <Image
                    src="/main/editor/image.svg"
                    alt="No images"
                    width={24}
                    height={24}
                  />
                </div> */}
                <h3 className="text-xl font-semibold text-gray-300">
                  No designs generated yet
                </h3>
                <p className="text-gray-400">
                  Start by uploading a room photo and let AI transform your
                  space
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </Motion>
  );
}
