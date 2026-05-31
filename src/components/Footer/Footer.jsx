import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const social = [
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: IoLogoFacebook, label: "Facebook" },
    { Icon: IoLogoYoutube, label: "YouTube" },
    { Icon: BsLinkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-navy to-[#001228] text-white">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 48px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-10 border-b border-white/10 pb-12 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <p className="font-ysabeau text-xs uppercase tracking-[0.3em] text-club-gold">
              Treasure Yacht Group
            </p>
            <h2 className="mt-3 font-playfair text-3xl font-bold italic leading-tight sm:text-4xl">
              Continue to go beyond, with us
            </h2>
          </div>

          <div className="flex gap-4">
            {social.map(({ Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-club-gold transition hover:border-club-gold/50 hover:bg-treasure/20 hover:text-white"
              >
                <Icon className="h-6 w-6" />
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Treasure Yacht Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
