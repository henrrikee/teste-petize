import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GitHubService {

    readonly URL_GITHUB = 'https://api.github.com/users'

    constructor(protected http: HttpClient) { }

    private generatorHeaders() {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json')
        return headers
    }

    getByUser(name: string): Observable<User> {
        const headers = new HttpHeaders();
        return this.http.get<User>(`${this.URL_GITHUB}/${name}`, { headers })
            .pipe(retry(1));
    }

}

export class User {
    login!: string;
    name!: string;
    id!: string;
    avatar_url!: string;
    followers_url!: string;
    following_url!: string;
    repos_url!: string;
    location!: string;
    email!: string;
    bio!: string;
    twitter_username!: string;
    followers!: string;
    following!: string;
    blog!:string;
}