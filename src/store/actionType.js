// Projede kullanılan aksiyon tipleri string şekilde tanımlandığından dikkat dağınıklı sonucu oluşabilecek ve tespit etmesi zaman alabilecek hataların önüne geçmek için tipleri bir nesne içerisinde tanımlarız.

// OTOMATİK ACTİON TANIMLAMA YÖNTEMLERİ

// 1. Yöntem
const actionTypes = {
  ADD: "ADD", // alt alta bir sürü action tanımlayabiliriz.
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  SET: "SET",
};
export default actionTypes; // hepsini tek seferde export edebiliriz.

// 2. Yöntem
export const ADD = "ADD"; // bu yönetmde tek tek yapıyoruz.
