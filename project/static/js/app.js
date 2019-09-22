// from data.js
var tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// Function Build Table
function buildTable(data){
  // Clear existing data
  tbody.html("");
  // Loop Through `data` 
  data.forEach((dataRow) => {
      // Append Table Row `tr` to the Table Body `tbody`
      let row = tbody.append("tr");
      // `Object.values` & `forEach` to Iterate Through Values
      Object.values(dataRow).forEach((val) => {
          // Append a Cell to the Row for Each Value
          let cell = row.append("td");
          cell.text(val);
      });
  })
}

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Trigger a function when the button is clicked
function handleClick(){
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select HTML input element & get the value property of the input element
  let date = d3.select("#datetime").property("value");
  let filterData = tableData;

  // Check if a date was entered and filter the data by the date entered;
  if(date) {
      // Apply the filter to the table Data to only keep rows where datetime value matches the value
      filterData = filterData.filter((row) => row.datetime === date);
  }
  // Build table with filtered data
  buildTable(filterData);
}
// attach an event to the handler function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);

  console.log(inputValue);
  console.log(tableData);


