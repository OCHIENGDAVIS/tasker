import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-3/4 m-auto text-center">
        <h1 className="text-4xl font-semibold">
          Welcome to the Task Schedular Application
        </h1>
        <p>
          <span className="text-blue-800">
            <Link to="/login"> Login</Link> or
          </span>
          <span className="text-blue-800">
            <Link to="/register"> Register </Link>
          </span>
          to see the tasks assigned to you
        </p>
      </div>
    </div>
  );
};

export default Home;
