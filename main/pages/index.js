import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Map from "@/pages/components/map";

export default function Home() {
  return (
    <>
      <Head>
        <title>CEBU_ISLAND_MAP</title>
      </Head>
      <div>
        <Map></Map>
      </div>
    </>
  );
}
