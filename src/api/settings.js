// api/settings.js
export const getHolidayMode = async () => {
  const res = await fetch(
    "https://946ef349-9f61-444f-8fc5-0b63818f9af4-00-16wtvembxsemd.sisko.repl.co/api/settings/holiday-mode",
  );
  return res.json();
};
