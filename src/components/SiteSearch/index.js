import React, { Component } from 'react'
import { navigate } from 'gatsby'
import { Icon, Input, AutoComplete } from 'antd'
const Option = AutoComplete.Option

export default class Search extends Component {
  state = {
    shouldRender: false,
    results: [],
  }

  componentDidMount() {
    this.setState({
      shouldRender: true,
    })
  }

  renderOption(hit) {
    const { title, description, path } = hit
    return (
      <Option key={path} text={title}>
        {title} : {description}
      </Option>
    )
  }

  getSearchResults(query) {
    if (!query || !window.__LUNR__) return []
    const lunrIndex = window.__LUNR__[this.props.lng];
    // you can  customize your search , see https://lunrjs.com/guides/searching.html
    const results = lunrIndex.index.search(query)
    return results.map(({ ref }) => this.renderOption(lunrIndex.store[ref]))
  }

  handleSearch = query => {
    this.setState({
      results: this.getSearchResults(query),
    })
  }

  render() {
    const { shouldRender, results } = this.state
    
    if (!shouldRender) {
      return null
    }

    return (
      <div
        className="certain-category-search-wrapper"
        style={{
          width: '100%',
          padding: '1px 20px',
        }}
      >
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          style={{ width: '100%' }}
          dataSource={results}
          placeholder="Search, only english supported"
          optionLabelProp="title"
          onSearch={value => {
            this.handleSearch(value)
          }}
          onChange={value => {
            console.log(value)
          }}
          onSelect={value => {
            navigate(value)
          }}
        >
          <Input
            suffix={<Icon type="search" className="certain-category-icon" />}
          />
        </AutoComplete>
      </div>
    )
  }
}
