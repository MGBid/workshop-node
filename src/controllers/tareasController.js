// Nuestra fuente de datos
let tareas = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: false },
  { id: 3, title: "Tarea 3", completed: false },
  { id: 4, title: "Tarea 4", completed: false },
  { id: 5, title: "Tarea 5", completed: false },
  { id: 6, title: "Tarea 6", completed: false },
];

const index = (req, res) => {
  res.render("index", { tareas });
};

const store = (req, res) => {
  const tarea = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };

  tareas.push(tarea);

  res.redirect("/");
};

module.exports = {
  index,
  store,
};
