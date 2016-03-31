var party = ["Republician", "Democratic"];
var colors = [["#ff0000", "#ffaaaa"], ["#0000ff", "#aaaaff"]];
var alloted_states = [["Iowa", "New Hamphsire", "South Carolina", "Nevada", "Alabama", "Alaska",
		       "Arkansas", "Georgia", "Massachuetts", "Minnesota", "Oklahoma",
		       "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Kentucky",
		       "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan",
		       "Mississippi", "Washington DC", "Guam", "Wyoming",
		       "Florida", "Illinois", "Missouri", "North Carolina",
		       "Northern Mariana Islands", "Ohio"],
		      ["Iowa", "New Hamphsire", "Nevada", "South Carolina", "Alabama", "Arkansas",
		       "Colorado", "Georgia", "Massachuetts", "Minnesota", "Oklahoma", "Tennessee",
		       "Texas", "Vermont", "Viginia", "American Somoa", "Democrats Abroad",
		       "Kansas", "Louisiana", "Nebraska", "Maine", "Michigan", "Mississippi",
		       "Northern Mariana Islands", "Florida", "Illinois", "Missouri",
		       "North Carolina", "Ohio"]
		     ];
var not_lot_states = [["Arizona", "Utah", "Wisconsin", "New York", "Connecticut", "Delware",
		       "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Nebraska",
		       "West Virginia", "Oregon", "Washington", "Califorinia", "Montana",
		       "New Jersey", "New Mexico", "South Dakota"],
		      ["Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin",
		       "Wyoming", "New York", "Connecticut", "Delware", "Maryland", "Pennsylvania",
		       "Rhode Island", "Indiana", "Guam", "West Virginia", "Kentucky", "Oregon",
		       "Virgin Islands", "Puerto Rico", "California", "Montana", "New Jersey",
		       "New Mexico", "North Dakota", "South Dakota", "Washington DC"]
		     ];
var totals = [[1489, 983, 2472], [2366, 2397, 4763]];
var alloted_nums = [[30, 23, 50, 30, 50, 28, 40, 76, 42, 38, 43, 58, 155, 16, 49, 40, 46, 46, 23,
		     23, 19, 32, 59, 40, 19, 9, 29, 99, 69, 52, 72, 9, 66],
		    [52, 32, 43, 59, 60, 37, 79, 116, 116, 93, 42, 76, 252, 26, 110, 10, 17, 37, 58,
		     30, 30, 147, 41, 11, 246, 182, 84, 121, 159]];
var not_lot_nums = [[58, 40, 42, 95, 28, 16, 38, 71, 19, 57, 36, 34, 28, 44, 172, 27, 51, 24, 29],
		    [85, 27, 37, 20, 34, 118, 96, 18, 291, 70, 31, 118, 210, 33, 92, 12, 37, 61, 74,
		     12, 67, 546, 27, 142, 43, 23, 25, 45]
		   ];

var counter = 1;
var createbars = function() {
    counter = (counter + 1) % 2
    d3.select("title").text(party[counter] + " Delegate Count");
    d3.select("h1").text(party[counter] + " Delegate Count").style("color", colors[counter][0]);
    d3.select("#key0").style("background-color", colors[counter][0]);
    d3.select("#key1").style("background-color", colors[counter][1]);
    d3.select("#alloted_total").text(totals[counter][0]);
    d3.select("#not_lot_total").text(totals[counter][1]);
    d3.select("#total").text(totals[counter][2]);

    
    d3.select(".alloted").selectAll("div").remove();
    d3.select(".alloted")
	.selectAll("div")
	.data(alloted_nums[counter])
	.enter().append("div")
	.style("width", function(d){return d*10 + "px";})
	.style("background-color", colors[counter][0])
	.style("font-size","15px")
	.text(function(d){return d;})
	.data(alloted_states[counter])
	.insert("span")
	.style("font-size", "7px")
	.text(function(d){return " - " + d;});
    
    d3.select(".not_lot").selectAll("div").remove();    
    d3.select(".not_lot")
	.selectAll("div")
	.data(not_lot_nums[counter])
	.enter().append("div")
	.style("width", function(d){return d*10 + "px";})
	.style("background-color", colors[counter][1])
	.style("font-size","15px")
	.text(function(d){return d;})
	.data(not_lot_states[counter])
	.insert("span")
	.style("font-size", "7px")
	.text(function(d){return " - " + d;});
}

document.getElementById("switch").addEventListener("click", createbars);
createbars();

