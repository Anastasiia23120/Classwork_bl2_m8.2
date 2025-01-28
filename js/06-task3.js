function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
  return sideA + sideB + sideC + sideD;
}

const houseSides = {
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
};

const perimeter = calculateHousePerimeter(houseSides);

console.log(`Периметр будинку: ${perimeter}`);
