const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return await res.json();
};
export default getCountries;