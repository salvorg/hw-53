import React from 'react';

interface TaskProps extends React.PropsWithChildren {
  text: string;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
};

export default Task;