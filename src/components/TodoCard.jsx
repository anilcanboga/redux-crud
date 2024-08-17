import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/actions/todoAction";
import api from "../utils/api";
import Modal from "./Modal";
import { toast } from "react-toastify";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => alert("üzgünüz bir hata oluştu"));

    toast.error("Todo başarıyla silindi");
  };

  const toggleIsDone = () => {
    // is_done değeri mevcut değerin tersi olan yeni nesne oluşturur.
    const updated = { ...todo, is_done: !todo.is_done };
    api
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)))
      .catch(() => alert("üzgünüz bir hata oluştu"));
  };

  return (
    <div className="border rounded p-4 my-5 shadow-lg">
      <h5>{todo.text}</h5>
      {""}
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
        Düzenle
      </button>
      <button className="btn btn-success mx-3" onClick={toggleIsDone}>
        {todo.is_done ? "Geri Al" : "Tamamla"}{" "}
      </button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
