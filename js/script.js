// Obtém referências para o botão de adicionar e o contêiner das tabelas
const addBtn = document.getElementById("btnAddTarefa");
const tabelaContainer = document.getElementById("tablesContainer");

// Array para armazenar os dados inseridos
const MeuArray = [];

// Define o evento de clique para o botão de adicionar
addBtn.addEventListener("click", (evt) => {
    // Evita o carregamento da página
    evt.preventDefault();

    /*INCERÇÃO DE VALORES DO ARRAY */
    
    // Captura os valores dos campos de entrada
    const titulo = document.getElementById("idTitulo").value;
    const descricao = document.getElementById("idDescricao").value;
    const autor = document.getElementById("idAutor").value;
    const departamento = document.getElementById("idDepartamento").value;
    const importancia = document.getElementById("idImportancia").value;

    // Cria um array com os valores capturados
    const dados = [titulo, descricao, autor, departamento, importancia];
    
    // Adiciona o array à lista de dados
    MeuArray.push(dados);

    /*CRIAÇÃO DA TABELA */

    // Cria uma tabela para os dados recentes
    const tabela = document.createElement("table");
    const tabelaCorpo = document.createElement("tbody");


    /*  CRIAÇÃO DO CABEÇALHO */

    // Cria uma linha de cabeçalho
    const cabecalhoLinha = tabelaCorpo.insertRow();
    
    // Adiciona os cabeçalhos às células do cabeçalho
    const cabecalhoValores = ["Título", "Descrição", "Autor", "Departamento", "Importância"];
    cabecalhoValores.forEach(valor => {
        const cabecalhoCelula = document.createElement("th");
        cabecalhoCelula.textContent = valor;
        cabecalhoLinha.appendChild(cabecalhoCelula);
    });

    // Cria uma nova linha na tabela
    const novaLinha = tabelaCorpo.insertRow();

    // Preenche a linha com células contendo os valores do array
    dados.forEach(value => {
        const novaCelula = novaLinha.insertCell();
        novaCelula.appendChild(document.createTextNode(value));
    });

    // Cria um botão para excluir a tabela
    const bntDeletar = document.createElement("button");
    bntDeletar.textContent = "X";
    bntDeletar.addEventListener("click", () => {
        tabelaContainer.removeChild(tabela);
        // Remove os dados do array correspondentes à tabela excluída
        const index = MeuArray.indexOf(dados);
        if (index !== -1) {
            MeuArray.splice(index, 1);
        }
    });
    
    // Adiciona o botão de exclusão à linha
    const deleteCell = novaLinha.insertCell();
    deleteCell.appendChild(bntDeletar);

    // Monta a tabela e adiciona ao contêiner
    tabela.appendChild(tabelaCorpo);
    tabelaContainer.appendChild(tabela);

    // Imprime o array de dados no console
    console.log(MeuArray);
});
