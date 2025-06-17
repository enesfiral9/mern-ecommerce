const express = require('express');
const router = express.Router();
const Category = require("../models/Category.js")

// START Yeni bir kategori oluşturma
router.post("/", async (req, res) => {
   try {
        const {name,img} = req.body;

        const newCategory = new Category({name, img });
        await newCategory.save();
        console.log("Kategori eklendi");
         //Kategoriler eklendiğinde 201 status kodu döndürülür
         
        res.status(201).json(newCategory);
    } catch (error) {
      console.log(error);
    }
});
// END Yeni bir kategori oluşturma

// START Tüm kategoriler getirme (Read All) 
 router.get("/", async (req, res) => {
    try {
      const categories = await Category.find();

      res.status(200).json(categories);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ erros: "Sunucu hatası" });
    }
 }
);
// END Tüm kategoriler getirme (Read All) 

//START Belirli bir kategoriyi getirme (Read Single)
router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    try {
      const category = await Category.findById(categoryId);

      res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(404).json({ error: "Category not found." });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
// END Belirli bir kategoriyi getirme (Read Single)

// START Kategori güncelleme (Update)
router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updates = req.body;

    const existingCategory = await Category.findById(categoryId);
    if (!existingCategory) {
      return res.status(404).json({ error: "Category not found." });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
       updates,
       {new: true}// Güncellenmiş belgeyi döndür
      );

      res.status(200).json(updatedCategory);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
})
// END Kategori güncelleme (Update)

// START Kategori silme (Delete)
router.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found." });
    }
    res.status(200).json(deletedCategory)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
})

// END Kategori silme (Delete)
module.exports = router;