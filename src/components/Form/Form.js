const Form = ({ children, gap = 4, className }) => {
  return (
    <form method="post" className={`grid grid-cols-6 py-4 ${className}`} style={{ gap: `${gap / 4}rem` }}>
      {children}
    </form>
  );
};

export default Form;
