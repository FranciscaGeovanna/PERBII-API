class Product {
    constructor(id, name, category, price) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._price = price;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }
    
    get name(){
        return this._name;
    }

    set name(nome){
        this._name = nome;
    }

    get category(){
        return this._category;
    }

    set category(categoria){
        this._category = categoria;
    }

    get price(){
        return this._price;
    }

    set price(preco){
        this._price = preco;
    }
}

export default Product;