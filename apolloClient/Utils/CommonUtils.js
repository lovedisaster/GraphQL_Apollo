export const IsNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/*Currency Formater*/
export const NumberFormat = (n) => {
  //convert decimal to interger
  n = parseInt(n);
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}