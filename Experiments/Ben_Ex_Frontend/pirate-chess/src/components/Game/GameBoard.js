import React, {Component} from 'react';
import getPieces from "./getPieces";


class GameBoard extends Component{
    constructor(props){
        super(props);
        this.popTile = this.popTile.bind(this);
    }
    state = {
       board: this.popTile(),
        time: 10,
        players: [{
           player: 1,
           type: 'white'
         },{
           player: 2 ,
           type: 'black'
        }]


    };
    popTile(){
        var tileArr:any =  [[],[],[],[],
            [],[],[],[]];
        var i,j;
            for(i = 0; i < 8; i++) {
                for(j = 0; j < 8; j++) {
                    if(j%8 === 0){
                        tileArr[i].push(new tile({
                            Id: i,
                            piece: "null",
                            color: this.getPrev(tileArr, i,j).getColor()
                        }));
                    }else if(this.getPrev(tileArr,i,j).getColor() !== "dark"){
                        tileArr[i].push(new tile({
                            Id: i,
                            piece: "null",
                            color: "dark"
                        }));

                    }else if(this.getPrev(tileArr,i,j).getColor() !== "light"){
                        tileArr[i].push(new tile({
                            Id: i,
                            piece: "null",
                            color: "light"
                        }));
                    }
                }
            }
        console.log(tileArr);
        //SetBoard(tileArr);
        return tileArr;
    }
    getPrev(tileArr, row, col){

        if(row === 0 && col === 0){
            return(new tile({
                Id: 0,
                piece: "null",
                color: "light",}));
        }else if(col === 0) {
            //console.log("i:" + row+" "+"j: " + col);
            return(tileArr[row-1][7])
        }else{
            //console.log("i:" + row+" "+"j: " + col);
            return(tileArr[row][col-1])
            }
        }
    render(){
        return(
            <div className="gamePage">
                    <div className="grid">
                        {
                            this.state.board.map(row =>(
                               row.map(tile =>(
                                    <div className={"grid-cell"}>
                                        <img className={"tile"}
                                             src = {`./images/${tile.getColor()}-board.jpg`}/>
                                    </div>
                                    ))
                            ))

                        }
                    </div>
                <div className="grid">
                    { this.state.board.map(row =>(
                        row.map(tile =>(
                            <div className={"grid-cell"}>
                                <img className={"tile"}
                                     src = {`./images/${tile.getPiece()}-board.jpg`}/>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        )

    }
}
export default GameBoard;

class tile extends Component{
    constructor(props){
        super(props);
        this.state = {
            Id: props.Id,
            piece: props.piece,
            color: props.color};
        this.getColor = this.getColor.bind(this);
        this.getId = this.getId.bind(this);
        this.getpiece = this.getPiece.bind((this));
    };
    state = {
        Id:"",
        piece: "",
        color: null,

    };
    getColor(){
        return(this.state.color);
    }
    getPiece(){
        return(this.state.piece);
    }

    getId(){
        return(this.state.Id)
    }
}

function SetBoard(tileArr){
    var Whitepawns = tileArr[2];
    var Blackpawns = tileArr[7];
    Whitepawns.map(tile =>{
       this.tile.setState(this.piece === "test9")
        }
    );
    Blackpawns.map(tile =>{
        this.tile.setState(this.piece === "test9")
        }
    );

}
