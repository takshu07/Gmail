function EmailSection({ Icon, title, selected, color, className = "" }) {
  return (
    <div
      className={`flex items-center  px-1 py-2 cursor-pointer border-b border-solid ${className}`}
      style={{
        borderColor: selected ? color : "#ccc",  
        color: color,                             
      }}
    >
      <Icon />
      <h4 className="font-medium">{title}</h4>
    </div>
  );
}

export default EmailSection;
