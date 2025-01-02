

  function addRow() {
  
    const table = document.querySelector('.table');
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    
    const nameCell = document.createElement('div');
    nameCell.classList.add('cell');
    nameCell.textContent = 'New Person';

    const ageCell = document.createElement('div');
    ageCell.classList.add('cell');
    ageCell.textContent = '40';

    const cityCell = document.createElement('div');
    cityCell.classList.add('cell');
    cityCell.textContent = 'Paris';

    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(cityCell);

    table.appendChild(newRow);
    const button=document.getElementsByTagName("button")[0];
    button.remove();
    const butt=document.createElement("button");
    butt.textContent = "Add New Row";
    butt.addEventListener("click",addRow);
    table.appendChild(butt);
  }

