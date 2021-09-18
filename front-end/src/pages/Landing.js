import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/landing/Header';
import WorkingSection from 'components/landing/WorkingSection';
import React from 'react';

export default function Landing() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>

                <Header />
                
                <WorkingSection />
            </main>
            <DefaultFooter />
        </>
    );
}
