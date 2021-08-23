/* eslint-disable no-restricted-globals */
import React from 'react';
import styles from './class.module.css';

export default class Greeting extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            name: 'Mary',
            SurName: 'Poppins',
            width: window.innerWidth,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurNameChange = this.handleSurNameChange.bind(this);
        this.handleResize = this.handleResize.bind(this);

    }

    handleNameChange(e) {
        this.setState({name: e.target.value})
    }

    handleSurNameChange(e) {
        this.setState({SurName: e.target.value})
    }

    handleResize() {
        this.setState({
            width: window.innerWidth,
        })
    }
    componentDidMount() {
        document.title = this.state.name + " " + this.state.SurName;
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate() {
        document.title = this.state.name + " " + this.state.SurName;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <section className={styles.section}>
                <label className={styles.row}>
                    {this.state.name}
                    <input 
                        className={styles.nameInput}
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </label>

                <label className={styles.row}>
                    {this.state.SurName}
                    <input 
                        className={styles.nameInput}
                        value={this.state.SurName}
                        onChange={this.handleSurNameChange}
                    />
                </label>

                <label className={styles.row}>
                    {this.state.width}
                </label>
            </section>
        )
    }
}