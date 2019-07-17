import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule,
  MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
  MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
  MatTabsModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule,
  MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatStepperModule
} from '@angular/material';

// import { QuillModule } from 'ngx-quill';
// import { MediumEditorModule } from 'angular2-medium-editor';

import { IrsInputComponent } from './controls/reactive/irs-input/irs-input.component';
import { IrsSelectComponent } from './controls/reactive/irs-select/irs-select.component';
import { IrsTableComponent } from './controls/reactive/irs-table/irs-table.component';
import { IrsToggleComponent } from './controls/reactive/irs-toggle/irs-toggle.component';
import { IrsCheckboxComponent } from './controls/reactive/checkbox/checkbox.component';
import { IrsTypeaheadComponent } from './controls/reactive/irs-typeahead/irs-typeahead.component';
import { IrsDateComponent } from './controls/reactive/irs-date/irs-date.component';


import { IrsSearchTemplateComponent } from './controls/template/search-template/search-template.component';
import { IrsSearchTableComponent } from './controls/template/search-table/search-table.component';
import { IrsHttpService } from './services/irs-http.service';
import { IrsNotificationService } from './services/irs-notification.service';
import { IrsInputTemplateComponent } from './controls/template/input-template/input-template.component';
import { IrsDialogService } from './services/irs-dialog.service';
import { IrsAlertService } from './services/irs-alert.service';
import { IrsAlertComponent } from './widgets/alert/alert.component';
import { IrsConfirmComponent } from './widgets/confirm/confirm.component';
import { AskLeavePageGuard } from './guards/ask-leave-page.guard';
import { IrsRadioComponent } from './controls/reactive/irs-radio/irs-radio.component';
import { IrsDtoMetadataService } from './services/irs-dto-metadata.service';
import { IrsViewTemplateComponent } from './controls/template/view-template/view-template.component';
import { IrsIndexComponent } from './controls/template/index-template/index-template.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule,
    MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
    MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
    MatTabsModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule, MatDatepickerModule,
    MatNativeDateModule, MatTooltipModule, MatStepperModule,

    QuillModule, MediumEditorModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule,
    MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule,
    MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule,
    MatTabsModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule, MatDatepickerModule,
    MatNativeDateModule, MatTooltipModule, MatStepperModule,

    QuillModule, MediumEditorModule,

    IrsInputComponent, IrsSelectComponent, IrsTableComponent, IrsToggleComponent, IrsCheckboxComponent, IrsTypeaheadComponent,
    IrsDateComponent, IrsRadioComponent,

    IrsSearchTemplateComponent, IrsSearchTableComponent, IrsInputTemplateComponent,

    IrsViewTemplateComponent, IrsIndexComponent,
  ],
  declarations: [
    IrsInputComponent, IrsSelectComponent, IrsTableComponent, IrsToggleComponent, IrsCheckboxComponent, IrsTypeaheadComponent,
    IrsDateComponent, IrsRadioComponent,

    IrsSearchTemplateComponent, IrsSearchTableComponent, IrsInputTemplateComponent, IrsAlertComponent, IrsConfirmComponent,

    IrsViewTemplateComponent, IrsIndexComponent,]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        IrsHttpService,
        IrsNotificationService,
        IrsDialogService,
        IrsAlertService,
        AskLeavePageGuard,
        IrsDtoMetadataService,
      ]
    };
  }

}
