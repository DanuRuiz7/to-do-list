import { useState } from "react";
import "./Form.css";

const inicial = {
  id: null,
  nombre: "",
};

const ListaTarea = () => {
  const [list, setList] = useState([]);
  const [form, setForm] = useState(inicial);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      form.id = Date.now();

      setList([...list, form]);
    } else {
      let listEdit = list.map((el) => (el.id === form.id ? form : el));
      console.log(listEdit);

      setList(listEdit);
    }
    setForm(inicial);
  };

  const handleEdit = (el) => {
    const infoEdit = list.find((tarea) => tarea.id === el.id);

    console.log(infoEdit);
    setForm(infoEdit);
  };

  const handleDelete = (id) => {
    const newlist = list.filter((el) => el.id !== id);
    setList(newlist);
  };

  // const show = () => {
  //   console.log(list);
  // };
  return (
    <main>
      <h1>List</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Agrega tus tareas"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <input type="submit" value="Agregar" />
      </form>
      {list.map((el) => (
        <li key={el.id}>
          {el.nombre}
          <div className="btns">
            <button className="btnE" onClick={() => handleEdit(el)}>
              Edit
            </button>
            <button className="btnD" onClick={() => handleDelete(el.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}

      {/* <button onClick={show}>Show</button> */}
    </main>
  );
};

export default ListaTarea;
