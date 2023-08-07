import { useEffect, useState } from "react";

import { useGlobalAppContext } from "@/providers/app-context";
import { CityService } from "@/services/CityService";

export const GetGeolocation = () => {
  const { appState: AppState, updateState: setAppState } =
    useGlobalAppContext();
  const [locationFetched, setLocationFetched] = useState(false);

  const saveToCookie = (city: string) => {
    CityService.setSelectedCity(city);
  };

  const getUserLocation = () => {
    if (navigator.geolocation && !locationFetched) {
      setLocationFetched(true);
      navigator.geolocation.getCurrentPosition(showUserLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const showUserLocation = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const nominatimAPI = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    fetch(nominatimAPI)
      .then((response) => response.json())
      .then((data) => {
        if (data.address && data.address.city) {
          const city = data.address.city;
          setAppState({
            currentCity: city,
          });
          saveToCookie(city);
        } else {
          console.log("Город не найден.");
        }
      })
      .catch((error) => {
        console.log("Error occurred while fetching geolocation data:", error);
      });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return null;
};
