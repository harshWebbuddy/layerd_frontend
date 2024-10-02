export interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  website: string;
  email: string;
  profile?: string;
  company: string;
  role: string;
  city: string;
  country: string;
  postalCode: number;
  addressLine: string;
  phoneNumber: string;
  referralId?: string;
  verified: boolean;
  password?: string;
  queries: number;
  imagesPerMonth: number;
  writing: number;
  wordsPerMonth: number;
  defaultVoiceLanguage: string;
  defaultTemplateLanguage: string;
}
