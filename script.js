let tableData = [];

// get table element and tbody element
const table = document.getElementById("table");
const tbody = table.getElementsByTagName("tbody")[0];

// get add row and save buttons
const addRowBtn = document.getElementById("add-row");
const saveBtn = document.getElementById("save");

// add event listener to add row button
addRowBtn.addEventListener("click", () => {
  // create new row
  const row = document.createElement("tr");

  // create cells and inputs for each column
  const idCell = document.createElement("td");
  idCell.textContent = tableData.length + 1;
  row.appendChild(idCell);

  const nameCell = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameCell.appendChild(nameInput);
  row.appendChild(nameCell);

  const rollCell = document.createElement("td");
  const rollInput = document.createElement("input");
  rollInput.type = "text";
  rollCell.appendChild(rollInput);
  row.appendChild(rollCell);

  const subjectCell = document.createElement("td");
  const subjectInput = document.createElement("input");
  subjectInput.type = "text";
  subjectCell.appendChild(subjectInput);
  row.appendChild(subjectCell);

  const marksCell = document.createElement("td");
  const marksInput = document.createElement("input");
  marksInput.type = "text";
  marksCell.appendChild(marksInput);
  row.appendChild(marksCell);

  const markedByCell = document.createElement("td");
  const markedByInput = document.createElement("input");
  markedByInput.type = "text";
  markedByCell.appendChild(markedByInput);
  row.appendChild(markedByCell);


  const saveCell = document.createElement("td");
  const saveInput = document.createElement("button");
  saveInput.innerHTML = `<span id="save">Save</span>`;
  saveCell.appendChild(saveInput);
  row.appendChild(saveCell);

 
  // append row to tbody
  tbody.appendChild(row);
});

// add event listener to save button
saveBtn.addEventListener("click", () => {
  // iterate over each row and validate input fields
  const tableRows = tbody.getElementsByTagName("tr");
  tableRows.forEach((row, index) => {
    const nameInput = row.querySelector('input[name="name"]');
    const rollInput = row.querySelector('input[name="roll"]');
    const subjectInput = row.querySelector('input[name="subject"]');
    const marksInput = row.querySelector('input[name="marks"]');
    const markedByInput = row.querySelector('input[name="markedBy"]');

    tableData[index].student_name = nameInput.value;
    tableData[index].student_roll = rollInput.value;
    tableData[index].subject = subjectInput.value;
    tableData[index].marks = marksInput.value;
    tableData[index].markedBy = markedByInput.value;
  });

  // Perform validation on the input fields
  const isValid = validateInputs(tableRows);

  if (isValid) {
    // Log the new row and the entire tableData array to the console
    console.log(tableData);
  }
})
