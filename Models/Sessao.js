class Sessao{

    _id;
    _data;
    _preco;
    _clienteId;
    _formaPagamentoId;
    _cliente;
    _formaPagamento;

    set id(value){
        this._id = value;
    }

    set data(value){
        this._data = value;
    }

    set preco(value){
        this._preco = value;
    }

    set clienteId(value){
        this._clienteId = value;
    }

    set formaPagamentoId(value){
        this._formaPagamentoId = value;
    }

    set cliente(value){
        this._cliente = value;
    }

    set cliente(value){
        this._cliente = value;
    }

    get id(){
        return this._id;
    }

    get data(){
        return this._data;
    }

    get preco(){
        return this._preco;
    }

    get clienteId(){
        return this._clienteId;
    }

    get formaPagamentoId(){
        return this._formaPagamentoId;
    }

    get cliente(){
        return this._cliente;
    }

    get formaPagamentoId(){
        return this._formaPagamentoId;
    }

}