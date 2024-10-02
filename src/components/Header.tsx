import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
