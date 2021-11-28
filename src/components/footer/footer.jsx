import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import logo from '../../images/logo.svg'
import facebook from '../../images/icon-facebook.svg'
import twitter from '../../images/icon-twitter.svg'
import instagram from '../../images/icon-instagram.svg'

class Footer extends React.Component {
    render() {
        return (
            <>
            <footer className='gray-footer py-5'>
                <MDBContainer>
                    <div className="row">
                        <div className="col-12 col-md-2 d-flex align-items-center justify-content-center justify-content-md-start">
                            <img src={logo} alt="" style={{width: '40px'}} />
                        </div>
                        <div className="col-12 col-md-8 py-4 py-md-0" >
                            <ul className="nav flex-column flex-md-row">
                                <li className="nav-item py-1">
                                    <a href="" className="nav-link text-black-50 text-center text-md-start">FAQs</a>
                                </li>
                                <li className="nav-item py-1">
                                    <a href="" className="nav-link text-black-50 text-center text-md-start">Contact Us</a>
                                </li>
                                <li className="nav-item py-1">
                                    <a href="" className="nav-link text-black-50 text-center text-md-start">Privacy Policy</a>
                                </li>
                                <li className="nav-item py-1">
                                    <a href="" className="nav-link text-black-50 text-center text-md-start">Press Kit</a>
                                </li>
                                <li className="nav-item py-1">
                                    <a href="" className="nav-link text-black-50 text-center text-md-start">Install Guide</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-2">
                            <ul className="nav justify-content-center justify-content-md-start align-items-center h-100">
                                <li className="nav-item">
                                    <a href="" className="nav-link p-2">
                                        <img src={facebook} alt="facebook homepage" />
                                    </a>
                                    </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link p-2">
                                        <img src={twitter} alt="twitter homepage" />
                                    </a>
                                    </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link p-2">
                                        <img src={instagram} alt="instagram homepage" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </MDBContainer>
            </footer>
            </>
        )
    }
}

export default Footer