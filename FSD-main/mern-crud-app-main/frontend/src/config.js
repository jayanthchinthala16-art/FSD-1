const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    const queryApi = params.get("api");
    if (queryApi) {
      const clean = queryApi.replace(/\/+$/, "");
      window.localStorage.setItem("mern_crud_api_url", clean);
      return clean;
    }
    if (import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL.replace(/\/+$/, "");
    }
    const savedApi = window.localStorage.getItem("mern_crud_api_url");
    if (savedApi) return savedApi;
  }
  return (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(
    /\/+$/,
    "",
  );
};

export const API_BASE_URL = getApiBaseUrl();
