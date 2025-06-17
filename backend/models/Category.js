//Bu kod, MongoDB veritabanında bir "Category" (Kategori) modelini tanımlar ve bu model üzerinden kategori verilerini yönetmeye olanak tanır.

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
     name: {type: String, required: true},
     img: {type: String, required: true},
    },

    {timestamps: true} // Belge oluşturulma ve güncellenme tarihlerini otomatik olarak ekler
);

//Burada Category modeli, categorySchema şemasını kullanarak oluşturulur. Bu, MongoDB'de 'categories' adlı koleksiyonu temsil eder.
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;

