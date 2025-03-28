// 📄 src/utils/storage.ts

// Kullanıcıyı getirir
export function getUser(): any | null {
  try {
    const data = localStorage.getItem("user");
    if (!data) return null;
    return JSON.parse(data);
  } catch (error) {
    console.error("Kullanıcı verisi çözümlenemedi:", error);
    return null;
  }
}

// Kullanıcıyı kaydeder
export function setUser(user: any): void {
  localStorage.setItem("user", JSON.stringify(user));
}

// Token kaydeder
export function setToken(token: string): void {
  localStorage.setItem("token", token);
}

// Token getirir
export function getToken(): string | null {
  return localStorage.getItem("token");
}

// Storage temizler (logout için)
export function clearStorage(): void {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
