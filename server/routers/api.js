const { Router } = require('express');
const apiCtrl = require('../controllers/api');
const adminCtl = require('../controllers/api/admin');
const upload = require('../configs/upload');

const router = Router();

// Demo
router.get('/', apiCtrl.hello);
router.post('/upload', upload.single('avatar'), apiCtrl.demoUpload);
router.post('/admin/login', adminCtl.login);
router.get('/admin/logout', adminCtl.logout);

router.get('/admin/testImg', adminCtl.testImg);

module.exports = router;
