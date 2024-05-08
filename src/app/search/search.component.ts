import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

searhValue: string = '';

changesearhValue(eventData: Event){
//console.log((<HTMLInputElement>eventData.target).value)
this.searhValue = (<HTMLInputElement>eventData.target).value
}

}
