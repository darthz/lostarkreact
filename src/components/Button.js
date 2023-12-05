export const Button = ({ children, onClick, color }) => {
  return (
    <button onClick={onClick} color={color}>
      {children}
    </button>
  );
};
