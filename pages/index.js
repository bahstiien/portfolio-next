import Head from "next/head";
import Image from "next/image";
import ImageBg from "../public/images/macbook.jpg";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-gray-500 text-lg pl-4 pt-6">
        <Link href="/project"> Mes réalisations </Link>
      </div>
      <h1 className="text-center text-gray-600 text-2xl p-10">
        Bienvenue sur mon portfolio
      </h1>
      <Image src={ImageBg} alt="My desk" layout="responsive" />
      <p className="text-center text-gray-600 text-lg p-10">
        Logoden biniou degemer mat an penn ar bed, digalon ne levrioù ennon
        anzav eta, mestr bed fresk gwinizh kerzu dreist.
      </p>
    </div>
  );
}
