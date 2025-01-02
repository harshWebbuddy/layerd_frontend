"use client";

import Image from "next/image";
import React, { useState } from "react";
import { dummyEditorData } from ".";
import { cn } from "@/lib/utils";

interface EditorProps {
  transcript?: string;
}

interface TextStyle {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  align: "left" | "center" | "right" | "justify";
  fontSize: "small" | "medium" | "large";
  textColor: string;
  listStyle: "none" | "decimal" | "disc";
}

export default function Editor({ transcript }: EditorProps) {
  const [textStyle, setTextStyle] = useState<TextStyle>({
    bold: false,
    italic: false,
    underline: false,
    align: "left",
    fontSize: "medium",
    textColor: "text-white",
    listStyle: "none",
  });

  const handleStyleClick = (tool: string) => {
    switch (tool) {
      case "/main/editor/bold.png":
        setTextStyle((prev) => ({ ...prev, bold: !prev.bold }));
        break;
      case "/main/editor/italic.png":
        setTextStyle((prev) => ({ ...prev, italic: !prev.italic }));
        break;
      case "/main/editor/underline.png":
        setTextStyle((prev) => ({ ...prev, underline: !prev.underline }));
        break;
      case "/main/editor/align-left.png":
        setTextStyle((prev) => ({ ...prev, align: "left" }));
        break;
      case "/main/editor/align-center.png":
        setTextStyle((prev) => ({ ...prev, align: "center" }));
        break;
      case "/main/editor/align-right.png":
        setTextStyle((prev) => ({ ...prev, align: "right" }));
        break;
      case "/main/editor/align-stretch.png":
        setTextStyle((prev) => ({ ...prev, align: "justify" }));
        break;
      case "/main/editor/text-height.png":
        setTextStyle((prev) => ({
          ...prev,
          fontSize:
            prev.fontSize === "small"
              ? "medium"
              : prev.fontSize === "medium"
              ? "large"
              : "small",
        }));
        break;
      case "/main/editor/bullets-decimal.png":
        setTextStyle((prev) => ({
          ...prev,
          listStyle: prev.listStyle === "decimal" ? "none" : "decimal",
        }));
        break;
      case "/main/editor/bullets-dot.png":
        setTextStyle((prev) => ({
          ...prev,
          listStyle: prev.listStyle === "disc" ? "none" : "disc",
        }));
        break;
      case "/main/editor/text-style.png":
        const colors = [
          "text-white",
          "text-primary-yellow",
          "text-primary-red",
          "text-green-400",
          "text-blue-400",
        ];
        const currentIndex = colors.indexOf(textStyle.textColor);
        setTextStyle((prev) => ({
          ...prev,
          textColor: colors[(currentIndex + 1) % colors.length],
        }));
        break;
    }
  };

  const getTextClasses = () => {
    const classes = [
      "whitespace-pre-wrap",
      "transition-all",
      "duration-300",
      textStyle.textColor,
      {
        "font-bold": textStyle.bold,
        italic: textStyle.italic,
        underline: textStyle.underline,
        "text-sm": textStyle.fontSize === "small",
        "text-base": textStyle.fontSize === "medium",
        "text-lg": textStyle.fontSize === "large",
        "list-decimal": textStyle.listStyle === "decimal",
        "list-disc": textStyle.listStyle === "disc",
      },
    ];

    return classes;
  };

  const getTextStyles = () => ({
    textAlign: textStyle.align,
  });

  const isToolActive = (tool: string) => {
    switch (tool) {
      case "/main/editor/bold.png":
        return textStyle.bold;
      case "/main/editor/italic.png":
        return textStyle.italic;
      case "/main/editor/underline.png":
        return textStyle.underline;
      case "/main/editor/align-left.png":
        return textStyle.align === "left";
      case "/main/editor/align-center.png":
        return textStyle.align === "center";
      case "/main/editor/align-right.png":
        return textStyle.align === "right";
      case "/main/editor/align-stretch.png":
        return textStyle.align === "justify";
      case "/main/editor/text-height.png":
        return textStyle.fontSize === "large";
      case "/main/editor/bullets-decimal.png":
        return textStyle.listStyle === "decimal";
      case "/main/editor/bullets-dot.png":
        return textStyle.listStyle === "disc";
      case "/main/editor/text-style.png":
        return textStyle.textColor !== "text-white";
      default:
        return false;
    }
  };

  return (
    <div className="h-full">
      <div className="flex flex-col h-full">
        <form>
          <label htmlFor="File Title">File Title</label>
          <div className="flex flex-col sm:flex-row gap-4 h-fit">
            <div className="space-y-2 w-full">
              <div className="border-bottom-gradient">
                <input
                  id="File Title"
                  placeholder="Audio File"
                  className="block w-full border-[3px] rounded-lg border-[#514E4E] h-14 outline-none bg-[#32323280] p-3"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            {dummyEditorData.map((image, index) => (
              <div
                key={index}
                onClick={() => handleStyleClick(image)}
                className={`hover:bg-slate-700 p-2.5 rounded-md cursor-pointer transition duration-300 grid place-content-center
                          ${isToolActive(image) ? "bg-slate-700" : ""}`}
              >
                <Image
                  src={image}
                  alt="editor tool"
                  height={10}
                  width={15}
                  draggable={false}
                  className="min-w-[15px]"
                />
              </div>
            ))}
          </div>
        </form>
        <div className="w-full ring-1 ring-white/60 mt-5 flex-1 rounded-2xl min-h-[300px] p-6 overflow-auto">
          {transcript ? (
            <div className="prose prose-invert max-w-none">
              {textStyle.listStyle !== "none" ? (
                <ul className={cn(getTextClasses(), "pl-5")}>
                  {transcript.split("\n").map((line, index) => (
                    <li key={index} style={getTextStyles()}>
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={cn(getTextClasses())} style={getTextStyles()}>
                  {transcript}
                </p>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              <p>Transcribe your audio files Easily</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
