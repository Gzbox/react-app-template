const LogoContent = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      className="flex  items-center justify-center gap-3 text-center"
      onClick={onClick}
    >
      <img src={import.meta.env.VITE_FAVICON} alt="logo" className="w-8 h-8" />
      <h1 className="font-bold text-lg">{import.meta.env.VITE_TITLE}</h1>
    </div>
  );
};

export default LogoContent;
