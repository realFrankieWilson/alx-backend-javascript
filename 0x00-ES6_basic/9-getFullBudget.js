import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // eslint: declared in the upper scope
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    // eslint declared in the upper scope
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
