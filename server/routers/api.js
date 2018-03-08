const { rootPrefix } = global;
const { Router } = require('express');
const router = Router();
const apiCtrl = require('../controllers/api');
const adminCtrl = require('../controllers/api/admin');
const userCtrl = require('../controllers/api/user');
const upload = require('../configs/upload');
const deserializeAdmin = require(`${rootPrefix}/middlewares/deserializeAdmin`);
const deserializeUser = require(`${rootPrefix}/middlewares/deserializeUser`);


// Demo
router.get('/', apiCtrl.hello);
router.post('/upload', upload.single('avatar'), apiCtrl.demoUpload);
router.post('/admin/login', adminCtrl.login);
router.get('/admin/logout', deserializeAdmin, adminCtrl.logout);
router.route('/admin')
	.get(deserializeAdmin, adminCtrl.getInformation);

router.route('/user')
	.get(deserializeUser, deserializeAdmin, userCtrl.getInformation);

router.post('/user/login', userCtrl.login);
router.get('/user/logout', deserializeUser, userCtrl.logout);


router.get('/admin/testImg', adminCtrl.testImg);


module.exports = router;
