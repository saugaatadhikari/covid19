import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../Api";
import { Typography } from "@material-ui/core";

const CountryPicker = ({ changeCountryHandler }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div>
      <Typography color="textSecondary" gutterBottom>
        Data for specific Country.
      </Typography>

      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(event) => changeCountryHandler(event.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {" "}
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
export default CountryPicker;
