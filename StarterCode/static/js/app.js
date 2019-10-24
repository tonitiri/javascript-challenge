// from data.js
var tableData = data;
console.log(data);

// YOUR CODE HERE!
var table = d3.select("#ufo-table");
var tableBody = table.select("tbody");

// POPULATING TABLE
function buildTable(ufo_data) {
    tableBody.html("")
    ufo_data.forEach(ufo => {
        var row = tableBody.append("tr");

        row.append("td").text(ufo.datetime);
        row.append("td").text(ufo.city);
        row.append("td").text(ufo.state);
        row.append("td").text(ufo.country);
        row.append("td").text(ufo.shape);
        row.append("td").text(ufo.durationMinutes);
        row.append("td").text(ufo.comments);

    })

}
// FILTERING TABLE BY DATE-SEARCH AND RESETTING
buildTable(data);

var characterDateField = d3.select("#datetime");
var characterFilterButton = d3.select("#filter-btn");
var shapeSearchField = d3.select("#shapeSearch");
var resetButton = d3.select("#filter-reset");

resetButton.on("click", () => {
    d3.event.preventDefault()
    tableBody.remove();
    tableBody = table.append("tbody");
    buildTable(data);

});

characterFilterButton.on("click", () => {
    d3.event.preventDefault()
    var characterDatevalue = characterDateField.property("value");
    console.log(characterDatevalue);

    var filterData = data.filter(ufo => ufo.datetime == characterDatevalue)

    buildTable(filterData)

})

// FILTERING TABLE BY SHAPES AND RESETTING
shapeSearchField.on("keyup", () => {
    d3.event.preventDefault()
    var dateToSearchFor = shapeSearchField.property("value");
    console.log(dateToSearchFor);

    var filterDates = data.filter(ufo => ufo.shape.toLowerCase().trim() == dateToSearchFor.toLowerCase().trim())

    buildTable(filterDates)

});
