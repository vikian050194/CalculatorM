export default class Query {
    constructor(items = []){
        this.items = items;
        this.index = -1;
    }

    add(item){
        this.items[this.index++] = item;
    }

    get index(){
        return this.index;
    }

    set index(value){
        this.index = value;
    }

    get isEmpty(){
        return this.index === -1;
    }
}