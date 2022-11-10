
const Input = ({ label, placeholder, name, required = false, className, hidden = false, value }) => {

  return (
    <>
      {!hidden ? (
        <div className={`grid w-full ${className}`}>
          <label htmlFor={name} className="tracking-wide">
            {label}
            {required && <span style={{ color: "rgb(233, 0, 0)" }}>&nbsp;*</span>}
          </label>

          <input className="h-8 lg2:h-full border shadow-inner w-full" name={name} placeholder={placeholder} />
        </div>
      ) : (
        <input type="hidden" name={name} value={value} />
      )}
    </>
  );
};

export default Input;
