export default function Index() {
  return (
    <div className="flex h-screen  flex-col items-center justify-center gap-3 text-center">
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img
          src="/vite.svg"
          className="pointer-events-none h-[20vmin]"
          alt="Vite logo"
        />
      </a>
      <h1 className="text-3xl font-bold text-primary">
        Welcome to {import.meta.env.VITE_TITLE}
      </h1>
    </div>
  );
}
