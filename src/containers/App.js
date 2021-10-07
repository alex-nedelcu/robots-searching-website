import React from "react";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";
import ErrorBoundary from "../components/ErrorBoundary.js"
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    // in methods not defined by react always use the arrow function structure
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
                robot.username.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
                robot.email.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <React.Fragment>
                <div className={"tc"}>
                    <h1 className={"f1"}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/*<Scroll>*/}
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                    {/*</Scroll>*/}
                </div>
            </React.Fragment>
        );
    }

    // this is the function used to make requests
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json();
        }).then(fetchedRobots => {
            this.setState({robots: fetchedRobots});
        })
    }
}

export default App;
