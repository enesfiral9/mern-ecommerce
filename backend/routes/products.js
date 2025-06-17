const express = require('express');
const router = express.Router();
const Product = require("../models/Product.js")

// Yeni bir ürün oluşturma (Create)
router.post("/", async (req, res) => {
   try {
       
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);

    } catch (error) {
      console.log(error);
    }
});

// Tüm ürünleri getirme (Read All)
router.get("/", async (req, res) => {
    try {
      const products = await Product.find();

      res.status(200).json(products);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ erros: "Sunucu hatası" });
    }
 }
);

//START Belirli bir ürünü getirme (Read Single)
router.get("/:productId", async (req, res) => {
  
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ error: "product not found." });
    }

     res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
// END Belirli bir ürünü getirme (Read Single)

// START Ürün güncelleme (Update)
router.put("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;

    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
       updates,
       {new: true}// Güncellenmiş belgeyi döndür
      );

      res.status(200).json(updatedProduct);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
})
// END Ürün güncelleme (Update)

// START Ürün silme (Delete)
router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// END Ürün silme (Delete)

module.exports = router;
