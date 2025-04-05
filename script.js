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
