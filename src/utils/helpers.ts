const calcClientSliderItemsCount = (width) => {
  if (width < 768) {
    return 1;
  }

  if (width >= 768 && width < 1230) {
    return 2;
  }

  return 4;
};
const PHONE_REGEXP = /^(7)?(\d{3})(\d{3})(\d{2})(\d{2})$/;
const formatPhoneNumber = (phoneNumber, prefix = "+7") => {
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  if (digitsOnly.length < 4) {
    return digitsOnly;
  }

  const formattedNumber = `${prefix}-${digitsOnly.slice(
    1,
    4,
  )}-${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7, 9)}-${digitsOnly.slice(
    9,
  )}`;
  return formattedNumber;
};

export const isMobile = (): boolean => {
  if (typeof window === "undefined") return false;

  const query = "(min-width: 320px) and (max-width: 767.98px)";
  const match = window.matchMedia(query);
  return match.matches;
};
export { calcClientSliderItemsCount, formatPhoneNumber, PHONE_REGEXP };
