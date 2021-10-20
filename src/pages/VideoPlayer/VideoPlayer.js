import React, { useEffect, useState } from 'react';


// import api from '../../services/api'

export default function VideoPlayer() {

    const [data, setDados] = useState(null)

    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyClg0J1Ic_VTKcM0qZG82ForhTovx7fdCw&channelId=UCU5JicSrEM5A63jkJ2QvGYw&part=snippet,id&order=date&maxResults=20')
            .then((response) => response.json())
            .then((json) => setDados(json))
    }, [])

    return (
        <>
            {data && (
                <div>
                    <h1>País:{data.regionCode}</h1>
                    <h1>Nome do canal: {data.items[4].channelTitle}</h1>
                    <p>resultado:{data.items[0].kind}</p>
                    <p>Resultados:{data.pageInfo.totalResults}</p>
                </div>
            )}

        </>
    )
}

// link referência : https://qastack.com.br/programming/18953499/youtube-api-to-fetch-all-videos-on-a-channel

// API exemplo: https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=20


// https://www.googleapis.com/youtube/v3/search?key=AIzaSyClg0J1Ic_VTKcM0qZG82ForhTovx7fdCw&channelId=UCU5JicSrEM5A63jkJ2QvGYw&part=snippet,id&order=date&maxResults=20



// id do Deschamps
// UCU5JicSrEM5A63jkJ2QvGYw