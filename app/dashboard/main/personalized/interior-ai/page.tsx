"use client";

import { Fragment, useState } from "react";
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
  const router = useRouter();
  const [mode, setMode] = useState<string>(modes[0].value);
  const [privacyValue, setPrivacyValue] = useState<string>(privacy[0].value);
  const tabs = ["Upload Your picture", "Room Type / Mode", "Style and Others"];
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

      formData.append(
        "file",
        JSON.stringify({
          headers: { "Content-Type": "text/plain" },
          content: base64Image,
        })
      );
      formData.append(
        "theme",
        JSON.stringify({
          headers: { "Content-Type": "text/plain" },
          content: mode,
        })
      );
      formData.append(
        "room",
        JSON.stringify({
          headers: { "Content-Type": "text/plain" },
          content: room,
        })
      );
      formData.append(
        "image_resolution",
        JSON.stringify({
          headers: { "Content-Type": "text/plain" },
          content: resolution,
        })
      );
      console.log("files", file);

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

      const result = response.data;

      if (result) {
        toast.success(result?.message?.description || "Room design generated!");
      }

      setOutputImage(result.output[1]); // Update state with the generated image
    } catch (error) {
      toast.error("Failed to generate room design");
    } finally {
      setLoading(false);
    }
  }

  const renderComponent = (activeTab: string) => {
    switch (activeTab) {
      case "Upload Your picture":
        return (
          <UploadPicture
            file={file}
            setFile={setFile}
            setBase64Image={setBase64Image}
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
          outputImage={outputImage}
          roomStyle={roomStyle}
          roomType={room}
          clerkUserId={"user"}
          privacyValue={privacyValue}
        />
      </main>
    </Fragment>
  );
}
