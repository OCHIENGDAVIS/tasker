import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-100 flex px-6 py-4">
      <div>
        <Link to="/">Tasker App</Link>
      </div>
      <span className="flex-grow"></span>

      <div>
        <ul className="flex">
          <li className="px-6 ">
            <Link to="/login"> Login </Link>
          </li>
          <li className="px-6 ">
            <Link to="/register"> Register </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
