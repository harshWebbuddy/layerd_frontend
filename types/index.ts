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