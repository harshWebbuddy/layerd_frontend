import React, { Dispatch, SetStateAction } from "react";
import { FileRejection } from "react-dropzone";
import Motion from "@/components/ui/Motion";
import { ViewUploadedImage } from "../ViewUploadedImage";
import { useToast } from "@/components/ui/use-toast";
import { Dropzone } from "../Dropzone";

interface UploadPictureProps {
  file: File | null;
  setFile: (file: File | null) => void;
  setBase64Image: Dispatch<SetStateAction<string | null>>;
  theme?: string;
  room?: string;
  imageResolution?: string;
  onUploadSuccess?: (url: string) => void;
}

export default function UploadPicture({
  file,
  setFile,
  setBase64Image,
  theme = "modern",
  room = "living-room",
  imageResolution = "1024x1024",
  onUploadSuccess,
}: UploadPictureProps) {
  const { toast } = useToast();

  const validateFile = (file: File): boolean => {
    // Check file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      toast({
        description: "Please upload only JPG, JPEG or PNG images. ⚠️",
        variant: "destructive",
      });
      return false;
    }

    // Check file size (5MB = 5 * 1024 * 1024 bytes)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        description: "Image size should be less than 5MB. ⚠️",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const generateInteriorDesign = async (file: File): Promise<void> => {
    try {
      // Validate file before proceeding
      if (!file || !(file instanceof File)) {
        throw new Error("No valid file provided");
      }

      if (!validateFile(file)) {
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("theme", theme);
      formData.append("room", room);
      formData.append("image_resolution", imageResolution);

      const response = await fetch(
        "https://api.layerd.ai/api/v1/ai/personalized/interiorai",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTdlYjgxNzYyNTUwNzc1NDJkMDQ3NCIsImVtYWlsIjoic3dhcG5pbEB3ZWJidWRkeS5hZ2VuY3kiLCJpYXQiOjE3MzQ3NTQ1NzYsImV4cCI6MTczNTM1OTM3Nn0.BXNftj02F-k7HTpWS7pEUct1XHVkABa7EH6sTLoRKUg",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.data?.url) {
        onUploadSuccess?.(data.data.url);
        toast({
          description: "Interior design generated successfully! 🎨",
        });
      } else {
        throw new Error("No URL received from the server");
      }
    } catch (error) {
      console.error("Error generating interior design:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to generate interior design. Please try again.",
        variant: "destructive",
      });
    }
  };

  const onImageDrop = async (
    acceptedFiles: File[],
    rejectedFiles: FileRejection[]
  ): Promise<void> => {
    if (rejectedFiles.length > 0) {
      const rejection = rejectedFiles[0];
      const error = rejection.errors[0];
      
      toast({
        description: error.message || "Please upload a valid image file. ⚠️",
        variant: "destructive",
      });
      return;
    }

    if (acceptedFiles.length === 0) {
      toast({
        description: "Please select an image file to upload. ⚠️",
        variant: "destructive",
      });
      return;
    }

    const droppedFile = acceptedFiles[0];

    // Validate the file
    if (!validateFile(droppedFile)) {
      return;
    }

    // Store the file
    setFile(droppedFile);

    // Create base64 for preview
    try {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setBase64Image(event.target.result as string);
        }
      };
      reader.onerror = () => {
        toast({
          description: "Failed to read the image file. Please try again. ⚠️",
          variant: "destructive",
        });
      };
      reader.readAsDataURL(droppedFile);

      // Generate interior design
      await generateInteriorDesign(droppedFile);
    } catch (error) {
      toast({
        description: "Failed to process the image. Please try again. ⚠️",
        variant: "destructive",
      });
    }
  };

  const removeImage = (): void => {
    setFile(null);
    setBase64Image(null);
  };

  return (
    <Motion
      transition={{ duration: 0.5 }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <div className="mt-12 space-y-12">
        {!file ? (
          <Dropzone onImageDrop={onImageDrop} />
        ) : (
          <ViewUploadedImage image={file} removeImage={removeImage} />
        )}
        <p className="text-[#ABAEB7] leading-8">
          Take a photo of your current room. For best results make sure it shows
          the entire room in a{" "}
          <span className="underline">
            90° straight angle facing a wall or window horizontally (click for
            example).
          </span>{" "}
          Not from a corner or angled, and not a wide angle photo as it's
          trained on regular photos. The AI isn't great at angled pics (yet)!
        </p>
      </div>
    </Motion>
  );
}