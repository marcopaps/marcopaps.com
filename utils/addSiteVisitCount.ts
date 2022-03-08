import axios from 'axios';

export async function addSiteVisitCount() {
  try {
    return axios.post(
      'https://marcopapsserverless.azurewebsites.net/api/AddSiteVisitCount',
      {}
    );
  } catch (error) {
    console.error(error);
  }
}
