import { Link } from "react-router-dom";

function MainNavigator() {
  return (
    <header className="bg-slate-400 ">
      <nav>
        <ul className="flex items-center justify-start space-x-4 py-4 px-4 border-4 border-spacing-2">
          <li className="text-white font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white font-bold">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigator;
