import { GetStaticProps } from "next";

interface AboutProps {
  buildTime: string;
}

export default function About({ buildTime }: AboutProps) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>📄 About Us (SSG)</h1>
      <p>This is a static page generated at build time.</p>
      <hr />
      <p>⏱️ Built at: {buildTime}</p>
      <p>✨ This page uses Static Site Generation (SSG) - built once at compile time</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      buildTime: new Date().toISOString(),
    },
  };
};