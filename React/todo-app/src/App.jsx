import "./App.css";
import { useState } from "react";

import {
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function App() {
  const today = dayjs().format("YYYY-MM-DD");

  const [task, setTask] = useState("");
  const [date, setDate] = useState(dayjs());

  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState("");

  const [todos, setTodos] = useState(() => {
    const storedTodos =
      JSON.parse(localStorage.getItem("todayTasks")) || [];

    return storedTodos.filter(
      (todo) => todo.date === today
    );
  });

  const addTodo = () => {
    if (!task.trim()) {
      alert("Please enter a task");
      return;
    }

    const selectedDate = date.format("YYYY-MM-DD");

    if (selectedDate < today) {
      alert("Past dates are not allowed");
      return;
    }

    const newTodo = {
      id: Date.now(),
      task,
      date: selectedDate,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);

    localStorage.setItem(
      "todayTasks",
      JSON.stringify(updatedTodos)
    );

    setTask("");
    setDate(dayjs());
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(
      (todo) => todo.id !== id
    );

    setTodos(updatedTodos);

    localStorage.setItem(
      "todayTasks",
      JSON.stringify(updatedTodos)
    );
  };

  const toggleStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );

    setTodos(updatedTodos);

    localStorage.setItem(
      "todayTasks",
      JSON.stringify(updatedTodos)
    );
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditTask(todo.task);
  };

  const saveEdit = (id) => {
    if (!editTask.trim()) {
      alert("Task cannot be empty");
      return;
    }

    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            task: editTask,
          }
        : todo
    );

    setTodos(updatedTodos);

    localStorage.setItem(
      "todayTasks",
      JSON.stringify(updatedTodos)
    );

    setEditId(null);
    setEditTask("");
    setEditDate("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        <u>TODO APP</u>
      </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
        <TextField
          label="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{ minWidth: "300px" }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            minDate={dayjs()}
          />
        </LocalizationProvider>

        <Button
          variant="contained"
          onClick={addTodo}
          sx={{ height: "56px" }}
        >
          Add Task
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>ID</b>
              </TableCell>

              <TableCell>
                <b>Task</b>
              </TableCell>

              <TableCell>
                <b>Date</b>
              </TableCell>

              <TableCell>
                <b>Status</b>
              </TableCell>

              <TableCell>
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <TableRow key={todo.id}>
                  <TableCell>
                    {index + 1}
                  </TableCell>

                  <TableCell>
                    {editId === todo.id ? (
                      <TextField
                        size="small"
                        value={editTask}
                        onChange={(e) =>
                          setEditTask(e.target.value)
                        }
                      />
                    ) : (
                      todo.task
                    )}
                  </TableCell>

                  <TableCell>
                    {todo.date}
                  </TableCell>

                  <TableCell>
                    {todo.completed
                      ? "Completed"
                      : "Pending"}
                  </TableCell>

                  <TableCell>
                    {editId === todo.id ? (
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() =>
                          saveEdit(todo.id)
                        }
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="warning"
                        size="small"
                        onClick={() =>
                          startEdit(todo)
                        }
                      >
                        Edit
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      size="small"
                      sx={{ ml: 1 }}
                      onClick={() =>
                        toggleStatus(todo.id)
                      }
                    >
                      {todo.completed
                        ? "Pending"
                        : "Completed"}
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{ ml: 1 }}
                      onClick={() =>
                        deleteTodo(todo.id)
                      }
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                >
                  No Tasks Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;