import request from "request";
import constants from "../config";

export const lolUserData = (address, callback) => {
  const url =
    constants.lolMap.BASE_URL +
    encodeURIComponent(address) +
    "?api_key=" +
    constants.lolMap.SECRET_KEY;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Can't fetch data from lol Api", undefined);
    } else {
      callback(undefined, {
        userName: body.name,
        summonerLevel: body.summonerLevel,
      });
    }
  });
};
