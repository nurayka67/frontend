import { GetServerSideProps } from "next";
import { User, Notification, Analytics } from "@/types";
import { getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: Analytics;
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <header style={{ background: "#0070f3", color: "white", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <h1>Welcome, {user.name}</h1>
        <p>Role: {user.role} | Email: {user.email}</p>
      </header>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>📊 Analytics (SSR - Fresh on every request)</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px", marginTop: "10px" }}>
          <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <strong>Page Views</strong>
            <p style={{ fontSize: "24px", color: "#0070f3" }}>{analytics.pageViews.toLocaleString()}</p>
          </div>
          <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <strong>Sessions</strong>
            <p style={{ fontSize: "24px", color: "#0070f3" }}>{analytics.sessions.toLocaleString()}</p>
          </div>
          <div style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <strong>Bounce Rate</strong>
            <p style={{ fontSize: "24px", color: "#0070f3" }}>{analytics.bounceRate.toFixed(1)}%</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2>🔔 Notifications ({unreadCount} unread)</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notifications.map(notif => (
            <li key={notif.id} style={{ 
              padding: "12px", 
              marginBottom: "10px", 
              border: "1px solid #ddd", 
              borderRadius: "8px",
              background: notif.read ? "#f5f5f5" : "#fff",
              borderLeft: `4px solid ${
                notif.type === "info" ? "#0070f3" : notif.type === "success" ? "#00a86b" : "#ff9800"
              }`
            }}>
              <span style={{ fontWeight: notif.read ? "normal" : "bold" }}>{notif.message}</span>
              <span style={{ color: "#666", fontSize: "12px", marginLeft: "10px" }}>{notif.createdAt}</span>
            </li>
          ))}
        </ul>
      </section>
      
      <footer style={{ marginTop: "30px", padding: "15px", borderTop: "1px solid #ddd", color: "#666" }}>
        <p>⏱️ Last updated (SSR): {currentTime}</p>
        <p>✨ This page uses Server-Side Rendering - data is fresh on every request</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);
  
  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};