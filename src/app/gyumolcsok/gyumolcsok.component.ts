import { Component } from '@angular/core';

@Component({
  selector: 'app-gyumolcsok',
  templateUrl: './gyumolcsok.component.html',
  styleUrls: ['./gyumolcsok.component.css']
})
export class GyumolcsokComponent {
  ujGyumi:any={}

  oszlopok:any=[
    {key:"nev", text:"Név", type:"text"},
    {key:"ar", text:"Ár", type:"number"},
  ]
  gyumolcsok:any=[
    {nev:"Alma", ar:500},
    {nev:"Barack", ar:400},
    {nev:"Szőlő", ar:600},
    {nev:"Kiwi", ar:800},
  ]

  delete(gyumolcs:any){
    this.gyumolcsok=this.gyumolcsok.filter(
      (elem:any)=>elem != gyumolcs
    )
  }
  hozzaad(){
    this.gyumolcsok.push(this.ujGyumi)
    this.ujGyumi={}
  }
}
