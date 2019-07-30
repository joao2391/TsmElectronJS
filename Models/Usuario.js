class Usuario{

    _id;
    _login;
    _senha;
    _tipoUsuario;
    _tipo;

    set id(value){
        this._id = value;
    }

    set login(value){
        this._login = value;
    }

    set senha(value){
        this._senha = value;
    }

    set tipoUsuario(value){
        this._tipoUsuario = value;
    }

    set tipo(value){
        this._tipo = value;
    }

    get id(){
        return this._id;
    }

    get login(){
        return this._login;
    }

    get senha(){
        return this._senha;
    }

    get tipoUsuario(){
        return this._tipoUsuario;
    }

    get tipo(){
        return this._tipo;
    }
}