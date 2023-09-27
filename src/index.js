const capitalize =  (str) => {
    if (str === '') {
        return ''
    }
    const [firstLetter, ...restChars] = str;
    return `${firstLetter.toUpperCase()}${restChars.join('')}`
};
export default capitalize;