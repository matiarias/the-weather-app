import React, { useEffect, useState } from "react";
import InputSearch from "../components/input search/InputSearch";

const Home = () => {
  const [unsplashImg, setUnsplashImg] = useState(null);

  const [currentWeather, setCurrentWeather] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [location, setLocation] = useState("");

  // ------------------------------------------------------------------------------------------------

  const weatherApi = async (city) => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_MAP_API_KEY}&units=metric&lang=es`
      );
      const data = await resp.json();
      console.log(data);
      setCurrentWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherApi(location);
  }, [location]);

  // -------------------------------------------------------------------------------------------------

  const unsplashApi = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&orientation=landscape&query=paisajes&count=1`
      );
      const dataImg = await response.json();
      console.log(dataImg);
      setUnsplashImg(dataImg[0].urls.full);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    unsplashApi();
  }, []);

  // ----------------------------------------------------------------------------------------------------

  return (
    <div className="relative h-screen w-full">
      <img
        className="h-full w-full object-cover"
        src={unsplashImg}
        alt="unsplash nature"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-gray-800/40"></div>
      <div className="absolute top-0 left-0 h-full w-full px-12 py-8 flex flex-col justify-center items-center">
        <InputSearch
          inputValue={inputValue}
          setInputValue={setInputValue}
          location={location}
          setLocation={setLocation}
        />

        {currentWeather.cod === "404" && (
          <p className="text-lg md:text-2xl text-gray-200 font-bold">
            Ciudad no encontrada
          </p>
        )}
        <h3>{currentWeather.name}</h3>
      </div>
    </div>
  );
};

export default Home;
