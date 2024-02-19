import dateFormat from "dateformat";

export const getPreferredLanguage = (
  uz?: string,
  en?: string,
  ru?: string,
  krill?: string
): string => {
  const storedLanguage = localStorage.getItem("lang");

  switch (storedLanguage) {
    case "uz":
      return uz;
    case "en":
      return en;
    case "ru":
      return ru;
    case "krill":
      return krill;
    default:
      return uz;
  }
};

export const wordSlicer = (
  word: string,
  maxLimit: number = 70,
  sliceCharCount: number = 50
) => {
  return word.length <= maxLimit
    ? word
    : `${word.slice(0, sliceCharCount)} ...`;
};

export const dateFormatter = (date: string) => {
  const paddedShortDate = dateFormat(date, "dd/mm/yyyy");
  const shortTime = dateFormat(date, "HH:MM");

  return `${paddedShortDate}, ${shortTime}`;
};
