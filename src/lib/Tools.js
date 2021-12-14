export const isEmpty = (input) => {

	if ([null, undefined].includes(input)) return true

	return input.toString().replace(/\s/gi, '').length < 1
}