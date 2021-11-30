const {parsePhoneNumber, isPossiblePhoneNumber} = require('libphonenumber-js')

exports.formatPhoneNumber = (phoneNumber, throwError = true) => {
    phoneNumber = phoneNumber.toString()
    if (!isPossiblePhoneNumber(phoneNumber, 'ET')) {
        if (throwError) throw new Error('InvalidPhoneNumber')
        else return
    }
    let {number} = parsePhoneNumber(phoneNumber, 'ET')
    return number
}