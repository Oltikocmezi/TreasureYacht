const AuthAlert = ({ type = "error", message }) => {
  if (!message) return null;

  const styles =
    type === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-red-200 bg-red-50 text-red-800";

  return (
    <div
      className={`mb-5 rounded-xl border px-4 py-3 text-sm leading-relaxed ${styles}`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default AuthAlert;
