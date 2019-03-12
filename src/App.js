import React, {Component} from 'react';
import './App.css';
import Form from "./components/Form";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            name: 'Register',
            disabledButton: false
        }
        this.registerButton = this.registerButton.bind(this);
        this.updateDisabledButton = this.updateDisabledButton.bind(this);
    }

    registerButton = () => {
        let show = this.state.show === true;
        show ? this.setState(prevState => ({show: !prevState.show, name: '<<Back'})) :
            this.setState(prevState => ({show: !prevState.show, name: 'Register', disabledButton: false}))
    }

    updateDisabledButton = (value) => {
        this.setState({disabledButton: value})
    }

    render() {
        const {name, show} = this.state;
        return (
            <div className="App">
                <div>
                    <div>
                        {show ? <Form
                            name={name}
                            registerButton={this.registerButton}
                            updateDisabledButton={this.updateDisabledButton}/> : null}
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={!this.state.disabledButton}
                            onClick={this.registerButton}>{this.state.name}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
