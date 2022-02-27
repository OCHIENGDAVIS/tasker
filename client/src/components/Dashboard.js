import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAllTasks } from '../actions';

const Dashboard = (props) => {
  useEffect(() => {
    props.getAllTasks();
  }, []);
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="w-full">
      <div className="w-3/4 m-auto">
        <h4 className="mb-6">All Tasks</h4>
        <hr />
        {props.tasks.tasks &&
          props.tasks.tasks.map((task) => (
            <div key={task.id} className="px-2 py-4 bg-gray-50 my-4">
              <h3 className="font-bold text-red-500">Task ID {task.id}</h3>
              <p className="py-2">
                personnel Attached:{' '}
                {` ${task.customer_first_name} ${task.personnel_other_name} `}
              </p>
              <p className="text-sm py-2">
                Customer Name:{' '}
                {`${task.customer_first_name} ${task.customer_last_name}`}
              </p>
            </div>
          ))}
        {props.tasks.tasks.length === 0 ? (
          <p className="mt-6 mb-4">No tasks assigned yet</p>
        ) : null}
        <hr />
      </div>
    </div>
  );
};

const mapStateToProps = ({ tasks }) => {
  return {
    tasks,
  };
};

export default connect(mapStateToProps, { getAllTasks })(Dashboard);
