let BASE_URI = window.location.origin.includes("localhost")
  ? "http://localhost:3030"
  : "https://llnl1.herokuapp.com";

BASE_URI += `/posts`;

export const findAll = async () => {
  return fetch(BASE_URI).then((response) => response.json());
};

export const findArchived = async () => {
  return fetch(`${BASE_URI}?archived=true`).then((response) => response.json());
};

export const findOne = function (id) {
  return fetch(`${BASE_URI}/${id}`).then((response) => response.json());
};

export const create = (data) => {
  return fetch(BASE_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
};

export const archive = (id) => {
  return fetch(`${BASE_URI}/${id}/archive`, { method: "POST" });
};

export const unarchive = (id, callback) => {
  return fetch(`${BASE_URI}/${id}/unarchive`, { method: "POST" });
};
