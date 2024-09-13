import { NextResponse } from 'next/server'
import { google, youtube_v3 } from 'googleapis'
import { VideoData } from '@/types/videos'



const API_KEY = "AIzaSyDLOs2u2RtAmvs-NyXqljjY7YIoz3H872A"
const PLAYLIST_ID = "PL7JxluX3RX2R-ACGA5czALZPBXMHbDalD"



const youtube = google.youtube({
    version: "v3",
    auth: API_KEY,
    headers: {
        'referer' : 'https://www.truggl.com'
    }
  });
 
export async function GET() {

    try{

    const params = {
        part: ["snippet","contentDetails"],
        playlistId: PLAYLIST_ID,
        maxResults: 50, // Maximum number of results per request (50 is the maximum)
      };

    
    const response = await youtube.playlistItems.list(params);
    

    const videos_data = response.data.items;
    const compressed_videos_data:VideoData[] = []

    videos_data?.forEach( (video) => {
        

        compressed_videos_data.push({
            "title":video.snippet?.title,
            "description":video.snippet?.description,
            "thumbnails":video.snippet?.thumbnails,
            "id":video.contentDetails?.videoId
        })

    } )

    
    
    
    return NextResponse.json({ "data" : compressed_videos_data })
    }catch(error){
        console.error(error)
        return NextResponse.json(
            {"messaged":"Failed to retrieve videos."},
            {status:400}
            )

    }

 
 
  
}
