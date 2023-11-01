import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from '../../ngxs/store/actions/user.actions';

@Component({
  selector: 'app-ngxs-add-user',
  templateUrl: './ngxs-add-user.component.html',
  styleUrls: ['./ngxs-add-user.component.scss']
})
export class NgxsAddUserComponent {
  // @ts-ignore
  form: FormGroup;
  constructor(private fb: FormBuilder, private ngxsStore: Store) {
    this.createForm();
  }

  createForm(): void  {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
    });
  }

  addUser(name: any, email: any): void {
    this.ngxsStore.dispatch(new AddUser({ name, email}))
      .subscribe(() => { this.form.reset() });
  }
}
