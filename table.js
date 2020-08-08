import DeckofCards from './deck.js';
class Table{
    constructor(){
        // var stacks = new Array(2);
        // for(let i=0;i<stacks.length;++i){
        //     stacks[i] = new Array(7);
        // }
        // stacks.fill(0);


        var stacks = [[],[[],[],[],[],[],[],[]]]
        var pile = [[], []]


        // stack = [
        //     [7 elements],
        //     [[0 elements],[1 element],[2 elements],[3 elements],[4 elements],[5 elements],[6 elements]]
        // ]
        // one 2d array partial 3d array
        // consisting of the 7 stacks of the board
        // two arrays deep: one for the visible (index 0) and one for the hidden cards (index 1)

        // one 1d array
        // consisting of the wastepile: visible and hidden (0 and 1 respectively)


        var cardDeck = new DeckofCards();
        cardDeck.shuffle();

        for(let i=0;i<7;++i){
            stacks[0].push(cardDeck.Deck.pop());
            for(let j=0;j<i;++j){
                stacks[1][i].push(cardDeck.Deck.pop());
            }
        }
        // console.log(stacks);
        // console.log(cardDeck.Deck);
        while(cardDeck.Deck.length > 0){
            pile[0].push(cardDeck.Deck.pop());  //this operation reverses the deck (not harmful but keep in mind)
        }

        //console.log(pile);
    }


}




export default Table