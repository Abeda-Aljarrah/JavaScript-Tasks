async function get(){
    const response = await fetch("https://hp-api.onrender.com/api/characters/staff");
    const data = await response.json();
    console.log(data);
    const table = document.getElementById("table");
        data.slice(0,8).forEach(function (person) {
          const row = table.insertRow();
          const nameCell = row.insertCell();
          const ageCell = row.insertCell();
          const majorCell = row.insertCell();
          const universityCell = row.insertCell();
          const nameCell1 = row.insertCell();
          const ageCell1 = row.insertCell();
          const majorCell1 = row.insertCell();
          const imageCell = row.insertCell();

          nameCell.innerHTML = person.actor;
          ageCell.innerHTML = person.ancestry;
          majorCell.innerHTML = person.gender;          ;
          universityCell.innerHTML = person.house;
          nameCell1.innerHTML = person.name;
          ageCell1.innerHTML = person.dateOfBirth;
          majorCell1.innerHTML = person.wizard;
          imageCell.innerHTML = `<img src="${person.image}" alt="${person.actor}" width="200" height="190">`;
        });
}

