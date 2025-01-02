// useAuth.ts
import { RootState } from "@/lib/store2";
import { useSelector } from "react-redux";
type User = {
  email: string;
  token: string;
  avatar: string;
  user_name: string;
  profile_img: string;
  name: string;
  id: string;
  address_line: string;
  city: string;
  company_name: string;
  company_website: string;
  country: string;
  job_role: string;
  postal_code: string;
};

const isAuthenticated = () => {
  return useSelector((state: RootState) => state.auth.isAuthenticated);
};

const getCurrentUser = (): User => {
  return useSelector((state: RootState) => state.auth?.user);
};

export { isAuthenticated, getCurrentUser };
