class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque genérico";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias (objetos) da classe para testar
const mago = new Heroi("Geralt", 100, "mago");
const guerreiro = new Heroi("Arthur", 35, "guerreiro");
const monge = new Heroi("Shaolin", 25, "monge");
const ninja = new Heroi("Hanzo", 20, "ninja");

// Chamando o método atacar para cada um
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();