import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private router: Router){}

  email:string = '';
  password:string = '';
  showError: boolean = false;
  showAuth:boolean = false;

  redirectHome(){
    this.router.navigate(['/home']);
  }

  redirect(role:number){
    if(role===1){
      this.router.navigate(['/doctor'])
    }else if(role===2){
      this.router.navigate(['/paciente'])
    }
  }

  navigateSignup(){
    this.router.navigate(['/auth/register']);
  }

  login(){
   
  }

  logout(){
  
  }

  getData(){
    
  }
}
