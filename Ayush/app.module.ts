//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./materialmodule";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

//Components
import { AppComponent } from "./app.component";
import { FbpostsComponent } from "./components/fbposts/fbposts.component";
import { GuidelinesComponent } from "./components/guidelines/guidelines.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TasksComponent } from "./components/tasks/tasks.component";


//Helpers
import { AuthInterceptor } from "./helpers/auth-interceptor";
import { MainComponent } from './components/admin-components/main/main.component';
import { UserdetailsComponent } from './components/admin-components/userdetails/userdetails.component';
import { AdmintaskComponent } from './components/admin-components/admintask/admintask.component';
import { AdminnavbarComponent } from './components/admin-components/adminnavbar/adminnavbar.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DatatableComponent } from './components/admin-components/datatable/datatable.component';
import { PostComponent } from "./components/admin-components/post/post.component";
import { PostsTableComponent } from './components/admin-components/posts-table/posts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FbpostsComponent,
    GuidelinesComponent,
    ContactComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    TasksComponent,
    MainComponent,
    UserdetailsComponent,
    AdmintaskComponent,
    AdminnavbarComponent,
    DatatableComponent,
    PostComponent,
    PostsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
