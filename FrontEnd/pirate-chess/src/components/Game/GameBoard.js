import React, {Component} from 'react';
import Tile from './tile';
import * as Constants from './Constants';
import ReactDOM from 'react-dom'
import PickURL from "./PickURL";



class GameBoard extends Component {
    /**
     * @constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.imageClick = this.imageClick.bind(this);
        this.renderBoard = this.renderBoard.bind(this);

        this.state = {
            board: Constants.setBoard(),
            time: 10,
            selectTile: false,
            myMove: false,
            myPieces: null
        }
    }
    /**
     * componentDidMount Game websocket
     */
    componentDidMount() {
        window.wSocket.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected');
            let m = Math.round(Math.random());
            let text;
            if(m > 1){
                text = `{"side": "White"}`;
                this.setState({myPieces: 'White'})
            }else{
                text = `{"side": "Black"}`;
                this.setState({myPieces: 'Black'})
            }
            window.wSocket.send(text);
        };
        /**
         *
         * @param evt
         */
        window.wSocket.onmessage = evt => {
            console.log('Received data: ' + evt.data);

            let obj = JSON.parse(evt.data);
            if (obj.side != null) {
                console.log()
                // if (obj.side === this.state.myPieces) {
                //     let m = Math.round(Math.random());
                //     let text;
                //     if(m > 1){
                //         text = `{"side": "White"}`;
                //         this.setState({myPieces: 'White'})
                //     }else{
                //         text = `{"num": "Black"}`;
                //         this.setState({myPieces: 'Black'})
                //     }
                //     window.wSocket.send(text);
                // }
            } else {
                Constants.moveHandler.receiveMove(Constants.gameboard[obj.Move[0].y][obj.Move[0].x],
                                                Constants.gameboard[obj.Move[1].y][obj.Move[1].x]);

                this.setState({board: Constants.gameboard});

                console.log(ReactDOM.findDOMNode(this));
            }

            console.log(this.state.myPieces)
        };
        /**
         *
         */
        window.wSocket.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss

        }

    }

    /**
     *
     * @param Tile
     * @private
     */
    imageClick(Tile) {
        this.setState({board: Constants.gameboard})
    }

    renderBoard() {
        return (this.state.board.map(row => (
                row.map(tile => {
                    return (
                        <div ref={tile.id} key={tile.id}>
                            <Tile ref={tile.id} id={tile.id} x={tile.x} y={tile.y} color={tile.color}
                                  piece={tile.piece} selectedTile={tile.selectedTile} clickTile={tile}
                                  imageClick={this.imageClick}/>
                        </div>
                    )
                })
            )
        ))
    }


    render() {
        console.log("render method has been called")
        return (
            <div className='gamePage'>
               <PickURL/>
               {/*// <Timer/>*/}
                <div className='flex-row'>
                    {[Constants.gameboard[0][0], Constants.gameboard[1][0], Constants.gameboard[2][0],
                        Constants.gameboard[3][0], Constants.gameboard[4][0], Constants.gameboard[5][0],
                        Constants.gameboard[6][0], Constants.gameboard[7][0]].map(tile => {
                        return (<div className='tile'>
                            <p style={Constants.style.OrangeTile} className={"tile"}>{`${tile.id}`}</p>
                        </div>)
                    })}

                </div>

                <div ref={'board'} className='gameBoard'>
                    <div className="grid">
                        {this.renderBoard()}
                    </div>
                    <div className="grid">
                        {Constants.gameboard[7].map(tile => {
                            return (<div className='tile'>
                                <p style={Constants.style.OrangeTile} className={"tile"}>{`${tile.id}`}</p>
                            </div>)
                        })}
                    </div>
                </div>


            </div>
        )
    }

    // renderPiece(tile) {
    //     if (tile.getSelectedTile() === true) {
    //         if (tile.getPiece() !== null) {
    //             return (<div className={"grid-cell"} key={`${tile.getId()}`}>
    //                 <img style={Constants.style.GreenTile} className={"tile"}
    //                      src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
    //                      alt={`${tile.getId()}`}/>
    //             </div>)
    //         }
    //         return (<div className={"grid-cell"} key={`${tile.getId()}`}>
    //             <img className={"tile"}
    //                  src={'./images/BlackTile.png'} onClick={() => this._imageClick(tile)}
    //                  alt={`${tile.getId()}`}/>
    //         </div>)
    //     }
    //     // -------------------------------------------------- obove needs to be re done
    //     if (tile.getPiece() !== null) {
    //         if (tile.getColor() === "OrangeTile") {
    //             return (<div className={"grid-cell"} key={`${tile.getId()}`}>
    //                     <img style={Constants.style.OrangeTile} className={"tile"}
    //                          src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
    //                          alt={`${tile.getId()}`}/>
    //                 </div>
    //             )
    //         } else {
    //             return (
    //                 <div className={"grid-cell"} key={`${tile.getId()}`}>
    //                     <img style={Constants.style.WhiteTile} className={"tile"}
    //                          src={`./images/${tile.getPiece().getName()}.png`} onClick={() => this._imageClick(tile)}
    //                          alt={`${tile.getId()}`}/>
    //                 </div>
    //             )
    //         }
    //     } else {
    //         if (tile.getColor() === "OrangeTile") {
    //             return (<div className={"grid-cell"} key={`${tile.getId()}`}>
    //                 <img src='./images/OrangeTile.png' className={"tile"} onClick={() => this._imageClick(tile)}/>
    //             </div>)
    //         } else if (tile.getColor() === "WhiteTile") {
    //             return (<div className={"grid-cell"} key={`${tile.getId()}`}>
    //                 <img src='./images/WhiteTile.png' className={"tile"} onClick={() => this._imageClick(tile)}/>
    //             </div>)
    //         }
    //     }
    //     console.log(tile)
    // }

}

export default GameBoard





