function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.done ? "done" : ""}>
          <div>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggle(index)}
            />
            {task.text}
          </div>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
