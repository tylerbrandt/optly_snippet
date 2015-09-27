"use strict";

if (window.location.href === "http://localhost:3000/analyze") {
	var data = [
	    {
	        value: 300,
	        color:"#F7464A",
	        highlight: "#FF5A5E",
	        label: "Red"
	    },
	    {
	        value: 50,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "Green"
	    },
	    {
	        value: 100,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "Yellow"
	    }
	];
	var ctx = document.getElementById("myChart").getContext("2d");
	debugger;
	var myDoughnutChart = new Chart(ctx).Doughnut(data);
}