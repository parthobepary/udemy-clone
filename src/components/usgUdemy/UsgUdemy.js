import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import UsgBanner from './UsgBanner';
import UsgLastPart from './UsgLastPart';

const UsgUdemy = () => {
    return (
        <div>
            <Header>
                <UsgBanner />
                <UsgLastPart />
                <Footer />
            </Header>
        </div>
    );
};

export default UsgUdemy;