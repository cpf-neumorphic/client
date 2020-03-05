import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import Popup from "reactjs-popup";

const addCart = () => {};

class Favourites_addbutton extends Component {
  render() {
    return (
      <div className="container">
        <Button className="round" onClick="addCart">
          <MdAddCircle />
        </Button>
      </div>
    );
  }
}

export default Favourites_addbutton;
