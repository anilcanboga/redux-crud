/*
 * store oluşturma
 * 1. redux kütüphanesinden 'createStore' methodu import edilir.
 * 2. store içerisinde tutulacak olan her bir veri için reducerlar oluşturulur.
 * 3. oluşturulan reducerlar 'combineReducers' ile birleştirilir.
 * 4. Stora'a birleştirilen reducerlar tanıtılır.
 */

import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";

// birden fazla REDUCER varsa bunları birleştiriyoruz. Sonrasında STORE'a gönderiyoruz.

const rootReducer = combineReducers({
  // 1.adım : birden fazla olan reducerları combineReducer ile birleştiriyoruz. sonrasında const ile bir isim vererek değişkene aktarıyoruz.
  userReducer,
  todoReducer,
});

//* store oluşturulur.
const store = createStore(rootReducer); // 2. adım: oluşturduğumuz combineReducer'ı değişken adı olan ROOTREDUCER adıyla createStora'a gönderiyoruz.

export default store; // projeyi tanıtmak için export ediyoruz.

// PROJEYE TANITIRKEN
// main.jsx dosyasında bulunan app.jsx dosyasını sarmalamamız gerekir. bunu yaparken de PROVIDER kullanıyoruz.
