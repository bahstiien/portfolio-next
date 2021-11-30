import Link from "next/link";

const Header = () => {
  return (
    <div className="text-gray-600  p-10 ">
      <ul className="flex flex-row">
        <li className="pl-4">
          <Link href="/"> Accueil </Link>
        </li>
        <li className="pl-4">
          <Link href="/project"> Mes réalisations </Link>
        </li>
        <li className="pl-4">
          <Link href="/contact"> Me contacter </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
