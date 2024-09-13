import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { sendDiscordWebhook } from '@/exports/utils/webhook'
import { SpreadsheetTypes, addToSpreadsheet } from '@/exports/utils/spreadsheet'





interface EbookPayload{
    email:string,
}

 
export async function POST(request:NextRequest) {

    if(request.method !== 'POST'){
        return NextResponse.json({'message':'Only POST requests are allowed to this route.'},{status:405})
    }

    const body = await request.json() as EbookPayload

    const discord_response = await sendDiscordWebhook('Ebook Request Submission',{'Email Address':body.email});
    const spreadsheet_response = await addToSpreadsheet(SpreadsheetTypes.EBOOK,{'email':body.email,country:'NOT_IMPLEMENTED_YET'});

    if(discord_response || spreadsheet_response)return NextResponse.json({'message':'Form Success'})
    else return NextResponse.json({'message':'Form Failed'},{status:500});
    


 
 
  
}