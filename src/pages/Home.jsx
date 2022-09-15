import React, { useEffect, useState } from "react";
import InputSearch from "../components/input search/InputSearch";

const Home = () => {
  const [unsplashImg, setUnsplashImg] = useState(null);

  const [currentWeather, setCurrentWeather] = useState([]);

  const [inputCity, setInputCity] = useState("buenos aires");

  const currentWeatherApi = async (city) => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_MAP_API_KEY}&units=metric`
      );
      const data = await resp.json();
      console.log(data);
      setCurrentWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    currentWeatherApi(inputCity);
  }, [inputCity]);

  // const handleSubmitCity = (e) => {
  //   e.preventDefault();
  //   currentWeatherApi(inputCity);
  //   setInputCity("");
  // };

  // const unsplashApi = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.unsplash.com/photos/random/?client_id=j09bjTjlzT-9ENnmmxvYs-ljixACpN8mQhwgqkBvN9c&orientation=landscape&query=nature&count=1`
  //     );
  //     const dataImg = await response.json();
  //     console.log(dataImg);
  //     setUnsplashImg(dataImg[0].urls.full);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   unsplashApi();
  // }, []);

  return (
    <div className="relative h-screen w-full">
      {/* <img
        className="h-full w-full object-cover"
        src={unsplashImg}
        alt="unsplash nature"
      /> */}
      <div className="absolute top-0 left-0 h-full w-full bg-gray-800/30"></div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-around items-center">
        <InputSearch
          inputCity={inputCity}
          setInputCity={setInputCity}
          // handleSubmitCity={handleSubmitCity}
        />
      </div>
    </div>
  );
};

export default Home;
