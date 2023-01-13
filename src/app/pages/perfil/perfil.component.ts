import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GitHubService, Repos, User } from 'src/app/shared/external-service/github.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  user!: User
  userLogin!: string
  repos!: Repos
  reposArray!: any[]
  searchValue: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gitHubService: GitHubService
  ) { }

  ngOnInit(): void {
    this.user = new User
    this.repos = new Repos
    this.reposArray = new Array
    this.user.avatar_url = this.user.avatar_url
    const userLogin = this.route.params.subscribe(params => {
      const login = params['login'];
      const name = login
      this.gitHubService.getByUser(name).subscribe(gitHubResponse => {
        this.user = gitHubResponse
        this.user.avatar_url = gitHubResponse.avatar_url
        console.log("User", this.user)
      })
      this.gitHubService.getReposUser(name).subscribe(gitHubReposResponse => {
        this.reposArray = gitHubReposResponse
        this.reposArray.sort((a,b) => (a.stargazers_count < b.stargazers_count) ? 1 : (b.stargazers_count < a.stargazers_count) ? -1 : 0)
          console.log("reposArray", this.reposArray)

      })
    })

  }

  getUser() {
    this.gitHubService.getByUser(this.searchValue).subscribe(gitHubResponse => {
      this.user = gitHubResponse
      this.router.navigate([`perfil/${this.user.login}`]);
    })
  }
}
