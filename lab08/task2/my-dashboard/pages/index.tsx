import Link from "next/link";

export default function Home() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h1>📱 Next.js Demo</h1>
      <p>Choose a page to see different rendering strategies:</p>
      
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "40px" }}>
        <Link href="/dashboard" style={{ 
          padding: "10px 20px", 
          background: "#0070f3", 
          color: "white", 
          textDecoration: "none", 
          borderRadius: "8px" 
        }}>
          Dashboard (SSR)
        </Link>
        
        <Link href="/about" style={{ 
          padding: "10px 20px", 
          background: "#00a86b", 
          color: "white", 
          textDecoration: "none", 
          borderRadius: "8px" 
        }}>
          About (SSG)
        </Link>
        
        <Link href="/about-ssr" style={{ 
          padding: "10px 20px", 
          background: "#ff9800", 
          color: "white", 
          textDecoration: "none", 
          borderRadius: "8px" 
        }}>
          About (SSR)
        </Link>
      </div>
    </div>
  );
}