import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableurl = URL;
  if (country) {
    changeableurl = `${URL}/countries/${country}`;
  }
  const { data } = await axios.get(changeableurl);
  //console.log(data);
  const modifiedData = {
    confirmed: data.confirmed.value,
    recovered: data.recovered.value,
    deaths: data.deaths.value,
    lastUpdate: data.lastUpdate,
  };
  //console.log(modifiedData);
  return modifiedData;
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  const { data } = await axios.get(`${URL}/countries`);
  const countries = data.countries;

  //console.log(countries.map((country) => country.name));
  return countries.map((country) => country.name);
};
