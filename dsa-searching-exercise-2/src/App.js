import React from 'react';
import './App.css';
import { STORE } from './STORE';
import './TextBox.css'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      found: '',
      error: false,
      notFound: ''
    }
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ searchTerm: event.target.value })
  }

  submitClick() {

    for (let i = 0; i < STORE.length; i++) {
      if (STORE[i] == this.state.searchTerm) {
        this.setState({ found: `You found the value in ${i + 1} steps!` });
      }

      if (STORE[i] != this.state.searchTerm) {
        this.setState({ error: true })
      }
    }
    if (this.state.error === true) {
      this.setState({ notFound: `Can't find ${this.state.searchTerm}` });
      window.alert(this.state.notFound);
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          DSA-Searching Exercise 2
      </header>

        <section className="TextBox">
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
                this.submitClick();
              }}>Search</button>
            </div>
          </form>
        </section>
        <div className="Results">
          <h3>Results</h3>
          <p>{this.state.found}</p>
        </div>
      </div>
    );
  }
}

export default App;
