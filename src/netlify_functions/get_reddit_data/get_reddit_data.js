import fetch from "node-fetch";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

const API_ENDPOINT = "https://www.reddit.com/random.json";

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return { statusCode: 200, headers, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
