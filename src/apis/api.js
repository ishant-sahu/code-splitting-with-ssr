import { get } from "./dataService";
import apiUrl from "../config/config";

export function fetchPopularRepos(language = "all") {
  console.log(language);
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  return get(encodedURI);
}

 