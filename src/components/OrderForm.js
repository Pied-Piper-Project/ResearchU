import React from "react";
import ReactDOM from "react-dom";

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Descending'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Descending">Descending</option>
                        <option value="Ascending">Ascending</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <OrderForm />,
    document.getElementById('root')
);