function highlight(strings, ...values) {
  // here i is the iterator for the strings array
  return strings.reduce((result, string, i) => {
    return `${result}${string} <cite>${values[i] || ""}</cite>`;
  }, "");
}



export default (highlightString = false) => {
  const author = "Thomas A. Edison";
  const statement = `I have not failed. I've just found 10,000 ways that won't work.`;
  if (highlightString) {
    return highlight`${statement} by ${author}`;
  }
  return `${statement} by ${author}`;
};
