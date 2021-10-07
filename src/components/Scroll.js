import React from "react";

class Scroll extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{
                    overflowY: "scroll",
                    border: "0.3px solid black",
                    height: "800px"
                }}>
                    {this.props.children} {/* this.props.children is the list of cards, which is a child of the scrollbar */}
                </div>
            </React.Fragment>
        );
    }
}

export default Scroll;