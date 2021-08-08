const dayMeals = [];

export const writeMeals = (obj) => {
    dayMeals.push(obj);
};

export const countTotal = (mealsArr) => {
    return mealsArr.reduce((total, meal) => total + meal.cal, 0);
};

export const printInfo = (number) => {
    return `User eat ${number} cal`;
};