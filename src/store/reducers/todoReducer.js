import actionTypes from "../actionType";

/*

!reducer 
* State'in nasıl değişeceğine karar verir.
* reducer normal bir fonksiyondur.
* bu fonksiyon iki parametre alır:
* 1. state : reducer da tutulan verilerin son durumudur.
* 2. action : verilerin nasıl değişceğini ifade eden nesnedir.

* useReducer 'dan farklı olarak initialState'i state parametresine varsayılan değer olarak veririz.

* 

*/

//3. adım : başlangıç state'i oluşturuarak, tanımlıyoruz.
const initialState = {
  todos: [], // başlangıçta boş tanımlıyoruz todos dizimizi.
  isDarkMode: true,
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  // aksiyonun type 'ına göre gerekli güncellemeyi yap.

  switch (action.type) {
    // eğer ADD aksiyonu çalışırsa:
    case actionTypes.ADD:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case actionTypes.DELETE:
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      // Reducer'da tutulan todos değerini güncelle
      return { ...state, todos: filtred };
    case actionTypes.UPDATE:
      // Toddos dizisini map ile dön. içerisindeki her bir verinin id'si ile benim tıkladığım todonun id'si eşit ise yerine action'dan gelen payloadı koy, değilse eski halinde döndür.
      const updateArr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, todos: updateArr };

    case actionTypes.SET:
      return { ...state, todos: action.payload };
  }
  return state;
}; // 1. adım: bir tane todoReducer oluşturup, fonksiyonu oluşturuyoruz. todoReducer içini tanımlamazsak hata alırız.

export default todoReducer; // 2. adım : fonksiyonu dışarıya export ediyoruz.
