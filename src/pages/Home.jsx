import React, { useEffect, useState } from "react";

const Home = () => {
  const [unsplashImg, setUnsplashImg] = useState(null);

  const [currentWeather, setCurrentWeather] = useState([]);

  // const currentWeatherApi = async () => {
  //   try {
  //     const resp = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=mendoza&appid=fb9e237ca55ec441e335dd925bae5de2&units=metric`
  //     );
  //     const data = await resp.json();
  //     console.log(data);
  //     setCurrentWeather(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   currentWeatherApi();
  // }, []);

  const unsplashApi = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=j09bjTjlzT-9ENnmmxvYs-ljixACpN8mQhwgqkBvN9c&orientation=landscape&query=nature&count=1`
    );
    const dataImg = await response.json();
    console.log(dataImg);
    setUnsplashImg(dataImg[0].urls.full);
  };

  useEffect(() => {
    unsplashApi();
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center">
      <img
        className="h-full w-full object-cover"
        src={unsplashImg}
        alt="unsplash nature"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-slate-800/50"></div>

      {/* <div>
        <form>
          <input
            className="w-[300px] px-4 py-2 border-2 border-green-800 rounded-lg focus:outline-none focus:border-lime-500 placeholder:italic placeholder:text-slate-500"
            type="text"
            placeholder="Enter Location"
            maxLength="40"
          />
        </form>
      </div> */}
    </div>
  );
};

export default Home;
