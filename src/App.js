import React from 'react';
import Requirement from './Requirement'
import './App.css';

export default class App extends React.Component {
  render(){
    return (
    <div>
      <h4>This is a demo for the requirement label</h4>
      <p>The Requirement component is designed to easily create list items where
      certain items are required and certain items are optional. There are
      two props. The label prop is the label for the list item. The required
      prop is used when the user is inputting a required list item</p>
      <p> Here is an example list using the Requirement component </p>
      <h4> List </h4>
      <ul>
      <li><Requirement label = "Item" required = {true}/></li>
      <li><Requirement label = "Item" required = {false} /></li>
      <li><Requirement label = "Item" required = {true} /></li>
      <li><Requirement label = "Item" required  = {false} /></li>
      <li><Requirement label = "Item" required  = {true} /></li>
      </ul>
    </div>
    );
  }
}
