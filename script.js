const words = [
    "SAUDE", "NHS", "VACINA", "ILUMINISMO", "COLERA", "SUS", "CHADWICK", 
    "PREPATOGENICO", "PATOGENICO", "PREVENCAO", "NUTRICIONISTA", "SAUDEMENTAL", 
    "EQUIDADE", "UNIDADE", "IMUNIZACAO", "BEMESTAR", "PACTOPELASAUDE", 
    "DETERMINANTES", "ATENCAOPRIMARIA", "ANVISA", "MODELOSISTEMICO", "PREVENCAOPRIMARIA"
];

const gridSize = 12;
const grid = document.getElementById("word-grid");
const wordList = document.getElementById("word-list");
const description = document.getElementById("word-description");
let gridArray = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));

function placeWord(word) {
    let placed = false;
    while (!placed) {
        let row = Math.floor(Math.random() * gridSize);
        let col = Math.floor(Math.random() * (gridSize - word.length));
        if (gridArray[row].slice(col, col + word.length).every(cell => cell === "")) {
            word.split('').forEach((char, index) => gridArray[row][col + index] = char);
            placed = true;
        }
    }
}

words.forEach(placeWord);

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (gridArray[i][j] === "") {
                gridArray[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            }
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = gridArray[i][j];
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

generateGrid();
displayWordList();