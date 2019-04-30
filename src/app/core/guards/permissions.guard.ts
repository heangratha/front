import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { User } from 'src/app/model/user.new';
import { UserService } from '../api/user.service';
import { SnackbarService } from '../logging/snackbar.service';
import { LanguageService } from './../../../texts/language.service';

@Injectable({
    providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

    // Language
    public language = this.languageService.selectedLanguage;

    constructor (
        private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private snackbar: SnackbarService,
        private languageService: LanguageService,
        ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (this.userService.currentUser === undefined) {
            return this.authenticationService.getUser()
            .pipe(
                map((user: User) => {
                this.userService.currentUser = user;
                return this.checkPermissionsWrapper(route);
            }));
        }
        else {
            return this.checkPermissionsWrapper(route);
        }

    }

    private checkPermissionsWrapper (route: ActivatedRouteSnapshot): boolean {
        const permissionGranted = this.checkPermissions(route, this.userService.currentUser);

        if (!permissionGranted) {
            this.snackbar.error(this.language.forbidden_message);
            this.router.navigateByUrl('');
        }

        return permissionGranted;
    }

    private checkPermissions(route: ActivatedRouteSnapshot, user: User): boolean {

        const segmentedRoute = route.url.map((urlSegment: UrlSegment) => urlSegment.path);

        // Deny access to distributions if the user is not authorized
        if (segmentedRoute.slice(0, 2).join('/') === 'projects/distributions') {
            return (this.userService.hasRights('ROLE_DISTRIBUTIONS_MANAGEMENT'));
        }

        if (segmentedRoute[0] === 'settings') {
            return this.userService.hasRights('ROLE_VIEW_ADMIN_SETTINGS');

        }
        return true;

    }
}


