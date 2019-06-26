var express = require('express');
var app = express();



var EmployeeController=function (req, res) {
  console.log("CAlling rest api");
  var employees=[
            {firstName:'Rahul',lastName:'Kumar',age:43},
            {firstName:'Manoj',lastName:'Kamble',age:43},
            {firstName:'Rohit',lastName:'Sharma',age:28},
            {firstName:'Shiv',lastName:'Kumar',age:25},
            {firstName:'Rohan',lastName:'Pande',age:23}
      ];
  res.send(employees);
};



app.get('/employeess',EmployeeController );

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8080", host, port)
})