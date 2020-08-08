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

    get Face(){
        let face;
        if(this.value == 1){
            return 'ace';
        }else if(this.value == 11){
            return 'jack';
        }else if(this.value == 12){
            return 'queen';
        }else if(this.value == 13){
            return 'king';
        }else{
            return this.value;
        }
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
