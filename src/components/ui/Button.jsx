import React from "react";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-gradient-to-r from-treasure to-[#8b4f24] text-white shadow-lg shadow-treasure/20 hover:brightness-105 hover:shadow-xl",
  secondary:
    "border border-navy/15 bg-white text-navy hover:border-treasure/40 hover:bg-treasure/5",
  navy: "bg-navy text-white hover:bg-[#001a3d] shadow-lg shadow-navy/20",
  ghost: "bg-white/10 text-white hover:bg-white/15 border border-white/10",
  outline:
    "border-2 border-club-gold/60 bg-transparent text-white hover:bg-club-gold/10 hover:border-club-gold",
};

const sizes = {
  sm: "px-4 py-2 text-xs tracking-[0.12em]",
  md: "px-6 py-3 text-sm tracking-[0.15em]",
  lg: "px-8 py-3.5 text-sm tracking-[0.18em]",
};

const Button = ({
  as,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold uppercase no-underline transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  const Component = as || "button";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Button;
