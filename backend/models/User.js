//Bu kod, MongoDB veritabanında bir "Category" (Kategori) modelini tanımlar ve bu model üzerinden kategori verilerini yönetmeye olanak tanır.

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
     username: {type: String, required: true},
     email: {type: String, required: true},
     password: {type: String, required: true},
     role: {type: String, default: "user", enum: ["user", "admin"]}, // Kullanıcı rolü, varsayılan olarak "user" ve "admin" olabilir
     avatar: {type: String}
    },

    {timestamps: true} // Belge oluşturulma ve güncellenme tarihlerini otomatik olarak ekler
);

//Burada Category modeli, categorySchema şemasını kullanarak oluşturulur. Bu, MongoDB'de 'categories' adlı koleksiyonu temsil eder.
const User = mongoose.model('User', UserSchema);
module.exports = User;

