function NavbarItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-semibold relative hover:text-white after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:w-8 after:h-0.5 after:bg-white after:mx-auto after:opacity-0 after:-translate-y-1 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:translate-y-0"
    >
      {children}
    </a>
  );
}

export function Navbar() {
  return (
    <nav className="flex gap-16 justify-center">
      <NavbarItem href="#about">About</NavbarItem>
      <NavbarItem href="#career">Career</NavbarItem>
      <NavbarItem href="#projects">Projects</NavbarItem>
      <NavbarItem href="#contact">Contact</NavbarItem>
    </nav>
  );
}
