export class ChatMessage {
    public id:number;
    public senderName:string;
    public message:string;
    public timestamp: string;
    //to make test
    public static idIndex:number = 0;
    public static chatmessages:Array<ChatMessage> = [ new ChatMessage(null, 'Alice', 'Bonjour à tous !'),
    new ChatMessage(null, 'Bob', 'Salut Alice !'),
    new ChatMessage(null, 'Charlie', 'Bienvenue sur le chat.')];
    //end of test

    constructor(id:number|null,senderName:string,message:string){
        if(id === null){
            this.id=ChatMessage.idIndex++;
        }
        else{
            this.id = id;
        }
        this.senderName = senderName;
            this.message = message;
            const date = new Date();
            this.timestamp = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() +
                 " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        
    }

    public static SendChat(chatMessage:string,user:string){
        this.chatmessages.push(new ChatMessage(null,user,chatMessage));
    }
    public static RemoveChat(chatMessageId:number):boolean{
        this.chatmessages = this.chatmessages.filter(msg => msg.id !== chatMessageId);
        return true
    }

}
