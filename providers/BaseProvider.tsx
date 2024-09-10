"use client";

import { RecoilRoot } from "recoil";

const BaseProvider = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default BaseProvider;
