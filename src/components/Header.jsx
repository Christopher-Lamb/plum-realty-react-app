const Header = ({ children }) => {
  return (
    <header className="h-100 md:h-150 flex items-end px-4 xl:pl-0 w-full xl:w-10/12 2xl:w-8/12 mx-auto">
      <h1 className="text-36 md:text-48  xl:text-56" style={{ fontFamily: "'Roboto Slab', sans-serif" }}>
        {children}
      </h1>
    </header>
  );
};

export default Header;
