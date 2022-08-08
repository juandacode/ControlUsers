import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/User.model';
import { UserService } from 'src/app/Services/user-service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  imageEdit: string = '../../../assets/edit.svg';
  imageDelete: string = '../../../assets/delete.svg';
  users: UserModel[] = [];
  @Output() changeUpdate = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.catchUpdate();
  }

  getUsers() {
    this.userService.GetUsers().subscribe(data => {
      this.users = data;
     console.log(data);
   });
  }
  catchUpdate() {
    this.getUsers();
  }

  deleteUser(id: any) {
    this.userService.DeleteUser(id)
    .subscribe(data => {
      console.log(`El registro ha sido eliminado ${data} `);
      this.changeUpdate.emit();
    });
  }

/*   this.userService.createUser(this.user)
  .subscribe(data => {
    console.log(data);
}); */
}


