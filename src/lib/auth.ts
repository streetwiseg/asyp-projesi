// src/lib/auth.ts

// Token işlemleri
export const setToken = (token: string) => {
  localStorage.setItem("asyp_token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("asyp_token");
};

export const clearToken = () => {
  localStorage.removeItem("asyp_token");
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  return !!token; // Buraya dilersen token süresi kontrolü de ekleyebiliriz
};

// Kullanıcı işlemleri
export const setUser = (user: any) => {
  if (user) localStorage.setItem("asyp_user", JSON.stringify(user));
};

export const getUser = (): any | null => {
  try {
      const user = localStorage.getItem("asyp_user");
      if (!user || user === "undefined" || user === "null") return null;
      return JSON.parse(user);
  } catch (error) {
      console.error("Kullanıcı çözümlemesi başarısız:", error);
      return null;
  }
};

export const clearUser = () => {
  localStorage.removeItem("asyp_user");
};
