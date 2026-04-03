import { GetServerSideProps } from "next";

interface AboutSSRProps {
  requestTime: string;
}

export default function AboutSSR({ requestTime }: AboutSSRProps) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>📄 About Us (SSR Version)</h1>
      <p>This page is rendered on every request using SSR.</p>
      <hr />
      <p>⏱️ Request time: {requestTime}</p>
      <p>🔄 This page uses Server-Side Rendering (SSR) - fresh on every request</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      requestTime: new Date().toISOString(),
    },
  };
};