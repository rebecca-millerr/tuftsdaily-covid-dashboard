const router = require('express').Router();
const SheetsCtrl = require('../controllers/sheets-ctrl');

router.get('/sheet', SheetsCtrl.getSheetData);

module.exports = router;