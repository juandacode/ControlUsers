import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* import { ToastrService } from 'ngx-toastr'; */
import { UserModel } from 'src/app/models/User.model';
import { UserService } from 'src/app/Services/user-service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  status = false;
  userForm: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              /* private toastr: ToastrService, */
              private router: Router) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      cellphone: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  addUser() {
    const user: UserModel = {
      name: this.userForm.get('name')?.value,
      document: this.userForm.get('document')?.value,
      cellphone: this.userForm.get('cellphone')?.value,
      city: this.userForm.get('city')?.value,
      address: this.userForm.get('address')?.value
    };
    console.log(this.userForm.value);
    this.userService.CreateUser(user)
    .subscribe(data => {
      console.log(data);
      /* this.toastr.success('El registro ha sido creado', 'Usuario creado'); */
      this.router.navigate(['/users']);
    }, /* (error) => {
      console.log(error);
      this.userForm.reset();
    } */);
  }

  toggleStatus() {
    this.status = !this.status;
  }

}
