export class ChatMessage {
    public id:number;
    public senderName:string;
    public message:string;
    public timestamp: string;
    //to make test
    public static chatmessages:Array<ChatMessage> = [ new ChatMessage(1, 'Alice', 'Bonjour à tous !'),
    new ChatMessage(2, 'Bob', 'Salut Alice !'),
    new ChatMessage(null, 'Charlie', 'Bienvenue sur le chat.')];
    //end of test

    constructor(id:number|null,senderName:string,message:string){
        if(id === null){
            this.id=0;
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

}
