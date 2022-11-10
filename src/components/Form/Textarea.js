const Textarea = ({ label, placeholder, name, required = false }) => {
  return (
    <div className={`grid w-full col-span-6 `}>
      <label htmlFor={name} className="tracking-wide">
        {label}
        {required && <span style={{ color: "rgb(233, 0, 0)" }}>&nbsp;*</span>}
      </label>

      <textarea className="h-200 lg2:h-full border shadow-inner w-full resize-veritcal" name={name} placeholder={placeholder}>
      </textarea>
    </div>
  );
};

export default Textarea;
