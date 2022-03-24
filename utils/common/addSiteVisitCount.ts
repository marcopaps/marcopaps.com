import axios from 'axios';

export default async function addSiteVisitCount() {
  const endpoint = process.env.SERVERLESS_ENDPOINT;
  const serverlessFunction = process.env.SERVERLESS_SITE_COUNTER_FUNCTION;

  try {
    return axios.post(`${endpoint}/${serverlessFunction}`, {});
  } catch (error) {
    console.error(error);
  }
}
