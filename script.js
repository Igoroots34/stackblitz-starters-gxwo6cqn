function toggleDropdown() {
  document.getElementById('dropdown').classList.toggle('show');
}

// Fecha dropdown se clicar fora
window.addEventListener('click', function (e) {
  if (!e.target.closest('.avatar')) {
    document.getElementById('dropdown').classList.remove('show');
  }
});

function toggleDatasPersonalizadas() {
  const periodo = document.getElementById('periodo').value;
  const divDatas = document.getElementById('datasPersonalizadas');

  divDatas.style.display = periodo === 'personalizado' ? 'block' : 'none';
}

function aplicarFiltro() {
  const periodo = document.getElementById('periodo').value;
  const usuario = document.getElementById('usuario').value;
  let dataInicio = '';
  let dataFim = '';

  if (periodo === 'personalizado') {
    dataInicio = document.getElementById('dataInicio').value;
    dataFim = document.getElementById('dataFim').value;
  }

  console.log(`Período: ${periodo}`);
  if (periodo === 'personalizado') {
    console.log(`De: ${dataInicio} Até: ${dataFim}`);
  }
  console.log(`Usuário: ${usuario}`);

  // Aqui você pode aplicar o filtro aos dados do sistema
}

// Alternar menu dropdown
document.querySelector('.filter-btn').addEventListener('click', () => {
  document.querySelector('.filter-dropdown').classList.toggle('show');
});

// Inicializar Flatpickr (calendário)
flatpickr("#startDate", {
  dateFormat: "d/m/Y",
});

flatpickr("#endDate", {
  dateFormat: "d/m/Y",
});

// Aplicar filtros (lógica personalizada)
document.querySelector('.apply-btn').addEventListener('click', () => {
  const startDate = document.querySelector('#startDate').value;
  const endDate = document.querySelector('#endDate').value;
  const user = document.querySelector('#userSelect').value;

  alert(`Filtros Aplicados:\nDe: ${startDate}\nAté: ${endDate}\nUsuário: ${user}`);
  
  // Aqui você faria sua lógica de filtragem (ex: chamada para API ou filtrar dados na página)
});

