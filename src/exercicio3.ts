class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    }    
}
const carro = new Carro('BMW','A3',2000);
console.log(carro.detalhes)