// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Phone } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/#about" },
  { label: "TOUR PACKAGES", href: "/#packages" },
  { label: "OUR SERVICES", href: "/#services" },
  { label: "GALLERY", href: "/#gallery" },
  { label: "CONTACT", href: "/#contact" },
];

export default function Header() {
  const { asPath } = useRouter();

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <Image
              src="/logo.png" // your logo in /public/logo.png
              alt="Travel Agents Logo"
              width={120}
              height={32}
              priority
            />
            <span className="ml-2 text-xl font-bold text-orange-500">
              TRAVEL AGENTS
            </span>
          </a>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? asPath === "/"
                  : asPath.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a
                      className={
                        isActive
                          ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                          : "text-gray-700 hover:text-orange-500 transition-colors"
                      }
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact */}
        <div className="flex items-center text-sm">
          <Phone className="h-5 w-5 text-orange-500 mr-2" />
          <span className="text-gray-700 font-medium">+111 - 0258211</span>
        </div>
      </div>
    </header>
  );
}
