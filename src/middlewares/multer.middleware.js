import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
});



//  /media/kuldeep/HDD2/NODEJS/aditya-test/public/uploads/bg1.jpg
//  /media/kuldeep/HDD2/NODEJS/aditya-test/public/uploads