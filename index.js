const readline = require("readline");

// Configuração do readline para capturar o input do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntar o nome do herói
rl.question("Digite o nome do herói: ", (nome) => {
    // Perguntar a quantidade de experiência (XP)
    rl.question("Digite a quantidade de XP: ", (xp) => {
        xp = parseInt(xp); // Converter o XP para número
        let nivel;

        // Estrutura de decisão para determinar o nível com base no XP
        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp <= 2000) {
            nivel = "Bronze";
        } else if (xp <= 5000) {
            nivel = "Prata";
        } else if (xp <= 7000) {
            nivel = "Ouro";
        } else if (xp <= 8000) {
            nivel = "Platina";
        } else if (xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Exibir a mensagem final
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

        // Encerrar o readline
        rl.close();
    });
});