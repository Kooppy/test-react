import React, { Children } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';


class MainLayout extends React.Component {
    render() {
        return (
            <div className='App'>
                <Nav />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default MainLayout;