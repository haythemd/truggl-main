import { google } from "googleapis";

type Payload = Record<string, string>;

export enum SpreadsheetTypes{
    EBOOK="EBOOK",
    CONTACT="CONTACT",
}



interface SpreadSheetInfo{
    gid:number,
    range:string,
    name:string,
}

const spreadsheetInfo:Record<SpreadsheetTypes,SpreadSheetInfo> = {
    "EBOOK":{
        "gid":0,
        "range":'A1:B1',
        "name":"Ebook Demand",
    },
    "CONTACT":{
        "gid":1457822997,
        "range":"A1:C1",
        "name":"Contact Submissions",
    }
}

export async function addToSpreadsheet(type:SpreadsheetTypes,payload:Payload){

    const values:any[] = [];
    Object.values(payload).forEach((value)=>{
        values.push(value);
    })


    try {

        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email:process.env.GOOGLE_CLIENT_EMAIL,
                private_key:process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g,'\n')
            },
            scopes:[
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

        const sheets = google.sheets({
            auth,
            version:'v4'
        })

        
        if(!process.env.GOOGLE_SHEET_ID)throw new Error("Couldn't find the spreadsheet id in the env file");

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId:process.env.GOOGLE_SHEET_ID,
            range:`${spreadsheetInfo[type].name}!${spreadsheetInfo[type].range}`,
            valueInputOption:'USER_ENTERED',
            
            requestBody:{
                'values':[values],
            }
            
        });

        console.log(response);

        if(response.status === 200)return true
        else return false
    }catch (error){
        console.error(error)
        return false;

    }
}