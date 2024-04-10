const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a className="text-white text-2xl font-bold">AnimeLand</a>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-300">Home</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">About</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Work</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
