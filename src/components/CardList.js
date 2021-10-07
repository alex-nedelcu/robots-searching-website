import React from "react";
import Card from "./Card.js";

const CardList = ({robots}) => { // {robots} -> the props are destructured in the variable "robots"
    const cardsArray = robots.map((user, index) => {
        return <Card key={index} id={user.id} name={user.name} email={user.email}/>;
    })
    return (
        <React.Fragment>
            <div className={"tc"}>
                {cardsArray}
            </div>
        </React.Fragment>
    );
}

export default CardList;
