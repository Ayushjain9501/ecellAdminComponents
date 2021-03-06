import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";

@NgModule({
  imports: [MatButtonModule, MatChipsModule, MatListModule, MatDividerModule, MatGridListModule, MatCardModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatChipsModule, MatListModule, MatDividerModule, MatGridListModule, MatCardModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule]
})
export class MaterialModule { }