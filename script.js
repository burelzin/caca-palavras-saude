const words = [
    "SAUDECOLETIVA", "NHS", "VACINA", "ILUMINISMO", "COLERA", "SUS", "CHADWICK", 
    "PREPATOGENICO", "PATOGENICO", "PREVENCAO", "NUTRICIONISTA", "SAUDEMENTAL", 
    "EQUIDADE", "UNIDADE", "IMUNIZACAO", "BEMESTAR", "PACTOPELASAUDE", 
    "DETERMINANTES", "ATENCAOPRIMARIA", "ANVISA", "MODELOSISTEMICO", "PREVENCAOPRIMARIA"
];

const descriptions = {
    "SAUDECOLETIVA": "Campo do conhecimento que visa promover a saúde da população.",
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
    "SAUDEMENTAL": "Estado de bem-estar psicológico.",
    "EQUIDADE": "Distribuição justa de recursos de saúde.",
    "UNIDADE": "Local de atendimento em um sistema de saúde.",
    "IMUNIZACAO": "Processo de tornar alguém imune a uma doença.",
    "BEMESTAR": "Estado geral de saúde física e mental.",
    "PACTOPELASAUDE": "Acordo para melhorar o SUS no Brasil.",
    "DETERMINANTES": "Fatores que influenciam a saúde.",
    "ATENCAOPRIMARIA": "Primeiro nível de contato com o sistema de saúde.",
    "ANVISA": "Agência reguladora da vigilância sanitária no Brasil.",
    "MODELOSISTEMICO": "Abordagem que vê a saúde como um sistema integrado.",
    "PREVENCAOPRIMARIA": "Ações para evitar o surgimento de doenças."
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
];

const grid = document.getElementById("word-grid");
const wordList = document.getElementById("word-list");

grid.style.gridTemplateColumns = `repeat(22, minmax(25px, 40px))`;
grid.style.gridTemplateRows = `repeat(16, minmax(25px, 40px))`;
grid.style.overflow = "auto";
grid.style.maxWidth = "90vw";
grid.style.display = "grid";
grid.style.margin = "auto";
grid.style.justifyContent = "center";
grid.style.alignItems = "center";

grid.innerHTML = staticGrid.map(row => 
    row.map(letter => `<div class='cell'>${letter}</div>`).join("")
).join("");

function displayWordList() {
    words.forEach(word => {
        let listItem = document.createElement("li");
        listItem.textContent = word;
        listItem.classList.add("word-item");
        listItem.setAttribute("data-description", descriptions[word] || "Descrição não encontrada.");
        wordList.appendChild(listItem);
    });
}

document.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("word-item")) {
        const popover = document.createElement("div");
        popover.classList.add("popover");
        popover.textContent = event.target.getAttribute("data-description");
        document.body.appendChild(popover);
        popover.style.left = `${event.pageX + 10}px`;
        popover.style.top = `${event.pageY + 10}px`;

        event.target.addEventListener("mouseleave", () => {
            popover.remove();
        }, { once: true });
    }
});

displayWordList();
