import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileID: string;
  character;
  constructor(
      private activatedRoute: ActivatedRoute, private http: HttpClient

  ) {}

  ngOnInit() {
    this.profileID = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://rickandmortyapi.com/api/character/' + this.profileID)
        .subscribe(res => this.character = res);
  }
}
