class RelatorioVenda{

    _id;
    _data;
    _total;
    _vendas;    
    

    set id(value){
        this._id = value;
    }

    set data(value){
        this._data = value;
    }

    set total(value){
        this._total = value;
    }

    set vendas(value){
        this._vendas = value;
    }

    get id(){
        return this._id
    }

    get data(){
        return this._data
    }

    get total(){
        return this._total
    }

    get vendas(){
        return this._vendas
    }
}