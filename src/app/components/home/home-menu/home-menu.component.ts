import { Component, OnInit } from '@angular/core'
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { }

  logout() {
    this.loginService.logout()
  }

}
