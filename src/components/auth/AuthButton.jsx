import Button from "../ui/Button";

const AuthButton = ({ children, variant = "primary", className = "", ...props }) => (
  <Button
    as="button"
    type="submit"
    variant={variant}
    size="lg"
    className={`w-full ${className}`}
    {...props}
  >
    {children}
  </Button>
);

export default AuthButton;
