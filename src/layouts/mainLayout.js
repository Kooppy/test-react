import React, { Children } from 'react';
import Navb from '../components/nav';
import Footer from '../components/footer';


class MainLayout extends React.Component {
    render() {
        return (
            <div className='App'>
                <Navb />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default MainLayout;