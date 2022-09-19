import React from "react";
import Lottie from "lottie-react";
import lottieWeather from "../../assets/lottie files/61302-weather-icon.json";

const LottieLoading = () => {
  return (
    <>
      <Lottie animationData={lottieWeather} loop={true} />
    </>
  );
};

export default LottieLoading;
