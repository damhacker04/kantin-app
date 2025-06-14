const FormInput = ({ 
  name, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  className, 
  required 
}) => {
  return (
    <input
      name={name} // ⬅️ ini yang KRUSIAL buat handleChange jalan
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required={required}
    />
  );
};

export default FormInput;
