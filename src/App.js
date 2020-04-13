import React from "react";

import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./Api";
import coronaImage from "./images/Corona.png";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  changeCountryHandler = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID 19"></img>
        <Cards data={data} />
        <CountryPicker changeCountryHandler={this.changeCountryHandler} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
