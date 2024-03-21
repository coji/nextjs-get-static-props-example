import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ name, yahoo }) {
  return (
    <div>
      Hello!
      {name}!{yahoo}
    </div>
  );
}

export const getStaticProps = async () => {
  const yahoo = await fetch("https://www.yahoo.co.jp");
  return {
    props: {
      name: "coji",
      yahoo: await yahoo.text(),
    },
  };
};
