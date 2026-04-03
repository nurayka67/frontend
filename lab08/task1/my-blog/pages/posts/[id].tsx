import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/types";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";

interface PostProps {
  post: Post;
  author: { name: string; bio: string };
  generatedAt: string;
}

export default function PostPage({ post, author, generatedAt }: PostProps) {
  return (
    <article style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>{post.title}</h1>
      <p style={{ color: "#666" }}>
        By {author.name} | 📖 {post.readTime} min read | 📅 {post.date}
      </p>
      <hr />
      <div style={{ lineHeight: 1.6 }}>
        <p>{post.content}</p>
      </div>
      <hr />
      <div>
        <strong>Tags:</strong>{" "}
        {post.tags.map(tag => (
          <span key={tag} style={{ background: "#eaeaea", padding: "2px 8px", borderRadius: "4px", marginRight: "8px" }}>
            #{tag}
          </span>
        ))}
      </div>
      <p style={{ marginTop: "20px", color: "#666", fontSize: "14px" }}>
        ⏱️ Page generated at: {generatedAt}
      </p>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => ({ params: { id: post.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  if (!post) return { notFound: true };
  
  const author = await getAuthorById(post.author);
  if (!author) return { notFound: true };
  
  return {
    props: { 
      post, 
      author,
      generatedAt: new Date().toISOString()
    },
    revalidate: 60,
  };
};