class Card {
    constructor(value, color, symbol) {
        this.value = value;
        this.color = color;
        this.symbol = symbol;
    }

    get Value(){
        return this.value;
    }

    get Color(){
        return this.color;
    }

    get Symbol(){
        return this.symbol;
    }

    set Value(value){
        this.value = value;
    }

    set Color(color){
        this.color = color;
    }

    set Symbol(symbol){
        this.symbol = symbol;
    }

}

export default Card
