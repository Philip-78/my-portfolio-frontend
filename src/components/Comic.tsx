import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface ComicProps {
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

const Comic: React.FC<ComicProps> = ({ comicData, error }) => {
  return (
    <div className="comic-container">
      <h2>XKCD Comic</h2>
      {error && <p>Error fetching comic: {error}</p>}
      {comicData ? (
        <>
          <h3>{comicData.safe_title}</h3>
          <img src={comicData.img} alt={comicData.alt} />
          <p>
            Published:{' '}
            {formatDistanceToNow(
              new Date(
                Number(comicData.year),
                Number(comicData.month) - 1,
                Number(comicData.day)
              ),
              { addSuffix: true }
            )}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Comic;
