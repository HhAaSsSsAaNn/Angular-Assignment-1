import { Component } from '@angular/core';
import { Emp } from '../emp';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home {
  emps: Emp[] = [
    {eName:"hassan", eAge: 25, eAddress : "Cairo, Egypt", eSallary: 43555},
    {eName:"ali", eAge: 25, eAddress : "Cairo, Egypt", eSallary: 43555},
    {eName:"ahmed", eAge: 25, eAddress : "Cairo, Egypt", eSallary: 43555},
    {eName:"amr", eAge: 25, eAddress : "Cairo, Egypt", eSallary: 43555},
    {eName:"fady", eAge: 25, eAddress : "Cairo, Egypt", eSallary: 43555},
  ]

}