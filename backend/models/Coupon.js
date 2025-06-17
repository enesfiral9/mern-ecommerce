//Bu kod, MongoDB veritabanında bir "Category" (Kategori) modelini tanımlar ve bu model üzerinden kategori verilerini yönetmeye olanak tanır.

const mongoose = require('mongoose');

const CouponSchema = mongoose.Schema(
    {
     code: {type: String, required: true}, // Kupon kodu
     discoundPercent: {type: Number, required: true}, // İndirim oranı
    },

    {timestamps: true} // Belge oluşturulma ve güncellenme tarihlerini otomatik olarak ekler
);

//Burada Category modeli, categorySchema şemasını kullanarak oluşturulur. Bu, MongoDB'de 'categories' adlı koleksiyonu temsil eder.
const Coupon = mongoose.model('Coupon', CouponSchema);
module.exports = Coupon;

