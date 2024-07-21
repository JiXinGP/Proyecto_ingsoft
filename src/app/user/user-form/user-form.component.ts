import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: any = {};

  constructor(private userService: UserService) {}

  async saveUser() {
    try {
      await this.userService.postUsuario(this.user);
    } catch (error) {
      console.error('Error posting user:', error);
    }
  }
}
