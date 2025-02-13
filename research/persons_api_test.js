import { writeFile } from 'node:fs/promises';

class APIClient {
  constructor(apiKey, apiSecret, tokenUrl = 'https://api.wisc.edu/oauth/token') {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.tokenUrl = tokenUrl;
    this.accessToken = null;
    this.tokenExpiry = null;
  }

  isTokenExpired() {
    if (!this.tokenExpiry) return true;
    const fiveMinutes = 5 * 60 * 1000;
    return Date.now() >= (this.tokenExpiry - fiveMinutes);
  }

  getEncodedCredentials() {
    return Buffer.from(`${this.apiKey}:${this.apiSecret}`).toString('base64');
  }

  async getAccessToken() {
    if (this.accessToken && !this.isTokenExpired()) {
      return this.accessToken;
    }

    const response = await fetch(this.tokenUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${this.getEncodedCredentials()}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpiry = Date.now() + ((data.expires_in || 3600) * 1000);
    
    return this.accessToken;
  }

  async callAPI(url, options = {}) {
    const token = await this.getAccessToken();
    
    const defaultOptions = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    const finalOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers
      }
    };

    const response = await fetch(url, finalOptions);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    return response.json();
  }
}

// Example usage:
async function example() {
  try {
    const client = new APIClient('GxEbZuWmgrmfYdwgFpGuJeBy6MGl8F4UjSg4rDL8m8dIzdJK', 't8CpUrXtjRV0Fo6d8JgnzULc6bT27aBP02EFR8VE2v8oG6XLKyPAetI8z7M5H3gD');

    const people = await client.callAPI('https://mock.api.wisc.edu/people');
    
    // Pretty print to console
    console.log('People data:');
    console.log(JSON.stringify(people, null, 2));
    
    // Write to file with proper formatting
    // await writeFile('people.json', JSON.stringify(people, null, 2));
    // console.log('Data has been written to people.json');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run the example
example();