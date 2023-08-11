// Obtenção de elementos do HTML
const formularioTarefa = document.getElementById('taskForm');
const campoDescricaoTarefa = document.getElementById('taskDescription');
const campoAutorTarefa = document.getElementById('taskAuthor');
const campoDepartamentoTarefa = document.getElementById('taskDepartment');
const campoImportanciaTarefa = document.getElementById('taskImportance');
const listaTarefas = document.getElementById('listaTarefas');

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

// Atualiza a duração de uma tarefa
function atualizarDuracao(indice, duracao) {
    tarefas[indice].duracao = parseInt(duracao);

    