import dotenv from "dotenv";
import { createClient } from "contentful";
import type { ContentfulClientApi } from "contentful";

dotenv.config();

export default (function () {
  let client: ContentfulClientApi;

  return {
    getClient: () => {
      if (!client) {
        client = createClient({
          space: process.env.CONTENTFUL_SPACE_ID as string,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
        });
      }
      return client;
    },
  };
})();
