import delay from "../../Utils/delay";

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(1000);

    const response = await fetch(`${this.baseURL}${path}`);
    let body = null;
    const ContentType = response.headers.get('Content-Type');
    if (ContentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new Error(body.error);
  }
}

export default HttpClient;
