import React from 'react';

class SearchBar extends React.Component {

    state = { term: "" };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onNextSubmit(this.state.term);
    }

    render(){
        const { term } = this.state;
        return(
            <form onSubmit={this.onFormSubmit} className="d-flex col-lg-4">
                <input className="form-control me-1 bg-black text-white col-12" value={term} onChange={e => this.setState({ term: e.target.value })} type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit"><i className='bi bi-search'></i></button>
            </form>
        );
    }
}

export default SearchBar;