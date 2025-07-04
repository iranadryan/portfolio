export function Footer() {
  return (
    <footer className="mt-16 px-4 w-full text-element-bg bg-element-bg/30 h-24 flex items-center justify-center">
      <p>
        &copy; {new Date().getFullYear()} - All rights reserved.
      </p>
    </footer>
  );
}