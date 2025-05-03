document.getElementById('csvFileInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    displayCSV(text);
  };
  reader.readAsText(file);
});

function displayCSV(csvText) {
  const lines = csvText.split('\n').filter(line => line.trim() !== '');
  const tableContainer = document.getElementById('table-container');
  const table = tableContainer.querySelector('table');

  // Remove tbody antigo, se existir
  let oldTbody = table.querySelector('tbody');
  if (oldTbody) {
    table.removeChild(oldTbody);
  }

  // Cria novo tbody
  const tbody = document.createElement('tbody');

  lines.forEach((line, index) => {
    if (index === 0) return; // Pula a primeira linha se seu CSV já tiver cabeçalho

    const row = document.createElement('tr');
    const cells = line.split(',');

    cells.forEach(cellText => {
      const cell = document.createElement('td');
      cell.textContent = cellText.trim();
      row.appendChild(cell);
    });

    // Cria uma célula extra para "Ação" se quiser
    const actionCellEdit = document.createElement('td');
    const actionCellDelete = document.createElement('td');
    actionCellEdit.innerHTML = '<button class="edit"><i class="bi bi-pencil"></i></button>'; // Ou o que quiser
    actionCellDelete.innerHTML = '<button class="delete"><i class="bi bi-trash"></i></button>';
    row.appendChild(actionCellEdit);
row.appendChild(actionCellDelete);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
}