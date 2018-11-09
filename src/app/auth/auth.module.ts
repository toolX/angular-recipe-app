import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule {}
