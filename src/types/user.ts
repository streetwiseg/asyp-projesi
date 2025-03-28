// src/types/user.ts

export type UserRole = "admin" | "editor" | "viewer" | "manager";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  position?: string;
  companyName?: string;
  companyAddress?: string;
  registeredAt: string;
  isActive: boolean;
}
