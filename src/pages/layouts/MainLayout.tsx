import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
