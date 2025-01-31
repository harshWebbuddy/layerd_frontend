"use client";

import type { EffectCallback } from "react";
import { useEffect, useRef } from "react";

export function useOnMountUnsafe(effect: EffectCallback, deps?: any[])  {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      effect();
    }
  }, deps ?? []);
}
