import { Typography, Button } from "@mui/material";

function Todo({ todo, onDelete, onToggle }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Typography
        variant="h6"
        sx={{
          textDecoration: todo.completed
            ? "line-through"
            : "none",
        }}
      >
        {todo.text}
      </Typography>

      <Button
        variant="contained"
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed ? "Pending" : "Complete"}
      </Button>

      <Button
        variant="outlined"
        color="error"
        sx={{ ml: 1 }}
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default Todo;