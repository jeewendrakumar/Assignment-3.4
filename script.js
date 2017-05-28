/**
 * Created by jeewendrakumar on 5/28/2017.
 */
function loadJsonData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var i;
            var x = JSON.parse(this.responseText);
            var employee = x.employees;
            var table="<tr><th>Name</th><th>Age</th><th>Salary</th></tr>";
            employee.forEach (emp => {
                table += "<tr><td>" +
                        emp.name +
                    "</td><td>" +
                        emp.age +
                    "</td><td>" +
                        emp.salary +
                    "</td></tr>";
            });
            document.getElementById("employee-details").innerHTML = table;
        }
    };
    xhttp.open("GET", "employees.json", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
}