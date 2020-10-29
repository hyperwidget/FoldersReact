let BASE_URI = window.location.pathname.includes("localhost")
  ? "http://localhost:3030"
  : "https://llnl1.herokuapp.com";

BASE_URI += `/comments`;

export const create = (data) => {
  return fetch(BASE_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
};
