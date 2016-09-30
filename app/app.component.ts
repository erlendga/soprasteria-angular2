import { Component } from '@angular/core';

@Component({
    selector: 'sopra-steria',
    template: `
        <style>
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #333;
            }

            li {
                float: left;
                font-size: 18px;
            }

            li a {
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }

            li a:hover:not(.active) {
                background-color: #111;
            }

            .active {
                background-color: #4CAF50;
            }
        </style>
        <ul>
            <li><a routerLink="/student">Student</a></li>
            <li><a routerLink="/course">Kurs</a></li>
        </ul>
        
        <router-outlet></router-outlet>`
})

export class AppComponent {
    
   
}