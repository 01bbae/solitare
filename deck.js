import Card from './card.js';


class DeckofCards{
    constructor(){
        this.deck=[];
        for(let i=1; i<=13; ++i){      
            this.deck.push(new Card(i,'red', 'hearts' ));
        }
        for(let i=1; i<=13; ++i){      
            this.deck.push(new Card(i, 'red', 'diamonds'));
        }
        for(let i=1; i<=13; ++i){      
            this.deck.push(new Card(i, 'black', 'clubs'));
        }
        for(let i=1; i<=13; ++i){      
            this.deck.push(new Card(i, 'black', 'spades'));
        }



        // let color;
        // let symbol;
        // for(let i=1;i<=13;++i){
        //     for(let j=0; j<4; ++j){
        //         if(j%2 == 0){
        //             color = 'red';
        //             if(j==0){
        //                 symbol = 'hearts';
        //             }else{
        //                 symbol = 'diamonds';
        //             }
        //         }else{
        //             color = 'black';
        //             if(j==1){
        //                 symbol = 'spades';
        //             }else{
        //                 symbol = 'clubs';
        //             }
        //         }

        //         this.deck.push(new Card(i, color, symbol));
        //     }
        // }

    }

    get Deck(){
        return this.deck;
    }

    set Deck(deck){
        this.deck = deck;
    }

    shuffle(){
        for(let i=0; i<100; ++i){
            var lengthofunshuffled = this.deck.length;
            while(lengthofunshuffled > 1){
                let temp = Math.floor(Math.random()*lengthofunshuffled)
                let tempobj = this.deck[temp];
                
                this.deck[temp] = this.deck.pop();
                this.deck.push(tempobj);
                lengthofunshuffled--;
            }
        }
        return this.deck;
    }

}


export default DeckofCards