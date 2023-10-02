interface Feature {
	title: string;
	peer: string[];
}
type FeatureGroup = {
  name: string;
  features: Feature[];
};