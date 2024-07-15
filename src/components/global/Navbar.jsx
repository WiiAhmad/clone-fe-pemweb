import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ButtonTheme from "../ui/button-theme";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className=" flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="mr-4 font-bold flex" prefetch={false}>
          <MountainIcon className="h-7 w-7" />
          <span className="ml-3 font-bold text-2xl">PT. PUTRA SINAR MAS</span>
        </Link>
        <nav className="hidden items-center space-x-4 md:flex">
          <ButtonTheme />
          <Link
            href="#"
            // text-muted-foreground hover:text-foreground
            className="text-sm font-medium"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            to="/activities"
            className="text-sm font-medium"
            prefetch={false}
          >
            Activities
          </Link>
          <Link to="/products" className="text-sm font-medium" prefetch={false}>
            Products
          </Link>
          <Button asChild>
            <Link to="/signin">Daftar</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="#" className="w-full" prefetch={false}>
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/activities" className="w-full" prefetch={false}>
                  Activities
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products" className="w-full" prefetch={false}>
                  Products
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" className="w-full" prefetch={false}>
                  Daftar
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
