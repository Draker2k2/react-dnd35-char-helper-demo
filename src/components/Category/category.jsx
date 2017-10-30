import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from 'components/atoms/Card';

class Category extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    filterByCategory: PropTypes.func.isRequired,
  }
  static defaultProps = {
    categories: [],
  }
  state = {
    selectCategories: [],
  }
  handleCheck = (category, e) => {
    let categories = this.state.selectCategories;
    if (e.target.checked) {
      categories.push(category);
    } else {
      categories = categories.filter(item => item !== category);
    }
    this.props.filterByCategory(categories);
    this.setState({ selectCategories: categories });
  };
  isChecked = (name) => {
    const { selectCategories } = this.state;
    return selectCategories.find(c => c === name);
  }
  render() {
    const { categories } = this.props;
    if (categories.length === 0) return null;
    return (
      <Card className="category" color="primary">
        <p>Category</p>
        <div>
          {categories.map(category => (
            <div key={category}>
              <input
                id={category}
                type="checkbox"
                onChange={e => this.handleCheck(category, e)}
                value={this.isChecked(category)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </Card>
    );
  }
}

export default Category;
