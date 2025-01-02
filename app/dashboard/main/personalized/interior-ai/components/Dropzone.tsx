import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FileRejection } from "react-dropzone";

interface DropzoneProps {
  onImageDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
}

export function Dropzone({ onImageDrop }: DropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      onImageDrop(acceptedFiles, rejectedFiles);
    },
    [onImageDrop]
  );

  const config = {
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"], // Accept common image formats
    },
    maxSize: 5 * 1024 * 1024, // 5MB max size
    multiple: false,
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    ...config,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-gray-400 transition-colors"
    >
      <input {...getInputProps()} />
      <p className="text-gray-500">
        Drag & drop an image here, or click to select one
      </p>
    </div>
  );
}
