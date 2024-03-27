import { mailChimpUrl } from "@/components/Footer";
import jsonp from "jsonp";

const formatMailchimpUrl = (url: string) => url.replace("/post?", "/post-json?");

export async function mailchimpSignup(email: string) {
  const params = new URLSearchParams({
    EMAIL: email,
  });
  const URL = `${formatMailchimpUrl(mailChimpUrl)}&${params.toString()}`;
  return fetchJsonp(URL, { param: "c" });
}

type Options = {
  param?: string | undefined;
  prefix?: string | undefined;
  name?: string | undefined;
  timeout?: number | undefined;
};

// wrap jsonp in a promise
function fetchJsonp(url: string, opt?: Options): Promise<unknown> {
  return new Promise((resolve, reject) => {
    jsonp(url, opt, (err: Error | null, data?: unknown) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
