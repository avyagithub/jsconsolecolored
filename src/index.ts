export class cllog {
     static success(msg:string){
          console.log(`%c ${msg}`, 'color:red')

     }
     static danger(msg:string){
          console.log(`%c ${msg}`, 'color:green')
     }
     static info(msg:string){
          console.log(`%c ${msg}`, 'color:black,,background:yellow')
     }
}