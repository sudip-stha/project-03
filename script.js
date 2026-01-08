let contactTable = document.querySelector(".contact-table-body");
let searchData = document.querySelector("#search");
let updateData = [];
let actualData = [];

fetch("./contact.json")
  .then((response) => response.json())
  .then((data) => {
    actualData = [...data];
    searching();
    initialData(actualData);
  })
  .catch((error) => console.error(error));

function initialData(dataArr) {
  contactTable.innerHTML = " ";
  dataArr.forEach((contact) => {
    let row = `<tr>
    <td><input type="checkbox" name="" id="" /></td>
    <td>${contact.Name}</td>
    <td> ${contact.Designation}</td>
    <td> ${contact.Company}</td>
    <td>${contact.Industry}</td>
    <td> ${contact.Email}</td>
    <td> ${contact.Phone_number}</td>
    <td> ${contact.Country}</td>    
    <td>
    <img src="./images/edit.svg" alt="This is a edit icon." class="edit"/>
    <img
    src="./images/delete.svg"
    alt="This is a delete icon."
    />
    </td>
    </tr>`;
    contactTable.innerHTML += row;
  });
}

function searching() {
  searchData.addEventListener("input", (e) => {
    let userInput = e.target.value;

    updateData = actualData.filter((contact) => {
      return contact.Email === userInput;
    });
    if (userInput) {
      initialData(updateData);
    } else {
      initialData(actualData);
    }
  });
}

