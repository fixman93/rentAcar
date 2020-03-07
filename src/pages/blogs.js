import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, Col, Row } from 'antd';

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const Blogs = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout title="Blog">
    <SEO title="Rent a Car" />
    <div className="blog-page container">
      {/* <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/blog/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul> */}
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Da li je FIAT 500L bolji od Merive?" extra={<a href="/blogs/1">Detaljno</a>} >
          Pitanje: Da li je kupovina polovne Opel Merive, dobra kupovina? Vidim da ima pozitivne ocene što se tiče kvaliteta i komfora, ali me plaši bazni 1.4 motor od 100KS, kao i eventualna potrošnja, s obzirom na težinu karoserije. Inače godišnje prelazim  15 000 km.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Pripremite klima uređaj za leto!" extra={<a href="/blogs/2">Detaljno</a>} >
        Smrad iz klime znači da je potreban temeljan tretman čišćenja klima uređaja specijalnim sredstvima. Smrad iz rashladnog uređaja znači da su vam u sistemlju gljivice, buđ, bakterije, i možda čak i virusi, koji će jako loše uticati na zdravlje vaše porodice.
        </Card>
      </Col>
    </Row>
    </div>
    </Layout>
)

Blogs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default Blogs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___title) {
        fieldValue
        totalCount
      }
    }
  }
`