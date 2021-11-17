import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './emp-dash.model';


@Component({
  selector: 'app-emp-dash',
  templateUrl: './emp-dash.component.html',
  styleUrls: ['./emp-dash.component.css']
})
export class EmpDashComponent implements OnInit {

  public formValue !: FormGroup;
  employeeObj: EmployeeModel = new EmployeeModel();
  api: any;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      mobile: [''],
      address: [''],
      desig: ['']
    })
  }

  postEmpDetails() {
    console.log(this.employeeObj.fname = this.formValue.value.fname);
    console.log(this.employeeObj.lname = this.formValue.value.lname);
    console.log(this.employeeObj.email = this.formValue.value.email);
    console.log(this.employeeObj.mobile = this.formValue.value.mobile);
    console.log(this.employeeObj.address = this.formValue.value.address);
    console.log(this.employeeObj.desig = this.formValue.value.desig);

    this.api.postEmploye(this.employeeObj).subscribe((res: any) => {
      console.log("done");
      let cancle = document.getElementById('cancel');
      cancle?.click();

      alert("done");
    },
      (err: any) => {
        alert("failed..!");
      })

  }

}
