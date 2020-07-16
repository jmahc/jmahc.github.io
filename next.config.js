// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  // Original
  // assetPrefix: !debug ? '/jmahc.github.io/' : '',
  assetPrefix: '',
  env: {
    BIRTHDATE: process.env.BIRTHDATE,
    COMPANY_NAME: process.env.COMPANY_NAME,
    CURRENT_LOCATION: process.env.CURRENT_LOCATION,
    COMPANY_POSITION: process.env.COMPANY_POSITION,
    FAVORITE_LANGUAGES_1: process.env.FAVORITE_LANGUAGES_1,
    FAVORITE_LANGUAGES_2: process.env.FAVORITE_LANGUAGES_2,
    LEARNING_CURRENTLY: process.env.LEARNING_CURRENTLY,
    LEARNING_NEXT: process.env.LEARNING_NEXT,
    NAME_FIRST: process.env.NAME_FIRST,
    NAME_LAST: process.env.NAME_LAST,
    TRAVEL_DESTINATION_PREV: process.env.TRAVEL_DESTINATION_PREV,
    TRAVEL_DESTINATION_NEXT: process.env.TRAVEL_DESTINATION_NEXT,
    UNIVERSITY: process.env.UNIVERSITY,
    WORK_STARTDATE: process.env.WORK_STARTDATE,
  },
}
