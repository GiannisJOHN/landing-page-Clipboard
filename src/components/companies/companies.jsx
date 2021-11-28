import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import google from '../../images/logo-google.png'
import ibm from '../../images/logo-ibm.png'
import microsoft from '../../images/logo-microsoft.png'
import hp from '../../images/logo-hp.png'
import vectorGraphics from '../../images/logo-vector-graphics.png'

class Companies extends React.Component {
    render() {
        return (
            <MDBContainer>
                <div className="row my-5">
                    <div className="col-12 col-sm-6 col-lg my-4 d-flex align-items-center justify-content-center justify-content-sm-start justify-content-lg-center">
                        <img src={google} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg my-4 d-flex align-items-center justify-content-center justify-content-sm-start justify-content-lg-center">
                        <img src={ibm} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg my-4 d-flex align-items-center justify-content-center justify-content-sm-start justify-content-lg-center">
                        <img src={microsoft} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg my-4 d-flex align-items-center justify-content-center justify-content-sm-start justify-content-lg-center">
                        <img src={hp} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg my-4 d-flex align-items-center justify-content-center justify-content-sm-start justify-content-lg-center">
                        <img src={vectorGraphics} alt="" />
                    </div>
                </div>
            </MDBContainer>
        )
    }
}

export default Companies