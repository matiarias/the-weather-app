import React, { useEffect, useState } from "react";
import InputSearch from "../components/input search/InputSearch";
import LottieLoading from "../components/lottie loading/LottieLoading";
import WeatherIcons from "../components/weather icons/WeatherIcons";
import { DateTime } from "luxon";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [unsplashImg, setUnsplashImg] = useState(null);

  const [currentWeather, setCurrentWeather] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const [location, setLocation] = useState("san juan");

  const [dailyWeather, setDailyWeather] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [cordenadas, setCordenadas] = useState(null);

  // ------------------------------ current weather map API function ------------------------------------------

  const weatherApi = async (city) => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_MAP_API_KEY}&units=metric&lang=es`
      );
      const data = await resp.json();
      // console.log(data);
      setCurrentWeather(data);
      setCordenadas(data.coord);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherApi(location);
  }, [location]);

  // ---------------------------------- daily weather API function -------------------------------------

  const weatherNextDaysApi = async ({ lat, lon }) => {
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&lang=es&appid=${process.env.REACT_APP_DAILY_WEATHER_API_KEY}`
      );
      const results = await resp.json();
      // console.log(results);
      setDailyWeather(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cordenadas) {
      weatherNextDaysApi(cordenadas);
    }
  }, [cordenadas]);

  // --------------------------------- unsplash API function ------------------------------------------

  const unsplashApi = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&orientation=landscape&query=paisajes&count=1`
      );
      const dataImg = await response.json();
      // console.log(dataImg);
      setUnsplashImg(dataImg[0].urls.full);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    unsplashApi();
  }, []);

  // ----------------------------------------- full date ---------------------------------------------

  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATE_HUGE);

  // --------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="mx-auto w-[250px] md:w-[350px] lg:w-[500px]">
        {isLoading && <LottieLoading />}
      </div>

      {currentWeather && dailyWeather && (
        <div className="relative h-screen w-full">
          <img
            className="h-full w-full object-cover object-center"
            src={unsplashImg}
            alt="unsplash nature"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gray-800/40"></div>
          <div className="absolute top-0 left-0 h-full w-full px-12 flex flex-col justify-center items-center">
            <div className="absolute top-8 md:top-4">
              <InputSearch
                inputValue={inputValue}
                setInputValue={setInputValue}
                location={location}
                setLocation={setLocation}
              />
            </div>

            {/* ------------------------------------------------------------------------------------------ */}

            {currentWeather.cod === "404" && (
              <p className="text-xl md:text-3xl text-gray-200 font-bold mb-12">
                Ciudad no encontrada
              </p>
            )}

            {/* -------------------------------------------------------------------------------- */}

            <div className="relative w-full md:w-[600px] lg:w-[800px] h-auto py-8 sm:py-16 md:py-8 px-2 sm:px-4 flex flex-col justify-center items-center gap-4 bg-black bg-opacity-70 rounded-md shadow-md shadow-white">
              {/* --------------------------------------------------------------------------------------- */}

              <div className="sm:absolute h-auto top-2 left-4 flex flex-col items-center">
                <span className="text-gray-100 text-lg md:text-xl font-bold">
                  {currentWeather.name}
                </span>

                {currentWeather.sys ? (
                  <span className="text-gray-100 text-sm md:text-lg font-medium">
                    {currentWeather.sys.country}
                  </span>
                ) : null}
              </div>

              <div className="sm:absolute top-2 right-4">
                {currentWeather.cod === "404" ? null : (
                  <span className="text-sm sm:text-base font-medium text-gray-100">
                    {date}
                  </span>
                )}
              </div>

              {/* --------------------------------------------------------------------------------- */}

              <div className="flex gap-2 items-center">
                {currentWeather.main ? (
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-100">
                    {currentWeather.main.temp.toFixed()}°
                  </h2>
                ) : null}

                {currentWeather.weather ? (
                  <WeatherIcons
                    icon={currentWeather.weather[0].icon}
                    size={40}
                  />
                ) : null}

                <div className="flex flex-col border-l-2 border-gray-300 px-2">
                  {currentWeather.main ? (
                    <span className="text-xl md:text-2xl font-bold text-gray-100">
                      {currentWeather.main.temp_max.toFixed()}°
                    </span>
                  ) : null}

                  {currentWeather.main ? (
                    <span className="text-xl md:text-2xl font-bold text-gray-400">
                      {currentWeather.main.temp_min.toFixed()}°
                    </span>
                  ) : null}
                </div>
              </div>

              {/* -------------------------------------------------------------------------------- */}

              <div className="mt-2 md:mt-0">
                <div className="mb-2">
                  {currentWeather.weather ? (
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-300 uppercase">
                      {currentWeather.weather[0].description}
                    </h3>
                  ) : null}
                </div>
                {currentWeather.main ? (
                  <h4 className="text-base md:text-lg font-medium text-yellow-200">
                    Sensación Termica:{" "}
                    {currentWeather.main.feels_like.toFixed()}°
                  </h4>
                ) : null}

                {currentWeather.main ? (
                  <h4 className="text-base md:text-lg font-medium text-yellow-200">
                    Humedad: {currentWeather.main.humidity}%
                  </h4>
                ) : null}
              </div>

              {/* ----------------------------- daily weather temp ----------------------------------- */}

              <div className="w-full h-auto border-t-2 border-gray-300 grid grid-cols-5 px-0 md:px-2">
                {dailyWeather.daily.slice(1, 6).map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-1 mt-2"
                  >
                    <h4 className="text-gray-200 text-base md:text-lg">
                      {DateTime.fromSeconds(item.dt).weekdayShort}
                    </h4>

                    {currentWeather.weather ? (
                      <WeatherIcons icon={item.weather[0].icon} size={30} />
                    ) : null}

                    <span className="text-base md:text-lg text-yellow-200 font-bold">
                      {item.temp.max.toFixed()}°
                    </span>

                    <span className="text-base md:text-lg text-yellow-200 font-bold">
                      {item.temp.min.toFixed()}°
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
