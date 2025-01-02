import { useState, useEffect } from "react";
import { VOICE_OPTIONS, LANGUAGE_OPTIONS } from "../config/voices";

export function useVoiceConfig() {
  const [languageCode, setLanguageCode] = useState(LANGUAGE_OPTIONS[0].value);
  const [availableVoices, setAvailableVoices] = useState(VOICE_OPTIONS.english);

  useEffect(() => {
    const language = LANGUAGE_OPTIONS.find(
      (lang) => lang.value === languageCode
    );
    if (language) {
      setAvailableVoices(
        VOICE_OPTIONS[language.voices as keyof typeof VOICE_OPTIONS]
      );
    }
  }, [languageCode]);

  return {
    languageCode,
    setLanguageCode,
    availableVoices,
  };
}
