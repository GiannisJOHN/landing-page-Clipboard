import React from 'react'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit'


class Outro extends React.Component {
    render() {
        return (
            <MDBContainer>
                <div className="d-flex flex-column align-items-center py-3">
                    <h1 className='py-3 text-center'>
                        Clipboard for iOS and Mac OS
                    </h1>
                    <p className='py-3 w-75 text-center text-black-50'>
                        Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                        and you’re ready to start adding to your clipboard.
                    </p>
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
        )
    }
}

export default Outro