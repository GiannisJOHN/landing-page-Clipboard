import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import tablet from '../../images/image-devices.png'

class Use extends React.Component {
    render() {
        return (
            <MDBContainer className='py-5'>
                <div className="d-flex flex-column align-items-center">
                    <dvi className="d-flex align-items-center flex-column py-5">
                        <h2 className='text-center mb-4'>
                            Access Clipboard anywhere
                        </h2>
                        <p className='w-75 text-center text-black-50' >
                            Whether you’re on the go, or at your computer, you can access all your Clipboard 
                            snippets in a few simple clicks.
                        </p>
                    </dvi>
                    <img src={tablet} className='w-75' alt="" />
                </div>
            </MDBContainer>
        )
    }
}

export default Use