import React from 'react';
import Example from '../example/Example';
import States from '../states/States';
import './switch.css';

const state = 'State';
const example = 'Example';

class Switch extends React.Component {
    state = {
        window: state
    }

    WindowChange = () => {
        var newState = this.state.window == state ? example : state;
        this.setState({window: newState});
    }
    render () {
        return (
            <div>
                <button className='switch-button' 
                    onClick={this.WindowChange}>
                        {`Switch to ${this.state.window == state ? example : state} view`} 
                </button>
                {this.state.window == state ? <States /> : <Example />}
            </div>
        );
    }
}
export default Switch;