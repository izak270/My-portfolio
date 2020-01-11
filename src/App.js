
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import Page from './components/Page'
import ani from './img/ani.png'
import mincraft from './img/mincraft.png'
import memoryGame from './img/memorygame.png'
import example from './img/example.jpg'

export default class App extends Component {
  state = {
    // kind = [intrudaction],
    headerClass: ['headerContainer', 'headerContainerScroll'],
    index: 0
  }
  // makePositionFixed(){

  // }
  render() {
    return (
      <div>
        <Header headerClass={this.state.headerClass[0]}></Header>
        <Page id="cover" kind='intrudaction page' pic={ani} class1='myself' header="Hi my name is izak" text="Ilike to present my self"></Page>
        <Page id='myWorks' kind='myWorks page' header='my works'  pic={mincraft} pic1={memoryGame} pic2={example} class1='works' ></Page>
        <Page id='education' kind='intrudaction page' ></Page>
      </div>
    )
  }
}

