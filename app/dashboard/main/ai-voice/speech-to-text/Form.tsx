"use client";

import Image from "next/image";

import React, { useCallback, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import Selection from "../components/Selection";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import { Loader2 } from "lucide-react";

interface FormProps {
  onTranscriptGenerated: (transcript: string) => void;
  file: File | null;
  setFile: (file: File | null) => void;
  language: string;
  setLanguage: (language: string) => void;
  description: string;
  setDescription: (description: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export default function Form({
  onTranscriptGenerated,
  file,
  setFile,
  language,
  setLanguage,
  description,
  setDescription,
  isLoading,
  setIsLoading,
}: FormProps) {
  const validateFile = (file: File): boolean => {
    const validTypes = [
      "audio/flac",
      "audio/mp3",
      "audio/mp4",
      "audio/mpeg",
      "audio/mpga",
      "audio/m4a",
      "audio/ogg",
      "audio/wav",
      "audio/webm",
    ];

    if (!validTypes.includes(file.type)) {
      toast.error("Please upload a valid audio file format ⚠️");
      return false;
    }

    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("Audio file size should be less than 10MB ⚠️");
      return false;
    }

    return true;
  };

  const onDrop = useCallback(
    async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      console.log("acceptedFiles", acceptedFiles);
      console.log("rejectedFiles", rejectedFiles);
      if (rejectedFiles.length > 0) {
        const rejection = rejectedFiles[0];
        const error = rejection.errors[0];
        toast.error(error.message || "Please upload a valid audio file ⚠️");
        return;
      }

      if (acceptedFiles.length === 0) {
        toast.error("Please select an audio file to upload ⚠️");
        return;
      }

      const droppedFile = acceptedFiles[0];
      console.log("Dropped file:", droppedFile);

      if (!validateFile(droppedFile)) {
        return;
      }

      setFile(droppedFile);
      toast.success("File uploaded successfully! 🎉");
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/*": [
        ".flac",
        ".mp3",
        ".mp4",
        ".mpeg",
        ".mpga",
        ".m4a",
        ".ogg",
        ".wav",
        ".webm",
      ],
    },
    maxFiles: 1,
    multiple: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload an audio file ⚠️");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("language", language);
      if (description.trim()) {
        formData.append("aboutAudio", description);
      }

      const response = await axios.post("/ai/voice/speech-to-text", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
        const transcript = response.data.data.transcript;
        onTranscriptGenerated(transcript);
        toast.success("Audio transcribed successfully! 🎉");
      }
    } catch (error: any) {
      console.error("Transcription error:", error.response?.data);
      toast.error(
        error.response?.data?.message || "Failed to transcribe audio ⚠️"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div
          {...getRootProps()}
          className={`bg-[#32323280] rounded-xl ring-[#514E4E] ring-2 w-full 
                     flex justify-center items-center h-[200px] cursor-pointer outline-none
                     transition-all duration-300 hover:ring-primary-yellow/50
                     ${isDragActive ? "ring-primary-yellow" : ""} 
                     ${file ? "ring-green-500" : ""}`}
        >
          <input {...getInputProps()} className="outline-none" />
          {file ? (
            <div className="flex flex-col items-center gap-3">
              <div className="text-green-500 text-xl">✓</div>
              <p className="text-center font-medium">{file.name}</p>
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-400">
                  Click or drag to replace
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : isDragActive ? (
            <p className="text-primary-yellow">Drop the audio file here ...</p>
          ) : (
            <div className="flex flex-col items-center gap-5 p-5">
              <Image
                src="/main/ai/cloud-upload.svg"
                alt="upload"
                width={40}
                height={40}
              />
              <div className="space-y-2 flex flex-col items-center">
                <h1 className="text-white text-center">
                  Click or drag Your Audio File or{" "}
                  <span className="text-primary-yellow">Browse</span>
                </h1>
                <p className="max-w-sm text-center text-[#6C757D] flex gap-3">
                  <span>.mp3</span>
                  <span>.mp4</span>
                  <span>.wav</span>
                  <span>.m4a</span>
                  <span>.ogg</span>
                  <span>.webm</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="description">Audio Description (Optional)</label>
          <div className="border-bottom-gradient">
            <textarea
              id="description"
              placeholder="Describe the speech from the file uploaded above to help the AI"
              className="block w-full border-[3px] rounded-lg border-[#514E4E] h-24 outline-none bg-[#32323280] p-3"
            ></textarea>
          </div>
        </div>
        <div className="border-bottom-gradient">
          <Selection
            id="auto-detect"
            items={[
              {
                value: "Auto Detect",
                label: "Auto Detect",
              },
              {
                value: "Manual Detection",
                label: "Manual Detection",
              },
            ]}
            label="Audio Language (Optional)"
            placeholder="Select Audio Language"
          />
        </div>
        <div className="border-bottom-gradient">
          <Selection
            id="task-type"
            items={[
              {
                value: "Transcribe Audio File",
                label: "Transcribe Audio File",
              },
            ]}
            label="Task Type (Optional)"
            placeholder="Select Task Type"
          />
        </div>
        <div className="border-bottom-gradient">
          <Selection
            id="workbook"
            items={[
              {
                value: "Transcribe Audio File",
                label: "Transcribe Audio File",
              },
            ]}
            label="Workbook (Optional)"
            placeholder="Select Workbook Name"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading || !file}
        className="bg-gradient-to-br from-primary-red to-primary-yellow w-full py-3 
						 flex justify-center items-center gap-3 mt-10 rounded-xl
						 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Transcribing...</span>
          </>
        ) : (
          <>
            <span className="font-semibold">Transcribe</span>
            <Image
              src="/main/ai/click.svg"
              alt="click"
              height={24}
              width={24}
            />
          </>
        )}
      </button>
    </form>
  );
}
