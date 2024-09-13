import { NextResponse , NextRequest } from 'next/server'
import { sendDiscordWebhook } from '@/exports/utils/webhook'
import { SpreadsheetTypes, addToSpreadsheet } from '@/exports/utils/spreadsheet';

export interface ContactPayload{
    name:string,
    company:string,
    jobTitle:string,
    email:string,
    deadline:Date,
    budget:string,
    howDidYouFindUs?:string,
    message:string,
}


export async function POST(req:NextRequest) {
    const body = await req.json() as ContactPayload;
    
    const payload_entries = {
        "Full Name":body.name,
        "Company":body.company,
        "Job Title":body.jobTitle,
        "Company Email":body.email,
        "Deadline":body.deadline.toLocaleString(),
        "Budget":body.budget,
        "How did you find us?":body.howDidYouFindUs || "?",
        "Message":body.message,
    }

    const discord_response = await sendDiscordWebhook('Contact Form Submission',payload_entries);
    const spreadsheet_response = await addToSpreadsheet(SpreadsheetTypes.CONTACT,payload_entries);
    
    if(discord_response || spreadsheet_response)return NextResponse.json({'message':'Form Success'})
    else return NextResponse.json({'message':'Form Failed'},{status:500});
    
    
}

