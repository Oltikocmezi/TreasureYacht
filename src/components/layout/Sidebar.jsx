import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineSparkles,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";
import { GiSailboat } from "react-icons/gi";
import { TbSailboat2 } from "react-icons/tb";
import logo from "../../assets/img/Icons/icons8-ship-wheel-101.png";
import { useAuth } from "../../context/AuthContext";
import { useSidebar } from "../../context/SidebarContext";

const navLinks = [
  { title: "Home", url: "/Home", icon: HiOutlineHome },
  { title: "Yachts", url: "/Yacht", icon: GiSailboat },
  { title: "Events", url: "/Events", icon: HiOutlineCalendar },
  { title: "Yacht Club", url: "/YachtClub", icon: TbSailboat2 },
  { title: "Commitment", url: "/Commitment", icon: HiOutlineSparkles },
];

const SidebarPanel = ({ collapsed, onClose, onToggleCollapsed, isMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (url) => location.pathname === url;

  const handleLogout = async () => {
    await logout();
    navigate("/sign-in");
    onClose?.();
  };

  const displayName =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    user?.name ||
    "Member";

  return (
    <aside
      className={`flex h-full flex-col border-r border-white/10 bg-gradient-to-b from-navy via-[#001a3d] to-[#001228] text-white shadow-2xl transition-[width] duration-300 ease-in-out ${
        collapsed ? "w-[80px]" : "w-[280px]"
      }`}
    >
      {/* Header + collapse toggle */}
      <div
        className={`relative flex shrink-0 items-center border-b border-white/10 ${
          collapsed ? "justify-center px-2 py-5" : "justify-between px-4 py-5"
        }`}
      >
        <Link
          to="/Home"
          className={`group flex items-center no-underline ${collapsed ? "" : "gap-3"}`}
          onClick={onClose}
          title="Treasure Yacht"
        >
          <img
            src={logo}
            alt=""
            className="h-11 w-11 shrink-0 rounded-full border border-club-gold/40 bg-white/5 p-1 transition group-hover:border-club-gold"
          />
          {!collapsed && (
            <div className="min-w-0">
              <span className="block truncate font-dancing text-xl leading-none text-club-gold">
                Treasure Yacht
              </span>
              <span className="mt-1 block font-ysabeau text-[10px] uppercase tracking-[0.2em] text-white/50">
                Luxury at sea
              </span>
            </div>
          )}
        </Link>

        {!isMobile && (
          <button
            type="button"
            onClick={onToggleCollapsed}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/80 transition hover:bg-treasure hover:text-white ${
              collapsed ? "absolute -right-3 top-6 z-10 ring-2 ring-navy shadow-lg" : ""
            }`}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand menu" : "Collapse menu"}
          >
            {collapsed ? (
              <HiOutlineChevronRight className="h-5 w-5" />
            ) : (
              <HiOutlineChevronLeft className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-x-hidden overflow-y-auto px-2 py-4">
        {!collapsed && (
          <p className="mb-2 px-3 font-ysabeau text-[10px] uppercase tracking-[0.2em] text-white/40">
            Explore
          </p>
        )}
        {navLinks.map(({ title, url, icon: Icon }) => {
          const active = isActive(url);
          return (
            <Link
              key={url}
              to={url}
              onClick={onClose}
              title={collapsed ? title : undefined}
              className={`group flex items-center rounded-xl text-sm font-medium no-underline transition-all duration-200 ${
                collapsed ? "justify-center px-2 py-3" : "gap-3 px-3 py-3"
              } ${
                active
                  ? "bg-treasure/20 text-white ring-1 ring-treasure/40"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition ${
                  active
                    ? "bg-treasure text-white"
                    : "bg-white/5 text-club-gold group-hover:bg-white/10"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              {!collapsed && (
                <>
                  <span className="truncate">{title}</span>
                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-club-gold" />
                  )}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      <div className={`shrink-0 border-t border-white/10 p-2 ${collapsed ? "px-2" : "p-4"}`}>
        {isAuthenticated ? (
          <div
            className={`rounded-xl bg-white/5 ring-1 ring-white/10 ${
              collapsed ? "flex flex-col items-center gap-2 p-2" : "p-4"
            }`}
          >
            <div
              className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}
              title={collapsed ? displayName : undefined}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-treasure to-club-gold font-playfair text-base font-bold text-white">
                {displayName.charAt(0).toUpperCase()}
              </div>
              {!collapsed && (
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{displayName}</p>
                  <p className="truncate text-xs text-white/50">{user?.email}</p>
                </div>
              )}
            </div>
            <div className={`flex gap-2 ${collapsed ? "flex-col" : "mt-3"}`}>
              <Link
                to="/profile"
                onClick={onClose}
                title="Profile"
                className={`flex items-center justify-center rounded-lg transition no-underline ${
                  collapsed ? "h-9 w-9" : "flex-1 gap-1.5 py-2"
                } ${
                  isActive("/profile")
                    ? "bg-treasure text-white"
                    : "bg-white/10 text-white/90 hover:bg-white/15"
                }`}
              >
                <HiOutlineUser className="h-4 w-4" />
                {!collapsed && (
                  <span className="text-xs font-semibold uppercase tracking-wide">Profile</span>
                )}
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                title="Sign out"
                className={`flex items-center justify-center rounded-lg bg-white/5 text-white/70 transition hover:bg-red-500/20 hover:text-red-200 ${
                  collapsed ? "h-9 w-9" : "px-3 py-2"
                }`}
              >
                <HiOutlineLogout className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <Link
            to="/sign-in"
            onClick={onClose}
            title="Sign in"
            className={`flex items-center justify-center rounded-xl bg-gradient-to-r from-treasure to-[#8b4f24] text-white no-underline shadow-lg transition hover:opacity-95 ${
              collapsed ? "h-11 w-full" : "gap-2 py-3.5 text-sm font-semibold uppercase tracking-wider"
            }`}
          >
            <HiOutlineLogin className="h-5 w-5" />
            {!collapsed && "Sign in"}
          </Link>
        )}
      </div>
    </aside>
  );
};

const Sidebar = () => {
  const { collapsed, mobileOpen, toggleCollapsed, closeMobile } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    closeMobile();
  }, [location.pathname, closeMobile]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-40 hidden transition-transform duration-300 lg:block ${
          collapsed ? "" : ""
        }`}
      >
        <SidebarPanel
          collapsed={collapsed}
          onToggleCollapsed={toggleCollapsed}
          isMobile={false}
        />
      </div>

      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-label="Close menu"
          onClick={closeMobile}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarPanel
          collapsed={false}
          onClose={closeMobile}
          onToggleCollapsed={toggleCollapsed}
          isMobile
        />
      </div>
    </>
  );
};

export default Sidebar;
