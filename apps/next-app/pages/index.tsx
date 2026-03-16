import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function Home() {
  return (
    <main>
      <h1>Next.js App</h1>
      <p>Тута конфиг: {publicRuntimeConfig.foo}</p>
    </main>
  );
}
