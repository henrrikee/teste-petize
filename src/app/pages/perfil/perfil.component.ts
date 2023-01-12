import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitHubService, User } from 'src/app/shared/external-service/github.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  user!:User
  userLogin!:string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gitHubService: GitHubService
  ) { }

  ngOnInit(): void {
    this.user = new User
    this.user.avatar_url = this.user.avatar_url
    const userLogin = this.route.params.subscribe(params => {
      const login = params['login'];
      const name = login
      this.gitHubService.getByUser(name).subscribe(gitHubResponse => {
        this.user = gitHubResponse
        this.user.avatar_url = gitHubResponse.avatar_url
        console.log("User", this.user)
      })
    })
   
  }
}
