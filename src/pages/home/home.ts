import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private title="TODO";
  public todos=[];
  constructor(public navCtrl: NavController,private alt:AlertController) {
  }
  openToDoAlert(){
    let dialog=this.alt.create({
      title:"Add TODO Item",
      message:"Enter your Item here",
      inputs:[
        {
          type:"text",
          name:"addToDo"
        }
      ],
      buttons:[
        {
          text:"CANCEL",
        },
        {
          text:"ADD",
          handler:(inputs)=>{
            let text=inputs.addToDo;
            if(text!="")
            {
              this.title=text;
              this.todos.push(text);
            }
          }          
        }
      ]
    });
    dialog.present();
  }
  clickOnItem(title){
    this.title=title;
  }
}
