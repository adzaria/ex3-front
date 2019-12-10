import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      allListOfCharacters: {}
    }
  }

  componentDidMount() {
    const response = fetch('http://localhost:8080/filter/characters', {
      method: 'GET',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'} 
    })
      .then((response) => response.json())
      .then((fetched => {
        this.setState({
          allListOfCharacters: fetched
        })
      }))
  }

  render() {

      return (
        <>
          <h2>List of listOfCharacters</h2>
          <ul>
            {Object.keys(this.state.allListOfCharacters).map((listOfCharacters: any) => {
              return this.state.allListOfCharacters[listOfCharacters].map((character: any) => {
                  return <li>{character.name}</li>
              })
            })}
          </ul>
        </>
      )
  }

}
