import React from 'react';
import Navb from '../components/nav-mui';
import Footer from '../components/footer';
import FormContact from '../components/formContact';


class MainLayout extends React.Component {
    render() {
        return (
            <div className='App'>
                <Navb />
                {this.props.children}
                <FormContact />
                <Footer />
            </div>
        )
    }
}

export default MainLayout;