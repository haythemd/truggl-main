import React from 'react'
import {VideoData} from '@/types/videos'
import Vidholder from './Vidholder/Vidholder'
import VideoGrid, { GridEnum } from './VideoGrid/VideoGrid'
import Reveal from '../reveal/Reveal'


interface Props {
    "videos" : VideoData[]
}



const Portfoliosection = async ({videos}:Props) => {
  const videos_map = createVideosMap(videos);
    
  return (
    <Reveal>
    <section className="porfolioSection">

    {
        videos_map.map( (videos_grid,index) => {
            return (
                <VideoGrid gridTypes={videos_grid.gridType} key={index}>
                    {videos_grid.videos.map( (video,video_index) => {

                        

                        return (
                            <Vidholder 
                             title={video.title}
                             description={video.description} 
                             thumbnails={video.thumbnails} 
                             id={video.id} 
                             key={video.id}
                             />
                        )
                        
                    })}
                </VideoGrid>
            )
        })
    }
    </section>
    </Reveal>
  )
}

const nextGridType = {
    "12":"6-6",
    "6-6":"5-7",
    "5-7":"7-5",
    "7-5":"4-4-4",
    "4-4-4":"12"
}

const expectedVideos = {
    "12":1,
    "6-6":2,
    "5-7":2,
    "7-5":2,
    "4-4-4":3
}

interface videosMapElement {
    "gridType":GridEnum,
    "videos":VideoData[]
}

const createVideosMap = (videos:VideoData[]) => {
    let current_grid_type = GridEnum.Twelve;
    const videos_temp = videos;
    const videosMap:videosMapElement[] = []

    while(videos_temp.length > 0){
        let videosMapElementVideos:VideoData[] = []
        for(let i=0;i<expectedVideos[current_grid_type];i++){
            if(videos_temp.length === 0 || videos_temp[0] === undefined)break

            let current_video = videos_temp.shift();
            if(current_video === undefined)break;

            videosMapElementVideos.push(current_video);

        }
        videosMap.push(

            {"gridType":current_grid_type,
            "videos":videosMapElementVideos}

        )

        current_grid_type = nextGridType[current_grid_type] as GridEnum;
    }

    return videosMap
}

export default Portfoliosection