import React from 'react'
import Header from '../header/header.jsx'
import About from '../about/about.jsx'
import Use from '../use/use.jsx'
import Workflow from '../workflow/workflow.jsx'
import Companies from '../companies/companies.jsx'
import Outro from '../outro/outro.jsx'
import Footer from '../footer/footer.jsx'
import Contribution from '../contribution/contribution.jsx'

class App extends React.Component {

  render() {
    return (
      <>
          <Header />
        <main className='py-5' >
          <About />
          <Use />
          <Workflow />
          <Companies />
          <Outro />
        </main>
          <Footer />
          <Contribution />
      </>
    )
  }
}

export default App
