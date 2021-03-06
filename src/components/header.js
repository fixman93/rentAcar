import PropTypes from "prop-types"
import React, { Component } from "react"
import { Menu } from "antd"
import logo from "../assets/images/logo.png"
class Header extends Component {
  state = {
    current: "mail",
  }
  handleClick = e => {
    console.log("click ", e)
    this.setState({
      current: e.key,
    })
  }
  render() {
    const { title } = this.props
    return (
      <header>
        <div className="top-menu">
          <div className="container">
            <div className="logo-left">
              <a href="/#">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <div className="menu-right">
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="home">
                  <a href="/#" rel="noopener noreferrer">
                    Pocetna
                  </a>
                </Menu.Item>
                <Menu.Item key="uslovi">
                  <a href="/uslovi-najma" rel="noopener noreferrer">
                    Uslovi Najma
                  </a>
                </Menu.Item>
                <Menu.Item key="blogs">
                  <a href="/blogs" rel="noopener noreferrer">
                    Blog
                  </a>
                </Menu.Item>
                {/* <Menu.Item key="contact">
                  <a
                    href="https://ant.design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Navigation Four - Link
                  </a>
                </Menu.Item> */}
              </Menu>
            </div>
          </div>
        </div>
        <div className="head-box container">
          <h1>{title ? title : "Pronadjite vozilo za Vas"}</h1>
          <p>Pozovite nas i preuzmite vozilo za vase potrebe</p>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
