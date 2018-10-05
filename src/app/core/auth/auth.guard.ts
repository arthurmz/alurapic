import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router: Router){
        
    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        console.log('Ativou guarda de rota');

        if(this.userService.isLogged()){
            this.router.navigate(['user', this.userService.getUserName()]);
            console.log('Ativou guarda de rota false');
            return false;
        }
        console.log('Ativou guarda de rota true');
        return true;
    }
}