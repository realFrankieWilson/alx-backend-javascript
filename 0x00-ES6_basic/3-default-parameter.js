export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  // return (expansion1989 === undefined ? 89 : expansion1989)
  //   + (expansion2019 === undefined ? 19 : expansion1989) + initialNumber;

  return ((expansion1989 === undefined ? 89 : expansion1989)
    + (expansion2019 === undefined ? 19 : expansion2019) + initialNumber);
}
