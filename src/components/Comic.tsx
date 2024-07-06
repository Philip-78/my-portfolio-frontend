import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface ComicResponse {
    img: string;
    alt: string;
    safe_title: string;
    day: string;
    month: string;
    year: string;
}

const Comic: React.FC = () => {
    const [comicData, setComicData] = useState<ComicResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComicData = async () => {
            try {
                const email = 'p.idiare@innopolis.university';
                const url = new URL('https://fwd.innopolis.university/api/hw2');
                url.search = new URLSearchParams({ email }).toString();

                const response1 = await fetch(url.toString());
                if (!response1.ok) {
                    throw new Error(`Network response was not ok: ${response1.statusText}`);
                }

                const comicId = await response1.json();
                console.log('Response from first API:', comicId); // Debugging line
                if (!comicId) {
                    throw new Error('Comic ID not found in the response');
                }

                const response2 = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
                if (!response2.ok) {
                    throw new Error(`Network response was not ok: ${response2.statusText}`);
                }

                const comicData: ComicResponse = await response2.json();
                setComicData(comicData);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchComicData();
    }, []);

    return (
        <div className="comic-container">
            <h2>XKCD Comic</h2>
            {error && <p>Error fetching comic: {error}</p>}
            {comicData ? (
                <>
                    <h3>{comicData.safe_title}</h3>
                    <img src={comicData.img} alt={comicData.alt} />
                    <p>
                        Published: {
                        formatDistanceToNow(
                            new Date(Number(comicData.year), Number(comicData.month) - 1, Number(comicData.day)),
                            { addSuffix: true }
                        )
                    }
                    </p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Comic;
