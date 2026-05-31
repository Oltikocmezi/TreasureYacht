import React from "react";
import { Link } from "react-router-dom";
import Boat from "../../assets/img/Videos/Boat.mp4";
import logo from "../../assets/img/Icons/icons8-ship-wheel-101.png";

const AuthLayout = ({ title, subtitle, children, footer }) => {
  return (
    <div className="flex min-h-screen">
      {/* Brand panel */}
      <div className="relative hidden w-[44%] overflow-hidden lg:flex lg:flex-col lg:justify-between">
        <video
          src={Boat}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-[#001228]/90" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-12deg, transparent, transparent 40px, #fff 40px, #fff 41px)",
          }}
        />

        <div className="relative z-10 p-12">
          <Link to="/Home" className="inline-flex items-center gap-3 no-underline">
            <img
              src={logo}
              alt=""
              className="h-14 w-14 rounded-full border border-club-gold/50 bg-white/10 p-1.5"
            />
            <span className="font-dancing text-4xl text-club-gold">Treasure Yacht</span>
          </Link>
        </div>

        <div className="relative z-10 p-12">
          <p className="font-ysabeau text-xs uppercase tracking-[0.35em] text-club-gold/80">
            Est. Mediterranean
          </p>
          <h2 className="mt-4 max-w-sm font-playfair text-4xl font-bold italic leading-tight text-white">
            Where luxury meets the open sea
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Join an exclusive community of yacht enthusiasts, curated events, and bespoke
            experiences.
          </p>
        </div>

        <div className="relative z-10 border-t border-white/10 p-12">
          <p className="text-xs text-white/40">
            © Treasure Yacht Group — Crafted for discerning members
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 flex-col bg-[#f8f6f3]">
        <div className="flex items-center justify-between border-b border-ink/5 bg-white px-6 py-4 lg:hidden">
          <Link to="/Home" className="flex items-center gap-2 no-underline">
            <img src={logo} alt="" className="h-9 w-9" />
            <span className="font-dancing text-2xl text-treasure">Treasure Yacht</span>
          </Link>
          <Link
            to="/Home"
            className="text-xs font-semibold uppercase tracking-wider text-navy/50 no-underline hover:text-treasure"
          >
            Home
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="font-ysabeau text-xs uppercase tracking-[0.25em] text-treasure">
                Member access
              </p>
              <h1 className="mt-2 font-playfair text-3xl font-bold italic text-navy sm:text-4xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{subtitle}</p>
              )}
            </div>

            <div className="rounded-2xl border border-ink/8 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(0,33,77,0.12)]">
              {children}
            </div>

            {footer && <div className="mt-6 text-center text-sm text-ink/60">{footer}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
