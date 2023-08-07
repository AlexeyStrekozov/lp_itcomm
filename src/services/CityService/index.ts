import Cookies from "js-cookie";

export const CITY_COOKIE_KEY = "selectedCity";

export const CityService = {
  getCities: () => ["Алматы", "Астана"],

  getSelectedCity: () => {
    const storedCity = Cookies.get(CITY_COOKIE_KEY);
    return storedCity;
  },

  setSelectedCity: (city: string) => {
    Cookies.set(CITY_COOKIE_KEY, city);
  },
};
