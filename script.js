
let contactTable = document.querySelector(".contact-table");

async function contactDetail() {
  const response = await fetch("./contact.json");
  const data = await response.json();

  data.forEach((contact) => {
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
    <img src="./images/edit.svg" alt="This is a edit icon." class="edit" />
    <img
    src="./images/delete.svg"
    alt="This is a delete icon."
    />
    </td>
    </tr>`;
    contactTable.innerHTML += row;
    //'name' is deprecated.
  });
}

contactDetail()
document.querySelector(".edit").addEventListener("click", () => {
  console.log("clicked..");
});
