class Funcionario{

    _id;
    _nome;
    _rg;
    _cpf;
    _endereco;
    _telefone;
    _celular;
    _email;
    _dataNascimento;

    set id(value){

        this._id = value;
    }

    set nome(value){

        this._nome = value;
    }

    set rg(value){

        this._rg = value;
    }

    set cpf(value){

        this._cpf = value;
    }

    set endereco(value){

        this._endereco = value;
    }

    set telefone(value){

        this._telefone = value;
    }

    set celular(value){

        this._celular = value;
    }

    set email(value){

        this._email = value;
    }

    set dataNascimento(value){

        this._dataNascimento = value;
    }

    get id(){
        return this._id;
    }

    get nome(){
        return this._nome;
    }

    get rg(){
        return this.rg;
    }

    get cpf(){
        return this._cpf;
    }

    get endereco(){
        return this._endereco;
    }

    get telefone(){
        return this._telefone;
    }

    get celular(){
        return this._celular;
    }

    get email(){
        return this._email;
    }

    get dataNascimento(){
        return this._dataNascimento;
    }

    

}