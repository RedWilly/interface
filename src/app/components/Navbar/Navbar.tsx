import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute z-20 flex flex-row items-center justify-between w-full px-8 py-6 lg:px-24">
      <div className="flex flex-row justify-between items-center gap-4 w-full">
        <Link href={"/"}>
          <Image
            src={"/logo/logo-white.svg"}
            alt="Just a DEX Logo"
            height={50}
            width={200}
            priority
          />
        </Link>
        {/* <ul className="hidden xl:flex flex-row gap-12 font-semibold text-lg justify-center items-center">
          <li>
            <Link href={"#integrations"}>Integrations</Link>
          </li>
          <li>
            <Link href={"#socials"}>Join Community</Link>
          </li>
        </ul> */}
        <div className="hidden md:flex">
          <Link
            href={"/app"}
            className="px-6 py-2.5 text-white rounded-md shadow-sm cursor-pointer bg-accent font-semibold"
          >
            Launch App
          </Link>
        </div>
        {/* <ul className="flex flex-row items-center justify-end gap-12">
          <li>
            <Link
              href={"/app"}
              className="px-6 py-2.5 text-white rounded-md shadow-sm cursor-pointer bg-accent font-semibold"
            >
              Launch App
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
