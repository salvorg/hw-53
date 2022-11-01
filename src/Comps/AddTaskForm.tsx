import React from 'react';

interface TaskFormProps extends React.PropsWithChildren {
  inputName: string;
  btnName: string;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
  onClickChange: React.MouseEventHandler<HTMLButtonElement>;
}

const AddTaskForm: React.FC<TaskFormProps> = (props) => {
  return (
    <div>
      <form className="input-form">
        <input value={props.inputName} onChange={props.onNameChange}/>
        <button onClick={props.onClickChange}>{props.btnName}</button>
      </form>
    </div>
  );
};

export default AddTaskForm;