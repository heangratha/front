import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../core/authentication/authentication.service';
import { User, ErrorInterface } from '../../model/user';

import { GlobalText } from '../../../texts/global';
import { MatSnackBar } from '@angular/material';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public nameComponent = GlobalText.TEXTS.login_title;
	public login = GlobalText.TEXTS;
    private authUser$ : Subscription;

	public user: User;
	public forgotMessage: boolean = false;

	constructor(
		public _authService: AuthenticationService,
		public router: Router,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
        GlobalText.resetMenuMargin();
        this.initLoginUser();
	}

    /**
     * Preaload the component
     */
    initLoginUser() {
        // Preapre the User variable.
        this.blankUser();
        // Get the real user.
		this.authUser$ = this._authService.getUser().subscribe(
            result => {
                this.user = result;
                if(this.user) {
                    this.user.username = "tester";
                    this.user.password = "tester";
                    // console.log('initialised user --', this.user);
                } else {
                    this.blankUser();
                }
            },
            error => {
                this.user = null;
            }
        );
    }

    /**
     * Reset the user to empty.
     */
    blankUser() {
        this.user = new User();
        this.user.username = '';
        this.user.password = '';
    }

	/**
   	* check if the langage has changed
   	*/
	ngDoCheck() {
		if (this.login != GlobalText.TEXTS) {
			this.login = GlobalText.TEXTS;
		}
	}

    /**
     * When the user hits login
     */
	loginAction(): void {
		this._authService.login(this.user)
			.then(
                (user: User) => {
                this.router.navigate(['/']);
                GlobalText.changeLanguage();
			})
			.catch((error: ErrorInterface) => {
				this.snackBar.open(error.message, '', { duration: 5000, horizontalPosition: "center" });
				this.forgotMessage = true;
			});
    }
    
    ngOnDestroy() {
        this.authUser$.unsubscribe();
    }

}
