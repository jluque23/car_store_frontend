import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario';
import { SignupService } from 'src/app/shared/services/signup.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BugNotification } from 'src/app/shared/models/bugnotification';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  titulo = 'Signup details';

  public usuario: Usuario = new Usuario();

  constructor(private signupService: SignupService,
              private router: Router,
              private authService: AuthService,
              private notificationService: NotificationService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      Swal.fire('Login', `Hola ${this.authService.usuario.username} ya estas autenticado!`, 'info');
      this.router.navigate(['/dashboard']);
    }
  }

  signUp(): void {
    this.spinner.show();

    this.signupService.createUsuario(this.usuario).subscribe(
      json => {
        this.createNotification(this.usuario);
        Swal.fire('Nuevo usuario ', `${json.usuario.username} agregado con exito!`, 'success');
        this.spinner.hide();
        this.router.navigate(['/login']);
      }, err => {
        if (err.status != null) {
          Swal.fire('Sign Up', 'Verificar datos Email y/o Usuario!', 'error');
          this.spinner.hide();
        }
      }
    );

  }

  createNotification(usuario: Usuario): void{
    const notification: BugNotification = new BugNotification();

    notification.description = `${usuario.nombre} ${usuario.apellido} created an user on ${new Date().toDateString()} with ${usuario.username} as username.`;

    this.notificationService.newNotification(notification).subscribe();
  }

}
