"use client";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Image from "next/image";

interface ImageOutputProps {
  docId: string | null;
  isProcessing: boolean;
  onProcessingComplete: () => void;
}

interface ApiResponse {
  data: {
    status: "pending" | "completed" | "failed";
    content: {
      outputImage: string;
    };
  };
}

export default function ImageOutput({
  docId,
  isProcessing,
  onProcessingComplete,
}: ImageOutputProps) {
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const checkStatus = async () => {
      if (!docId) return;

      try {
        const response = await axios.get<ApiResponse>(`/docs/${docId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setAttempts((prev) => prev + 1);
        const status = response.data.data.status;

        switch (status) {
          case "completed":
            setOutputImage(response.data.data.content.outputImage);
            onProcessingComplete();
            clearInterval(intervalId);
            break;
          case "failed":
            setError("Image generation failed. Please try again.");
            onProcessingComplete();
            clearInterval(intervalId);
            break;
          case "pending":
            break;
          default:
            console.log("Unknown status:", status);
            break;
        }
      } catch (err) {
        console.error("Error fetching status:", err);
      }
    };

    if (isProcessing && docId) {
      setOutputImage(null);
      setError(null);
      setAttempts(0);
      setIsImageLoading(true);

      checkStatus();
      intervalId = setInterval(checkStatus, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [docId, isProcessing, onProcessingComplete]);

  const renderProcessingState = () => {
    const steps = [
      "Analyzing facial features...",
      "Applying age transformations...",
      "Enhancing details...",
      "Generating final result...",
    ];

    const currentStep = Math.min(Math.floor(attempts / 2), steps.length - 1);
    const progress = Math.min((attempts / 8) * 100, 99);

    return (
      <div className="h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
        <div className="h-full flex flex-col items-center justify-center p-8">
          <div className="relative w-32 h-32 mb-8">
            <div className="absolute inset-0 bg-primary-yellow/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-4 border-primary-yellow border-t-transparent rounded-full animate-spin" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary-yellow/50 border-t-transparent rounded-full animate-spin-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary-yellow/30 border-t-transparent rounded-full animate-spin-slower" />
            </div>
          </div>

          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Creating Your Future Self
            </h3>
            <div className="flex flex-col items-center gap-2">
              <p className="text-primary-yellow font-medium">
                {steps[currentStep]}
              </p>
              <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-yellow rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-gray-400 text-sm">
                {Math.round(progress)}% Complete
              </p>
            </div>
          </div>

          <div className="mt-8 w-full max-w-sm">
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center
                    ${
                      index <= currentStep
                        ? "bg-primary-yellow text-black"
                        : "bg-gray-800 text-gray-600"
                    }`}
                  >
                    {index < currentStep ? (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      index <= currentStep ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-yellow/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>
    );
  };

  const handleDownload = async () => {
    if (!outputImage) return;

    try {
      const downloadButton = document.getElementById(
        "download-button"
      ) as HTMLButtonElement | null;
      if (downloadButton) {
        downloadButton.innerHTML = "Downloading...";
        downloadButton.disabled = true;
      }

      // Extract filename from URL
      const fileName = outputImage.split("/").pop() || "age-transformation.gif";

      // Create an anchor element
      const link = document.createElement("a");
      link.href = outputImage; // Direct S3 URL
      link.target = "_blank";
      link.download = fileName;

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset button state
      if (downloadButton) {
        downloadButton.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download GIF
        `;
        downloadButton.disabled = false;
      }
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image. Please try again.");

      const downloadButton = document.getElementById(
        "download-button"
      ) as HTMLButtonElement | null;
      if (downloadButton) {
        downloadButton.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download GIF
        `;
        downloadButton.disabled = false;
      }
    }
  };

  if (!docId) {
    return (
      <div className="relative h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('/main/grid-pattern.svg')] opacity-10" />
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-6 relative">
            <div className="absolute -inset-4 bg-primary-yellow/20 rounded-full blur-xl animate-pulse" />
            <Image
              src="/oldman.png"
              alt="AI Face"
              width={80}
              height={80}
              className="relative"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to See Your Future Self?
          </h3>
          <p className="text-gray-400 max-w-md">
            Upload a clear photo of your face and watch as AI transforms your
            appearance across different ages.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-primary-yellow rounded-full" />
              Privacy Protected
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-primary-yellow rounded-full" />
              Instant Results
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isProcessing) {
    return renderProcessingState();
  }

  if (error) {
    return (
      <div className="h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <p className="text-red-500 text-lg font-medium mb-2">{error}</p>
          <p className="text-gray-400">Please try uploading another photo</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden group">
      {outputImage && (
        <>
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="w-10 h-10 border-4 border-primary-yellow border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <div className="relative h-full w-full flex items-center justify-center p-4">
            <Image
              src={outputImage}
              alt="Age AI Result"
              fill
              className={`object-contain transition-all duration-300 ${
                isImageLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
              onLoadingComplete={() => setIsImageLoading(false)}
            />
          </div>

          {/* Download button */}
          {!isImageLoading && (
            <button
              id="download-button"
              onClick={handleDownload}
              className="absolute top-4 right-4 bg-primary-yellow hover:bg-primary-yellow/90 text-black font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download GIF
            </button>
          )}

          {/* Image info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center justify-between">
              <p className="text-white font-medium">Your Future Self</p>
              <span className="text-primary-yellow text-sm">AI Generated</span>
            </div>
            <p className="text-gray-300 text-sm mt-1">
              Click the download button to save your transformation as GIF
            </p>
          </div>
        </>
      )}
    </div>
  );
}
