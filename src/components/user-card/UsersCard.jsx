import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";

import "./UsersCard.scss";
import ImportantColors from "../../const/important-colors";


export class UsersCard extends Component {
  render() {
    const {name , id , favouriteCard , deleteFavouriteCard ,deleteCard , editUser ,lastName , phoneNumber , importance , favourite} = this.props;
    return (
      <Alert className={`cards bg-${ImportantColors[importance]}`}>
        <div className="user-cards">
          <div className="user-card__left">
            <div className="d-flex left-info gap-3">
              <h3>{importance}:</h3>
              <h3>{name}</h3>
              <h3>{lastName}</h3>
            </div>
            <h4>Phone Number:{phoneNumber}</h4>
          </div>
          <div className="user-card__right">
            {favourite ? <Button onClick={()=> deleteFavouriteCard(id)}  className="bg-light bg-gradient"><img src="/fill-heart.svg" alt="edit" /></Button> : <Button onClick={()=> favouriteCard(id)} className="bg-light bg-gradient"><img src= "/heart.svg" alt="edit" /></Button>}
            <Button onClick={() => editUser(id)} className="bg-warning bg-gradient">
              <img src="/useredit.svg" alt="edit" />
            </Button>
            {<Button onClick={()=> deleteCard(id)} className="bg-danger bg-gradient">
              <img src="/delete.svg" alt="user" />
            </Button> }
          </div>
        </div>
      </Alert>
    );
  }
}

export default UsersCard;
