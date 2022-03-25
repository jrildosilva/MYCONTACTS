import delay from "../../Utils/delay";

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`http://localhost:3001${path}`);

    await delay(1000);

    return response.json();
  }
}

export default HttpClient;
