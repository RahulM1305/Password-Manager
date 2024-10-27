import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-between items-center px-4 h-14 ">
      <div className="logo font-bold">PassOP</div>
      <ul>
        <li className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">COntact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
