import React from "react"
import { MDBContainer } from 'mdb-react-ui-kit'
import screen from '../../images/image-computer.png'

class About extends React.Component {
    render() {
        return (
            <MDBContainer className='overflow-hidden'>
                <dvi className="d-flex align-items-center flex-column py-5">
                    <h2 className='mb-4 text-center'>
                        Keep track of your snippets
                    </h2>
                    <p className='w-75 text-center text-black-50' >
                        Clipboard instantly stores any item you copy in the cloud, 
                        meaning you can access your snippets immediately on all your 
                        devices. Our Mac and iOS apps will help you organize everything. 
                    </p>
                </dvi>

                <div className="row g-5 align-items-center py-3">
                    <div className="col-12 col-lg-6">
                        <img className='me-5 w-100' src={screen} alt="" />
                    </div>
                    <div className="col-12 col-lg-6">

                        <div className="row flex-column">
                            <div className="col">
                                <h3 className='text-center text-lg-start'>
                                    Quick Search
                                </h3>
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <p className="text-black-50 w-75 mb-5 mb-md-0 text-center text-lg-start">
                                        Easily search your snippets by content, category, web address, application, and more.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row flex-column">
                            <div className="col my-md-4">
                                <h3 className='text-center text-lg-start'>
                                    iCloud Sync
                                </h3>
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <p className="text-black-50 w-75 mb-5 mb-md-0 text-center text-lg-start">
                                        Instantly saves and syncs snippets across all your devices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row flex-column">
                            <div className="col">
                                <h3 className='text-center text-lg-start'>
                                    Complete History
                                </h3>
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <p className="text-black-50 w-75 mb-5 mb-md-0 text-center text-lg-start">
                                        Retrieve any snippets from the first moment you started using the app.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </MDBContainer>
        )
    }
}

export default About