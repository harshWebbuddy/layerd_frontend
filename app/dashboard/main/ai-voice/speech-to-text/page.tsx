"use client";

import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import Motion from "@/components/ui/Motion";
import Form from "./Form";
import Editor from "./Editor";
import axios from "@/lib/axios";
import TabNavigation from "./components/TabNavigation";

export default function Page() {
  // State management
  const [activeTab, setActiveTab] = useState("Upload Audio");
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState<string>("");
  const [language, setLanguage] = useState<string>("en");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Define tabs
  const tabs = ["Upload Audio", "Language & Description", "Editor Settings"];

  // Handle transcription submission
  const handleTranscribe = async (): Promise<void> => {
    if (!file) {
      toast.error("Please upload an audio file first ⚠️");
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

      console.log("FormData contents:", {
        fileName: file.name,
        language,
        description: description.trim(),
      });

      const response = await axios.post("/ai/voice/speech-to-text", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setTranscript(response.data.data.transcript);
        toast.success("Audio transcribed successfully! 🎉");
      } else {
        throw new Error(response.data.message || "Failed to transcribe audio");
      }
    } catch (error: any) {
      console.error("Transcription error:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to transcribe audio ⚠️"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Render component based on active tab
  const renderComponent = (activeTab: string) => {
    switch (activeTab) {
      case "Upload Audio":
        return (
          <Form
            onTranscriptGenerated={setTranscript}
            file={file}
            setFile={setFile}
            language={language}
            setLanguage={setLanguage}
            description={description}
            setDescription={setDescription}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        );
      case "Language & Description":
        return (
          <div className="space-y-4">
            {/* Add language selection and description components */}
          </div>
        );
      case "Editor Settings":
        return (
          <div className="space-y-4">
            {/* Add editor settings components */}
          </div>
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
          loading={isLoading}
          onSubmit={handleTranscribe}
        >
          <Motion
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <section className="h-full px-5 md:px-10 pb-10 flex-1">
              <div className="flex flex-col xl:flex-row gap-6">
                {/* Left Panel - Form Section */}
                <div className="w-full bg-[url('/main/ai/background-voice-ai-forms.png')] xl:max-w-[480px] ring-1 ring-slate-600/80 rounded-2xl bg-center bg-cover bg-no-repeat h-full p-4 md:p-7 space-y-4">
                  {renderComponent(activeTab)}
                </div>

                {/* Right Panel - Editor Section */}
                <div className="w-full bg-[url('/main/ai/background-voice-ai-space.png')] bg-center bg-no-repeat bg-cover rounded-2xl ring-1 ring-slate-600 p-4 md:p-7 h-full">
                  <Editor transcript={transcript} />
                </div>
              </div>
            </section>
          </Motion>
        </TabNavigation>
      </main>
    </Fragment>
  );
}
