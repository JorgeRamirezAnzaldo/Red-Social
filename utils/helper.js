//Import dayjs
const dayjs = require ('dayjs');
//Import advancedFormat plugin
var AdvancedFormat = require('dayjs/plugin/advancedFormat')
//Extend dayjs with AdvancedFormat
dayjs.extend(AdvancedFormat);

module.exports = { //Export funtion
    format_date: (date) => { //Method to format the date
        return dayjs(date).format("MMM Do, YYYY [at] hh:mm a");
      },
};