import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t px-4 lg:px-6 py-6 w-full shrink-0 flex flex-col gap-2 sm:flex-row items-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Collaboration. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </footer>
  );
}