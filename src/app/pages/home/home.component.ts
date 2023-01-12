import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GitHubService, User } from 'src/app/shared/external-service/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user!: User
  searchValue: string = '';

  constructor(
    private router: Router,
    private gitHubService: GitHubService

  ) { }

  ngOnInit(): void {

  }

  getUser() {
    this.gitHubService.getByUser(this.searchValue).subscribe(gitHubResponse => {
      this.user = gitHubResponse
      this.router.navigate([`perfil/${this.user.login}`]);
      console.log("User", this.user)
    })
  }

}
