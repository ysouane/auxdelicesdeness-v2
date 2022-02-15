const patternPhone = "^0\\s*[1-9](?:[\\s]*\\d{2}){4}$"
const phoneMaxLength = 10

const patternEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"

const pattern = { patternPhone, phoneMaxLength, patternEmail }

export default pattern
