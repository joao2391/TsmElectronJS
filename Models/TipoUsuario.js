class TipoUsuario{

    _id;
    _tipo;
    _descricao;
    _usuarios;

    set id(value){
        this._id = value;
    }

    set tipo(value){
        this._tipo = value;
    }

    set descricao(value){
        this._descricao = value;
    }

    set usuarios(value){
        this._usuarios = value;
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

    get usuarios(){
        return this._usuarios;
    }
    
}