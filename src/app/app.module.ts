import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CandidatProvider } from '../providers/candidat/candidat';
import { DocumentProvider } from '../providers/document/document';
import { RechercheProvider } from '../providers/recherche/recherche';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DocumentsPage } from '../pages/documents/documents';
import { RecherchePage } from '../pages/recherche/recherche';
import { CandidatsPage } from '../pages/candidats/candidats';
import { RapportsPage } from '../pages/rapports/rapports';


import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { DocumentsPageModule } from '../pages/documents/documents.module';
import { RecherchePageModule } from '../pages/recherche/recherche.module';
import { CandidatsPageModule } from '../pages/candidats/candidats.module';
import { RapportsPageModule } from '../pages/rapports/rapports.module';


import { HttpClientModule } from '@angular/common/http';
import { ToastService } from '../providers/toast/toast.service';
import { CandidatAddPage } from '../pages/candidat-add/candidat-add';
import { CandidatAddPageModule } from '../pages/candidat-add/candidat-add.module';
import { CandidatDetailsPageModule } from '../pages/candidat-details/candidat-details.module';
import { DocumentAddPageModule } from '../pages/document-add/document-add.module';
import { PaginationProvider } from '../providers/pagination/pagination';
import { DocumentEditPageModule } from '../pages/document-edit/document-edit.module';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { FileUploaderService } from '../providers/candidat/file-uploader-service';
import {NgxPaginationModule} from 'ngx-pagination';
//import { IonicImageViewerModule } from 'ionic-img-viewer';
import { RecrutePageModule } from '../pages/recrute/recrute.module';
import { RecrutePage } from '../pages/recrute/recrute';
import { EmailComposer } from '@ionic-native/email-composer';
import { SecuriteProvider } from '../providers/securite/securite';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { SelectionProvider } from '../providers/selection/selection';
import { RecruteProvider } from '../providers/recrute/recrute';
import { Toast } from '@ionic-native/toast';
import { RecruteEditPage } from '../pages/recrute-edit/recrute-edit';
import { RecruteEditPageModule } from '../pages/recrute-edit/recrute-edit.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EtatPageModule } from '../pages/etat/etat.module';
import { EtatPage } from '../pages/etat/etat';
import { SelectionEditPage } from '../pages/selection-edit/selection-edit';
import { SelectionEditPageModule } from '../pages/selection-edit/selection-edit.module';
import { RecruteMessagePageModule } from '../pages/recrute-message/recrute-message.module';
import { RecruteMessagePage } from '../pages/recrute-message/recrute-message';


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    HttpClientModule,
    HomePageModule,
    LoginPageModule,
    RegisterPageModule,
    DocumentsPageModule,
    RecrutePageModule,
    RecherchePageModule,
    CandidatsPageModule,
    RapportsPageModule,
    CandidatAddPageModule,
    CandidatDetailsPageModule,
    DocumentAddPageModule,
    DocumentEditPageModule,
    RecruteEditPageModule,
    FormsModule,
    ChartsModule,
    EtatPageModule,
    SelectionEditPageModule,
    RecruteMessagePageModule
    //IonicPageModule.forChild(RapportsPage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DocumentsPage,
    RecherchePage,
    CandidatsPage,
    RapportsPage,
    RecrutePage,
    CandidatAddPage,
    RecrutePage,
    RecruteEditPage,
    EtatPage,
    SelectionEditPage,
    RecruteMessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CandidatProvider,
    DocumentProvider,
    RechercheProvider,
    PaginationProvider,
    SecuriteProvider,
    FileUploaderService,
    ToastService,
    File,
    FileOpener,
    EmailComposer,
    SelectionProvider,
    RecruteProvider,
    Toast
  ]
})
export class AppModule {}
