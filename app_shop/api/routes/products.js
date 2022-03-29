const express = require("express")
const router = express.Router()
//import kontolery
const ProductsController = require("../controllers/products")

const auth = require('../middleware/auth')

//ladowanie plikow
const multer  = require('multer')

//zmiana miejsca przechowywania plików i nazwy
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/') //tu zmiana katalogu
    },
    filename: function (req, file, cb) {
      cb(null,new Date().toISOString().replace(":","_").replace(":","_") + file.originalname) //tu zmiana nazwy
    }
  })
//filtracja plikow - akceptacja jedynie jpg
function fileFilter (req, file, cb) {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null,true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, limits:{
    fileSize: 1024*1024*5,
}, 
    fileFilter: fileFilter,
})

router.get('/', ProductsController.products_get_all)

router.post('/', upload.single('productImage'), auth, ProductsController.products_add_new)

router.get("/:id", ProductsController.products_get_by_id)

router.put("/:id", auth, ProductsController.products_change)

router.delete("/:id", auth, ProductsController.products_remove)

// :- wartosc, zmienna
module.exports = router