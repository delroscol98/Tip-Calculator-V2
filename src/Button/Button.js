const Button = ({ className, value, id, onClick, children, disabled }) => {
  return (
    <button
      className={className}
      value={value}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
