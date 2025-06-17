const express = require('express');
const router = express.Router();
const Coupon = require("../models/Coupon.js")

// START Yeni bir kupon oluşturma
router.post("/", async (req, res) => {
   try {
    const {code} = req.body;

    const existingCoupon = await Coupon.findOne({ code });
    if (existingCoupon) {
        return res.status(400).json({ error: "Bu kupon kodu zaten var." });
    }

        const newCoupon = new Coupon(req.body);

        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erros: "Sunucu hatası" });
    }
});
// END Yeni bir kupon oluşturma

// START Tüm kuponları getirme (Read All) 
 router.get("/", async (req, res) => {
    try {
      const coupons = await Coupon.find();

      res.status(200).json(coupons);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ erros: "Sunucu hatası" });
    }
 }
);
// END Tüm kuponları getirme (Read All)

//START Belirli bir kuponu getirme (Read Single By Coupon Id)
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    
      const coupon = await Coupon.findById(couponId);
        if (!coupon) {
            return res.status(404).json({ error: "Coupon not found." });
        }

      res.status(200).json(coupon);
       
      
      res.status(404).json({ error: "Coupon not found." });
     
    
  }catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
// END Belirli bir kuponu getirme (Read Single ıdye göre getirme)

// START Belirli bir kuponu getirme (Read Single Kupon koduna göre)
router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;

    
      const coupon = await Coupon.findOne({ code: couponCode });
        if (!coupon) {
            return res.status(404).json({ error: "Coupon not found." });
        }

      res.status(200).json(coupon);
       
      
      res.status(404).json({ error: "Coupon not found." });
     
    
  }catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});
// END Belirli bir kuponu getirme (Read Single Kupon koduna göre)

// START Kupon güncelleme (Update)


// START Kupon güncelleme (Update)
router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;

    const existingCoupon = await Coupon.findById(couponId);
    if (!existingCoupon) {
      return res.status(404).json({ error: "Category not found." });
    }

    const updatedCoupon = await Coupon.findByIdAndUpdate(
      couponId,
       updates,
       {new: true}// Güncellenmiş belgeyi döndür
      );

      return res.status(200).json(updatedCoupon);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
})
// END Kupon güncelleme (Update)


// START Kupon silme (Delete)
router.delete("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

    if (!deletedCoupon) {
      return res.status(404).json({ error: "Category not found." });
    }
    res.status(200).json(deletedCoupon)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
})

// END Kupon silme (Delete)

module.exports = router;