import { config } from "@app/core/config";
import { newsModel } from '../interfaces/news_data';


export interface response {
  Status: string;
  articles: newsModel[];
}

export async function fetchNewsApi() {

    // const response = await fetch(`https://newsdata.io/api/1/news?apikey=${config.apiKey}&q=${config.type}&language=${config.language}`);
    const response = await fetch(`https://newsapi.org/v2/top-headlines?language=${config.language}&apiKey=${config.apiKey}`);

    const data:response = await response.json();
    console.log("status "+response.status)
    return data.articles;
  }