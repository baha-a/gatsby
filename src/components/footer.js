import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (<div dangerouslySetInnerHTML={{__html: copyrights, }}/>) : (
     <>
        <span className="footerCopyrights">
          © 2019
        </span>
        <span className="footerCopyrights">
          created by <a href="https://github.com/bhlshrf">Alsharif</a>
        </span>
      </>)
    }
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
