const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/76ba8bfb5aed233f483f97e86a6de17e/" +
    latitude +
    "," +
    longitude +
    "?lang=en";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain. The low for today is " +
          body.daily.data[0].temperatureMin +
          " and the high for today is " +
          body.daily.data[0].temperatureMax +
          "."
      );
    }
  });
};

module.exports = forecast;
