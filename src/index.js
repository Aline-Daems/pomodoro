import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                {" "}
                {`hello`} {this.props.name}
            </div>
        );
    }
}

const mountNode = document.querySelector("#app");
ReactDOM.render(<HelloMessage name={"Aline"} />, mountNode);
