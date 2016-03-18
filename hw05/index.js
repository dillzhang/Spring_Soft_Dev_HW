data = [42, 15, 17, 21, 60];
d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(d) {return d*10 + "px"; }).text(function(d) {return d;});
