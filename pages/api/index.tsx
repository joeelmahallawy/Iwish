import axios from "axios";
import { useAsyncFn } from "react-use";
import { TwitterApi } from "twitter-api-v2";

export default async function handler(req, res) {
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`
    );
    myHeaders.append(
      "Cookie",
      'guest_id=v1%3A163002036000872664; personalization_id="v1_Sf+O/yGYiIQ7Tt9IDwj/AQ=="'
    );

    const response = await fetch(
      `https://api.twitter.com/2/tweets/search/recent?query=from:TwitterDev&tweet.fields=created_at&expansions=author_id&user.fields=created_at`,
      {
        method: "GET",

        headers: myHeaders,
        redirect: "follow",
      }
    );
    if (!response.ok) throw new Error("Could not retrieve tweets");
    const responseData = await response.json();

    res.status(200).json(responseData);
  } catch (err) {
    res.status(400);
  }
}
