const atividadeInput = document.getElementById('atividade');
const prioridadeSelect = document.getElementById('prioridade');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaAtividades = document.getElementById('listaAtividades');

// Função para alterar a cor do texto do campo de atividade conforme a prioridade
function atualizarCorPrioridade() {
    const prioridade = prioridadeSelect.value;
    if (prioridade === 'alta') {
        atividadeInput.style.color = 'red';
    } else if (prioridade === 'media') {
        atividadeInput.style.color = 'yellow';
    } else if (prioridade === 'baixa') {
        atividadeInput.style.color = 'green';
    }
}

// Atualizar a cor sempre que a prioridade for alterada
prioridadeSelect.addEventListener('change', atualizarCorPrioridade);

// Função para adicionar a atividade
adicionarBtn.addEventListener('click', function() {
    const atividadeTexto = atividadeInput.value.trim();
    const prioridade = prioridadeSelect.value;

    if (atividadeTexto === '') {
        alert('Por favor, insira uma atividade!');
        return;
    }

    const divAtividade = document.createElement('div');
    divAtividade.classList.add('atividade');

    // Definir a cor de fundo da atividade com base na prioridade
    if (prioridade === 'alta') {
        divAtividade.style.backgroundColor = '#ffcccc';
    } else if (prioridade === 'media') {
        divAtividade.style.backgroundColor = '#ffffcc';
    } else if (prioridade === 'baixa') {
        divAtividade.style.backgroundColor = '#ccffcc';
    }

    divAtividade.textContent = `${atividadeTexto} - Prioridade: ${prioridade.charAt(0).toUpperCase() + prioridade.slice(1)}`;
    
    listaAtividades.appendChild(divAtividade);

    // Limpar o campo de atividade após adicionar
    atividadeInput.value = '';
    atualizarCorPrioridade(); // Resetar a cor do texto
});

// Inicializar a cor do texto no início
atualizarCorPrioridade();