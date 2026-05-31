const AuthInput = ({ label, id, error, className = "", ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/70">
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded-xl border bg-[#faf9f7] px-4 py-3 text-ink outline-none transition placeholder:text-ink/30 focus:border-treasure focus:bg-white focus:ring-2 focus:ring-treasure/15 ${
          error ? "border-red-400" : "border-ink/10"
        }`}
        {...props}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default AuthInput;
