const axios = require("axios");

const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "e37c2a7dab26.98658492c093d0d26653";

const getCharById = (res, id) => {
  axios
    .get(`${URL}/character/${id}/?key=${KEY}`)
    .then((response) => {
      const { id, name, gender, species, image } = response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ id, name, gender, species, image }));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharById;
