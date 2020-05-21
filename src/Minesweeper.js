import React, { Component } from 'react';
import './App.css';
import Board from "./componente/Board";
import BoardHead from "./componente/BoardHead"

class Minesweeper extends Component{
  state={
    rows:10,
    columns:10,
    flags:10,
    mines:10,
    time:0
  };
  render(){
    return(
      <div className="minesweeper">
        <h1>Minesweeper Ubi</h1>
        <BoardHead time={this.state.time} flagCount={this.state.flags}/>
        <Board rows={this.state.rows} columns={this.state.columns} mines={this.state.mines} />
      </div>
    )
  }
}


export default Minesweeper;
