import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgxPaginationModule} from 'ngx-pagination';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/helpers/header/header.component';
import { FooterComponent } from './shared/helpers/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthGuard } from './shared/guards/auth.guard';
import { RoleGuard } from './shared/guards/role.guard';

import { LoginComponent } from './auth/login/login.component';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { SignupComponent } from './auth/signup/signup.component';
import { SettingsComponent } from './auth/settings/settings.component';
import { AccountComponent } from './auth/settings/account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenedbugsComponent } from './openedbugs/openedbugs.component';
import { ClosedbugsComponent } from './closedbugs/closedbugs.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { UsermodalComponent } from './manageroles/usermodal/usermodal.component';
import { NewbugComponent } from './openedbugs/newbug/newbug.component';

import { NotificationsComponent } from './notifications/notifications.component';
import { BugdetalleComponent } from './shared/helpers/bugdetalle/bugdetalle.component';
import { BugexterminatorComponent } from './bugexterminator/bugexterminator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './shared/helpers/spinner/spinner.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopcartComponent } from './shopcart/shopcart.component';
import { CarstoreComponent } from './carstore/carstore.component';
import { ProductsbylineComponent } from './productsbyline/productsbyline.component';
import { OfficesComponent } from './offices/offices.component';
import { EmployeesComponent } from './employees/employees.component';
import { PrivacyComponent } from './shared/helpers/privacy/privacy.component';
import { AboutmeComponent } from './shared/helpers/aboutme/aboutme.component';
import { DashboardsidebarComponent } from './dashboard/dashboardsidebar/dashboardsidebar.component';
import { CustomersdashboardComponent } from './dashboard/customersdashboard/customersdashboard.component';
import { EmployeesdashboardComponent } from './dashboard/employeesdashboard/employeesdashboard.component';
import { OfficesdashboardComponent } from './dashboard/officesdashboard/officesdashboard.component';
import { OrdersdashboardComponent } from './dashboard/ordersdashboard/ordersdashboard.component';
import { PaymentsdashboardComponent } from './dashboard/paymentsdashboard/paymentsdashboard.component';
import { ProductsdashboardComponent } from './dashboard/productsdashboard/productsdashboard.component';
import { ProductlinesdashboardComponent } from './dashboard/productlinesdashboard/productlinesdashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/carstore', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_USER'} },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'} },
  { path: 'openedbugs', component: OpenedbugsComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_USER'} },
  { path: 'detallebug/:bugId', component: BugdetalleComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_USER'} },
  { path: 'closedbugs', component: ClosedbugsComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_USER'} },
  { path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'} },
  { path: 'newbug', component: NewbugComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_USER'} },
  { path: 'login', component: LoginComponent},
  { path: 'notifications', component: NotificationsComponent},
  { path: 'bugexterminator', component: BugexterminatorComponent },
  { path: 'carstore', component: CarstoreComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'shopcart', component: ShopcartComponent},
  { path: 'productsbyline/:productLineId', component: ProductsbylineComponent},
  { path: 'offices', component: OfficesComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'aboutme', component: AboutmeComponent},
  { path: 'dashboardnew', component: DashboardsidebarComponent},
  { path: 'customersdashboard', component: CustomersdashboardComponent},
  { path: 'employeesdashboard', component: EmployeesdashboardComponent},
  { path: 'officesdashboard', component: OfficesdashboardComponent},
  { path: 'ordersdashboard', component: OrdersdashboardComponent},
  { path: 'paymentsdashboard', component: PaymentsdashboardComponent},
  { path: 'productsdashboard', component: ProductsdashboardComponent},
  { path: 'productlinesdashboard', component: ProductlinesdashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    SettingsComponent,
    AccountComponent,
    DashboardComponent,
    OpenedbugsComponent,
    ClosedbugsComponent,
    ManagerolesComponent,
    UsermodalComponent,
    NewbugComponent,
    BugdetalleComponent,
    NotificationsComponent,
    BugexterminatorComponent,
    SpinnerComponent,
    CheckoutComponent,
    ShopcartComponent,
    CarstoreComponent,
    ProductsbylineComponent,
    OfficesComponent,
    EmployeesComponent,
    PrivacyComponent,
    AboutmeComponent,
    DashboardsidebarComponent,
    CustomersdashboardComponent,
    EmployeesdashboardComponent,
    OfficesdashboardComponent,
    OrdersdashboardComponent,
    PaymentsdashboardComponent,
    ProductsdashboardComponent,
    ProductlinesdashboardComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    Ng2SearchPipeModule,
    NgbModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
