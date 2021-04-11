const GSheetReader = require('g-sheets-api');
const options = require('./options');

const getSheetData = () => {
    GSheetReader(
        options,
        results => results)
            .catch(err => {
            console.log(err) // TODO: fix this - surface errors
        });
}

module.exports = getSheetData;