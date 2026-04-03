import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
  posts: Post[];
  buildTime: string;
}

export default function Home({ posts, buildTime }: HomeProps) {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>📝 My Blog</h1>
      <p>Posts generated with Static Site Generation (SSG) + ISR</p>
      <p style={{ color: "#666" }}>⏱️ Last built: {buildTime}</p>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <Link href={`/posts/${post.id}`} style={{ textDecoration: "none", color: "#0070f3" }}>
              <h2>{post.title}</h2>
            </Link>
            <p style={{ color: "#666" }}>
              By Author ID: {post.author} | 📖 {post.readTime} min read | 📅 {post.date}
            </p>
            <div>
              {post.tags.map(tag => (
                <span key={tag} style={{ background: "#eaeaea", padding: "2px 8px", borderRadius: "4px", marginRight: "8px", fontSize: "12px" }}>
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { 
      posts,
      buildTime: new Date().toISOString()
    },
    revalidate: 60,
  };
};