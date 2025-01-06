const students = [];

        function addStudent() {
            const name = document.getElementById("name").value;
            const age = parseInt(document.getElementById("age").value, 10);
            const state = document.getElementById("state").value;
            const district = document.getElementById("district").value;

            if (!name || isNaN(age) || !state || !district) {
                alert("Please fill all the fields.");
                return;
            }

            students.push({ name, age, state, district });
            displayStudents();

            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("state").value = "";
            document.getElementById("district").value = "";
        }

        function displayStudents(filterResults = students) {
            const tableBody = document.getElementById("studentDetails");
            tableBody.innerHTML = "";

            filterResults.forEach((student, index) => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${student.name}</td>
                        <td>${student.age}</td>
                        <td>${student.state}</td>
                        <td>${student.district}</td>
                    </tr>
                `;
            });
        }

        function searchAndFilter() {
            const searchQuery = document.getElementById("search").value.toLowerCase();
            const filteredStudents = students
                .filter(student => student.name.toLowerCase().includes(searchQuery))
                .sort((a, b) => {
                    if (a.name.toLowerCase() === b.name.toLowerCase()) {
                        return a.age - b.age;
                    }
                    return 0;
                });
            displayStudents(filteredStudents);
        }