import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/User.model';
import { UserService } from 'src/app/Services/user-service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  /*imageEdit: string = '../../../assets/edit.svg';
  imageDelete: string = '../../../assets/delete.svg';
  @Input() user: UserModel = {
    name: '',
    document: '',
    cellphone: '',
    city: '',
    address: ''
  } */

  

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
  /* deleteUser(id: any) {
    this.userService.DeleteUser(id)
    .subscribe(data => {
      console.log(`El registro ha sido eliminado ${data} `);
      this.changeUpdate.emit();
    });
  } */
}
