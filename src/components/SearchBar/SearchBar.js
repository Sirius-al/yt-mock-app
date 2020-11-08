import React, {Component} from 'react'

class SearchBar extends Component {

    state = {term: ''}
    
    onInputChange = (e) => {
        this.setState({term: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term)
        // console.log(this.state.term)
    } 


    render() {
        
        return (
          <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label>Search For Videos</label>
                <input
                  type="text"
                  placeholder={this.props.placeholder}
                  value={this.state.term}
                  onChange={this.onInputChange}
                  />
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar