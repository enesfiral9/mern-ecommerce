const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();
const logger = require("morgan");
const mainRoute = require("./routes/index.js"); // Ana rota dosyasını içe aktar
const port = 3000;

dotenv.config(); // .env dosyasını yükle

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB'ye başarıyla bağlanıldı!");
    } catch (error) {
        throw error;
        
    }
}

/// Middleware
app.use(logger("dev")); // Geliştirme ortamında istekleri loglamak için morgan kullan
app.use(express.json());


app.use("/api", mainRoute); // Ana rota ile "/api" yolunu ilişkilendir
    app.listen(port, () => {
    connect();
    console.log(`Sunucu ${port} portunda çalışıyor.`);
    });