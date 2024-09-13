import { youtube_v3 } from "googleapis";

export interface VideoData {
    "title":string | null | undefined,
    "description":string | null | undefined,
    "thumbnails": youtube_v3.Schema$ThumbnailDetails | undefined,
    "id":string | null | undefined,
}