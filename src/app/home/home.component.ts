import { Component } from '@angular/core';

@Component({
  /* 
      This is a component decorator. Decorators are a JS concept 
      that allow you to add metadata to a class or other type of object. 
      
      Angular uses this @Component decorator to add component metadata 
      like this to a component class. 
      
      This is what lets Angular know 
      that this class is a component and allows you to specify the 
      relevant data for that component.
  */
  selector: 'hib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /* 
      Where you define properties and methods to add data, 
      functionality, and business logic to your component.
  */

}
