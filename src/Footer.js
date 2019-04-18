import React from 'react'
import Socials from './Socials'
import { constants } from './constants'

const Footer = ({ netId }) => {
  const footerClassName = netId in constants.NETWORKS && constants.NETWORKS[netId].TESTNET ? 'sokol' : 'sokol'

  return (
    <footer className={`footer ${footerClassName}`}>
      <div className="container">
        <a href="/">
          <i className="footer-logo" />
        </a>
        <p className="footer-rights">
          Built by{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://poa.network">
            POA Network
          </a>. All rights reserved.
        </p>
        <Socials />
      </div>
    </footer>
  )
}

export default Footer
