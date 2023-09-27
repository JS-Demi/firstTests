const capitalize =  (str) => {
    const [firstLetter, ...restChars] = str;
    return `${firstLetter.toUpperCase()}${restChars}`
};
console.log(capitalize('hello'));
export default capitalize;