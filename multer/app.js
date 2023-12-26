const express = require('express');
const multer = require('multer');

const app = express();
const port = 5001;

const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.svg'];
    const fileExtension = file.originalname.slice(file.originalname.lastIndexOf('.'));
    const isAllowedExtension = allowedExtensions.includes(fileExtension.toLowerCase());

    if (isAllowedExtension) {
      cb(null, true);
    } else {
      cb(new Error('Недопустимое расширение файла'));
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).json({ message: 'Файл успешно загружен' });
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Node Multer is running on port: ${port}`);
});
