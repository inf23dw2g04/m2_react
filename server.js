const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
  host: "database",
  User: "root",
  password: "1234",
  database: "api_tasks"
});

db.connect(err => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL");
});

// CRUD para a tabela Users
app.get("/Users", (req, res) => {
  db.query("SELECT * FROM Users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/Users", (req, res) => {
  const { UserID, UserName, Email } = req.body;
  sql.query("INSERT INTO Users (UserID, UserName, Email) VALUES (?, ?, ?)",
    [UserID, UserName, Email], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put("/Users/:UserID", (req, res) => {
  const { UserID } = req.params;
  const { UserName, Email } = req.body;
  db.query("UPDATE Users SET UserName = ?, Email = ? WHERE UserID = ?", [UserName, Email, UserID], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete("/Users/:UserID", (req, res) => {
  const { UserID } = req.params;
  db.query("DELETE FROM Users WHERE UserID = ?", [UserID], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// CRUD para a tabela TaskCategories
app.get("/TaskCategories", (req, res) => {
  db.query("SELECT * FROM TaskCategories", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/TaskCategories", (req, res) => {
  const { CategoryID, CategoryName } = req.body;
  db.query("INSERT INTO TaskCategories (CategoryID, CategoryName) VALUES (?, ?)", [CategoryID, CategoryName], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put("/TaskCategories/:CategoryID", (req, res) => {
  const { CategoryID } = req.params;
  const { CategoryName } = req.body;
  db.query("UPDATE TaskCategories SET CategoryName = ? WHERE CategoryID = ?", [CategoryName, CategoryID], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete("/TaskCategories/:CategoryID", (req, res) => {
  const { CategoryID } = req.params;
  db.query("DELETE FROM TaskCategories WHERE CategoryID = ?", [CategoryID], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// CRUD para a tabela TaskStatus
app.get("/TaskStatus", (req, res) => {
  db.query("SELECT * FROM TaskStatus", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/TaskStatus", (req, res) => {
  const { StatusID, StatusName } = req.body;
  db.query("INSERT INTO TaskStatus (StatusID, StatusName) VALUES (?, ?)", [StatusID, StatusName], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put("/TaskStatus/:StatusID", (req, res) => {
  const { StatusID } = req.params;
  const { StatusName } = req.body;
  db.query("UPDATE TaskStatus SET StatusName = ? WHERE StatusID = ?", [StatusName, StatusID], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.delete("/TaskStatus/:StatusID", (req, res) => {
  const { StatusID } = req.params;
  db.query("DELETE FROM TaskStatus WHERE StatusID = ?", [StatusID], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// CRUD para a tabela Tasks
app.get("/Tasks", (req, res) => {
  db.query("SELECT * FROM Tasks", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/Tasks", (req, res) => {
  const { TaskID, Title, Description, DueDate, UserID, CategoryID, StatusID } = req.body;
  db.query("INSERT INTO Tasks (TaskID, Title, Description, DueDate, UserID, CategoryID, StatusID) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [TaskID, Title, Description, DueDate, UserID, CategoryID, StatusID], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
});

app.put("/Tasks/:TaskID", (req, res) => {
  const { TaskID } = req.params;
  const { Title, Description, DueDate, UserID, CategoryID, StatusID } = req.body;
  db.query("UPDATE Tasks SET Title = ?, Description = ?, DueDate = ?, UserID = ?, CategoryID = ?, StatusID = ? WHERE TaskID = ?",
    [Title, Description, DueDate, UserID, CategoryID, StatusID, TaskID], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
});

app.delete("/Tasks/:TaskID", (req, res) => {
  const { TaskID } = req.params;
  db.query("DELETE FROM Tasks WHERE TaskID = ?", [TaskID], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
