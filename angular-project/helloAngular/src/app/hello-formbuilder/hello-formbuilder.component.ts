import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';

// 引入Address
import {Address} from "./Address";

@Component({
  selector: 'app-hello-formbuilder',
  templateUrl: './hello-formbuilder.component.html',
  styleUrls: ['./hello-formbuilder.component.css']
})
export class HelloFormbuilderComponent implements OnInit {

  userForm: FormGroup;
  // Address 数组
  address: Address[] = [
    {street: 'road 808', city: 'shanghai'},
    {street: 'road 809', city: 'beijing'}
  ];

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      name: ['Tim', Validators.required],
      pwd: ['123456', Validators.minLength(6)],
      // 多级group
      address: fb.group({
        street: ['road 207', Validators.maxLength(4)],
        city: 'shanghai'
      })
      })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('================')
    console.log('表单提交');
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
    console.log('================');
  }
  forceReset() {
    this.userForm.reset();
  }
  defaultReset() {
    this.userForm.reset({
      name: 'Tim',
      pwd: '123456',
      address: this.address[1]
    });
  }
}
