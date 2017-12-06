import React, {Component} from 'react';

import Header from './common/header';
import Main from './common/main';
import Footer from './common/footer';


class App extends Component {
    
    render() {
                
        return (
            <div className='page-flexbox-wrapper'> 
                <Header />
                <Main />
                <Footer />
            </div>
        );
    };
};

export default App;
