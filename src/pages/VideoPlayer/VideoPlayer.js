import React, { useEffect, useState } from 'react';


// import api from '../../services/api'

export default function VideoPlayer() {

    const [data, setDados] = useState()


    useEffect(() => {
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyClg0J1Ic_VTKcM0qZG82ForhTovx7fdCw&channelId=UCU5JicSrEM5A63jkJ2QvGYw&part=snippet,id&order=date&maxResults=20')
            .then((response) => response.json())
            .then((json) => setDados(json))
    }, [])

   


    return (
        <>
            {data && (
                <div>
                    <p>Canal: Filipe Deschamps</p>
                    <h1>País:{data.regionCode}</h1>
                </div>
            )}



        </>
    )
}

// link referência : https://qastack.com.br/programming/18953499/youtube-api-to-fetch-all-videos-on-a-channel

// API exemplo para Lista de reprodução: https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=20

// resultado:
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyClg0J1Ic_VTKcM0qZG82ForhTovx7fdCw&channelId=UCU5JicSrEM5A63jkJ2QvGYw&part=snippet,id&order=date&maxResults=1

// id do Deschamps
// UCU5JicSrEM5A63jkJ2QvGYw



//////////////////////////////////////////

// API exemplo para 1 um video do Youtube:
// https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=_jI3782DGDc&key=AIzaSyClg0J1Ic_VTKcM0qZG82ForhTovx7fdCw