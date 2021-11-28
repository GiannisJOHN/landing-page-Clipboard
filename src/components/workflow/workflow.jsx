import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit'
import blacklist from '../../images/icon-blacklist.svg'
import text from '../../images/icon-text.svg'
import preview from '../../images/icon-preview.svg'

class Workflow extends React.Component {
    render() {
        return (
            <MDBContainer>
                <div className="d-flex align-items-center flex-column mt-5 py-3">
                    <h2 className='text-center' >Supercharge your workflow</h2>
                    <p className='py-3 text-black-50 text-center'>We’ve got the tools to boost your productivity.</p>
                </div>
                <div className="row">
                    <div className="col-12 d-flex flex-column col-md-4 align-items-center mb-5">
                        <img className='mb-5' src={blacklist} alt="" />
                        <h3 className='mb-4 text-center' >Create blacklists</h3>
                        <p className='text-center  w-75 text-black-50'>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </div>
                    <div className="col-12 d-flex flex-column col-md-4 align-items-center mb-5">
                        <img className='mb-5' src={text} alt="" />
                        <h3 className='mb-4 text-center' >Plain text snippets</h3>
                        <p className='text-center w-75 text-black-50'>Remove unwanted formatting from copied text for a consistent look.</p>
                    </div>
                    <div className="col-12 d-flex flex-column col-md-4 align-items-center mb-5">
                        <img className='mb-5' src={preview} alt="" />
                        <h3 className='mb-4 text-center' >Sneak preview</h3>
                        <p className='text-center  w-75 text-black-50' >Quick preview of all snippets on your Clipboard for easy access.</p>
                    </div>
                </div>
                
            </MDBContainer>
        )
    }
}

export default Workflow