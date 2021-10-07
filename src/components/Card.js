import React from "react";

class Card extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"}>
                    <img src={`https://robohash.org/${this.props.email}${this.props.id}`} alt={"robot"}/>
                    <div className={"tc"}>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.email}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Card;
