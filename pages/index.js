import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/request";

// import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  // console.log(props);
  return (
    <div>
      <Head>
        <title>Hulu Clone | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Nav />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3/${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: req.results,
    },
  };
}
