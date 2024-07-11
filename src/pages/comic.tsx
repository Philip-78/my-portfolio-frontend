import React from 'react';
import Comic from '@/src/components/Comic';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

interface ComicPageProps {
  comicData: {
    img: string;
    alt: string;
    safe_title: string;
    day: string;
    month: string;
    year: string;
  } | null;
  error: string | null;
}

const ComicPage: React.FC<ComicPageProps> = ({ comicData, error }) => {
  return (
    <div>
      <Header />
      <main>
        <Comic comicData={comicData} error={error} />
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const email = 'p.idiare@innopolis.university';
    const url = new URL('https://fwd.innopolis.university/api/hw2');
    url.search = new URLSearchParams({ email }).toString();

    const response1 = await fetch(url.toString());
    if (!response1.ok) {
      throw new Error(`Network response was not ok: ${response1.statusText}`);
    }

    const comicId = await response1.json();
    if (!comicId) {
      throw new Error('Comic ID not found in the response');
    }

    const response2 = await fetch(
      `https://fwd.innopolis.university/api/comic?id=${comicId}`
    );
    if (!response2.ok) {
      throw new Error(`Network response was not ok: ${response2.statusText}`);
    }

    const comicData = await response2.json();

    return {
      props: {
        comicData,
        error: null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        comicData: null,
        error: error.message,
      },
    };
  }
};

export default ComicPage;
