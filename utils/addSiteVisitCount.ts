import axios from 'axios';

export async function addSiteVisitCount() {
  const { SERVERLESS_ENDPOINT, SERVERLESS_SITE_COUNTER_FUNCTION } = process.env;
  try {
    return axios.post(
      `${SERVERLESS_ENDPOINT}/${SERVERLESS_SITE_COUNTER_FUNCTION}`,
      {}
    );
  } catch (error) {
    console.error(error);
  }
}
