import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-shoe-result',
  templateUrl: './shoe-result.component.html',
  styleUrls: ['./shoe-result.component.css']
})
export class ShoeResultComponent implements OnInit {
  result:any;
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }
  ClickToResult(){
    this.result=this.userService.getCount();
}
}