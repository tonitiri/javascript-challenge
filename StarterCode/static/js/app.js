// from data.js
var tableData = data;
console.log(data);

// YOUR CODE HERE!
var table = d3.select("#ufo-table");
var tableBody = table.select("tbody");


data.forEach(ufo => {
    var row = tableBody.append("tr");

    row.append("td").text(ufo.datetime);
    row.append("td").text(ufo.city);
    row.append("td").text(ufo.state);
    row.append("td").text(ufo.country);
    row.append("td").text(ufo.shape);
    row.append("td").text(ufo.durationMinutes);
    row.append("td").text(ufo.comments);

})

var characterDateField = d3.select("#datetime");
var characterFilterButton = d3.select("#filter-btn");




characterDateField.on("click", () => {
    var characterDateField = characterSearchField.property("value");
    console.log(characterToSearchFor);
    tableBody.remove();
    tableBody = table.append("tbody");

    data.filter(f => f.displayNameEn.toLowerCase().trim() == characterToSearchFor.toLowerCase().trim())
        .forEach(data => {
            var row = tableBody.append("tr");

            row.append("td").text(ufo.datetime);
            row.append("td").text(ufo.city);
            row.append("td").text(ufo.state);
            row.append("td").text(ufo.country);
            row.append("td").text(ufo.shape);
            row.append("td").text(ufo.durationMinutes);
            row.append("td").text(ufo.comments);
        });

})
