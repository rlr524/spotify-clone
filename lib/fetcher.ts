import config from "config";

const apiVersion = config.get<string>("ApiConfig.apiVersion");

export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api/${apiVersion}${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
