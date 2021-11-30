import Image from "next/image";
import Layout from "../components/Layout";
import ImageBg from "../public/images/macbook.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Layout name="Home">
        <h1 className="text-center text-gray-600 text-2xl p-10">
          Bienvenue sur mon portfolio
        </h1>
        <Image src={ImageBg} alt="My desk" layout="responsive" />
        <p className="text-center text-gray-600 text-lg p-10">
          Logoden biniou degemer mat an penn ar bed, digalon ne levrioù ennon
          anzav eta, mestr bed fresk gwinizh kerzu dreist.
        </p>
      </Layout>
    </div>
  );
}
