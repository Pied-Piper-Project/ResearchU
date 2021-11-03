import React from "react";
import ReactDOM from "react-dom";
import ResearchResult from "./ResearchResult";

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {value: this.props.cur}
    }

    render() {
        return (
            <form>
                <label>
                    <select value={this.state.value} onChange={this.props.update}>
                        <option value="Descending">New First</option>
                        <option value="Ascending">Old First</option>
                    </select>
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <OrderForm />,
    document.getElementById('root')
);

export default OrderForm;