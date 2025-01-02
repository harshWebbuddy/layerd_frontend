"use client";

import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveAs } from "file-saver";
import { toast } from "react-hot-toast";

import {
  modes,
  privacy,
  roomStyles,
  roomTypes,
  numberOfRenders,
  resolutions,
} from "./components/constants/data";

import RoomStyle from "./components/layout/RoomStyle";
import RoomType from "./components/layout/RoomType";
import UploadPicture from "./components/layout/UploadPicture";
import OutputImage from "./components/OutputImage";
import TabNavigation from "./components/TabNavigation";
import Gallery from "./components/Gallery";
import axios from "@/lib/axios";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Upload Your picture");
  const [file, setFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [roomStyle, setRoomStyle] = useState<string>(roomStyles[0].value);
  const [room, setRoom] = useState<string>(roomTypes[0].value);
  const [resolution, setResolution] = useState<string>(resolutions[0].value);
  const [render, setRender] = useState<string>(numberOfRenders[0].value);
  const [loading, setLoading] = useState<boolean>(false);
  const [outputImage, setOutputImage] = useState<string>("");
  const [mode, setMode] = useState<string>(modes[0].value);
  const [privacyValue, setPrivacyValue] = useState<string>(privacy[0].value);
  const tabs = ["Upload Your picture", "Room Type / Mode", "Style and Others"];
  const [generatedImages, setGeneratedImages] = useState<
    Array<{
      id: string;
      imageUrl: string;
      roomStyle: string;
      roomType: string;
      createdAt: Date;
      privacyValue: string;
    }>
  >([]);

  function downloadOutputImage(): void {
    if (outputImage) {
      saveAs(outputImage, "output.png");
    }
  }

  async function submitImage(): Promise<void> {
    if (!file) {
      toast.error("Please upload an image of an empty room. ⚠️");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("theme", mode);
      formData.append("room", room);
      formData.append("image_resolution", resolution);

      const response = await axios.post(
        "/ai/personalized/interiorai",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
          timeout: 300000,
        }
      );
      console.log("image", response.data.data.response.input.image);

      const result = response.data;

      if (result) {
        const generatedImageUrl = result.data.response.input.image;
        console.log("image", generatedImageUrl);
        setOutputImage(generatedImageUrl);

        const newImage = {
          id: Date.now().toString(),
          imageUrl: generatedImageUrl,
          roomStyle: roomStyle,
          roomType: room,
          createdAt: new Date(),
          privacyValue: privacyValue,
        };

        setGeneratedImages((prev) => [newImage, ...prev]);

        const storedImages = JSON.parse(
          localStorage.getItem("galleryImages") || "[]"
        );
        localStorage.setItem(
          "galleryImages",
          JSON.stringify([newImage, ...storedImages])
        );

        toast.success("Room design generated successfully! 🎉");
      } else {
        throw new Error(result.message || "Failed to generate room design");
      }
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to generate room design");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const storedImages = JSON.parse(
      localStorage.getItem("galleryImages") || "[]"
    );
    setGeneratedImages(storedImages);
  }, []);

  const renderComponent = (activeTab: string) => {
    switch (activeTab) {
      case "Upload Your picture":
        return (
          <UploadPicture
            file={file}
            setFile={setFile}
            setBase64Image={setBase64Image}
            theme={mode}
            room={room}
            imageResolution={resolution}
          />
        );
      case "Room Type / Mode":
        return (
          <RoomType
            roomType={room}
            setRoomType={setRoom}
            setMode={setMode}
            mode={mode}
          />
        );
      case "Style and Others":
        return (
          <RoomStyle
            roomStyle={roomStyle}
            setRoomStyle={setRoomStyle}
            privacyValue={privacyValue}
            setPrivacyValue={setPrivacyValue}
            resolution={resolution}
            setResolution={setResolution}
            render={render}
            setRender={setRender}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <main className="text-white overflow-y-scroll">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          file={file}
          loading={loading}
          submitImage={submitImage}
        >
          {renderComponent(activeTab)}
        </TabNavigation>
        <OutputImage
          base64Image={base64Image}
          downloadOutputImage={downloadOutputImage}
          outputImage={outputImage}
          loading={loading}
        />
        <Gallery
          images={generatedImages}
          selectedFilter={roomStyle}
          onFilterChange={setRoomStyle}
        />
      </main>
    </Fragment>
  );
}
