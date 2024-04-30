const GrayBackgroundText = ({ children, text }) => {
  return (
    <div className="bg-primary-blue text-white py-2 px-4 text-left rounded-sm">
      {text}
      {children}
    </div>
  );
};

export default GrayBackgroundText;
