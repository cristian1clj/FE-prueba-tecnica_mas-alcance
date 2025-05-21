import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../../shared/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users!: IUser[];
  usernames = new Map<number, string>();
  postsVisibility = false;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.getUsers()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }

  showPosts(): void {
    this.users.forEach(user => this.usernames.set(user.id, user.username));
    this.postsVisibility = true;
  }

  hidePosts(): void {
    this.postsVisibility = false;
  }

  getUsers(): Observable<IUser[]> {
    return this.userService.getAll();
  }
}
