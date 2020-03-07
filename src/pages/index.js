import React, { Component } from "react"
import { withFirebase } from "../withFirebase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "antd"
import Audi_Photo from "../assets/images/audia4.jpg"
import golf_Photo from "../assets/images/golf.jpg"
import renault_Photo from "../assets/images/renault.jpg"
import aboutUs from "../assets/images/about-us.jpg"
import "antd/dist/antd.css"

class IndexPage extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.firebase && this.props.firebase) {
      this.props.firebase
        .database()
        .ref("/user")
        .once("value")
        .then(snapshot => {
          this.setState({ user: snapshot.val() })
        })
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      user: "",
    }
  }

  addUser = () => {
    this.props.firebase
      .database()
      .ref("/user")
      .set("new name")
    // .then(snapshot => {})
  }
  render() {
    // const { user } = this.state
    return (
      <Layout>
        <SEO title="Rent a Car" />
        <div className="active-cars container">
          <div className="title">
            <h2>Vozila u Ponudi</h2>
            <p>Povoljna i kvalitetna vozila na jednom mjestu!</p>
          </div>
          <Row gutter={32}>
            <Col className="gutter-row" span={8} lg={8} md={8} sm={12} xs={24}>
              <div className="card">
                <img src={Audi_Photo} alt="Car" />
                {/* <span className="price">90 KM</span> */}
              </div>
            </Col>
            <Col className="gutter-row" span={8} lg={8} md={8} sm={12} xs={24}>
              <div className="card">
                <img src={golf_Photo} alt="Car" />
                {/* <span className="price">50 KM</span> */}
              </div>
            </Col>
            <Col className="gutter-row" span={8} lg={8} md={8} sm={12} xs={24}>
              <div className="card">
                <img src={renault_Photo} alt="Car" />
                {/* <span className="price">50 KM</span> */}
              </div>
            </Col>
          </Row>
        </div>
        <section className="video-car">
          <div className="container">
            <h2>Nase vozilo, Vase vozilo</h2>
            <p>
              Fixman Car vam nudi vise od ocekivanja. Nas uspjeh mjerimo vasim
              zadovoljstvom! Nase dugogodisnje iskustvo i profesionalni kadar
              vam je uviijek na raspolaganju, a kod nas cete uvijek pronaci
              najbolje rjesenje za vase potrebe.
            </p>
            <h3>Pozovite (+387) 65-435-774</h3>
          </div>
          <p></p>
        </section>
        <section className="about-us-home">
          <div className="text">
            <h2>Sta zelite da znate o nama?</h2>
            <p>
              Najbolji odnos cene i kvaliteta vozila na koji cete naici. Trudimo
              se da ispunimo sve zelje nasih musterija i da redovno prosirujemo
              asortiman vozila. Posetite nas i iznajmite auto iz snova.
            </p>
          </div>
          <div className="photo">
            <img src={aboutUs} alt="About Us" />
          </div>
        </section>
        <section className="info">
          <div className="container">
            <h3>
              Ako imate pitanja slobodno nas kontaktirajte putem email adrese: 
              <a href="mailto:civcicboris93@gmail.com"> civcicboris93@gmail.com</a>
            </h3>
          </div>
        </section>
        {/* <p>Hello {user ? user : "there"}</p>
        <button onClick={this.addUser}>Add User</button> */}
      </Layout>
    )
  }
}

export default withFirebase(IndexPage)
