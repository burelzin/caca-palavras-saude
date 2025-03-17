const words = [
    "SAUDE COLETIVA", "NHS", "VACINA", "ILUMINISMO", "COLERA", "SUS", "CHADWICK", 
    "PREPATOGENICO", "PATOGENICO", "PREVENCAO", "NUTRICIONISTA", "SAUDE MENTAL", 
    "EQUIDADE", "UNIDADE", "IMUNIZACAO", "BEM ESTAR", "PACTO PELA SAUDE", 
    "DETERMINANTES", "ATENCAO PRIMARIA", "ANVISA", "MODELO SISTEMICO", "PREVENCAO PRIMARIA"
];

const descriptions = {
    "SAUDE COLETIVA": "Campo do conhecimento que visa promover a saúde da população.",
    "NHS": "Sistema Nacional de Saúde do Reino Unido.",
    "VACINA": "Substância que estimula o sistema imunológico.",
    "ILUMINISMO": "Movimento filosófico que incentivou o pensamento científico.",
    "COLERA": "Doença infecciosa transmitida por água contaminada.",
    "SUS": "Sistema Único de Saúde brasileiro.",
    "CHADWICK": "Pioneiro na saúde pública e saneamento.",
    "PREPATOGENICO": "Fase antes do início da doença.",
    "PATOGENICO": "Fase em que a doença já se manifesta.",
    "PREVENCAO": "Ações para reduzir riscos e evitar doenças.",
    "NUTRICIONISTA": "Profissional que orienta sobre alimentação.",
    "SAUDE MENTAL": "Estado de bem-estar psicológico.",
    "EQUIDADE": "Distribuição justa de recursos de saúde.",
    "UNIDADE": "Local de atendimento em um sistema de saúde.",
    "IMUNIZACAO": "Processo de tornar alguém imune a uma doença.",
    "BEM ESTAR": "Estado geral de saúde física e mental.",
    "PACTO PELA SAUDE": "Acordo para melhorar o SUS no Brasil.",
    "DETERMINANTES": "Fatores que influenciam a saúde.",
    "ATENCAO PRIMARIA": "Primeiro nível de contato com o sistema de saúde.",
    "ANVISA": "Agência reguladora da vigilância sanitária no Brasil.",
    "MODELOSISTEMICO": "Abordagem que vê a saúde como um sistema integrado.",
    "PREVENCAO PRIMARIA": "Ações para evitar o surgimento de doenças."
};

const staticGrid = [
    ["A", "C", "B", "N", "P", "I", "D", "I", "M", "U", "N", "I", "Z", "A", "Ç", "Ã", "O", "S", "N", "T", "E", "T"],
    ["T", "H", "E", "M", "O", "D", "E", "L", "O", "S", "I", "S", "T", "E", "M", "I", "C", "O", "N", "O", "B", "N"],
    ["E", "U", "T", "A", "L", "E", "A", "R", "O", "D", "E", "T", "E", "R", "M", "I", "N", "A", "N", "T", "E", "S"],
    ["N", "S", "Á", "U", "D", "E", "M", "E", "N", "T", "A", "L", "T", "E", "N", "W", "V", "S", "D", "O", "M", "L"],
    ["Ç", "Y", "R", "V", "C", "O", "E", "O", "G", "H", "A", "E", "O", "S", "E", "U", "A", "C", "O", "U", "E", "R"],
    ["Ã", "Y", "I", "N", "T", "E", "A", "N", "F", "U", "N", "C", "Q", "E", "T", "S", "C", "C", "F", "A", "S", "E"],
    ["O", "S", "P", "A", "C", "T", "O", "P", "E", "L", "A", "S", "A", "U", "D", "E", "I", "E", "T", "E", "T", "O"],
    ["P", "E", "U", "E", "R", "A", "T", "I", "N", "U", "T", "R", "I", "C", "I", "O", "N", "I", "S", "T", "A", "H"],
    ["R", "A", "U", "S", "F", "X", "O", "H", "C", "P", "H", "S", "U", "N", "I", "D", "A", "D", "E", "I", "R", "E"],
    ["I", "N", "S", "T", "A", "F", "N", "G", "H", "B", "G", "A", "N", "S", "O", "L", "A", "H", "D", "B", "A", "E"],
    ["M", "A", "F", "E", "N", "N", "E", "I", "A", "L", "C", "U", "N", "E", "I", "S", "C", "D", "E", "A", "A", "E"],
    ["A", "U", "E", "R", "V", "H", "E", "E", "D", "H", "H", "P", "D", "R", "E", "L", "N", "E", "E", "H", "O", "V"],
    ["R", "T", "T", "N", "I", "G", "S", "F", "W", "P", "R", "É", "P", "A", "T", "O", "G", "E", "N", "I", "C", "O"],
    ["I", "A", "N", "L", "S", "P", "E", "E", "I", "L", "U", "M", "I", "N", "I", "S", "M", "O", "A", "I", "H", "U"],
    ["A", "L", "M", "N", "A", "T", "H", "I", "C", "E", "U", "A", "H", "E", "L", "C", "O", "L", "E", "R", "A", "I"],
    ["U", "R", "U", "N", "T", "L", "A", "A", "K", "S", "A", "U", "D", "E", "C", "O", "L", "E", "T", "I", "V", "A"]
];

const grid = document.getElementById("word-grid");
const wordList = document.getElementById("word-list");
const description = document.getElementById("word-description");
const title = document.getElementById("word-title");
const modal = document.getElementById("word-modal");
const closeBtn = document.getElementById("close-btn");

grid.innerHTML = staticGrid.map(row => 
    row.map(letter => `<div class='cell'>${letter}</div>`).join("")
).join("");

function displayWordList() {
    wordList.innerHTML = "";  // Limpar a lista antes de adicionar novamente as palavras
    words.forEach(word => {
        let listItem = document.createElement("li");
        listItem.textContent = word;
        listItem.onclick = () => {
            // Atualiza a descrição da palavra no modal
            title.textContent = word;
            console.log(descriptions[word])
            description.textContent = descriptions[word];
            modal.style.display = "block"; // Exibe o modal quando a palavra for clicada
        };
        wordList.appendChild(listItem);
    });
}

displayWordList();


// Fecha o modal quando o usuário clicar no "X"
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Fecha o modal quando o usuário clicar fora da área do modal
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Fecha o modal ao pressionar a tecla "Esc"
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});

// Função para selecionar ou desmarcar uma célula ao clicar
grid.addEventListener("click", (event) => {
    const clickedCell = event.target;

    if (clickedCell.classList.contains("cell")) {
        // Alterna a classe 'selected' na célula clicada
        clickedCell.classList.toggle("selected");
    }
});