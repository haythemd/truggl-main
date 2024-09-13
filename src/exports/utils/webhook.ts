import axios from "axios";

type ExtendedDictionary<K extends string | number | symbol, V> = Partial<Record<K, V>>;

type PayloadMap = Map<string, any>;

type Payload = Record<string, string>;



interface DiscordEmbedField{
    "name":string,
    "value":string,
}


const WEBHOOK_URL = "https://discord.com/api/webhooks/1137866139708436630/xMXnmGOWmghNFNaW1CGeT29Qjfvt0E52v7n-qrwG_OjndELO9JtZoN5T430S0zNy4AUj";

const createMessage = (type:string,payload:Payload) => {
    
    const fields:DiscordEmbedField[] = []

    Object.entries(payload).forEach((entry)=>{
        const [key,value] = entry;
        fields.push({
            "name":key,
            "value":value,
        });
    })
    

    return {
        "username":"Truggl Notifications",
        "embeds":[
            {
                'title':`New Contact ${type}!`,
                'fields':fields
                
            }
        ]
    }
}

export async function sendDiscordWebhook(type:string,payload:Payload){

    const message = createMessage(type,payload);
    const API_URL = WEBHOOK_URL;

    const response = await axios.post(API_URL,message);

    if(response.status === 200 || response.status === 204)return true;
    else return false;


}