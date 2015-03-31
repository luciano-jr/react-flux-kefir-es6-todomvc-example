import React from 'react';
const ENTER_KEY_CODE = 13;

export default class TodoTextInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || ''
        };
    }

    render() {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                onBlur={this._save.bind(this)}
                onChange={this._onChange.bind(this)}
                onKeyDown={this._onKeyDown.bind(this)}
                value={this.state.value}
                autoFocus={true}
                />
        );
    }

    /**
     * Invokes the callback passed in as onSave, allowing this component to be
     * used in different ways.
     */
    _save() {
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        });
    }

    _onChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    _onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this._save();
        }
    }
}