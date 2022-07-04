import React from 'react'
import { Banner } from './components/banner';
import { Content } from './components/content';
import { Footer } from './components/Footer';
export const HomePage = () => {
    return (
        <div className="homepage">
            <Banner />
            <Content />
            <Footer />
        </div>
    );
}