import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ name }) {
  return (
    <div>
      Hello!
      {name}!
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      name: "coji",
    },
  };
};
