interface IPropsFetch {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  options?: RequestInit;
  timeOut?: number;
  body?: unknown;
}

export interface IAccessTokenSpotify {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export type CustomPromises<T> = Promise<T>;

/**
 * Property object to perform fetch requests.
 * @param url - The URL to send the request to.
 * @param method - The HTTP method for the request (GET, POST, PUT, DELETE).
 * @param options - Additional options for the fetch request.
 * @param timeOut - Timeout for the request in milliseconds.
 * @param body - Body of the request, if applicable.
 */

class HTTP {
  token: string;
  constructor() {
    this.token = "";
  }

  public setToken(newToken: string) {
    this.token = newToken;
  }

  public async getToken(): Promise<IAccessTokenSpotify> {
    const {
      VITE_BASE_URL_V1,
      VITE_ID_CLIENT_SPOTIFY,
      VITE_CLIENT_SPOTIFY_SECRET,
    } = import.meta.env;

    const response = await fetch(`${VITE_BASE_URL_V1}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: this.createBasicAuthHeader(
          VITE_ID_CLIENT_SPOTIFY,
          VITE_CLIENT_SPOTIFY_SECRET
        ),
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    return await response.json();
  }

  private createBasicAuthHeader(username: string, password: string) {
    const credentials = `${username}:${password}`;
    return `Basic ${btoa(credentials)}`;
  }

  private async request<T>({
    url,
    method,
    options = {},
    body,
    timeOut = 100000000,
  }: IPropsFetch): CustomPromises<T> {
    const { signal, abort } = new AbortController();
    const timeoutId = setTimeout(() => abort(), timeOut);

    const isFormData = body instanceof FormData;

    const defaultHeaders = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: this.token ? `Bearer  ${this.token}` : "",
    };

    const headers = isFormData
      ? { Authorization: `Bearer  ${this.token}` }
      : { ...defaultHeaders, ...(options.headers || {}) };

    const requestOptions = {
      ...options,
      signal,
      headers,
      method,
      body: isFormData
        ? body
        : method === "PUT" || method === "POST" || method === "DELETE"
        ? JSON.stringify(body)
        : undefined,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_SPOTIFY_ACCESS}/${url}`,
        requestOptions
      );
      clearTimeout(timeoutId);
      const responseData = await response.json();

      if (!response.ok) {
        throw { ...responseData, status: response.status };
      }

      return responseData;
    } catch (error: unknown) {
      clearTimeout(timeoutId);

      if (error instanceof Error) {
        if (error.message === "not Permision") {
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = "/";
        }
      }

      throw error;
    }
  }

  public async get<T>(url: string, options?: RequestInit) {
    const data = await this.request<T>({
      url,
      method: "GET",
      options,
    });
    return data;
  }

  public async post<T>(url: string, body: unknown, options?: RequestInit) {
    const data = await this.request<T>({
      url,
      method: "POST",
      body,
      options,
    });
    return data;
  }

  public async put<T>(url: string, body: unknown, options?: RequestInit) {
    const data = await this.request<T>({
      url,
      method: "PUT",
      body,
      options,
    });
    return data;
  }

  public async delete(url: string, options?: RequestInit) {
    const data = await this.request({
      url,
      method: "DELETE",
      options,
    });
    return data;
  }

  public async patch<T>(url: string, body?: unknown, options?: RequestInit) {
    const data = await this.request<T>({
      url,
      method: "PATCH",
      body,
      options,
    });
    return data;
  }
}

export const HTTPS = new HTTP();
