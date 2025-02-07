import Link from "next/link";
import Image from "next/image";

const navigation = [
  { href: "/", icon: "/images/Sidebar/logo.svg", current: false },
  { href: "/Materials", icon: "/images/Sidebar/1.svg", current: true },
  { href: "/Orders", icon: "/images/Sidebar/2.svg", current: false },
  { href: "/Products", icon: "/images/Sidebar/3.svg", current: false },
  { href: "/Calendar", icon: "/images/Sidebar/4.svg", current: false },
];

export default function Sidebar() {
  return (
    <aside className="w-20 h-screen border-r border-gray-200 bg-white flex flex-col items-center py-4">
      {/* Navigation Icons */}
      <nav className="flex-1 space-y-6">
        {navigation.map((item, index) => (
          <Link key={index} href={item.href}>
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer transition
                ${item.current ? "bg-[#F3F4FC] text-indigo-600 border border-[#DADCEE]" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`}
            >
              <Image
                src={item.icon}
                alt={`${item.href} icon`}
                width={36}
                height={36}
                className={`h-6 w-6 ${item.current ? "text-indigo-500" : "text-gray-400"}`}
              />
            </div>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto mb-4">
        <img
          src="/images/Sidebar/logout.svg"
          alt="Profile"
          className="h-10 w-10 border-gray-300"
        />
      </div>

      {/* Profile */}
      <div className="mt-auto mb-4">
        <img
          src="/images/Sidebar/profile.svg"
          alt="Profile"
          className="h-10 w-10 rounded-full border border-gray-300"
        />
      </div>
    </aside>
  );
}
