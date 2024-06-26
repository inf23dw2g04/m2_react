import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const baseURL = "http://localhost:8081"; // URL do backend

export default function App() {
  // Estados para as tabelas
  const [Users, setUsers] = useState([]);
  const [TaskCategories, setTaskCategories] = useState([]);
  const [TaskStatus, setTaskStatus] = useState([]);
  const [Tasks, setTasks] = useState([]);

  // Estados para novos registros
  const [newUsers, setNewUsers] = useState({ UserID: "", UserName: "", Email: "" });
  const [newTaskCategories, setNewTaskCategories] = useState({ CategoryID: "", CategoryName: "" });
  const [newTaskStatus, setNewTaskStatus] = useState({ StatusID: "", StatusName: "" });
  const [newTasks, setNewTasks] = useState({ TaskID: "", Title: "", Description: "", DueDate: "", UserID: "", CategoryID: "", StatusID: "" });

  const [newPutUsers, setNewPutUsers] = useState({ UserID: "", UserName: "", Email: "" });
  const [newPutTaskCategories, setNewPutTaskCategories] = useState({ CategoryID: "", CategoryName: "" });
  const [newPutTaskStatus, setNewPutTaskStatus] = useState({ StatusID: "", StatusName: "" });
  const [newPutTasks, setNewPutTasks] = useState({ TaskID: "", Title: "", Description: "", DueDate: "", UserID: "", CategoryID: "", StatusID: "" });

  // Funções CRUD para Users
  const fetchUsers = () => {
    axios.get(`${baseURL}/Users`).then(response => {
      setUsers(response.data);
    });
  };

  const createUsers = () => {
    axios.post(`${baseURL}/Users`, newUsers).then(() => {
      fetchUsers();
      setNewUsers({ UserID: "", UserName: "", Email: "" });

    });
  };

  const updateUsers = () => {
    const { UserID, UserName, Email } = newPutUsers;
    if (!UserID || !UserName || !Email) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Users/${UserID}`, { UserName, Email })
      .then(() => {
        fetchUsers();
        setNewPutUsers({ UserID: "", UserName: "", Email: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar o usuário!", error);
      });
  };

  const deleteUsers = (UserID) => {
    axios.delete(`${baseURL}/Users/${UserID}`).then(() => {
      fetchUsers();
    });
  };

  // Funções CRUD para TaskCategories
  const fetchTaskCategories = () => {
    axios.get(`${baseURL}/TaskCategories`).then(response => {
      setTaskCategories(response.data);
    });
  };

  const createTaskCategories = () => {
    axios.post(`${baseURL}/TaskCategories`, newTaskCategories).then(() => {
      fetchTaskCategories();
      setNewTaskCategories({ CategoryID: "", CategoryName: "" });
    });
  };


  const updateTaskCategories = () => {
    const { CategoryID, CategoryName } = newPutTaskCategories;
    if (!CategoryID || !CategoryName) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/TaskCategories/${CategoryID}`, { CategoryName })
      .then(() => {
        fetchTaskCategories();
        setNewPutTaskCategories({ CategoryID: "", CategoryName: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar TaskCategories!", error);
      });
  };

  const deleteTaskCategories = (CategoryID) => {
    axios.delete(`${baseURL}/TaskCategories/${CategoryID}`).then(() => {
      fetchTaskCategories();
    });
  };

  // Funções CRUD para TaskStatus
  const fetchTaskStatus = () => {
    axios.get(`${baseURL}/TaskStatus`).then(response => {
      setTaskStatus(response.data);
    });
  };

  const createTaskStatus = () => {
    axios.post(`${baseURL}/TaskStatus`, newTaskStatus).then(() => {
      fetchTaskStatus();
      setNewTaskStatus({ StatusID: "", StatusName: "" });
    });
  };

  const updateTaskStatus = () => {
    const { StatusID, StatusName } = newPutTaskStatus;
    if (!StatusID || !StatusName) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/TaskStatus/${StatusID}`, { StatusName })
      .then(() => {
        fetchTaskStatus();
        setNewPutTaskStatus({ StatusID: "", StatusName: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar o Status!", error);
      });
  };

  const deleteTaskStatus = (StatusID) => {
    axios.delete(`${baseURL}/Taskstatus/${StatusID}`).then(() => {
      fetchTaskStatus();
    });
  };

  // Funções CRUD para Tasks
  const fetchTasks = () => {
    axios.get(`${baseURL}/Tasks`).then(response => {
      setTasks(response.data);
    });
  };

  const createTasks = () => {
    axios.post(`${baseURL}/Tasks`, newTasks).then(() => {
      fetchTasks();
      setNewTasks({ TaskID: "", Title: "", Description: "", DueDate: "", UserID: "", CategoryID: "", StatusID: "" });
    });
  };

  const updateTasks = () => {
    const { TaskID ,Title, Description, DueDate, UserID, CategoryID, StatusID } = newPutTasks;
    if (!TaskID || !Title || !Description || !DueDate || !UserID || !CategoryID || !StatusID) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    axios.put(`${baseURL}/Tasks/${TaskID}`, { Title, Description, DueDate, UserID, CategoryID, StatusID })
      .then(() => {
        fetchTasks();
        setNewPutTasks({ TaskID: "", Title: "", Description: "", DueDate: "", UserID: "", CategoryID: "", StatusID: "" });
      })
      .catch(error => {
        console.error("Ocorreu um erro ao atualizar o Status!", error);
      });
  };

  const deleteTasks = (TaskID) => {
    axios.delete(`${baseURL}/Tasks/${TaskID}`).then(() => {
      fetchTasks();
    });
  };

  useEffect(() => {
    fetchUsers();
    fetchTaskCategories();
    fetchTaskStatus();
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Users.map(User => (
            <tr key={User.UserID}>
              <td>{User.UserID}</td>
              <td>{User.UserName}</td>
              <td>{User.Email}</td>
              <td>
                <button onClick={() => deleteUsers(User.UserID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Users</h3>
      <input
        placeholder="UserID"
        value={newUsers.UserID}
        onChange={e => setNewUsers({ ...newUsers, UserID: e.target.value })}
      />
      <input
        placeholder="UserName"
        value={newUsers.UserName}
        onChange={e => setNewUsers({ ...newUsers, UserName: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newUsers.Email}
        onChange={e => setNewUsers({ ...newUsers, Email: e.target.value })}
      />
      <button onClick={createUsers}>Create User</button>

      <h3>Update Users</h3>
      <input
        placeholder="UserID"
        value={newPutUsers.UserID}
        onChange={e => setNewPutUsers({ ...newPutUsers, UserID: e.target.value })}
      />
      <input
        placeholder="UserName"
        value={newPutUsers.UserName}
        onChange={e => setNewPutUsers({ ...newPutUsers, UserName: e.target.value })}
      />
      <input
        placeholder="Email"
        value={newPutUsers.Email}
        onChange={e => setNewPutUsers({ ...newPutUsers, Email: e.target.value })}
      />
      <button onClick={updateUsers}>Update User</button>

     
      <h2>TaskCategories</h2>
      <table>
        <thead>
          <tr>
            <th>CategoryID</th>
            <th>CategoryName</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {TaskCategories.map(category => (
            <tr key={category.CategoryID}>
              <td>{category.CategoryID}</td>
              <td>{category.CategoryName}</td>
              <td>
                <button onClick={() => deleteTaskCategories(category.CategoryID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create TaskCategories</h3>
      <input
        placeholder="CategoryID"
        value={newTaskCategories.CategoryID}
        onChange={e => setNewTaskCategories({ ...newTaskCategories, CategoryID: e.target.value })}
      />
      <input
        placeholder="CategoryName"
        value={newTaskCategories.CategoryName}
        onChange={e => setNewTaskCategories({ ...newTaskCategories, CategoryName: e.target.value })}
      />
      <button onClick={createTaskCategories}>create TaskCategory</button>

      <h3>Update TaskCategories</h3>
      <input
        placeholder="CategoryID"
        value={newPutTaskCategories.CategoryID}
        onChange={e => setNewPutTaskCategories({ ...newPutTaskCategories, CategoryID: e.target.value })}
      />
      <input
        placeholder="CategoryName"
        value={newPutTaskCategories.CategoryName}
        onChange={e => setNewPutTaskCategories({ ...newPutTaskCategories, CategoryName: e.target.value })}
      />
      <button onClick={updateTaskCategories}>Update TaskCategory</button>

      
      <h2>TaskStatus</h2>
      <table>
        <thead>
          <tr>
            <th>StatusID</th>
            <th>StatusName</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {TaskStatus.map(status => (
            <tr key={status.StatusID}>
              <td>{status.StatusID}</td>
              <td>{status.StatusName}</td>
              <td>
                <button onClick={() => deleteTaskStatus(status.StatusID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create TaskStatus</h3>
      <input
        placeholder="StatusID"
        value={newTaskStatus.StatusID}
        onChange={e => setNewTaskStatus({ ...newTaskStatus, StatusID: e.target.value })}
      />
      <input
        placeholder="StatusName"
        value={newTaskStatus.StatusName}
        onChange={e => setNewTaskStatus({ ...newTaskStatus, StatusName: e.target.value })}
      />
      <button onClick={createTaskStatus}>Create TaskStatus</button>

      <h3>Update TaskStatus</h3>
      <input
        placeholder="StatusID"
        value={newPutTaskStatus.StatusID}
        onChange={e => setNewPutTaskStatus({ ...newPutTaskStatus, StatusID: e.target.value })}
      />
      <input
        placeholder="StatusName"
        value={newPutTaskStatus.StatusName}
        onChange={e => setNewPutTaskStatus({ ...newPutTaskStatus, StatusName: e.target.value })}
      />
      <button onClick={updateTaskStatus}>Update TaskStatus</button>

      
      <h2>Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>TaskID</th>
            <th>Title</th>
            <th>Description</th>
            <th>DueDate</th>
            <th>UserID</th>
            <th>CategoryID</th>
            <th>StatusID</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Tasks.map(task => (
            <tr key={task.TaskID}>
              <td>{task.TaskID}</td>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
              <td>{task.DueDate}</td>
              <td>{task.UserID}</td>
              <td>{task.CategoryID}</td>
              <td>{task.StatusID}</td>
              <td>
                <button onClick={() => deleteTasks(task.TaskID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Create Tasks</h3>
      <input
        placeholder="TaskID"
        value={newTasks.TaskID}
        onChange={e => setNewTasks({ ...newTasks, TaskID: e.target.value })}
      />
      <input
        placeholder="Title"
        value={newTasks.Title}
        onChange={e => setNewTasks({ ...newTasks, Title: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newTasks.Description}
        onChange={e => setNewTasks({ ...newTasks, Description: e.target.value })}
      />
      <input
        placeholder="DueDate"
        type="date"
        value={newTasks.DueDate}
        onChange={e => setNewTasks({ ...newTasks, DueDate: e.target.value })}
      />
      <input
        placeholder="UserID"
        value={newTasks.UserID}
        onChange={e => setNewTasks({ ...newTasks, UserID: e.target.value })}
      />
      <input
        placeholder="CategoryID"
        value={newTasks.CategoryID}
        onChange={e => setNewTasks({ ...newTasks, CategoryID: e.target.value })}
      />
      <input
        placeholder="StatusID"
        value={newTasks.StatusID}
        onChange={e => setNewTasks({ ...newTasks, StatusID: e.target.value })}
      />
      <button onClick={createTasks}>Create Tasks</button>

      <h3>Update Tasks</h3>
      <input
        placeholder="TaskID"
        value={newPutTasks.TaskID}
        onChange={e => setNewPutTasks({ ...newPutTasks, TaskID: e.target.value })}
      />
      <input
        placeholder="Title"
        value={newPutTasks.Title}
        onChange={e => setNewPutTasks({ ...newPutTasks, Title: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newPutTasks.Description}
        onChange={e => setNewPutTasks({ ...newPutTasks, Description: e.target.value })}
      />
      <input
        placeholder="DueDate"
        type="date"
        value={newPutTasks.DueDate}
        onChange={e => setNewPutTasks({ ...newPutTasks, DueDate: e.target.value })}
      />
      <input
        placeholder="UserID"
        value={newPutTasks.UserID}
        onChange={e => setNewPutTasks({ ...newPutTasks, UserID: e.target.value })}
      />
      <input
        placeholder="CategoryID"
        value={newPutTasks.CategoryID}
        onChange={e => setNewPutTasks({ ...newPutTasks, CategoryID: e.target.value })}
      />
      <input
        placeholder="StatusID"
        value={newPutTasks.StatusID}
        onChange={e => setNewPutTasks({ ...newPutTasks, StatusID: e.target.value })}
      />
      <button onClick={updateTasks}>Update Tasks</button>
    </div>
  );
}
