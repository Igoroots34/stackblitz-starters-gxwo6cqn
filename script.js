function toggleDropdown() {
  document.getElementById('dropdown').classList.toggle('show');
}

// Fecha dropdown se clicar fora
window.addEventListener('click', function (e) {
  if (!e.target.closest('.avatar')) {
    document.getElementById('dropdown').classList.remove('show');
  }
});

function toggleDropdownRadio() {
  document.getElementById('dropdown-radio').classList.toggle('show');
}

// Fecha dropdown se clicar fora
window.addEventListener('click', function (e) {
  if (!e.target.closest('.radio-btn')) {
    document.getElementById('dropdown-radio').classList.remove('show');
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


const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  const fileList = document.getElementById('file-list');
  let arquivosSelecionados = [];

  dropZone.addEventListener('click', () => fileInput.click());

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    handleFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener('change', () => {
    handleFiles(fileInput.files);
  });

  function handleFiles(files) {
    arquivosSelecionados = Array.from(files);
    fileList.innerHTML = arquivosSelecionados.map(f => `<div>${f.name}</div>`).join('');
  }

  function enviarArquivos() {
    if (arquivosSelecionados.length === 0) {
      alert('Por favor, selecione ao menos um arquivo.');
      return;
    }

    const formData = new FormData();
    arquivosSelecionados.forEach((file, i) => {
      formData.append(`arquivo${i + 1}`, file);
    });

    // Exemplo de envio com fetch (requer backend para receber)
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(resp => {
      if (resp.ok) {
        alert('Arquivos enviados com sucesso!');
        fileList.innerHTML = '';
        arquivosSelecionados = [];
      } else {
        alert('Erro no envio.');
      }
    })
    .catch(() => alert('Erro ao conectar com o servidor.'));
  }

function abrirModalBudget() {
  document.getElementById("modal-budget").style.display = "block";
}

function fecharModalBudget() {
  document.getElementById("modal-budget").style.display = "none";
}

function abrirModal() {
  document.getElementById("modal-transacao").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal-transacao").style.display = "none";
}

// Fecha se clicar fora do modal
window.onclick = function(event) {
  const modal = document.getElementById("modal-transacao");
  if (event.target === modal) {
    fecharModal();
  }
};


function mostrarCampos(tipo) {
  const receita = document.getElementById('campos-receita');
  const despesa = document.getElementById('campos-despesa');

  if (tipo === 'receita') {
    receita.style.display = 'block';
    despesa.style.display = 'none';
  } else if (tipo === 'despesa') {
    receita.style.display = 'none';
    despesa.style.display = 'block';
  }
}

// Executa automaticamente ao carregar a página
window.onload = function () {
  mostrarCampos('receita');
};
