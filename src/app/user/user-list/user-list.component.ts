import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: any[] = [];

  constructor(private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.users = await this.userService.getUsuarios();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
}
