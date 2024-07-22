import Navbar from "../global/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../global/Footer";

export default function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}