const words = [
    "SAUDECOLETIVA", "NHS", "VACINA", "ILUMINISMO", "COLERA", "SUS", "CHADWICK", 
    "PREPATOGENICO", "PATOGENICO", "PREVENCAO", "NUTRICIONISTA", "SAUDEMENTAL", 
    "EQUIDADE", "UNIDADE", "IMUNIZACAO", "BEMESTAR", "PACTOPELASAUDE", 
    "DETERMINANTES", "ATENCAOPRIMARIA", "ANVISA", "MODELOSISTEMICO", "PREVENCAOPRIMARIA"
];

const gridSize = 15;
const grid = document.getElementById("word-grid");
const wordList = document.getElementById("word-list");
const description = document.getElementById("word-description");
let gridArray = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function canPlaceWord(word, row, col, direction) {
    let dr = direction[0], dc = direction[1];
    for (let i = 0; i < word.length; i++) {
        let newRow = row + dr * i, newCol = col + dc * i;
        if (newRow < 0 || newRow >= gridSize || newCol < 0 || newCol >= gridSize || (gridArray[newRow][newCol] !== "" && gridArray[newRow][newCol] !== word[i])) {
            return false;
        }
    }
    return true;
}

function placeWord(word) {
    const directions = [[0, 1], [1, 0], [1, 1], [-1, 1]];
    let placed = false;
    while (!placed) {
        let row = getRandomInt(gridSize);
        let col = getRandomInt(gridSize);
        let direction = directions[getRandomInt(directions.length)];
        if (canPlaceWord(word, row, col, direction)) {
            let dr = direction[0], dc = direction[1];
            for (let i = 0; i < word.length; i++) {
                gridArray[row + dr * i][col + dc * i] = word[i];
            }
            placed = true;
        }
    }
}

words.forEach(placeWord);

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (gridArray[i][j] === "") {
                gridArray[i][j] = String.fromCharCode(65 + getRandomInt(26));
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