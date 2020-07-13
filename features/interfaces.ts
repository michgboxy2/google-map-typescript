interface Reportable {
  //   name: string;
  //   year: number;
  //   broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  barbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has some ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  //   console.log(`Name: ${vehicle.name}`);
  //   console.log(`Year: ${vehicle.year}`);
  //   console.log(`Broken: ${vehicle.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
