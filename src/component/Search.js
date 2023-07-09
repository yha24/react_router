import React, { Component } from 'react';

class Search extends Component {
    onstructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            searchByCategory: false,
        };

    }
    handleSearch = (e) => {
        const { name, value, type, checked } = e.target;
        const searchValue = type === 'checkbox' ? this.state.searchValue : value;
        const searchByCategory = name === 'searchByCategory' ? checked : this.state.searchByCategory;
        this.setState({ searchValue, searchByCategory });
    };
    render() {
        const { products, searchValue, searchByCategory } = this.state;
        const filteredProducts = products.filter(product =>
            (product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                product.name_category.toLowerCase().includes(searchValue.toLowerCase())) &&
            (!searchByCategory || product.category.toLowerCase().includes(searchValue.toLowerCase()))
        );
        return (
            
            <div className='container'>
                <div className="form-group">
                    <label>Search:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="searchInput"
                        placeholder='Nhập từ khóa tìm kiếm sản phẩm'
                        onChange={this.handleSearch}
                    />
                </div>
                <label>
                    <input
                        type="checkbox"
                        name="searchByCategory"
                        checked={searchByCategory}
                        onChange={this.handleSearch}
                    />
                    Tìm kiếm theo danh mục
                </label>
            </div>
        );
    }
}

export default Search;