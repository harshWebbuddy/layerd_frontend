export interface Feature {
	title: string;
	peer: string[];
}
export interface FeatureGroup {
  name: string;
  features: Feature[];
};
export interface Option  {
	image?: string;
	icon?: string;
  title ?: string;
	description?: string;
};
export type DocumentData = {
	name: string;
	subtitle: string;
	workbook: string;
	category: "Blog" | "Image" | "Code";
	createdAt: Time;
	language: string;
	wordsUsed: number;
};

export type ImageData = {
	name: string;
	subtitle: string;
	image: string;
	createdAt: Time;
	resolution: string;
	createdFrom: string;
}
export interface Time {
	date: string;
	time: string;
}