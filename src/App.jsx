import { useEffect } from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import api from "./utils/api";
import { useDispatch } from "react-redux";
import { setTodos } from "./store/actions/todoAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/todos").then((res) => dispatch(setTodos(res.data)));
  }, []);

  return (
    <div className="vh-100 bg-dark vw-100 text-white">
      <div className="container p-5">
        <h2 className="text-center">
          <span className="text-warning"> REDUX </span> CRUD{" "}
        </h2>

        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
}

export default App;
