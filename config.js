const constants = {
  lolMap: {
    BASE_URL: "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/",
    SECRET_KEY: process.env.LOL_API,
  },
  characterworks: {
    BASE_URL: "http://221.146.42.75:5021/",
    COMMAND: {
      action: "run_data_source_query",
      data_source: "XML/JSON Source 1",
    },
  },
};

module.exports = constants;

/*
command	{ "action" : "run_data_source_query", "data_source" : "XML/JSON Source 1" }
response	{ "result" : "success" }
{ "result" : "failure", "errors" : [ { "code" : "data_source_not_found", "description" : "No data sources found with given name." } ] }
*/
