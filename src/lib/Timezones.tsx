export const date = new Date();

export const day = new Date().toLocaleDateString("en-us", {
  timeZone: "Europe/Amsterdam",
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const time = date.toLocaleTimeString();
export const timezone = date.toLocaleTimeString("en-us", {
  timeZone: "Europe/Amsterdam",
});
