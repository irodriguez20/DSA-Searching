import React from "react";
import "./TextBox.css";
import { SearchContext } from './contextAPI'
import propTypes from 'prop-types';


class TextBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }
    }

    static contextType = SearchContext;


    handleChange(event) {
        console.log(event.target.value)
        this.setState({ searchTerm: event.target.value })
    }


    render() {
        return (
            <SearchContext.Provider value={this.state}>
                <div>
                    <form>
                        <div className='formDiv'>
                            <label>Search For</label>
                        </div>
                        <div className='formDiv'>
                            <input type="text" name="searchFor" id="searchFor" value={this.state.searchTerm} onChange={(e) => this.handleChange(e)} required></input>
                        </div>
                        <div className='formDiv'>
                            <button type="submit" onClick={(e) => {
                                e.preventDefault()
                                this.props.submitClick();
                            }}>Search</button>
                        </div>
                    </form>
                </div>
            </SearchContext.Provider>
        );
    }
}

export default TextBox;
