// Based on included JSON file.
// Create a function that will return Json from the file. a
// Create a structures to hold data from the file. b
// Map data from function a to structure from b.
// Create object that will give us data about:
// How much money was spend in 2014
// What company was earning how much
// What type on transaction was having what spending’s.
// Values of the spending in each month
// Values of the spending in each day of the week

function returnJsonFromFile() {
  let data = require("./Data.json");
  return data;
}

function CompanyInfo(index, id, cost, detailsOfPayment) {
  this.index = index;
  this.id = id;
  this.cost = cost;
  this.detailsOfPayment = detailsOfPayment;
}

const companiesData = returnJsonFromFile().map(
  (firm) =>
    new CompanyInfo(firm.index, firm._id, firm.cost, firm.detailsOfPayent)
);

function CompanysStatistics(companiesData) {
  // / How much money was spend in 2014 - spendings
  let spendings = 0;
  companiesData.forEach((company) => {
    if (new Date(company.detailsOfPayment.date).getFullYear()) {
      return (spendings += Number(company.cost));
    }
  });

  // What company was earning how much - eachCompanySpendings
  let companiesName = [
    ...new Set(
      companiesData.map((company) => company.detailsOfPayment.company)
    ),
  ];

  let eachCompanySpendings = [];
  companiesName.forEach((companyName) => {
    let sum = 0;
    companiesData.forEach((f) => {
      if (companyName === f.detailsOfPayment.company) {
        sum += Number(f.cost);
      }
    });
    eachCompanySpendings.push({ companyName, sum });
  });

  // What type on transaction was having what spending’s. - spendingsByType
  let types = [
    ...new Set(companiesData.map((data) => data.detailsOfPayment.Type)),
  ];

  let spendingsByType = [];
  types.forEach((type) => {
    let sum = 0;
    companiesData.forEach((f) => {
      if (type === f.detailsOfPayment.Type) {
        sum += Number(f.cost);
      }
    });
    spendingsByType.push({ type, sum });
  });

  // Values of the spending in each month
  let months = [
    ...new Set(
      companiesData.map(
        (data) => data.detailsOfPayment.date[3] + data.detailsOfPayment.date[4]
      )
    ),
  ];

  spendingsByMonth = [];
  months.forEach((month) => {
    let sum = 0;
    companiesData.forEach((f) => {
      if (month === f.detailsOfPayment.date[3] + f.detailsOfPayment.date[4]) {
        sum += Number(f.cost);
      }
    });
    spendingsByMonth.push({ month, sum });
  });

  // Values of the spending in each day of the week

  this.spendings = spendings;
  this.eachCompanySpendings = eachCompanySpendings;
  this.spendingsByType = spendingsByType;
  this.spendingsByMonth = spendingsByMonth;
}
console.log(new CompanysStatistics(companiesData));
