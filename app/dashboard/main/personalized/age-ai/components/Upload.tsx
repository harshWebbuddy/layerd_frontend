"use client";

import Image from "next/image";
import Modal from "./Modal";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

interface UploadResponse {
  message: string;
  data: {
    response: {
      id: string;
      model: string;
      version: string;
      input: {
        image: string;
        target_age: string;
      };
      output: string | null;
      status: string;
      created_at: string;
      urls: {
        get: string;
        stream: string;
      };
    };
  };
}

export default function Upload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (file: File) => {
    if (!file) return;

    // Show the uploaded image immediately
    const previewUrl = URL.createObjectURL(file);
    const initialData = {
      resultUrl: previewUrl, // Initially show the uploaded image
      originalUrl: previewUrl,
      timestamp: new Date().toISOString(),
      isProcessing: true,
    };

    localStorage.setItem("ageAiResult", JSON.stringify(initialData));
    window.dispatchEvent(new Event("ageAiComplete")); // Trigger update to show preview

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post<UploadResponse>(
        "/ai/personalized/ageai",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const resultData = {
        resultUrl: response.data.data.response.input.image,
        originalUrl: previewUrl,
        timestamp: new Date().toISOString(),
        predictionId: response.data.data.response.id,
        isProcessing: false,
      };

      localStorage.setItem("ageAiResult", JSON.stringify(resultData));
      toast.success("Image uploaded successfully!");
      setIsModalOpen(false);
      window.dispatchEvent(new Event("ageAiComplete"));
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to process image. Please try again."
      );
      // Clean up on error
      localStorage.removeItem("ageAiResult");
      window.dispatchEvent(new Event("ageAiComplete"));
    } finally {
      setIsUploading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      handleUpload(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
    maxSize: 5242880,
  });

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="font-bold flex items-center gap-3 bg-[#313131] hover:bg-[#3d3d3d] py-3 px-4 rounded-lg w-fit cursor-pointer transition-colors"
      >
        <span>Upload A Photo</span>
        <Image src="/main/upload.svg" alt="Upload" width={20} height={20} />
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-10 py-6">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/logos/whopme.svg"
              alt="Whopme-mini logo"
              width={60}
              height={60}
            />
            <h1 className="text-3xl text-primary-yellow font-semibold">
              Upload Photo
            </h1>
            <p className="text-[#ABAEB7]">
              Your photos will be automatically deleted after 24 hours.
            </p>
          </div>

          <div className="h-[3px] w-full gradient-div" />

          <div
            {...getRootProps()}
            className={`bg-[#32323280] rounded-xl ring-[#514E4E] ring-2 w-full flex justify-center items-center h-[234px] cursor-pointer outline-none transition-all duration-300 ${
              isDragActive ? "ring-primary-yellow" : "hover:ring-white/50"
            }`}
          >
            <input
              {...getInputProps()}
              accept="image/*"
              className="outline-none"
            />
            {isUploading ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-primary-yellow border-t-transparent rounded-full animate-spin" />
                <p className="text-lg">Processing your image...</p>
              </div>
            ) : isDragActive ? (
              <p className="text-lg text-primary-yellow">
                Drop the photo here...
              </p>
            ) : (
              <div className="flex flex-col items-center gap-5 p-5">
                <Image
                  src="/main/ai/cloud-upload.svg"
                  alt="upload"
                  width={80}
                  height={80}
                />
                <div className="space-y-2">
                  <h1 className="text-2xl text-white font-semibold">
                    Drop files here or click to upload
                  </h1>
                  <p className="max-w-sm text-center text-[#6C757D]">
                    Recommended: 1:1 Square Ratio, With a Clear View of Your
                    Face.
                  </p>
                  <p className="text-xs text-[#6C757D] text-center">
                    Maximum file size: 5MB
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setIsModalOpen(false)}
              disabled={isUploading}
              className="font-bold flex items-center justify-between gap-3 bg-[#3d3d3d] hover:bg-[#4a4a4a] py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
