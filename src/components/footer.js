import PropTypes from "prop-types"
import React, { Component } from "react"
import { Col, Row } from "antd"

import logo from "../assets/images/logo.png"
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <Row gutter={32}>
            <Col span={24} xs={24} sm={12} md={8} lg={8}>
              <h2>O nama</h2>
              <p>
                Radimo iskljucivo sa pouzdanim vozilima i redovno servisiranim
              </p>
            </Col>
            <Col span={24} xs={24} sm={12} md={8} lg={8}>
              <h2>Kontakt Info</h2>
              <ul>
                <li>BiH: +387-65-435-774</li>
                <li>Srbija: +381-63-140-64-25</li>
                <li>Sijekovac 80, 74450 Brod</li>
                <li>Pon - Pet 08 - 16 casova</li>
              </ul>
            </Col>
            <Col span={24} xs={24} sm={12} md={8} lg={8}>
              <img src={logo} alt="logo" />
            </Col>
          </Row>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
