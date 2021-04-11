const GSheetReader = require('g-sheets-api');
const options = require('../utils/sheetOptions');

const getSheetData = async (req, res) => {
    GSheetReader(
        options,
        results => res.status(200).json({ data: results }))
            .catch(err => {
                console.log(err) // TODO: fix this - surface errors
        });
}

module.exports = {
    getSheetData
}