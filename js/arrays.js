// Obtenção de elementos do HTML
const formularioTarefa = document.getElementById('taskForm');
const campoDescricaoTarefa = document.getElementById('taskDescription');
const campoAutorTarefa = document.getElementById('taskAuthor');
const campoDepartamentoTarefa = document.getElementById('taskDepartment');
const campoImportanciaTarefa = document.getElementById('taskImportance');
const listaTarefas = document.getElementById('listaTarefas');

// Array para armazenar tarefas
const tarefas = [];

// Adiciona uma nova tarefa ao array de tarefas
function adicionarTarefa(descricao, autor, departamento, importancia) {
    const tarefa = {
        descricao: descricao,
        autor: autor,
        departamento: departamento,
        importancia: importancia,
        realizada: false,
        duracao: 0
    };
    tarefas.push(tarefa);
    atualizarTarefas();
}

// Remove uma tarefa do array de tarefas
function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    atualizarTarefas();
}

// Alterna o status de "realizada" de uma tarefa
function alternarRealizado(indice, feito) {
    tarefas[indice].realizada = feito;
}

// Atualiza a duração de uma tarefa
function atualizarDuracao(indice, duracao) {
    tarefas[indice].duracao = parseInt(duracao);
}

// Atualiza a exibição das tarefas na página
function atualizarTarefas() {
    listaTarefas.innerHTML = `
        <table>
            <tr>
                <th>Descrição</th>
                <th>Autor</th>
                <th>Departamento</th>
                <th>Importância</th>
                <th>Realizada</th>
                <th>Duração</th>
                <th>Remover</th>
            </tr>
            ${tarefas.map((tarefa, indice) => `
                <tr>
                    <td>${tarefa.descricao}</td>
                    <td>${tarefa.autor}</td>
                    <td>${tarefa.departamento}</td>
                    <td>${tarefa.importancia}</td>
                    <td><input type="checkbox" onchange="alternarPago(${indice}, this.checked)" ${tarefa.paga ? 'checked' : ''}></td>
                    <td><input type="number" value="${tarefa.duracao}" onchange="atualizarDuracao(${indice}, this.value)"></td>
                    <td><button onclick="removerTarefa(${indice})">X</button></td>
                </tr>
            `).join('')}
        </table>
    `;
}

// Função para adicionar uma tarefa com os atributos preenchidos
function adicionarTarefaComAtributos() {
    const descricao = campoDescricaoTarefa.value;
    const autor = campoAutorTarefa.value;
    const departamento = campoDepartamentoTarefa.value;
    const importancia = campoImportanciaTarefa.value;
    
    if (descricao && autor && departamento && importancia) {
        adicionarTarefa(descricao, autor, departamento, importancia);
        campoDescricaoTarefa.value = '';
        campoAutorTarefa.value = '';
        campoDepartamentoTarefa.value = '';
        campoImportanciaTarefa.value = '';
    }
}

// Adiciona um evento para o formulário ao submeter
formularioTarefa.addEventListener('submit', function(evento) {
    evento.preventDefault();
    adicionarTarefaComAtributos();
});

// Inicializa a exibição das tarefas
atualizarTarefas();