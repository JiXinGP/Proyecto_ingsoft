import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: any = {};

  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    const id = 'some-id'; // Ajusta según tu lógica
    try {
      this.user = await this.userService.getUsuario(id);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  }
}
