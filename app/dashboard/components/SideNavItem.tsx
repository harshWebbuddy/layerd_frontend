"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Collapse } from "react-collapse";
import { navObjects } from "../main/components/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CollapsableItem from "./CollapsableItem";
import { LinkItem } from "@/types";

export default function SideNavItem() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const expansionHandler = (item: LinkItem) => {
    if (!item?.items?.length && item?.link) {
      setActiveLink(item.title);
      router.push(item?.link);
    } else {
      if (item.title === activeLink) {
        setIsOpen(false);
        setActiveLink(null);
      } else {
        setIsOpen(true);
        setActiveLink(item.title);
      }
    }
  };

  return (
    <div className="space-y-3 mt-10 text-sm">
      {navObjects.slice(0, 9).map((item, index) => (
        <div key={index} onClick={() => expansionHandler(item as LinkItem)}>
          <div
            className={clsx(
              "flex justify-between gap-3 hover:bg-[#323232b7] hover:ring-2 ring-[#514E4E] rounded-lg cursor-pointer py-2 pl-2 pr-4 items-center transition duration-200 h-[52px]",
              activeLink == item.title && "bg-[#272727] ring-1"
            )}
          >
            <div className="flex items-center gap-2">
              <div
                className={`rounded-full p-1 transition duration-500 bg-transparent ${
                  activeLink == item.title && "!bg-[#c6c1b521]"
                }`}
              >
                <div
                  className={`rounded-full p-1 transition duration-500 bg-transparent ${
                    activeLink == item.title && "!bg-[#c6c1b525]"
                  }`}
                >
                  <div
                    className={`${
                      activeLink == item.title &&
                      `bg-custom-${index} rounded-full `
                    } p-1.5 transition duration-300`}
                  >
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={200}
                      height={100}
                      draggable={false}
                      className="w-5 min-w-[20px]"
                    />
                  </div>
                </div>
              </div>
              <p className="whitespace-nowrap">{item.title}</p>
            </div>
            {item.items?.length && (
              <div
                className={`transform rotate-180 transition duration-300 ${
                  activeLink === item.title && "rotate-[0deg]"
                }`}
              >
                <Image
                  src="/main/arrow-up.svg"
                  alt="Icon"
                  width={200}
                  height={100}
                  draggable={false}
                  className="w-4"
                />
              </div>
            )}
          </div>
          {item.items?.length && (
            <Collapse isOpened={item.title === activeLink && isOpen}>
              <div
                className="ml-3 flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {item.items?.map((item, index) => (
                  <CollapsableItem
                    index={index}
                    key={index}
                    item={item}
                    activeLink={activeLink!}
                  />
                ))}
              </div>
            </Collapse>
          )}
        </div>
      ))}
      <div className="flex justify-between gap-3 hover:bg-[#323232] hover:ring-2 ring-[#514E4E] rounded-lg cursor-pointer py-2 pl-2 pr-4 items-center transition duration-200 h-[52px]">
        <div className="flex items-center gap-1">
          <div className={` p-1.5 transition duration-300`}>
            <Image
              src={"/main/drawing-tools.gif"}
              alt="Icon"
              width={200}
              height={100}
              draggable={false}
              className="w-6 min-w-[24px]"
            />
          </div>
          <p className="whitespace-nowrap">
            WolframAlpha
            <span className="text-xs text-white/50"> (Coming Soon)</span>
          </p>
        </div>
      </div>
      <div className="!mt-10 space-y-4">
        <h1 className="text-sm uppercase pl-2">History</h1>
        {navObjects.slice(9).map((item, index) => (
          <div key={index} onClick={() => expansionHandler(item as LinkItem)}>
            <div
              className={clsx(
                "flex justify-between gap-3 hover:bg-[#323232b7] hover:ring-2 ring-[#514E4E] rounded-lg cursor-pointer py-2.5 pl-2 pr-4 items-center transition duration-200 h-[52px]",
                activeLink == item.title && "bg-[#272727] ring-1"
              )}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`rounded-full p-1 transition duration-500 bg-transparent ${
                    activeLink == item.title && "!bg-[#c6c1b521]"
                  }`}
                >
                  <div
                    className={`rounded-full p-1 transition duration-500 bg-transparent ${
                      activeLink == item.title && "!bg-[#c6c1b525]"
                    }`}
                  >
                    <div
                      className={`${
                        activeLink == item.title &&
                        `bg-custom-${index} rounded-full `
                      } p-1.5 transition duration-300`}
                    >
                      <Image
                        src={item.icon}
                        alt="Icon"
                        width={200}
                        height={100}
                        draggable={false}
                        className="w-5 min-w-[20px]"
                      />
                    </div>
                  </div>
                </div>
                <p className="whitespace-nowrap">{item.title}</p>
              </div>
              {item.items?.length && (
                <div
                  className={`rotate-180 transition duration-300 ${
                    activeLink?.toLowerCase() === item.title.toLowerCase() &&
                    "rotate-0"
                  }`}
                >
                  <Image
                    src="/main/arrow-up.svg"
                    alt="Icon"
                    width={200}
                    height={100}
                    draggable={false}
                    className="w-4"
                  />
                </div>
              )}
            </div>
            {item.items?.length && (
              <Collapse isOpened={item.title === activeLink && isOpen}>
                <div
                  className="ml-3 flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.items?.map((item, index) => (
                    <CollapsableItem
                      index={index}
                      item={item}
                      key={index}
                      activeLink={activeLink!}
                    />
                  ))}
                </div>
              </Collapse>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
