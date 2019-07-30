class Venda{

    _id;
    _sessaoId;
    _valor;
    _data;
    _sessao;

    set id(value){
        this._id = value;
    }

    set sessaoId(value){
        this._sessaoId = value;
    }

    set valor(value){
        this._valor = value;
    }

    set data(value){
        this._data = value;
    }

    set sessao(value){
        this._sessao = value;
    }

    get id(){
        return this._id;
    }

    get sessaoId(){
        return this._sessaoId;
    }

    get valor(){
        return this._valor;
    }

    get data(){
        return this._data;
    }

    get sessao(){
        return this._sessao;
    }
}