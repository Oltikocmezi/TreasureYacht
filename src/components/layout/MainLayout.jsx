import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { SidebarProvider, useSidebar } from "../../context/SidebarContext";
import Sidebar from "./Sidebar";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
};

const LayoutInner = () => {
  const { openMobile, sidebarWidth } = useSidebar();
  const isDesktop = useIsDesktop();

  return (
    <div className="min-h-screen">
      <Sidebar />

      {/* Mobile only: floating menu button (no top bar) */}
      <button
        type="button"
        onClick={openMobile}
        className="fixed left-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white shadow-lg transition hover:bg-treasure lg:hidden"
        aria-label="Open menu"
      >
        <HiOutlineMenuAlt2 className="h-6 w-6" />
      </button>

      <main
        className="min-h-screen transition-[padding-left] duration-300 ease-in-out"
        style={{ paddingLeft: isDesktop ? sidebarWidth : 0 }}
      >
        <Outlet />
      </main>
    </div>
  );
};

const MainLayout = () => (
  <SidebarProvider>
    <LayoutInner />
  </SidebarProvider>
);

export default MainLayout;
