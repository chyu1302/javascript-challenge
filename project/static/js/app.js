// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each UFO sighting report object
// data.forEach(function(sightingReport) {
//   console.log(sightingReport);
// });

// // Step 2:  Use d3 to append one table row `tr` for each report object
// data.forEach(function(sightingReport) {
//   console.log(sightingReport);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each report value
// data.forEach(function(sightingReport) {
//   console.log(sightingReport);
//   var row = tbody.append("tr");

//   Object.entries(sightingReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per report value (datetime, city, state, country, shape, durationMinutes, comments)
// data.forEach(function(sightingReport) {
//   console.log(sightingReport);
//   var row = tbody.append("tr");

//   Object.entries(sightingReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the sighting report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // weather report values (datetime, city, state, country, shape, durationMinutes, comments)
// data.forEach(function(sightingReport) {
//   console.log(sightingReport);
//   var row = tbody.append("tr");
//   Object.entries(sightingReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the sighting report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// BONUS: Refactor to use Arrow Functions!
data.forEach((sightingReport) => {
  var row = tbody.append("tr");
  Object.entries(sightingReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = people.filter(person => person.bloodType === inputValue);

  console.log(filteredData);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  var ages = filteredData.map(person => person.age);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  var mean = math.mean(ages);
  var median = math.median(ages);
  var mode = math.mode(ages);
  var variance = math.var(ages);
  var standardDeviation = math.std(ages);

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // remove any children from the list to
  list.html("");

  // append stats to the list
  list.append("li").text(`Mean: ${mean}`);
  list.append("li").text(`Median: ${median}`);
  list.append("li").text(`Mode: ${mode}`);
  list.append("li").text(`Variance: ${variance}`);
  list.append("li").text(`Standard Deviation: ${standardDeviation}`);
});

