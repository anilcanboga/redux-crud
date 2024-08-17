/*
 * Aksiyon nesnesi oluşturan fonksiyon
 * payload değeri dinamik olacağı için fonksiyonları tercih ettik
 * ve payload değerini parametre olarak aldık
 * Bu fonksiyonlar çağrıldığında bir aksiyon nesnesi dönderir
 * Bileşen içerisindeki dispatch alanındaki kodları kısaltıp daha okunabilir yapıyoruz.
 */

import actionTypes, { ADD } from "../actionType";

export const addTodo = (payload) => {
  return {
    type: actionTypes.ADD,
    payload: payload,
  };
};

export const deleteTodo = (payload) => ({
  type: actionTypes.DELETE,
  payload: payload,
});

export const updateTodo = (payload) => ({
  type: actionTypes.UPDATE,
  payload,
});

export const setTodos = (payload) => ({
  type: actionTypes.SET,
  payload,
});
