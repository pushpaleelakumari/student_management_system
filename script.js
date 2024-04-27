const tableBodyItems = document.getElementById("table-body")
const error = document.getElementById("error")
const sortAtoZ = document.getElementById("sort_a-z")
const sortZtoA = document.getElementById("sort_z-a")
const marks_sort = document.getElementById("marks_sort")
const passing_sort = document.getElementById("passing_sort")
const class_sort = document.getElementById("class_sort")
const gender_sort = document.getElementById("gender_sort")
const searchButton = document.getElementById("searchButton")
let currentItems = [];
let filteredData = [];

handleGetTableItems()
sortAtoZ.addEventListener("click", handleSortAtoZ)
sortZtoA.addEventListener("click", handleSortZtoY)
marks_sort.addEventListener("click", handleSortMarks)
class_sort.addEventListener("click", handleSortByClass)
passing_sort.addEventListener("click", handleSortByPassing)
class_sort.addEventListener("click", handleSortByClass)
gender_sort.addEventListener("click", handleSortByGender)
searchButton.addEventListener("click", handleSearch)

function handleSearch() {
    sortAtoZ.className = "btn btn-dark rounded-0 px-5 m-1"
    sortZtoA.className = "btn btn-dark rounded-0 px-5 m-1"
    marks_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    class_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    passing_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    gender_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    let searchValue = document.getElementById("search").value;
    if (searchValue?.trim()) {
        filteredData = currentItems.filter((data) => {
            return data.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                data.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                data.email.toLowerCase().includes(searchValue.toLowerCase());
        });
        handleFillData(filteredData);
    } else {
        filteredData = [];
        handleFillTable(currentItems);
    }
}

function handleSortZtoY() {
    document.getElementById("search").value = ''
    filteredData = JSON.stringify(currentItems)
    if (sortZtoA.className.includes("btn-dark")) {
        sortZtoA.className = "btn btn-success rounded-0 px-5 m-1"
        filteredData = JSON.parse(filteredData).sort((a, b) => {
            const nameA = a.first_name
            const nameB = b.first_name

            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1
            return 0
        })
        handleFillTable(filteredData)
    } else {
        sortZtoA.className = "btn btn-dark rounded-0 px-5 m-1"
        handleGetTableItems();
    }
    sortAtoZ.className = "btn btn-dark rounded-0 px-5 m-1"
    marks_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    passing_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    class_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    gender_sort.className = "btn btn-dark rounded-0 px-5 m-1"
}

function handleSortAtoZ() {
    document.getElementById("search").value = ''
    filteredData = JSON.stringify(currentItems)
    if (sortAtoZ.className.includes("btn-dark")) {
        sortAtoZ.className = "btn btn-success rounded-0 px-5 m-1"
        filteredData = JSON.parse(filteredData).sort((a, b) => {
            const nameA = a.first_name
            const nameB = b.first_name

            if (nameA > nameB) return 1;
            if (nameA < nameB) return -1
            return 0
        })
        handleFillTable(filteredData)
    } else {
        filteredData = []
        sortAtoZ.className = "btn btn-dark rounded-0 px-5 m-1"
        handleGetTableItems();
    }
    sortZtoA.className = "btn btn-dark rounded-0 px-5 m-1"
    marks_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    passing_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    class_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    gender_sort.className = "btn btn-dark rounded-0 px-5 m-1"
}

function handleSortMarks() {
    document.getElementById("search").value = ''
    filteredData = JSON.parse(JSON.stringify(currentItems))
    if (marks_sort.className.includes("btn-dark")) {
        marks_sort.className = "btn btn-success rounded-0 px-5 m-1"
        filteredData = filteredData.sort((a, b) => b.marks - a.marks)
        handleFillTable(filteredData)
    } else {
        filteredData = []
        marks_sort.className = "btn btn-dark rounded-0 px-5 m-1"
        handleGetTableItems()
    }
    sortZtoA.className = "btn btn-dark rounded-0 px-5 m-1"
    sortAtoZ.className = "btn btn-dark rounded-0 px-5 m-1"
    passing_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    class_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    gender_sort.className = "btn btn-dark rounded-0 px-5 m-1"
}

function handleSortByPassing() {
    document.getElementById("search").value = ''
    filteredData = JSON.parse(JSON.stringify(currentItems))
    if (passing_sort.className.includes("btn-dark")) {
        passing_sort.className = "btn btn-success rounded-0 px-5 m-1"
        filteredData = filteredData.sort((a, b) => {
            const statusA = a.passing ? 1 : 0
            const statusB = b.passing ? 1 : 0
            return statusB - statusA
        })
        handleFillTable(filteredData)
    } else {
        passing_sort.className = "btn btn-dark rounded-0 px-5 m-1"
        filteredData = []
        handleGetTableItems()
    }
    sortAtoZ.className = "btn btn-dark rounded-0 px-5 m-1"
    sortZtoA.className = "btn btn-dark rounded-0 px-5 m-1"
    marks_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    class_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    gender_sort.className = "btn btn-dark rounded-0 px-5 m-1"
}

function handleSortByClass() {
    filteredData = JSON.parse(JSON.stringify(currentItems))
    if (class_sort.className.includes("btn-dark")) {
        class_sort.className = "btn btn-success rounded-0 px-5 m-1"
        filteredData = filteredData.sort((a, b) => {
            return a.class - b.class
        })
        handleFillData(filteredData)
    } else {
        class_sort.className = "btn btn-dark rounded-0 px-5 m-1"
        filteredData = []
        handleGetTableItems()
    }
    sortAtoZ.className = "btn btn-dark rounded-0 px-5 m-1"
    sortZtoA.className = "btn btn-dark rounded-0 px-5 m-1"
    marks_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    passing_sort.className = "btn btn-dark rounded-0 px-5 m-1"
    gender_sort.className = "btn btn-dark rounded-0 px-5 m-1"
}

function handleSortByGender() {
    filteredData = JSON.parse(JSON.stringify(currentItems))
    if (gender_sort.className.includes("btn-dark")) {
        console.log("sort by gender")
        gender_sort.className = "btn btn-success rounded-0 px-5 m-1"
        filteredData = filteredData.sort((a, b) => {
            const genderA = a.gender === "Male" ? 1 : a.gender === "Female" ? 0 : 2;
            const genderB = b.gender === "Male" ? 1 : a.gender === "Female" ? 0 : 2;
            return genderA - genderB
        })
        handleFillData(filteredData)
    } else {
        gender_sort.className = "btn btn-dark rounded-0 px-5 m-1"
        filteredData = []
        handleGetTableItems()
    }
}

function handleFillData(data) {
    let tableData = ''
    data.forEach((student, index) => {
        tableData += `
            <tr>
                <td class="text-center">${student.id}</td>
                <td>${student.first_name + student.last_name}</td>
                <td class="text-center">${student.gender}</td>
                <td class="text-center">${student.class}</td>
                <td class="text-center">${student.marks}</td>
                <td class="text-center">${student.passing}</td>
                <td class="text-center">${student.email}</td>
            </tr>
            `
    })
    tableBodyItems.innerHTML = tableData
}

function handleFillTable(data) {
    currentItems = data
    handleFillData(currentItems)
}

function handleGetTableItems() {
    try {
        fetch(`https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json`)
            .then((response) => response.json())
            .then((res) => {
                error.className = "text-center text-danger d-none my-3"
                if (res.length > 0)
                    handleFillTable(res)
            })
            .catch((err) => {
                error.className = "text-center text-danger my-3"
            })
    } catch (err) {
        error.className = "text-center text-danger my-3"
    } finally {
    }
}