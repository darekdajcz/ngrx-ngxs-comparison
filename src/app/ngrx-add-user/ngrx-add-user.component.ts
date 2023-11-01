import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserNGRX } from '../../ngrx/store/models/user-state.models';
import * as UserActions from '../../ngrx/store/actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-add-user',
  templateUrl: './ngrx-add-user.component.html',
  styleUrls: ['./ngrx-add-user.component.scss']
})
export class NgrxAddUserComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private ngrxStore: Store) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser(name: any, email: any): void {
    const newUser: UserNGRX = { name, email };
    this.ngrxStore.dispatch(UserActions.addUser({ user: newUser }));
    this.form.reset();
  }
}
