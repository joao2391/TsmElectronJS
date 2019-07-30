class Pagamento{

    _id;
    _tipo;
    _descricao;
    _status;

    set id(value){

        this._id = value;
    }

    set tipo(value){

        this._tipo = value;
    }

    set descricao(value){

        this._descricao = value;
    }

    set status(value){

        this._status = value;
    }

    get id(){
        return this._id;
    }

    get tipo(){
        return this._tipo;
    }

    get descricao(){
        return this._descricao;
    }

    get status(){
        return this._status;
    }

}