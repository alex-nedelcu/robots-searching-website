import React from "react";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.searchField = props.searchField;
        this.searchChange = props.searchChange;
    }

    render() {
        return (
            <React.Fragment>
                <div className={"pa2"}>
                    <input
                        className={"pa3 ba b--green bg-lightest-blue tc"}
                        type={"search"}
                        placeholder={"Search for a robot"}
                        onChange={this.searchChange}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBox;
