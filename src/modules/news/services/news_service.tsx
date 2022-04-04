import { config } from "@app/core/config";

export async function fetchNewsApi() {
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=${config.apiKey}&q=${config.type}&language=${config.language}`);
    const data = await response.json();
    return data;
  }