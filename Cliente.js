export class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    //Com este construtor a a gente consegue fazer uma propriedade que só vai ser atribuida no momento de criação
    // e depois nunca mais pode ser atribuida.
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}