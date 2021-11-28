import React from 'react'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import logo from '../../images/logo.svg'
import bg from '../../images/bg-header-desktop.png'

class Header extends React.Component {

  render() {
    return (
      <header className='py-5 position-relative'>
        <MDBContainer>
          <div className="d-flex flex-column align-items-center">
            <img className='py-5' src={logo} alt="" />
            <h1 className='py-3 text-center'>A history of everything you copy</h1>
            <p className='py-3 w-100 text-center text-black-50'>Clipboard allows you to track and organize everything you 
            copy. Instantly access your clipboard on all your devices.</p>
            <div className="d-flex flex-column flex-md-row justify-content-md-center py-3 w-100">
              <MDBBtn rounded className='btn-cyan me-md-4 mb-3 mb-md-0' >
                Downloand for iOS
              </MDBBtn>
              <MDBBtn rounded className='btn-blue' >
                Download for Mac
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>

                <div className="position-absolute w-100" style={{
                top: '0',
                left: '0'
                }}>
                <img className='w-100' src={bg} alt="" />
                </div>

      </header>
    )
  }
}

export default Header