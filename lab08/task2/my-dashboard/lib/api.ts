import { User, Notification, Analytics } from "@/types";

export function getCurrentUser(): User {
  return {
    id: "user-123",
    name: "Demo User",
    email: "demo@example.com",
    avatar: "/avatars/demo.jpg",
    role: "user",
  };
}

export async function getUserNotifications(userId: string): Promise<Notification[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return [
    { id: "1", type: "info", message: "Welcome to the dashboard!", read: false, createdAt: "2026-03-01" },
    { id: "2", type: "success", message: "Your profile was updated successfully", read: true, createdAt: "2026-02-28" },
    { id: "3", type: "warning", message: "Please verify your email address", read: false, createdAt: "2026-03-02" },
  ];
}

export async function getUserAnalytics(userId: string): Promise<Analytics> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
    bounceRate: Math.random() * 100,
  };
}