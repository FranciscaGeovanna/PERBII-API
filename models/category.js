class Category {
    constructor(id, description) {
        this._id = id;
        this._description;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    get description(){
        return this._description;
    }

    set description(descricao){
        this._description = descricao;
    }
}

export default Category;
