import PropTypes from 'prop-types'
import React from 'react'
import { Row, Col } from 'antd'
import SiteSearch from '../SiteSearch'

const SiteHeader = ({ siteTitle, location }) => (
  <Row type="flex" justify="end">
    <Col xs={0} md={8} xl={8} xxl={6}>
      <SiteSearch lng="en" />
    </Col>
  </Row>
)

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
}

SiteHeader.defaultProps = {
  siteTitle: ``,
}

export default SiteHeader
