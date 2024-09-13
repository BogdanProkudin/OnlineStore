const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 5173;

app.use(bodyParser.json());

const apiUrl =
  "http://api.novaposhta.ua/v2.0/json/AddressGeneral/getWarehouses";
const username = "Прокудін Богдан Максимович";
const password = "Screaper228";
const apiKey = "8f9aeef5f8e8792b46accb1044b9c126";

const requestPayload = {
  apiKey: apiKey,
  modelName: "Address",
  calledMethod: "getWarehouses",
};
const getCity = async () => {
  // Кодуючи ім'я користувача та пароль у формат Base64 для заголовка Authorization

  try {
    console.log("Request payload:", requestPayload);
    const response = await axios.get(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        apiKey,
      },
    });

    const data = await response.data;
    console.log("data=", data);
  } catch (error) {
    console.log("ERROROR", error);
  }
};

getCity();
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
