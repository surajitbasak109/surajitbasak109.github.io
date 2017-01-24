var grid = 12;
var margin = 1;
for (var i = 1; i <= grid; i++) {
  console.log(grid_column(i, grid));
}

function grid_column(column, grid) {
    var percentage = (column/grid * 100) - margin;
	return percentage.toFixed(2);
}

7.33
15.67
24
32.33
40.67
49
57.33
65.67
74
82.33
90.67
99
