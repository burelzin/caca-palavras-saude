const words = [
    "SAUDECOLETIVA", "NHS", "VACINA", "ILUMINISMO", "COLERA", "SUS", "CHADWICK", 
    "PREPATOGENICO", "PATOGENICO", "PREVENCAO", "NUTRICIONISTA", "SAUDEMENTAL", 
    "EQUIDADE", "UNIDADE", "IMUNIZACAO", "BEMESTAR", "PACTOPELASAUDE", 
    "DETERMINANTES", "ATENCAOPRIMARIA", "ANVISA", "MODELOSISTEMICO", "PREVENCAOPRIMARIA"
];

const staticGrid = [
    ["S", "A", "U", "D", "E", "C", "O", "L", "E", "T", "I", "V", "A", "X", "X"],
    ["X", "N", "H", "S", "X", "V", "A", "C", "I", "N", "A", "X", "X", "X", "X"],
    ["I", "L", "U", "M", "I", "N", "I", "S", "M", "O", "X", "X", "X", "X", "X"],
    ["C", "O", "L", "E", "R", "A", "X", "S", "U", "S", "X", "X", "X", "X", "X"],
    ["C", "H", "A", "D", "W", "I", "C", "K", "X", "X", "X", "X", "X", "X", "X"],
    ["P", "R", "E", "P", "A", "T", "O", "G", "E", "N", "I", "C", "O", "X", "X"],
    ["P", "A", "T", "O", "G", "E", "N", "I", "C", "O", "X", "X", "X", "X", "X"],
    ["P", "R", "E", "V", "E", "N", "C", "A", "O", "X", "X", "X", "X", "X", "X"],
    ["N", "U", "T", "R", "I", "C", "I", "O", "N", "I", "S", "T", "A", "X", "X"],
    ["S", "A", "U", "D", "E", "M", "E", "N", "T", "A", "L", "X", "X", "X", "X"],
    ["E", "Q", "U", "I", "D", "A", "D", "E", "X", "X", "X", "X", "X", "X", "X"],
    ["U", "N", "I", "D", "A", "D", "E", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["I", "M", "U", "N", "I", "Z", "A", "C", "A", "O", "X", "X", "X", "X", "X"],
    ["B", "E", "M", "E", "S", "T", "A", "R", "X", "X", "X", "X", "X", "X", "X"],
    ["P", "A", "C", "T", "O", "P", "E", "L", "A", "S", "A", "U", "D", "E", "X"],
];

const grid = document.getElementById("word-grid");
const wordList = document.getElementById("word-list");
const description = document.getElementById("word-description");

function generateStaticGrid() {
    for (let i = 0; i < staticGrid.length; i++) {
        for (let j = 0; j < staticGrid[i].length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = staticGrid[i][j];
            grid.appendChild(cell);
        }
    }
}

function displayWordList() {
    words.forEach(word => {
        let listItem = document.createElement("li");
        listItem.textContent = word;
        listItem.onclick = () => {
            description.textContent = `A palavra "${word}" está no caça-palavras!`;
        };
        wordList.appendChild(listItem);
    });
}

generateStaticGrid();
displayWordList();
