let svg = d3.select("svg");
let height = svg.attr("height");
let width = svg.attr("width");
let spacing = 15;
let rows = 10;
let column = 10;
let randnum = (min, max) => Math.round(Math.random() * (max - min) + min);

//create particles
let particles = svg
  .selectAll("rect")
  .data(d3.range(100))
  .enter()
  .append("rect")
  .attr("fill", (d, i) => (i < 50 ? "#851A03" : "#EBA262"));

//grid
let grid = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("width", 6)
    .attr("width", 10)
    .attr("height", 10)
    .attr("rx", 0)
    .attr("ry", 0)
    .attr("x", (d, i) => (i % column) * spacing)
    .attr("y", (d, i) => (Math.floor(i / 10) % rows) * spacing)
    .attr("transform", "translate(0,0) rotate(0)");

//drop
let drop = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(2000)
    .ease("elastic")
    .attr("width", 6)
    .attr("height", 6)
    .attr("rx", "50%")
    .attr("ry", "50%")
    .attr("x", (d, i) => Math.random() * 225)
    .attr("y", 225)
    .attr("transform", "translate(0,0) rotate(0)");

//split
let split = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("width", 6)
    .attr("height", 6)
    .attr("rx", "50%")
    .attr("ry", "50%")
    .attr("x", (d, i) => (i < 50 ? randnum(175, 225) : randnum(0, 50)))
    .attr("y", (d, i) => randnum(0, 225))
    .attr("transform", "translate(0,0) rotate(0)");

//chart
let chart = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("width", randnum(100, 125))
    .attr("height", 6)
    .attr("rx", 0)
    .attr("ry", 0)
    .attr("x", (d, i) => (i < 50 ? 0 : 125))
    .attr("y", (d, i) => randnum(0, 225))
    .attr("transform", "translate(0,0) rotate(0)");

//scatte plot
let scatter = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("width", 6)
    .attr("height", 6)
    .attr("rx", "50%")
    .attr("ry", "50%")
    .attr("x", (d, i) =>
      i < 25
        ? randnum(0, 50)
        : i > 25 && i < 50
        ? randnum(0, 100)
        : randnum(0, 225)
    )
    .attr("y", (d, i) => (i < 50 ? randnum(0, 225) : randnum(175, 225)))
    .attr("transform", "translate(0,0) rotate(0)");

//city
let city = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("width", 6)
    .attr("height", (d, i) => Math.random() * (60 + i))
    .attr("x", (d, i) => (i < 50 ? randnum(-100, 100) : randnum(25, 50)))
    .attr("y", 0)
    .attr("fill", (d, i) => (i < 50 ? "#851A03" : "#EBA262"))
    .attr("rx", 0)
    .attr("ry", 0)
    .attr(
      "transform",
      (d, i) => "translate(" + 250 / 2 + "," + 250 + ")rotate(" + 180 + ")"
    );

let orbit = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("width", 6)
    .attr("height", 6)
    .attr("x", (d, i) => (i < 50 ? 100 : randnum(25, 50)))
    .attr("y", 0)
    .attr("fill", (d, i) => (i < 50 ? "#851A03" : "#EBA262"))
    .attr("rx", "50%")
    .attr("ry", "50%")
    .attr(
      "transform",
      (d, i) =>
        "translate(" + 250 / 2 + "," + 250 / 2 + ")rotate(" + i * 10 + ")"
    );

let cross = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("fill", (d, i) => (i < 50 ? "#851A03" : "#EBA262"))
    /*.attr("transform", "translate(0,0)")*/
    .attr("x", (d, i) => (i < 50 ? Math.cos(i) * 50 : Math.sin(i) * 50))
    .attr("y", (d, i) => (i < 50 ? -Math.cos(i) * 50 : Math.sin(i) * 50))
    .attr("rx", "50%")
    .attr("ry", "50%")
    .attr("width", 6)
    .attr("height", 6)
    .attr("transform", (d, i) =>
      i < 50 ? "translate(100,100) rotate(0)" : "translate(100,100) rotate(0)"
    );

let strike = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("fill", (d, i) => (i < 50 ? "#851A03" : "#EBA262"))
    /*.attr("transform", "translate(0,0)")*/
    .attr("x", (d, i) => (i < 50 ? Math.cos(i) * 50 : Math.sin(i) * 50))
    .attr("y", (d, i) => (i < 50 ? Math.sin(i) * 50 : Math.sin(i) * 50))
    .attr("rx", "50%")
    .attr("ry", "50%")
    .attr("width", 6)
    .attr("height", 6)
    .attr("transform", (d, i) =>
      i < 50 ? "translate(100,100) rotate(0)" : "translate(100,100) rotate(0)"
    );

let burst = () =>
  particles
    .transition()
    .delay((d, i) => 10 * i)
    .duration(600)
    .ease("elastic")
    .attr("width", (d, i) => Math.random() * 100)
    .attr("height", 10) //inside
    /*.attr("x",-60)*/ .attr("x", 60) //outside
    .attr("y", 0)
    .attr("rx", 0)
    .attr("ry", 0)
    .attr(
      "transform",
      (d, i) =>
        "translate(" + 600 / 2 + "," + 600 / 2 + ")rotate(" + i * 10 + ")"
    );

//click events
d3.select("#split").on("click", split);
d3.select("#drop").on("click", drop);
d3.select("#grid").on("click", grid);
d3.select("#chart").on("click", chart);
d3.select("#scatter").on("click", scatter);
d3.select("#city").on("click", city);
d3.select("#orbit").on("click", orbit);
d3.select("#cross").on("click", cross);
d3.select("#strike").on("click", strike);
d3.select("#burst").on("click", burst);

//start grid
grid();
