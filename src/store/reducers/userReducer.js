const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (
    action.type // gönderilen action'un type'ını alıyoruz.
  ) {
    case "EKLE":
      return state;
    case "ÇIKAR":
      return state;

    default: // gönderilen yapıyla uyuşmayan bir yapı varsa dışarıya gönderiyor.
      return state;
  }
};

// data yani state yapısı, gönderilen emirler dispatch ile gönderdiğimiz emirler action.
// REDUX'ta başlangıç değerini state ile belirtiyoruz, yani initialState olarak yazıyoruz.

export default userReducer;

// Redux'ta reducer'ları kendimiz oluşturuyoruz. Reducer fonksiyonu oluşturarak kendimiz yazıyoruz.
