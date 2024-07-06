import React from 'react';
import Comic from '@/src/components/Comic';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const ComicPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <Comic />
            </main>
            <Footer />
        </div>
    );
};

export default ComicPage;
