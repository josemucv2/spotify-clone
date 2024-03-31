interface PropsFetch {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  options?: RequestInit;
  timeOut?: number;
  body?: unknown;
}

export type CustomPromises<T> = Promise<
  Response & {
    data: T;
  }
>;

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

  setToken(newToken: string) {
    this.token = newToken;
  }

  async request<T>({
    url,
    method,
    options = {},
    body,
    timeOut = 100000000,
  }: PropsFetch): CustomPromises<T> {
    const { signal, abort } = new AbortController();
    const timeoutId = setTimeout(() => abort(), timeOut);

    const isFormData = body instanceof FormData;

    const defaultHeaders = {
      "Content-Type": "application/json",
      Authorization: this.token ? this.token : "",
    };

    const headers = isFormData
      ? { Authorization: this.token }
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
        `${import.meta.env.VITE_BASE_URL_V1}/${url}`,
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

  async get<T>(url: string, options?: RequestInit) {
    const { data } = await this.request<T>({
      url,
      method: "GET",
      options,
    });
    return data;
  }

  async post<T>(url: string, body: unknown, options?: RequestInit) {
    const { data } = await this.request<T>({
      url,
      method: "POST",
      body,
      options,
    });
    return data;
  }

  async put<T>(url: string, body: unknown, options?: RequestInit) {
    const { data } = await this.request<T>({
      url,
      method: "PUT",
      body,
      options,
    });
    return data;
  }

  async delete(url: string, options?: RequestInit) {
    const { data } = await this.request({
      url,
      method: "DELETE",
      options,
    });
    return data;
  }

  async patch<T>(url: string, body?: unknown, options?: RequestInit) {
    const { data } = await this.request<T>({
      url,
      method: "PATCH",
      body,
      options,
    });
    return data;
  }
}

export const HTTPS = new HTTP();
