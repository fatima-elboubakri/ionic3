webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruteEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recrute_recrute__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recrute_recrute__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecruteEditPage = /** @class */ (function () {
    function RecruteEditPage(formBuilder, recruteProvider, navParams, navCtrl, alertCtrl) {
        this.formBuilder = formBuilder;
        this.recruteProvider = recruteProvider;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.etat = this.navParams.get('etat');
        console.log("mon etat actuelle: " + this.etat);
    }
    RecruteEditPage.prototype.updateEtat = function () {
        var _this = this;
        this.recruteProvider.updateEtat(this.etat, this.etat.id).subscribe(function (successCode) {
            _this.etats = successCode;
            _this.presentAlert();
            _this.recruteProvider.getRecrute();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recrute_recrute__["a" /* RecrutePage */]);
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    RecruteEditPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Etat modifié avec success',
            buttons: ['Ok']
        });
        alert.present();
    };
    RecruteEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recrute-edit',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\recrute-edit\recrute-edit.html"*/'<ion-content>\n<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage"></a></h1>\n  </div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"><a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n<div id="user-nav" class="navbar navbar-inverse">\n  <ul class="nav">\n    <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n    <li class=""><a title="" href="" (click)="deconnexion()"><i class="icon icon-share-alt"></i><span class="text">Déconnexion</span></a></li>\n  </ul>\n</div>\n<!--close-top-Header-menu-->\n<div id="sidebar">\n  <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n    <ul>\n      <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i> <span>Accueil</span></a></li>\n      <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i> <span>Candidats </span></a></li>\n      <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i> <span>Recrutement</span></a></li>  \n      <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i> <span>Documents</span></a></li>\n      <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i> <span>Recherche</span></a></li>\n      <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i> <span>Rapports </span></a></li>\n    </ul>\n    </div>\n    <div id="content">\n      <div id="content-header">\n        <div id="breadcrumb"><a href="" navPush="RecruteEditPage" title="page de modification de l\'etat de recrutement" class="tip-bottom"><i class="icon-briefcase"></i> Ajouter un Recrutement</a></div>\n      </div>\n  <!-- Page Content -->\n  <div class="container-fluid">\n    <div class="row-fluid">\n      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" id="exampleModalLabel" style="text-align: center">Modifier une étape du processus </h5>\n            </div>\n            <div class="modal-body" style="text-align: center">\n              <form>\n                <div class="form-group">\n                  <label for="recipient-name" class="col-form-label">Ordre:</label>\n                    <input type="text" class="form-control" id="recipient-name" name="ordre_etat" [(ngModel)]="etat.ordre_etat" >\n                </div>\n                <div class="form-group">\n                  <label for="message-text" class="col-form-label">Etape:</label>\n                  <input type="text" class="form-control" id="recipient-name" name="libelle_etat" [(ngModel)]="etat.libelle_etat">\n                </div>\n              </form>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-primary" data-dismiss="modal" navPush="RecrutePage">Fermer</button>\n              <button type="button" class="btn btn-primary" (click)="updateEtat()" data-dismiss="modal">Editer</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n </div>\n </div>\n</ion-content> \n'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\recrute-edit\recrute-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_recrute_recrute__["a" /* RecruteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RecruteEditPage);
    return RecruteEditPage;
}());

//# sourceMappingURL=recrute-edit.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RapportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_selection_selection__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RapportsPage = /** @class */ (function () {
    function RapportsPage(navCtrl, securityprovider, selectionService, navParams) {
        this.navCtrl = navCtrl;
        this.securityprovider = securityprovider;
        this.selectionService = selectionService;
        this.navParams = navParams;
        this.barChartOption = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [];
        this.barChartLabels1 = [];
        this.barChartLabels2 = [];
        this.barChartLabels3 = [];
        this.barChartLabels4 = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [];
        this.barChartData1 = [];
        this.barChartData2 = [];
        this.barChartData3 = [];
        this.barChartData4 = [];
        this.lineChartLabels = [];
        this.lineChartLabels2 = [];
        this.lineChartType = 'line';
        this.lineChartLegend = true;
        this.lineChartData = [];
        this.lineChartData2 = [];
        this.barChartColors1 = [
            {
                backgroundColor: '#f68c8c',
                borderColor: '#f68c8c',
                pointBackgroundColor: '#f68c8c',
                pointBorderColor: '#f68c8c',
                pointHoverBackgroundColor: '#f68c8c',
                pointHoverBorderColor: '#f68c8c'
            },
            {
                backgroundColor: '#8dd3c7',
                borderColor: '#8dd3c7',
                pointBackgroundColor: '#8dd3c7',
                pointBorderColor: '#8dd3c7',
                pointHoverBackgroundColor: '#8dd3c7',
                pointHoverBorderColor: '#8dd3c7'
            },
            {
                // 
                backgroundColor: '#f4e859',
                borderColor: '#f4e859',
                pointBackgroundColor: '#f4e859',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#f4e859'
            },
            {
                backgroundColor: '#fdc086',
                borderColor: '#fdc086',
                pointBackgroundColor: '#fdc086',
                pointBorderColor: '#fdc086',
                pointHoverBackgroundColor: '#fdc086',
                pointHoverBorderColor: '#fdc086'
            },
            {
                backgroundColor: '#8e9aab',
                borderColor: '#8e9aab',
                pointBackgroundColor: '#8e9aab',
                pointBorderColor: '#8e9aab',
                pointHoverBackgroundColor: '#8e9aab',
                pointHoverBorderColor: '#8e9aab'
            },
            {
                backgroundColor: '#7fc97f',
                borderColor: '#7fc97f',
                pointBackgroundColor: '#7fc97f',
                pointBorderColor: '#7fc97f',
                pointHoverBackgroundColor: '#7fc97f',
                pointHoverBorderColor: '#7fc97f'
            }
        ];
        this.lineChartColors = [
            {
                backgroundColor: '#addd8e',
                borderColor: '#4daf4a',
                pointBackgroundColor: '#4daf4a',
                pointBorderColor: '#4daf4a',
                pointHoverBackgroundColor: '#4daf4a',
                pointHoverBorderColor: '#4daf4a)'
            }
        ];
        this.user_info = localStorage.getItem('user_info');
    }
    RapportsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.selectionService.getCountEtat().subscribe(function (data) {
            _this.barChartData = _this.constructEtapeChartData(data);
            console.log(_this.barChartData);
            _this.barChartLabels = data[0].selection.map(function (element) { return element.annee; });
            console.log(_this.barChartLabels);
        });
        this.selectionService.getCountPerByEtatRetenu().subscribe(function (data) {
            _this.lineChartData = _this.constructEtapeChartData(data);
            console.log(_this.lineChartData);
            _this.lineChartLabels = data[0].selection.map(function (element) { return element.annee; });
            console.log(_this.lineChartLabels);
        });
        this.selectionService.getCountFemmeEtat().subscribe(function (data) {
            _this.barChartData2 = _this.constructFEtapeChartData(data);
            console.log(_this.barChartData2);
            _this.barChartLabels2 = data[0].selection.map(function (element) { return element.annee; });
            console.log(_this.barChartLabels2);
        });
        this.selectionService.getCountPerSpecialite().subscribe(function (data) {
            _this.barChartData3 = _this.constructSpecialiteChartData(data);
            console.log(_this.barChartData3);
            _this.barChartLabels3 = data[0].selection.map(function (element) { return element.annee; });
            console.log(_this.barChartLabels3);
        });
        this.selectionService.getCountFemmeSpecialite().subscribe(function (data) {
            _this.barChartData4 = _this.constructSpecialiteChartData(data);
            console.log(_this.barChartData4);
            _this.barChartLabels4 = data[0].selection.map(function (element) { return element.annee; });
            console.log(_this.barChartLabels4);
        });
    };
    // Transform back end data to chart.js data structure
    RapportsPage.prototype.constructEtapeChartData = function (data) {
        var chartData = [];
        // on boucle sur chaque etape
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var etapeData = data_1[_i];
            console.log(data);
            chartData.push({ data: etapeData.selection.map(function (res) { return res.Selection_count; }), label: etapeData.nom });
        }
        return chartData;
    };
    RapportsPage.prototype.constructFEtapeChartData = function (data) {
        var chartData = [];
        // on boucle sur chaque etape
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var etapeData = data_2[_i];
            console.log(data);
            chartData.push({ data: etapeData.selection.map(function (res) { return res.Selection_count; }), label: etapeData.nom });
        }
        return chartData;
    };
    RapportsPage.prototype.constructSpecialiteChartData = function (data) {
        var chartData = [];
        // on boucle sur chaque specialite
        for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
            var specData = data_3[_i];
            console.log(data);
            chartData.push({ data: specData.selection.map(function (res) { return res.Selection_count; }), label: specData.nom });
        }
        return chartData;
    };
    // events
    RapportsPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    RapportsPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    RapportsPage.prototype.randomizee = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100), 59, 80,
            (Math.random() * 100), 56,
            (Math.random() * 100), 40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    // adding data and updating the chart
    RapportsPage.prototype.addData = function (chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.foreach(function (dataset) {
            dataset.data.push(data);
        });
        chart.update();
    };
    RapportsPage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        });
    };
    RapportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rapports',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\rapports\rapports.html"*/'<ion-content>\n  <!--Header-part-->\n  <div id="header">\n      <h1><a href="#" navPush="HomePage"></a></h1>\n  </div>\n  <!--close-Header-part--> \n  <!--top-Header-messaages-->\n  <div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n  <!--close-top-Header-messaages--> \n  <!--top-Header-menu-->\n  <div id="user-nav" class="navbar navbar-inverse">\n    <ul class="nav">\n      <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n      <li class=""><a title="" href="" (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n          <span class="text">Déconnexion</span></a>\n      </li>\n    </ul>\n  </div>\n    <!--close-top-Header-menu-->\n    <div id="sidebar">\n      <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n      <ul>\n        <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i><span>Accueil</span></a></li>\n        <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n        <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>  \n        <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n        <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n        <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n       </ul>\n    </div>\n    <div id="content">\n      <div id="content-header">\n        <div id="breadcrumb"><a href="" navPush="RapportPage" title="page des rapports" class="tip-bottom"><i class="icon-signal"></i> Rapports</a></div>\n      </div>\n          <!-- Page Content -->\n    <script src="node_module/chart.js/src/chart.js"></script>\n    <div class="container-fluid">\n      <ion-content padding><div class="row-fluid">\n        <div class="span6" style="overflow-y: scroll">\n          <div class="widget-box" style="min-width: 600px;">\n              <div class="widget-title">\n                <span class="icon"><i class="icon-briefcase"></i></span>\n                <h5>Nombre de personnes convoquées pour chacune des étapes du processus de recrutement</h5>\n              </div>\n          <div *ngIf= "barChartLabels?.length" style="display: block;">\n          <canvas baseChart \n                  [datasets]="barChartData"\n                  [labels]="barChartLabels"\n                  [options]="barChartOptions"\n                  [colors]="barChartColors1"\n                  [legend]="barChartLegend"\n                  [chartType]="barChartType"\n                  (chartHover)="chartHovered($event)"\n                  (chartClick)="chartClicked($event)">\n            </canvas>\n          </div>\n        </div>\n    </div>\n      <div class="span6" style="overflow-y: scroll">\n        <div class="widget-box" style="min-width: 600px;">\n          <div class="widget-title">\n            <span class="icon"><i class="icon-ok"></i></span>\n              <h5>Nombre de personnes retenues </h5>             \n          </div>\n          <div *ngIf= "lineChartLabels?.length" style="display: block;">\n          <canvas baseChart \n                  [datasets]="lineChartData"\n                  [labels]="lineChartLabels"\n                  [options]="lineChartOptions"\n                  [colors]="lineChartColors"\n                  [legend]="lineChartLegend"\n                  [chartType]="lineChartType"\n                  (chartHover)="chartHovered($event)"\n                  (chartClick)="chartClicked($event)">\n          </canvas>\n          </div>\n          </div>\n      </div>\n   </div>\n   <div class="row-fluid">\n    <div class="span6" style="overflow-y: scroll">\n      <div class="widget-box" style="min-width: 600px;">\n        <div class="widget-title">\n          <span class="icon"><i class="icon-briefcase"></i></span>\n            <h5>Nombre de femmes convoquées pour chacune des étapes du processus de recrutement</h5>                </div>\n              <div *ngIf= "barChartLabels2?.length" style="display: block;">\n                <canvas baseChart \n                       [datasets]="barChartData2"\n                       [labels]="barChartLabels2"\n                       [options]="barChartOptions"\n                       [colors]="barChartColors1"\n                       [legend]="barChartLegend"\n                       [chartType]="barChartType"\n                       (chartHover)="chartHovered($event)"\n                       (chartClick)="chartClicked($event)">\n                </canvas>\n              </div>\n        </div>\n      </div>\n      <div class="span6" style="overflow-y: scroll">\n      <div class="widget-box" style="min-width: 600px;">\n        <div class="widget-title">\n          <span class="icon"><i class="icon-tasks"></i></span>\n            <h5>Nombre de personnes dans une spécialité donnée</h5>             \n        </div>\n        <div *ngIf= "barChartLabels3?.length" style="display: block;">\n              <canvas baseChart \n                      [datasets]="barChartData3"\n                      [labels]="barChartLabels3"\n                      [options]="barChartOptions"\n                      [colors]="barChartColors1"\n                      [legend]="barChartLegend"\n                      [chartType]="barChartType"\n                      (chartHover)="chartHovered($event)"\n                      (chartClick)="chartClicked($event)">\n              </canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="row-fluid">\n    <div class="span6" style="overflow-y: scroll">\n      <div class="widget-box" style="min-width: 600px;">\n        <div class="widget-title">\n          <span class="icon"><i class="icon-tasks"></i></span>\n            <h5>Nombre de femme dans une spécialité donnée</h5>           \n        </div>\n        <div *ngIf= "barChartLabels4?.length" style="display: block;">\n          <canvas baseChart \n                  [datasets]="barChartData4"\n                  [labels]="barChartLabels4"\n                  [options]="barChartOptions"\n                  [colors]="barChartColors1"\n                  [legend]="barChartLegend"\n                  [chartType]="barChartType"\n                  (chartHover)="chartHovered($event)"\n                  (chartClick)="chartClicked($event)">\n          </canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  </ion-content>\n  </div>\n</div>\n  <div class="row-fluid">\n    <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n  </div>\n</ion-content>  '/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\rapports\rapports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_selection_selection__["a" /* SelectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RapportsPage);
    return RapportsPage;
}());

//# sourceMappingURL=rapports.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentProvider = /** @class */ (function () {
    function DocumentProvider(_httpClient) {
        this._httpClient = _httpClient;
        this.url = "http://localhost:8000/";
    }
    //la method post pour inserer des documents
    DocumentProvider.prototype.postDocument = function (document) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.post(this.url + 'document', document, { headers: headers });
    };
    //la method qui permet la recupuration des documents
    DocumentProvider.prototype.getDocument = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "documents/" + user, { headers: headers });
    };
    DocumentProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    DocumentProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    // la method pour modifier les donnee d'un document
    DocumentProvider.prototype.updateDocument = function (document) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.put(this.url + "document/" + document.id, document, { headers: headers });
    };
    //la method qui permet la supprission  d'un document
    DocumentProvider.prototype.deletedocument = function (id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.delete(this.url + "document/" + id, { headers: headers });
    };
    //filtrage
    DocumentProvider.prototype.filterItems = function (searchTerm, items) {
        return items.filter(function (item) {
            return item.titre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    DocumentProvider.prototype.getSearch = function (titre) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "documents/search/" + titre, { headers: headers });
    };
    DocumentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DocumentProvider);
    return DocumentProvider;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_document_document__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_pagination_pagination__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;






var DocumentsPage = /** @class */ (function () {
    function DocumentsPage(securityprovider, navCtrl, navParams, documentService, plt, file, fileOpener, alertCtrl, pagerService) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentService = documentService;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.pagerService = pagerService;
        this.pdfObj = null;
        this.page = 1;
        // pager object
        this.pager = {};
        this.searchTerm = '';
        this.search = '';
        this.user_info = localStorage.getItem('user_info');
    }
    DocumentsPage_1 = DocumentsPage;
    DocumentsPage.prototype.ngOnInit = function () {
        console.log('Document');
        this.loadDoc();
    };
    DocumentsPage.prototype.loadDoc = function () {
        var _this = this;
        this.documentService.getDocument().subscribe(function (resp) {
            _this.documents = resp;
            _this.totalRec = _this.documents.length;
            console.log(_this.totalRec);
            console.log(_this.page);
            console.log('my data' + resp);
            _this.setPage(1);
        });
    };
    DocumentsPage.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.documents.length, page);
        // get current page of items
        this.pagedItems = this.documents.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    DocumentsPage.prototype.Search = function () {
        var _this = this;
        this.documentService.getSearch(this.search).subscribe(function (data) {
            _this.documentService.getDocument();
            _this.documents = data;
            _this.setPage(1);
            console.log(data);
        });
    };
    //method de supprission
    DocumentsPage.prototype.deleteDoc = function (id) {
        this.presentConfirm(id);
    };
    //Popup d'alert  
    DocumentsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Document supprimer avec success !!',
            buttons: ['Ok']
        });
        alert.present();
    };
    //Popup de confirmation
    DocumentsPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Voulez-vous Supprimer ce document ??',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'Annuler',
                    handler: function () {
                        console.log('Annuler clicked');
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.documentService.deletedocument(id)
                            .subscribe(function (data) {
                            _this.documentService.getDocument();
                        });
                        _this.documentService.getDocument();
                        _this.presentAlert();
                        _this.documentService.getDocument();
                        _this.navCtrl.push(DocumentsPage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    //imprimer doc
    DocumentsPage.prototype.createPdf = function (doc) {
        var docDefinition = {
            header: {
                columns: [
                    { image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB/sAAALeCAMAAAByaYK7AAACqVBMVEUAAAAjHyDBJy0jHyAjHyDBJy0jHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAAAABsnTFsnTFsnTHBJy3BJy07R53BJy3BJy1ADQ/BJy3BJy1snTHBJy3BJy07R507R52AGR0BAAA7R51snTFsnTE7R53BJy1snTHBJy3BJy1gExbBJy1snTE7R51snTFsnTE7R53BJy1snTFsnTFsnTFsnTFsnTE7R507R507R507R507R507R507R507R50AAABpPHaxJCkgBwh9hTB5GBwAAAAjHyDBJy1snTE7R50AVKYwCgthFBeRHSK1JSpRdiUMAgMDBAobJwxlky4sNXY2TxkeJE8HCgOpIidIDxE3Q5N5GBydICUkBwgPEicYBQZEYh9fiSspOxJYgCgOFAYlLGI0PokwOoAWGzuFGx8UHQk8DA4GCRRtFhkLDR1UERQ9WBwvRRUpMWwSFjFKbCIiMQ8aH0UhKFgAKlMAFSoAP30AT5w3SJ4FUqUARIcACxUAID4sSp8AEB8jTKAPUaQANWgASpEAOnIAGjQeTqIKUqS8Li0wSZ8AJUkWT6MAL100SZ6gL0h+N2WuPy2KczCSMlNxljEpS6BYQIVHXIJUcmVgiExpPHYaTqJ8hzB3jjGhUy9MQ4+4KTRomDiaXi90OWmwKztOaXJjkkCBgDCmTC62Ni5CVI0wdHKGNV2oLUI+TJYeO3xAf2GRaS8haYRDRZYrRpQbRpIOPHpVjUgTXpISLmJafVpdglM2Qns1RWF2KEKRJi4RTJkjRI1KYntCYVOdJTGXQChpJiZQGRs1ExhKP3k0a1YoIUUxTUBMdjYaLTVCHDJubSmAVShPWR8HSYBKhlZMK1UWJVCJKCIQUJ4kLVKcKz8qOTRdeCh8OyOyzWsJAAAASHRSTlMAv7+AQIAQ759g3yDPMK9QcI+/QL+A7xDvQM+/IJ+fj3CAEL+AIHDfYDAQ36+AUO/fUM+fYCCPMK9gr78wz1CPQHDn57+/74D2ZFHvAACleklEQVR42uzdsW6jQBDG8VUkS1enAGHFSoo0UZxUeYI0t5piF0SJZSNqhBDvX1zOR5zDBgdjbEP8/73EtzM7s6uukudN0L+X/z1W/brd9a77935b9fjl5dPvyWA9eJ4CAPTs7mH+LGjN37AbC7MR6xELzVpm1/y/VnJ509mbqwAAvQU/uf8l8EtLW8pMKdFXLTYf7Ifc/yAXMCX+AaAX3lyuyWe0p7ZkSqFGl9NAeRYI5Cyc2Z0CABzn6UZ+mMj/J9/Kdo0TS4zJ1geBSE6J9AeAo7j3MkKrauWeEe7DkxhT2Pw07QBnogAAXXkDveffmqMruG4fsdAYa9N+ewHTJwUA6GQiuwJfTi3yt7ryBW35a5CYzOY9rQw4bwoAcDh3LrvSUOtkM81dkm/5FUv7xRiCHRWJKWy6kiPdKwDAodyp7IoYdseZJKbIjxkHmCkAQA/RLxTnOK9wfQIg/AFg15mi39fABSTGphHhDwCndSN1Fhq4lNBYP+DOHwBO5V7qBBq4rGSxjKQ1pv0BoLVXqbXUwOWFWR5JKw57/gDQkutIrUwDw5AsloF8b6oAAK3MhZY/hs+0KP953hcAWvGkXqqBYYmLlezl8LEPALQxFWHKH2MR5xGLfgBwpDdpwFc5GKYslWYU/gDQveyPNDBQiQ0o/AGgM0+47sf4hEUk9VwFANhvJg0KDQxZEUidBwUA2M+RBrEGBi207PgDQAev0kQDQxf7TPsBQLeWP3/4Yawsr/oDwKGepUGugRGIA9kyVwCAPVwRXvbBqCUrqXpWAIA9PGliNDAK4YotPwA4wIRRP4xeGEiFpwD8Ye+OURsIYjCMBl0k1xEuvBtcbnCMD2BC7l+kTbMgmErKe5f4mvk1cO79cuIroYuHhT9AXbjqxwCbj3wB1tu/JbRx+9B+gOX2vxL62HznA1AVLvoywfPyR7wBcC4882eEQ/sBisIzf0bYtR+gKDzzZ4S79gMUhWf+jLBpP0BRuObPCNoPUBWu+TPCS/sBFtt/S+jkqv0ARWHixwjaD7DY/j2hF+0HKAoTP2bQfoCiMPFjBu0HWGv/T0Ivu/YD1ISJHzNoP8Ba+58JvWg/QFGY+DHDt/YDrLT/SGhm036AmjDvZwbtB1hq/z2hmU/tB6gJ835muGo/QE34wZcZtB+gKMz7mUH7AZba/0joRvsBasK8nyG0H0D7+V+0H6AmzPsZ4tB+ftm5YxsGoSCIgtJVR2TIjbBFCe4/cAsnsr8308SLdgHtZ5RD+wFayryfENoPoP3Mov0APeXahxC79gO0lGsfQmg/QE+59iGE9gP0lHk/IX7aD6D9jPLSfoCWMu8nhPYDaD+zaD/A8/ZfG6zn1n6AlnLtQwrtB9B+ZtF+gJZy7UMK7QfQfmZ5az/A0/bfGyzo0H6AjnLtQwrtB9B+ZtF+gKft/2ywokv7ATrKrR8pdu0H0H5G0X6AlnLtQwrtB9B+Zjm1H+Bh+88NVvTSfoCOcutHCu0H0H5m0X6AlnLpS4qv9gN0lFs/Ymg/gPYzi/YDdJRLX2Jo/5+9++ltEwYDMC7x6SxZajtPRhabdvG/y5iqYcl8/IVWa5sSCHVT0sLzO5Yecnvwm/ACAEtUrPXDZtB+AKD92Jc72g8ARe2/F8DXRPsBYImKlb7YDNoPALQf+0L7AaCs/X8E8DXd034AWKBipS8245b2AwDtL9Zorc2BehDkI6cedIcLvdaNwOdC+wGgrP3fxY41uh96X8tC6uDhxqAVWID2A8AVVKz0fdT2Jit5ScN8gHuAVf2k/QBA+5eIvclBfhinjNcCa7ih/QCwQLXrdf5Nb1Qt1xCy4QZgjPYDwBVUu13p23rr5LqC9VHgBdoPAOfR/ouI3tbyOuqc+A3AE9oPAOsbt/+X2Lq+c/K6nPU8H/ghaD8ALFDta6Vv47P8HILh+H9A+wHgLNr/DjGFokpbo+PzAoCD3hhjlVLyfVzXC9B+AFjZuP1/xTY1XpVkP2kxS2u/aBmQyzaf+Kfakn/aDwArq/ax0rfPs2GWJyijmzPZ1705yGpQy3OUb70N4/x3DP8v5hvtBwDaP4idk5NC1+X6RPcn1/wn0ykVZJFsTN+p0adxiUf/LuOO9gMA7ReiV3JKbX1MbvwtfCNeizoZq5z8MJnZP+0HgJVU217p26TJXruuFdrKYyG1o+gPB/UVOMPhn/YDwAm0/y2iqWfC3/hXTc8pHlXfWCVXZVn7S/sBYIT2Lxft5Khfj+8LQmrEf8NZv+CdPUecLBG8wDvc034AeHv7f4iNmCy/881wdWLerpMNC1/U3xlj9EErZrTP6wCcXMIlVv6Vu6X9AHBetc11/pPlz3oIvB2NAQ6i78KCV/InrUvrrLtanlcb6k/7AeAZ7V+iMRONtXEosDqesg+lbVOey3JQxmgtLsCrJfVn3z/tB4AChe3/Lb6+VM+cp1v1+td17cw7/J3qko4XHknU7Pt/QvsBYH3V5tb56zBT/miP/hSnz/u16rwWBUofPGTh7wXc0H4A2F/7G/uinUfT/lcXpUvJuond+6b4rF8++ne5lmOZ6f8/9u5lVWoYAMCw9OkCAS+VhhI3Qi7dGBFaaB/fY4deMumc6lGHSeb/Vqfgwln9TZoL7QcA2v+b0/1ql9d6Tnm0CsB6eUDNp/jfQ5PU37rOGUv+aT8AxP57+7+LjHVbT1Vvtqg24sVk5et87zpxR8EcbT/snFHyGpP/tB8A/p2qoOP8d4N+0/jtq370WnDsPsP9852Iyl22KXDb39t8pf0A8Ezt1/VW8uBUNN2v29e7L+7lvP52rn8vU565/3O0HwCeqP2T2sbO2qx/D+JFY+UmvbTvvs6/+0+3DidShsE/7QeAv1YVcpx/Lxe97nw86B/lITW6h7g5L61/HZaDCBI1B/7TfgCg/S+22ttGNGp5GJYJgZTtH2j5nLPyitHz6kQO/Kf9APCO9h/Zat9r4Za/fbg16PfDo82dJ6v71HB7mYLipv+bPtF+ADhVFXCNn1uj2AhhoqFzow7C/4jl1Cb5fzavbE8wj/gbHsFH2g8Ap6r8r/JZqznqXUIvy+XzCP+Nz/79PPGvqD/tBwDaf7y1bxBCe3mhwnyyfzbhP76DyE7xjICtqT/tB4Cnb39U+/XB6+TIfJvB4TjpxP+ooy2KfjJKbrjon/YDwN+3/4fIS9hqv0u/0XqwWR6K21gZs030TqCm6NA/1QpEvtF+ADhVZX2VT1BL26MH3apcd8WlSxT6eKNiL7SzcmUzeam5lw+0HwDKbv9a+2H/0Bq5ZxqRleBlzIdoWYPX8YEANZ/9aT8APE37g9qv6V8esh3yr/qjC37EIPfrGJ3lsz/tB4C3qfI9zj+oXQu1lwdMnlVs7NHvCPbqsj8m/mk/ADxX+38j/YPIlDYy5uOLCVpxderfmOdLzi+0HwBO0P6FPk2/evxNfbdNSkZUI16stTfil26UC8XQf/ae9gNAse3Xfh/4UaZ83kPh5DRft70SbL+usQz9aT8A/KEq06t8ovQbmTIid62MmeRAg/gWIJXZhoYF7QeA19H+C7NP/yBTJVxz3ygZGfV+s58NyQRBL54e7QeAUtvf7tM/yUVpX7+1P/qMYa7XMzi1/oOn3+tP+wHgT9v/SWRhqf1c+KDKWuV3tNU/bvtw/TP1WNhLz9t9pv0AcKrK8CqfpfYuHvTKEke/Th281bj1Kb0C8NlP+Kf9AFBi+7Xfvm53dXEL/K8EexD/SV3Hv/Os96f9AFBs+42cjfFS+LGWF3Vh7dP+IP4hib9oS5z2oP0AMPuf7f8mHp9bR/dhq6JvTDF7+xLm9+LfqOKWO9B+APgfqtyu8unU0rdWrgZRcPqFGE7jH8/7qxJ2OL7RF9oPAMW1v5YzF7xc9cKVnP6f7N3BatwwFEBRmK8TPGiCi8UgCoHK1mxqKNhgf36DkrFGtuhk2s1Y755dQjbx5tqyrGdMb+/GP/I1HW/wb15pPwDU1v6zRH6SJNSe/hT6YvydWfXq40/7AaC29l8k6oIk1lWf/u12/+BS/ONPq9bWfy1oPwD8n9OxRvk0srcMVkHuXPha/Afl8af9AFBZ+yfZG9cCmqrl8Z+z0Pvs71THn/YDQF3td1Z2ggs1HulT4Px+TmErH0bi/+mF9gNAVe33sjdoSf/2/++zzX19Kf6T0Yf2A8BdpwON8Rtk7+w1nWeTxb/N4j9kf6d3tz/tB4Cq2t9IYiUKvab05/G3l9tfWUf8aT8A1Nb+RZKxkajX1jgvSTDRnH5KGl33RLQfAOpsfydXdlkkGq26wbVekjF7ve9LXwVYbYN9ftB+AHio/W/mifVyFYbP+4AuKNzQ7iVZ0oiD7eKHms8fNr7RfgC453SYEb6dpCG9Z4kalXnzu1f+rUR2KMV/NqrQfgCop/2TfPLrd/5W6bK2l1Vjoql0EzToeyFC+wGgpvZnQ2q83FqMNl5W52y/31j8JrI1itB+AHis/b/Ms+rXXX5poI9ofKxNu/iz7/pdJ9FSumpW0zsR2g8Ad50OMcavz4bXznKjMQq5sP3Qbyhm3uu7Rt9pPwBU0f4+e8htJVL6sn8X/7OJpmLmg761EdoPADW0v8+H1zW6X/Z/uNjt3c8s0VScfqToiB/aDwAVtH9YM9fuHvtHo1W6Kk3K/H4hpFUx35j2A8AjTk8/xi9FLuwe+ztNu9g2lu3ax1Jc9R+1rfrTfgA4fPudlas+Pchq/Hptq9/eAY3F2QZB2ao/7QeAo7ffBYnWPewNK/5XfrPdz3Wlvf6Dsr3+b7QfAA7e/llW3ry7sOKfzJvtfm1xvMFZ16jDV9oPAI+0/6d5NqNsTrHxrPgnLkhe+7l4YYKqE35oPwDcc3rqEb69JF187GfFv7gPcsg2RwSTaVVdL9oPAIdu/2Almdb1a4Un1d7b7N/kN0tTcWOAjmOQaD8AHLn9LsiNy/pcq+v99d+dN+8/mt19Ubps3mhA+wHgyO33ciOYd73yc/wL5vxyDMX1/UnRd36/aT8APND+N/NUFom6Ji1jd/JOUce+wHX5MshYXN/v9NwvvdB+ALjj9LTj+/+wdzc9SgNhHMATP90kLWpIYXZWq1ZAoEgawosUd33XVeNB480sHvegB02MFzXx5aI3o148GT+K2NB5ZmCQ+pLItP/fbTcFkl7+88w8M5OeWD9f9G/KprUCzV+vRzf46e1+55imUZydEch+AAB7s7/sJAYVmvKvodHPYECLIsqfFdPbPMfyD9kPAGBt9g/Sq/v6cgF725kp2vH02UdJ/V/N71cK0+qP7AcA+J3sP8s2x3Y1re/PyDK2gRP9jBp6r//YXPgXZakE2Q8AsM6hDb3CV55Qt+0k2MwZ7O8zq+sjorJW+AfBSMy8e7S//346FUKMgsBj+XUc2Q8AYGf201F0Y7lQ3aWyn4Gp8O+rL+/gSzzhobtCyCdxPocAh5H9AAB2Zj/dSNeXO/z6KPsXeUFi9DBxkM7zf34z3X/mZtAexgHLGWQ/AICd2T9wEmPGlOX+Osr+NPFHYsK5bwpzzsWw7f4WLnosR5D9AAC/k/3H2YbYrtKKtVzur6DsZyyIJ5T5/47fGrG8QPYDAKxzaBOv799y6DgfOQqoFbzs78Wt0JUQ/8h+AIA8Zf92lTrXBnI7f7XAZX9P/Hm1326J4KeIlR8/nPkkRIuH5vjPw+T/KWQ/AICF2b+lHN1XSxf+x0Ut+6PO0Hf/Sjhf0G+o5/9FgRiGy4927O/9R/YDANiX/fOyf4vRnv6m0uU/YAXSi0N3FZ9zLoTgmYr/SSRfbFPtGlz6uC8iZjdkPwDAb2T/abYRZNmvtfrVi3eSf2/SNmd+S4zme/O9ePGRJ4+E4KbPhbFXMw6egsWfadmd/sh+AIA1Dm3e9f11pezvpq1+XWeuz4ohikPz2r3HpF7L1b1//dhxxkmgTx89cRe9e0iT/os/lp/0R/YDAFiX/Q21vB+neb/lOIW5jWamMzRsw09inwTcVT179IaO9k1e2MGbpfx/8vpgxSuMRDsn6Y/sBwCwLvvLVN6nkT9I1v0LcwttNPGXuvUCtqCjT9QPvyxccth0EpVOS/+yZ9ODBjMLtGmEia1df8h+AADbsr8py3u60qeS/DcxZnk34q7GH3Y8Zkx+vTu/7qSqTdohUfv5jXr8P3sXsRUioTzpx8xKJ5H9AACZs/8Y2wR9rbwvzwcCjYJs8PPi9roTdyj5aVc+vTi6qbeirp2MWvp6vsd05u9uW3nY/1FkPwBA5uw/yjZBXSvvq/M2/1ohNvjJspuC32CkJn879uTVh6RCb7KRjio6obaTL1v6tyyc+Ef2AwBYlv1jvbxPT6OpFqDTL9Jrc65N9Zs7/PiIkaojlelIxLJhPZ9m9Nemv2/fSb/IfgAAy7K/Rp1+yha/bv47/fTkb4vI/NTQJcOAqc45ZKx2TpDo27NsM/qxT79iW+mP7AcAsCz7685PXW0eu88Gee/005Ofd5iRJ361C6/hkDoNBgZMdTBV0p9HbBVvYm3pj+wHAMie/SfY/9el5KI420pL2irLp6iVaWt9x3elG7d2d3cvl37ac1X7+/vvp9PX33sL5/dT86SS/r5gK0Xc0lV/ZD8AQPbsP8L+vy055a9t76+m/et55Al/bRPelZ2r57krXbtUIpT9C96+n75+KCf9aRuFWvuHAdOYxxqhTRf8HUH2AwBYlf1lalOn7K90Zft6DsVK8reX+/uuXz1/e1bfX7qjJP9eiWjZb/LkrRhFC72UtUmmM3y8oRySdJg1kP0AAHZlP03tK51/lUF+N/cHbTX59eTdSVI/sXffTd2/V9Ltuev5XATK0UllOaO/pqgf+XLen9kC2Q8AYFX2V6ibX5kG6Nbyeo1PNFyR/Nfv3rxcki49cFMX75QIZX8mfBLI0ZU26hAsQ+kf2rLoj+wHAMie/cfZf5eu7+vZz+r5nPL3hHG7/azcv6CH+0Vq8btUUl3enXnJrxF61Gz44bEz09R/nkcZ1iR8Sxb9kf0AANmz/zD779Lj+/Xs385nl3/QXu7wu3JX5r6h6L//Ynf3/PnzOzs719kyb+fjq+dPnz79+nJv786dByuHAU8ePZ6/4l6YZR8fPWXHoj+yHwDgB3t3z9s0FIVx/Osd6dqAIrduggJUTdu8KASrhaQpEJKS0BAhAt06dWJmACFeByQkNgZGvgzEtX3s5ITetIX4Ws9vAVUMNMvf8b33XKPaX1ITM1v/srjL37k7Mzl3dDi02exKf17vLoQWbahPf54C3nX/PAMcPxfz/9UjX94KtWkup8z/AwOg/QAAJrW/MD2FVvnWMjjYJ3ZW3/UmfT14aksGOu/lp8chbCvfJvW+v379+dmLwWOL8eTA5Jd616G59kza8XcF7QcAMKj9K/z9Pj7Ov6l8lB0Nlxt8b174h0/3xxXeD6C/VTI8H7EVPA18+nHYfXJy3LFYbHxg29JYz18vmjPhF+0HANBv/y1atl01sTbV/lwpa7P8Y0f6844Y/u7LUS/+csBtkI4w+dvKtxL8ZfV0B+G3k8dWUrHdmHRd4xC/VzVmuz/aDwCg335aumCUz3T7M3Z9r+NanPTRodR9J7nMXtxbdL9EM1w92Yrfj9AfP/026FgJ1T3HcXUO+7mmxB/tBwAwqf3NIFQRFVOnbOBxOcVf+0M7aXg4cma211cbpIPnIUSX+W/TzvRzU//H58GRFXf0ZZTXWc8vGxJ/tB8AwKT2B8f5mZrI1FA/p2yF3j+wk7r7fWkzYP48L05ywdaJ1sx6SU69evsueQDw6MObjkbY22bEH+0HADCp/SWx/Vk64edVrEDniZ3wYNyTvmRbFW/hDRO70Zb/1QIp38xBwJ9f3lsxneMjjbDXjIg/2g8AYFL71URObv8mZcCeFTp+ZMd0D5I1daoW76tf+KDEGj9H7YbLAMK7gVG5aAmKnunxR/sBAHTbf5OW7m/t3ybjOXfFL/3DcY+SvCjKe7SQuppo8iuAEo9JljZU1twsxh/tBwDQbf81WrqZ9mdqud+rCNfvPzzsC4ENVLzzf4IF5Vvh65GmBgCd8srZiz/aDwCQjfbnyHQ1K3TCi/wHQkLbwvt+XfycFMz32Sj4f6wK6wKBRjlr8Uf7AQDMaX9QJbH9a2Q23t///JnwlV9aGMjT4rZ4Z19d+QpbvGQy51N28sVzxP8upRXaDwBgcvtXlVKZmOzTqE7fwjscOyRwqnyz3gVPSZ5GfzO44Ef4lJnTXiT+aZ/tj/YDAOi2/wYth9x+TlkW7u6PNu91XoQb+8/4h1WPzt/+7diBv61N/48d8VNmjfIC8U/5rX5oPwCAbvuv0lLJ7c/GNv/a1Pv+B/fPujLHdS4+FbmgfC3eLyF8ysxzk/Ffp7lq6b7P/zraDwBgTPv5Ct94+82/xK/Nh/q5/JKaxmhdzfbzbr8d5RPbn3SvYsV0PvbOHO+7Tml0De0HADCm/TTb/gwc8ePNeydC+cX01+hS2t9SEyVeB0i0X5IvxuP/bN85I/5Fj1II7QcAMLn9G+Yf8XOqPM+Hyy8p8y6/C7a/ldgqmeOfxdsvargWe/5oOKI53BSf9EP7AQBMbv8kZWZf3u8VY0v9w/ukkX6Pzq8VhZ1H96/yz4T2S9cMcvztB72/P9K4lD5oPwCAbvtv09Kt+qkitmb68f71Ii/1PzwgnRtyG5e3XbKuWFOj/bxGEXhs2w/HJGoEv1mbUgftBwDQbf8VWrqZO3x3DW9/zQoMbJsXzwWOe8FxeXLYSyqypdN+/urP/2+72yeJZ526R2mD9gMAGNf+7VjKzL7FL0r/C353LnKqPMb3Mtu/o5h++8lxk/OH9+XfLq37/dB+AACD2s+71AMrRo/2aUe7/IYj0kp/+ZJHJNQVq2u0X7hs2B9GJD+5tFO63+8O2g8AYFr7NylSMLj9vTfCWbl/l3457CUVWRHu8ZvPqyTiL+9VcNM53Pcq2g8AoNn+W7R0YbmYuWP9Dt6Hm+W7fdJLf/vyP8ENFVkTXq5ojSUY2BNPHeHfVFI53w/tBwDQbT8tX33mkF/J0LF+zuEgTP8+aaa/Rpff/paK7Ajt13vv/9gfRzjs0wwvlUv+aD8AgEHtp+CueZYzs/39bpj+av8/pV9uP6lITrP9bL3I5/wnxjRjL41L/mg/AIBJ7T9NfYEiTSPbf/DwOa/g/6/0y+1vqtBW4ifbCw0mOno2773/3RSe8kf7AQBMav9GMH42shZ2yyQvHy0j/XL7d1UkOURBS41n+9u2eNTfqaTvlD/aDwC/2buz3SZiKIzjr3ckz7CMJisMUkhKliqKojZpGiAQSiCAEJQn4FFppjM57sQBZzE9Vr/fDULiArj51+NjG3xq/8YMetW/6/zjuX36idPvqP3tjfa/yn5jZVqI/+zbti1/QV/90X4AAMv2PyMBsmE/n9u/+LJD+jvHTD8v8yfEWsVDfrt9SKlo8Tdv+teC1IjEeI72AwDYtf8JSVAuLEoj39r/bRbmY37T/5x+8yBf09j+iCzF3XX8r8PUcsuPB5ckxSO0HwDAp/ZfqJWJt+2/CtfpP3WZfvv2T1TuRNsVaJKtYbCWxX8eG1/1SQYkBNoPAOBV+8/5KHqq5Vf7l/bp5/PzNXLZ/rrKVY0TARZ/zbXvoXHibyzsOV+0HwDAq/b31UqLcsqr9mvpn1rP0HfoiJr51f2sxe3X7022NwqKe/6zQvxHsr76o/0AAF61PytVmzI+PeEbzzn9nftIv/kAX/PuC/5nO7+PEHf/Ff84ETXrj/YDAFi2/wWJcFuq88IJtTOSb5X+a+ugDxP+k27bf6IykeGdZPstf45/6op0Y1Gz/mg/AIBl+x+TCJM7R9BK/nzz3y/9PTquVn4pMutz+/nDCu2kpsX/vTH+I0k3/KD9AAB+tZ/K+rq0pHy503eV/s/W6Y97ju7B58izMl/qy39iN5Vg7QfHf/Orf1fEV3+0HwDAs/Y3eYNfa3+fZFvMwvD7O+t5917gJpV1U9kjleH/0QvazSDR4j8zxX8s6V5/tB8AwK/2T/RJ/xM+my7ah5sevn9nvZbvuHr6tmSajqiqjH5r8o5OA1aZm+JfCVIiXvNF+wEA/Go/lbVB9KryYtgvnt+k/4d1+muu0m8+vD9RGR7zn9CuRgGbcvw3Pg30SAC0HwDArv3PSYimdvFcVfkw7BevWvgxC/rAeg19SsdmPrzfV5m9xvx5Q59dmuJfk3PIH+0HALBr/yMSIktV/bZlHgz7pen/ZL2WHybuImk+vK8ybX4wYXfjgCUNU/x7Yg75o/0AAJ61n1p8xJ/bXyKp0vT/Dm41rBfQHXLAvKqP+P+wvf9XlFHAuoM8/gtaa4gZ90P7AQB8a/+5Wmll7Rd/s9/XkE/3nVqf7quQC+bD+01u/wlPTxz01b8Szzdv+OtIGfdD+wEAfGt/vbzetT5TuQsSahny6b4p/VPH0cH+v73NX+X2nx1wamIcaKbr+H/QfjoQ8qYP2g8A4Fv7qbn+MB2pXJlkeh3yiH/H+lG8ZEgu9M0/Jk24/bwpsIdRoBnH840nfWtCbvdD+wEA7Nr/ksRo66mSfbvPVXjjo/VavsFjAS5MzNsjJW4//xx16Ff/ZPBhlsWf1rrBSpfu2RO0HwDAqv0kyIVaie60/5wEWoTaiH9sHc9LcqO65fD+uv0lHvU7+Kt/jxZZ/JfFn21qtDO0HwBgq4fR/lLeqkiJ3vBPV76f7T/j9xyO+PPPTP3t7a8eODdZCTRTWoS3fvIfEHHOD+0HAPCv/Vnzo5tfJW/4x3Oe87O5qWfqas7PPObPorz9F9mv+xokgaZBV+GtN5QZiFj4o/0AAB62P1/4R0oJPuG/1Ob8ptZ34icDcqTOY/7m9vPNPvuqBZpuTK+Lw/6dIDWgXaH9AADbPJD25wv/m1/knvD/qW32V8j6Pr8GuVLi25CNh/xK/cPvR+4FmhHRsjDsHyd7bmug/QAA/wm3/ymJUlKpsmKvSJZ0s/vafs6v5/RzOCf+fHv7ebt/b41AN6Z4Xpj3qwlY+KP9AABW7X9CskRqQ50kiWfaZv/Q+lKfETmzfTf/hLdQDt486QSaJKZ4dvdm/zjZ69+J9gMAbPVg2l9SazLf8H+rbfZfWh+P68ZU5HzUj8cnVIoOEieFr/6LwuW+p/ttbaD9AADbPJj2p4vYZlNpmiSIvtk/sh+QH5I7bd4aMbf/7CjPIV8WvvrTz8KWf/feb/Z9gfYDAHjZ/raK0vPoMk/5pYvdz/Zr+Z7zx+3/9k5PX6VeHeGSJH6rlycdvoapX2IW/o/RfoA/7N1dj9JAFAbgv3eSsWqwQGliDC4sFGJQEQFx1aBGYDXqeuevVQrtGTRtp27nA/s+N8S4N3Dz9pyeMwNwltlPTw5Dak5u+cUTbu/UX/Z39L/sz72nR0ieELvNuN8oXW70t17s2pXCH9kPAHCm2U9/Zf+UXHEjHeO/VE7LyCedLrPv6RGsR7c2O1T8x/Dv8it/35HCH9kPAKCU/U/JRYGQ9cgRr73fPivX8n5kIgzDnN+owqkJHl6YHT5GlL7y3/FbgdKFP7IfAMAQzv575KI4+527yy/ucX9R3uynmZGDbvs50S7Ygm6JX2EMufFxddL175Z/1kH2AwBkqln2L4SLTf+44/+V801tvW9Eel3kLEIKRuy2e35tvrnHf3PS9W+XLvyR/QAAmWqW/U3hYNP/tbTe90q5Q/5wQnr1sl/3U6vi6xDHx4qf7yW89mI7Jwp/ZD8AwP+T/W40/be83jdSv/d2THoN8p6OKj8gKTp8/Ve86bA7udEvKr/XgOwHAMhQ8+x3oem/2q/3/VBe71veMRODL/J+oGoPRubCfnls/lPa9d/6cmNgQsqQ/QAAhnD2PycXhcK5pv9a6vh31Dv+Pmk2z5vkE4kGVYC7GdEx419y138lF/5DUobsBwAwhLP/LjmJU7/lSNP/6p86/i9Js1DEwoL2yQuiSgv/8Sj+iIhn/df2C/+7yH4AgP8h+8WFG2f6X/OM/0P1jv8r0m3Bk3x52T+gqgwPod/laYb1oet/RbGo5BdH9gMAZKlb9l9yxerGmf5bPtVHveMf+aTbRV5Zv+CWf2Umd2LLGX/DlTzuNy73rgPZDwCQqW7Z3xCJfo9faFvBg36lO/5d0q6VV9YHOq5BHh6bH9KD0Nbb28pnAHRIEbIfACBL3bJ/LhLBlLvadiTD7B+UZ/zHRjr+XNlfUkH2h1R54d8ZcoH/2ot9kw7/i0gNsh8AIFPdsj8QicaA48sCPtHvu3LH38/v+Btr+dOcD/bRW/hfJaf78bcfkxpkPwCAIZz9j8lJnP094uvnbVnzzb0RFZuZO90ufwuiwS1/DYV/hwv/tbznNyxzlDGyHwDAFM5+clNTpMK+9RX/Da/2d5XX4Gak3yL/p2mJ6gclufCX3+zfSIX/pNyjD7IfACBDjbO/GR4/yZY1r/YPqZAfmZl055Z/QBn4+l4dhf84Kfz5dL+N1PeYkRpkPwBAhrplfyhSAdle8d/war+vfNHtmPQLc6f86YnQ8dTEO/7ym/2VdMBPt8z5Psh+AIAsdct+Eqk5Ne1O+6150G+pXBS3yYB+7pQ/NaUDkTUW/hH9WfiPSqw5IPsBALLULvsb8ln+PavTfpt40E810NsGi95G/u8S6LkIiQv/yZ2/C3+b5/s8QPYDAJxz9s9FakAvbE77rflEvy4Vesmbb9oNCs7rnWpq+XPhL4/0b729G9qzteaH7AcAUMj+R+SoQKQWZHPaLy77yw76RWRCULC839D3sx1Cvy2P9L+XRv07Vtb8kP0AAErZf58c1T+5vP+CU86wuOz/WXbQr0sm9AqW91vcF6haEvpDaaT/De/421nzQ/YDAJx39jdF6jKdWB+QeTee90n9Dh9e7ddvkbu8z49PpEP78EXlkf6VVPgPbVzjj+wHADjv7CfBKLnXb0qmxfPrHxT7+EkiPpyQCfOC3+RSaByTSEK/zSP9x1H/99J/+2QSsh8A4MyzvydSzaSGbYVk2rd0v+8lFeqaG/QrnvRr8v29OowOlb080r+SrvOLeCfSGGQ/AMCZZ/9cpAKyt+a39bwfyvt9Jgf9aFqQ7Bc8LqFDEvoRj/SvpXv8lxZu80P2AwCcefYHItVI/9kjw67Tsr9LhZb8l/qFrfxJvwE/OemQVvbySP/G29vRb76FaT9kPwCAUvY/JVc1BQulqDNr5717q7zf95AbBPr1Cyb9An5josfy5HyfZ/TbRz7fx8a0H7IffrF3Jz1KBFEcwPkO6snEi4kkXowmbncPL5R2NyA4AkILI6jTIuI44L5F43IxLomJBy+a6NGb8aoXo34BP40U3fQroBfa6Sq6J+930bjF4fKf9+rVK0LIQtmvQ1J1GBoCQGsZhf8Dd63PZQh1Wuka+9WQor6Mq5FkcL/V2bgmLPC9jdf8ljDtR9lPCInNwX27Dma2nsRnvx1eeGTdWcZ+n5sRyn6nAL4BSpRCgh33I4Ac7n6fDfvgH7iHc9N+a6AOZT8hJDa7GGPb92e2muRn/4BxWO23cLZNmacRyv7zSpfYF0LeNlzFYQlZLjsfDYb8ZL/Pcxi5voTdfscyhBASh737GJfdscWK/+Rn/wrjsLwtqS/8n0/K/tMQQun9PvwwLoGPodAzkca5239a2Gf0cm7a7wootDtDCCFx2MMmdm3LbCHJz/4SQ+swUlBe+D/hZf9cMV/UtK6u6waXQx9fj7zV9a5mgmThTZCC8NFJs+ZsMsKT/ck1P2G33w1QhrKfEBKXLEPZPXszW0Xysx8YGgAsofA/OV32mxoP/HxuAXmjrmtNkCR8+KHEXJdAHqfbf0rY43P/BPcCRnAQQBHKfkJIXHaMw3/rFf9O9nchudrTt/zUF/4PnbL/wx+9zjM/qryhd5sgQeilhwFzgUR2t//UGp7sO9N+94G7gPsQlaDsJ4TE5+h2Jsru2RIn/072a5BcV6dv+akv/J/d+/DuzdvXuU2p1mux53+HLbLXR/53SpO7/cI85Enhiv8NHARQgrKfEBKng7v2MdGRLTD2n4LsHzLUAq6tsPBvdvW3H3PxaPS6EJ/wsr8l7kOWybnbf01o+j/Bpj8OAqhB2U8IidfeoweYaN+hw5l0S0H2VxgqA3dOTeFf7OqLtvgbxtjP0Zjf51wgo29CTMLLfjQEedwjfbHp/1xo+l9U+6APZT8hJHaHZ4r/A+ke/EtB9kN7JsNUnPib/Xo15BDf0HVd07QioAuT7vb4CoBl+LX/uxCH8LIfVUAi90j/jLAE4Q42/fF7AiUo+wkhSFrxz44czaRWGrL/6kzTX/aJv6YbQZlv6TWf2f21uQVARa3f8/zHrM2f/l+KUPYXQCb3SP+8d9P/JH4uKlD2E0KQzOJ/X2rn/tOQ/aXZpr+0wj8w96vGKPSLEOCCz95fs+bVRGj0Nxf/hQhl/wrI5B7p+zX9r6ncdwSU/YQQWfbaY/8om86jfyf7m5BkZTv2haZ/CWveuATl/usvn/5CIE3T9F9vvrwe+YH/ijFW1znP+NdN+F+l8LIflUCyi3a641TfVNN/Q+kr/pT9hBCJDh7KsonULvx1sh8SbSBkfws4LHpjYvatnCfj0/t3/i/Qm1pftwxM9eiqehP+Q7SyvwyyORX/NWGn/7MT3EPgzqjc60vZTwiRa/8uNu1A2m79pyL7zzGubcdYBbg4C/9i13uur1GvmfD8sfdr/KPQ/7/Mj6X5H37XocMELZDLPdIXd/o/xJ3+avf6UvYTQqTBwb9Ux38qst/JsbYY9wP8TmBTTL3hWe7rztH+y7tYytqaXd2q5uJl1IoQSWU1ZOKhxQTnQLJJup/H/b2T9T7AKW36U/YTQhQ4uCOb3vhPRfZPlvmIcdfZ/BAbL/jzuTl5S9fA9W0qtTQe+3JEu/i3EqXsZxWQzE33i8fxgMTe6X8LuAtKm/47M4QQIt/hQ/tm4z8lo3/pyP51IftZB8ZajCt34D81PU/4rb4JogevnBF1HAUMpubov1MO6eW3mGAACpyx2/1Cc//mCe4lcDfw16Wj7CeEKLPfvfaHk/8p2Pmbjuzv2Dk/EEv9CsZfdGav4dnnh2nulX1z07lfxZd+A1g1WMiAjXX8PzDFLf9J0/+UcMvvkXDL74rCpj9lPyFEJYx/vPd/NOFb/9KR/dj0x9F2bHtH1e1V56O51y3CPH4z/ev7eBb6562+qfH3fxubLv5LYQceA9Utf7fpf2bulh//udKmP2U/IUSxo0fYrO2JPvy3s9+AhFtn3EC44u+Ou7UhEq8jfst30P7yh0+vczHK18dDfWZXtxr+xb8GIVZDBh1LTHnLf9L0xwd7J7f8ngOnsOlP2U8IUW4vr/7T0/1PSfZ32FhrKsvORe5oY/CLBT/4afYbi3b0377hvusjPcMILO0bk5ECrV/3+XPV4LH/lbAvvMBEQ1DCmfEXdhu+wAN/lU1/yn5CyFJg/KMjexI5/JeS7Hea/lenj7kLUe75FWtWbpbhW/BHCP68VWs6O23PAmpqXb3nswKg2jPBVsQDiCn5gNZ/pxxyv6/ERGVQY+P4GGa8eOCvsulP2U8IWZb97tI/lE3g6X9asn+dce2CcM7tZtxVCIfBL7bfw/58uIad4jf8q1qt1jPyAef6visG6n7pX2Bjl8CPswWJ4cejxJnj6DJweOCvcr0PZT8hZIkOHzrA5hxIWPs/LdlfYWMr05VsC1MwAG/1R3pG16znoy3kO2nH3hr4MWu9RtBCH9Oz+jc08DAMi/RzuAqJ64ASPN2ReOB/C7gNZQ/5UvYTQpbr4J4jbN72Hcl59S8t2Q8DO/DKUyfdlXL4uB8Gv9hxD1BrRN7Ee32Rw+xidy7/83VT+H+Gpr/4Na9WwBOu/Csz+0dQA5v+WN/bB/43YQwf95eMsp8QsnSj2b9sgvM/Ndk/ZFx5ZfoFm3U2tg4+zF4+2tN5TfwLQaq9JgguLPpGbbNm5WeLf/xNHYv/2d9Hg7ABvhWnL4CX+9WYpLtQ398SVvoDPu4vGWU/ISQRDu/ZzpDY/1/6+b+d/RYk3yrjZi/1twPG/Zq9asRXc7R6zpM1fWJvdWHKBj5dG2q+EVHtF8Hm3XOoaiAYBt/bw51HBTa2CuqITX8YO8HdET+lUyAdZT8hJCn24vDf7Pzf0ub/Mft1SD479dut6UZ2yScKcUw/LPhRzch5+fK7Xw1evnMK77UtBON/fqhfM3JzGlj7V8rBdxvcXcdDZlsBddaOI3Gl/wPgTuJ3SHJR9v9j7855nAaiOIDzGXDS0gESDQKJm4IG9GRnSRzjEJKQDSHZcAWWMxziEreAReIKR8EthAQUFIgvAAUgSmho4JPg8Y55Y2dsB4jtDXm/CnYlWELxn3nz5g0hZCZZsmL5Qk1iYSrdfwFgZLO/pUk3/vslJXC8zxca/KhSViXuPLjxpSyNYbQHW9v75/kJq8HpX66ALbzi3+Yf01YNFwlx4ekuHIBcFKb7wEHsAowUZT8hZKZZNg/z32X+8v46AEY2+6GDtWwc4y9pfcNdtXg6H0ye/C9uPc3cvxk6cW/b3xSz8Xhfkv7jful/IKzi78w8aOHL/fHhBRB8w9/d7HcEyyORouwnhMxESjqlyS2ek1ZCKgCjm/2mZmu6bq55rrzhIX94Vz+SJ/+u+5nM0zvhF+43bP7r/exu1+Z/0pD/QJj+reCKP34azSJe8IvREfd0H0+z3x78RqQo+wkhMxXu/2UVgEX+TwCMbvZDYzrkG54NbQdPAQxvr5xeXQ+hKmXpXL0jmXe3/JMf7fyXSKtXdfEvNYAzsmqv8les+Ad+Rg0oJLHt54N7xXP9MeYSMLGN9qPsJ4TMZMvm8et/Mqml86QlgBHO/qbGFA54drQtp+qPN+SxHz9MQIF9x4MXAcmPduD59t8wsrr7L+bqObXX65dBFX9827CJ2/5YbZc3+8G0o/Hc8qPsJ4TMdFb/f0rztbB3BTDC2c83s0X3xp8fgj9+rkum5oWq5/wG6tRvCouIOvja+8/t64ZYeBjHQsVuXe11+5H/VB9nGdSBBm77Y7XN0+wnTvaL8Zbf2lmEEDLjWQWAxVqA1Jz0ImwEjCD7KzAUivKNP+Tvdm+rLmVs6w9iTPolP2RdXwmwbRAdbGL6V7Hwv0uV+G6An638k0lq28/PP4RP5NgYcwamZWwQudmzCCFkOCjp5fO1IAvtJcCCKLJ/PQyFknzjX9s1pYr0yRr0ZZ/ul/w1PAgo74YgvNNvC/wjofKv7wPOs/XH78uZmq2Y2LYfNngn+10WG/1hYyy3/Cj7CSHDZYGCFQBfqVQ6rSgLRjD7PRt/EyzGvrLskD8c5rs3+cVN/7MH1yEAdvr9M/Hcf7wGnJFTkexgAOGQwybe7Y/bDs9kP2z0Z47E8pYfZT8hZBgpK5amFmqhFlt1gHnWImCEst+98c/jJTkc4WNAf4xJv+QXFwV33rM9a5Adg+tfM6qy+377VG7qtSo7GEB8SdSEhrP/jx1v5xP6+ceY4zBtbyxv+VH2E0KG1gIlPSel9WW+VQlgq4Al/332w35x4//4U1kVTT1/VII+7S77js7L4myf+w9Zn1oAnOk3ELWcZIp/rez8+94K6a/vBg++MMpDU8NxR3E75Gn050/4A7c5jrG+lP2EkCG3RJnXVw0AawGppen0CkVZ9n9mv7Pxn9C07ivV5VW33wdrZU10eham1XHTf+td5tTY2DkIchSH2A1Epdyz9ce6/1T3py4cbhjg0tFsbWg4+/8EbPA2+h8fY3jaxzPWl7KfEPJ/UBall6c01PdCYHnarggoy/6T7HdO/JvPX3v6+r/ha74hsINOcn2/8vtbb6yxftdwy+pj+6DDzJiUnPr//lqlvstv62868w2L+G5/AnZ4Gv0vCpf8Yjrwp+wnhPxXlEXWOcB87W+lLHPSlhWKZclQZj/b+OOWH4f3sW/Y2hDGqMpeyfV+61bGcp49QBtkS4bZDAOE7QY4d2F/d8oJf9hdlm/9G7y/Dz+IROCB/0ZgjgnZH9OBP2U/IeR/tERZYa0BFmuDsO6lpfutaDlsMjDDFR97tvzjfIbP4T5PudeXfcr9YuqOf8kwF7BNTW5bJPtY7PjPGWBpatojJ/yrri5FfT1wRafQv9/Z/ycDD/w3A3NGvOQXz4E/ZT8h5L+mKPOsRUBKG7hCntlftBwwLW2YKXZ/V0VTu2rAOaHXgUBZ1SNXBw7r/ZMbMszJsbDs3xzNhPp6Tqzrt+3GxttO+LuXL5NgazmF/hYugRKxQXbJD7P/ILYBRoaynxAyGpawVUA6hbWAKBSc9UDTNM0WxI+/eotud8VT7dJEeI+bkfOfkzOJm2m+e72HqSV3KLKX6fZhuLcLGnMXw9+19R+vgyWv2VrOL0xIyg53o/85vODPHME2wMhQ9hNCRs4CRVHS6fRyXAhEpmGtBaaXAm2Iwfpdnht9jz1Jz0Oy0Pb/I3TfTb+Rw0N059T6YVj2H4wuyfD84fZdjZkwchj+bOsvlgaamq2ID/wnZps7+/GCv21vDCP9KfsJISNumcIqAvZSQNIkOOCqQMdeB5QgCsY+75a/2PAOrwu92J713/TXyirHvsY3r1dxFL3UBrzcH4FJlZt6xKK/BFDF8HcPAio5Txm28RNIyk7PJb8x5jRwcYz0p+wnhBDvYsCSZpanoloPFNjRwIFBtg3WqpItf7N3aP3WoF0vXurHajmHt/7KNbDgcX/gaJ+d0XatY5Wiy4sZVVyf4M+MpQHTOfYwITl7XdmPr/hyG6N/w5+ynxBC+pjtc9tkisz+PFPQBmMiv7XY/NcTAaMyropyn/kAu05P0DnZdwC8JOP7s/DbPndfPR73B2f/wYjfo8dziCdtsGD4VwBc7w+/fmQvebbi1f7kZBwHgTnuzv5NGWYnRIiynxBCwrKfASmTOVC0bP3HBUHDXgOU4C/UJ3X3G3313/fZioWeAne74LPxxV0yNvT9VvU0zfOAeogT6WSw5B+dryo3boANw5/JYimkK7zh04IkbRQv+HsH+/Fl1TaIEGU/IYT0kf069KvkFAjyFu2P5Tt/uATYnZPe5edH/cXeq+x+8VdREW7wGTwL0CvAbeTH/RbwgyX/6BzQulOuw4jf4a+z37qaF58fbmvTipAknO6zHZjrONyH2RP9dB/KfkII6SP7c/C3WtNLgc6fVQWsKoDZglCG+0qfXq0BZ2q2juRCGy97T5RAVPWv9xvjKsYph8f9/tkffckfmnivHwsVu8SfVnx+oFrg/3RIFjb7AeMe7OdMQYYIUfYTQkgU2S/XNk27YaAwkBVAreqZ2G8A2uqt+qMJbwsg7uxlg/B5eGJVHZx2tbNjlhPgL+qSf1Nj7j5RXXV+Y9x7CoAdf4k3+jF7g7I/juk+lP2EEBJf9qMS6xPYmp/QwuX3H5CFlae/r7oeXEr8Kr9kll+r4K58Y1qKb+Q4arrkQfwjGeYKXkyXOhRx9brpfEJZlcviPwf/1zpdd/jvh6SJL/g72X8ZHJuirpYAZT8hhCSR/YiVAsI7AyY6RbENoJ7VVUE5WwcvPr3f+aMPAzI18Wu4s5c9gIPRD4iPp7kQkv3bogwxjP6JElTcP2VdF3532J71j5MAGiVI2kbXcJ/LONTXtiXyp/wo+wkhJMnsR+Zh6zSgoQVp8AWAZ35frgIyHV7aL/T29h3QcL4fxrunl9/9vQogZ7LPqZDs3xxlyV+Mfs8SBX9b4VWOx7cx/E1I3DYx+3GgP7cn8sl+lP2EkGExd82s/gxp9nNts7g1sB/gxydPf18d5EoNHv6SBjf+tQLGJsKU90Y/yjDbx4Kzfy/2skdAiH7GELsS8NZCjY/vv/tRxYbFxB3JcDsBerOfr5kgOpT9hJBhsTKzavWsfgx39k8rmc2itAjw+PmUKihXDPBlOqMDJG/WTjjBifEuicaajq1/yKlKf8BHaKSORli79kZ/T/hn+Qe0n38IhSczKPx/sXfnvE0EUQDHEZ+CFiSklEh03FA9eUwc29hx1sZJvPaaa0OITWyuAhASh+SCIpFLoKABKpSSigpBCXwdCJnhzQ6zsybe8Xqt92u4z+bvnZ15syoN9tO0f9H2VARqPyEkJc5lfzt+9EC0WWg/V+p2AmsA795nZF++gRHvnvgt+iDgokBPSX9VSb+uluKQ2kdsltY1i/vVXSn9Qh3jj996z4Sd6Yn/JXP779re6E/tJ4SkxOnsrkOHjxyYHGz/OiSnXar0dks93Pnwz8j+pttqQziPBx5f73N8vh/ugsNsorD0i53on0ztF6+tL4MF2vQH4o/rADtM2J6e+Bvbb/8aX2o/ISQd5rLcJOuP7c9B0vpfBsrF/Jyh/yLwrKApZX/f6ReL0o/N7b9uazatmn60gf8O/Pu/wvgPpiX+i9ksvhB5pL47WbU91ZfaTwhJh+NZLrr+s9h+ZXLvG94zuf8OaIgBvmKFX/kxJf11QIb0i81o983tv23rThrHw/QranL81/gtPkMmfM9PSfyvBAb6q3smL9nf6H/hACGEpMC5Y6PWf+bar9zMX10vMB2v0weVeEJu6gbZu/tNP+y1ydh+8QHhEsStHZ5+Jf51/kmJCf7KlMR/KbT9+F93GWw6QAghqTA3Yv1nrP14TZ90mN/vuk2m0eu2IYiHUvSyBaiYD09/sWpoJF+TNrf/lpWhfvgeg7mgIcff8bbE5f57ugBTEv9Nc/sXbR/yo/YTQlLjyOFDo9R/ptqvjPGpS8Vqtzoe+1dTfvzHAb7iCx+E4rIh/cuGQvI3+Uvm9i/ZOeHXMqdfjn+PvR5kdg2G+CtW8vjhIDmr5vZfsb3Rn9pPCEkRpf76E3+z0/5iraq9rAc5fW3/e9LuvxITlPl+hvSDKf0i65vm9i9a6VeFRV7DW5Nm9++Ig37iFcG0xN/QfvwPBmuo/YSQVMH6h573n5X2q4v9a6Dn9HXr/17Fhz0thjCBUA9NP/6YPv3iojlT+0XdIFaOy7gWhJPj//7vqn+Z/7sx/jcgOeb2b9o+5EftJ4SkjFJ/m7P+sP0bMFm6xX6Tdssta1b/S7DL1cV/PSN74zmAcjjIV0e8jja2fxXbFhfc5VcuQTiM/xvGhmLVH192yLP/E7Noar/923yo/YSQ1AnW/6S9Of/Y/nmYJPWC3mquCNH8boGpym4fAJTv78HfPGIkpfjXzOkX29DN7V+K/9G1X2Z7mj4YyfHf5l9rAZrHqwsSYm6//UN+1H5CSAoF639s7oAs9e1v5NSd/aPB5X8l/47HAlxYUdMvxV/8WA7C8DIZ2m/jdX9FWriIgvEXq/7zyg/j9yZiSWr/I9F+RO0nhJDo+sub/lPe/vm6abE/mt/1mKLcY0E/8xnJViCpePd9mJvR7Y//db9TwE8u0SpieP+2WPWvgqyW8Ek/uf26/8erlg/5UfsJIWk1dyyLDuG2v1S3v7YQudgfzWn1ysxkKyNZ7uLzNJ7uW4ZQq3w539T+WzE/uZbKjOtCtBZjb/7Gf0e3jLGe8Gb/TXP7F6n9hBASYu50VnKCv/hPb/uLuWogyjXYP1z9V4kuYv3k+3Dr0U3cDLT/KWjEfR1Nh+Euv2h+Gf+Rg1f8k06+AbJ6spv9V03tFycpboEt1H5CSJqdO5mVnP7z4j+t7W8oi/1j/5l+R5d/vM8Ok4jx34heC8fT5/ieWiWOAUIsfC/6VT8S44ze8/i//q55iYGTjTYgCbfM7V+yPNyH2k8ISbdTx7Mcn/aX0vYHb+vJ5xoQB7/iMZWY4o+Rx/h/j94Dh2Eytf9qjMP8u0zoQCS86me4xbczNHKafxRONF6BJFD7CSFkHEfPHsoGTvynr/3qbT01iE+7K/KPSURrsEvEfzgY5Vn4bnT7L8U3zL9dYFy5D6PwGDf8wA9K8MsJFkCCx/yrRUiAqf3ilckdsIXaTwhJvyPnj2UlJ+dib/8K2KMO8LsxDzFrd5ohL/sx8i1pD2AdDHAjmqH9m7HdQN8tM67QhlG4/65w1Gva4/y1JF/5X8b237u46zFIxHZKW6j9hJCZMHcyGzjzdzTe9oMt6gC//HoDLMB3/9thk3xbjL0dZe+72v5noLEU0939foEJFRiJyyTvMnv46YkqBNUTfOW/qLb/PvxF7SeEkBGdO56VHT+XivZrbuuxxXfLjN9sx215DqAWL+WgBUbY/gcXd4X/lFswHqfChKYPo/A9FvBD1F0/rmgZ9ztOlrn99of6UvsJITPjqJj3I8b9HZny9qsD/NbAsn5vK4MGQ+b5wOGV/dssIv5X90b6mtp/OY7z6aUmEzoOjMDpsCDPWed1X9j7oggSnGO0DJMmt/+l2n77Q32p/YSQWcJP/OPAnyluvzrArwH2bWQkr9hvbgk4/u7hbeT6Ou+Sof03Y0hXu8eEZglGUWr+k/6//6q8/sF/DecXT9gV8V8k/hsvgYzaTwgh+1/6Pzk3pe3XDPCzr5HPoG1R1q4Dv9XkAb8uhMMuPcUHVlkcS9ZOhf3vQ7/LFAUxpxDlixC0ntBBP7zrSPcRitpPCCHjLf0fOnx06tqvDPBbqMFkLAQu8EGuLz4WDF5jN/WwS/iiWrU07hG1Vvl/H/rxPEBg7j8e5dM/4OMI48mS2/+Q2k8IIXEt/aMTZ6aq/YYBfnZtZNDWkMkKvIFfPbbHa0MItf0vQDH2VD958b4Coyh5TNUBbs344L+SzKo/tl93XILaTwgh44z7w0N/09J+/QA/+3CSHR9zH7Ajjro7oqJlH/SwSy/CLvO5Ns5Wv1KBcaOe6W+7TCXvV8yZHvwhl8xef7X9D0BC7SeEkPEG/uDD/xS03zDAz74b6st+9HqAT8Uu5lMHu4QD6bQ/4yrsh1z+Zh8iBbcG6K/8uWF68BcH/RZgonACwhNd+6/xsxSWUPsJIbPrzIkYHv4PxteFRt0wwM+6+Qz6rL/U911ht/cd40352H5ereegGOMCX7n85QpEU17066cBFKumB/8VHG88Mfjcr/0EZf0SX2o/IWSW4b4/fPhPqv3mAX72/WLv3l5viKI4gMuf4MkrpTwqb3L3srLHwT5mjDnHdc6ccTtuZ/gdQiG5lJIiciu55H5LPBDKA8oDT/w3GrN/1pll75kzmDFlfZ5wkCjf3957XYYCsNW0Hc2N/y1V9R9krc3D7DcM9cUlv0UNpEC+ByMIOoLQFSquW5518F/6L+b6b/z5d3SEs58xxlAJ037x8F9x9jc1A/yqpBIO1/SFXZHAFT4PLoiY4/dsJ+PRn2b/QSB+a6IviXEZFv4lWdv+2otRG6jWPyj3W6myX1sxydnPGGN/Z9EfmjW96uzfsIMO8KsYFvqpkMN+eNx0fw+Tt98VSgRA0ak0QG0sXuYfuo5A0oZcpuR3AtAYaq1oQRq+hmyAqmD2a6ckcPYzxtjfP/xPnjetuuynl/04wK9CGH7Yyx6kN97cF1pjHhA0+48CUTi4bF/8peTHKcVpzbVZB/811S/0W62yXzvWj7OfMcZKOfzPmT61iuzHy34c4Fc9VdBGZ9j1kvh8MD7dnzCt0TFsoUGrCxWph1GncPJ7+GvSfC//L4D+a+KlSAMqY/3M/hO6yxOL6/wZY6yUw//M+aVnP73sb8M/skxT6K7u/W9h159BBCmY/adpmRr9CfmCMVE0+fGBgHIGYLQr9cUPsbTqPr/tmP1LYodgGPf3M8ZYeYf/GQumlZf96rIfrVkH/0ojfeOPBo5q7T8nUHbhPOaSak87Aylqmv9uyDfw0yHuh5Cv5wtitALBrfgPAUC18DmgEutV9uvb+zn7GWOslMM/dv2Vkv21uexP4LGf3muHH5MfviZQzoEac+mwNrfWj9Ti59Hgd9wQ8gVdYeJChlS1YxOobVgHWIk9Kvv1wxE5+xlj7C+bNmUGKfybnZf9a6CYGl32x4ZH2u+AtAa29hvQZXqYS4Ymv735m3zCaEykdQPIF/YdMUR2SJFftkbq2YNYVu3Bf5XK/vGaiSMwjLOfMcZQSQP/rDkLpmZm/1Iohl72N+Dfapkn2yzTF/o5UlBjkUpXnNirr1Ffld3i5w36HYHUSAHIF0gxzLe7ArmQb4e5zQ8a1R78N/7M/pOaeknOfsYYQ2VN+8e7/z/Pfrzsx209/1jb3N+2zVjo14+k+IV0bQ/7z/S96WqL307QCAf9rqDGAsjXS78QOP1w4JBDfy5s9NsGRNUH/5Uq+7UbfLFkoiyc/Yyx/9XsmZPp3f+fZz+d2b+2Df9ei7a30Y+WhWPiF45rRxjUqHsJsz+5sD4NKfredM92xzqa3y0KIQdpA1SDh/v4XSeCkWCj31Ygqj74r1bZr93giyUTZeHsZ4z9v6aSwj969188+7ctq9dl/w/bzN1t7Z/1fwNMV+SH+DCPkuzvR3aoCv2PQwrd4BvaUV86AhULfo9+BSIH6YX9YyGMaqm52g+2VnnwtxJ7tGX+nP2MMVaqafPo3f/0387+5tJ0Zf+/v+xPLDMW+jWX4ynYc4WGb4MXkIL8O1bsSvzNl0tiX21AKtc2g23bruvLrjAYGyn44/5/ctlPFv3aUMD4rf8uIKo9+K+3EuvpJh9lL2c/Y4yVau5Mi8z8mf072b9uzeIaVfYPaZgL/Zam5tiHGLO0AL8nBbqM2S9OLYmp8kDFil0SWTr+wINcYSRFmgyg2KJfap2x2q/SF/8tP7P/jGaTD5ZLloWznzHGpk6fY9FlfwWzv722LmN8CBVp2sNuc3lq1A3epGuO2pFDsv+1iD1fEnsphtzMyf6OH4SQr+d26S+M/xxgk0W/BS3F1w+qUd1wv1Xj2a86JQ5D2j7OfsYYKx/e/dN5//nZHzfz12eMD7XBuMBO5eDyDYAMG3Jk4IVSKG+s2GURe7Qk9kwMuaI+1pF9zP0sA//XNsAB/vnwob+4tTjbj1pW2VT/lePZjxMSNJ9vh7Jw9jPGGN79k7a/kbJ/29bFZEFvrawx9vc1l+sG3eABn2Zv4AyH+x0R+7Yk9ig/+x3ZD2wYRS+SmjZADwA8tyPIQ39x69T7B/yqjV8WlGyTldi+X1fqh+WSZeHsZ4wxTd0/Pv3H2W+M87i+rwYLejM0lxv7+5bqiwA846acseSDu1bsrduXXXF3SexVVvZL6Ua2ByMJA79jCH7o+brdwsXtwAcQqlXVHn9LydyGtAlKw9nPGGNk4G/KjEW3zbfAjXR9X6tdp8v+xC7TIH889hOY/iZW7KHsAYxvoP0ipXRS5QDvZd91A9uGEZHcp8HvBV39goHimi36NQ/9y1oKJVtvKXBSW+q3ouyxfpz9jDGmnfmDLj7+BBrJ/D60tRbN/FTLeOxvGyOQ3q5TD61YsnaPhtfv1ajbkW7uj+MHXvKx7wjTob+4hvFqv4nvAaXaayVWwwndUGT1tcFGKM/CCYwxxtKmz7LSdm+h/z2vW7O8ZpN7tRr02I9a2WdcrKozDPe5+6P9/zRZ41s4+3tBXwqNTl8d7UO3k7mmv7iWsaZvTTVtfhutxMrDuuX9VbT3T5rAGGOMmrpgjpW2cQ/81GyvrWkzP7XGfOzPfdseSIEMw33EF5JeBbLfsyNfCi05vjco1IwV9j34MzsMfQ+VtfltHs/+I2ouIrFPDf0rC2c/Y4yN2va3Oon/+Mhf7/o+1DQf+9fm1rTjAh3i8nA13ylyaz1K9vdsF6f8Ut2+mvujgp/o2vCn1plW+VZU7bfCUjYe1y7wVS1+O6EsnP2MMVbg6X/TvvXkyL+2hvV9aJfx2N8YLeS8qCMobPLD6T6fXdsOIZYxlyaMp/yOYehnzv3pkY1/uLbnT6mEx8kGqJJqPyz1W3VQO9lHbfqB0nD2M8ZYprmLUmV/52/UcFmP2VrjsX/ryK3sti8U7eS+Z8Md/lJK/60Vs5XIjUkpuyJHF+f+hLhCIPe6vzhc5L8GqA1VDPVfZSm79c/928su8+fsZ4yxbBNvnL9q/fDi6pN0S9+uOh/5Y+sWK2uB2FBkhJ1qsENPVaE/rvN5RSsBRRGOdG0PEh6u+Kdk+Lf/XhpAbcUPSrPSUk6qQkliT9ll/pz9jDGGTPv7P+3d/MuR/13Nj/yxHTjSj35SsKYtjDq6Qv/YqyWxu+TDArE/CEEJA5X7OtKGv6Zl+Jqomtl+qy3lmLa7X90L7IXScPYzxlh+9m9otj8sHnb77HVr5ZYVUHMt49a65cV72Xr9Dt3mQ0b6F8x+6eNpH8KBi4UAJSe/+YuiSlr8d1rjlui6+yso9ePsZ4yx/Oxfszhl/BHA2l3v+F+HC/yI9u+8amPh/ZvxYj8c6f+8QPbLseEpv54dYdF/qcmPGsa1xuOX/tugNHvT2X8AKOsHKA9nP2OMfWfvbnaaiMIwABsvQhKCgS3BsOIivozT2E4LDlD5aYG2tLSFhpbWhCj+RWJigzsWxhUbF66MKxPjyq13ZKc97dc5nEPNtKcM6fvs1JVsXs73N4OzX37ye+5A/Je1ARcNPM2e2a2tiIv+38TkX6TtalD27zmO28p8TvHM8q6b5tTXSy/TqMUs3Z6f+aL/sS28jniaJNk2PuqH7AcAuMniI8unUKxmvXbtnYj/dd04e2q4LfZlN2d7rvq3/L7L2b/j1FzvpL8nQ8Ja6w8nrlvh8/+DrFQyNHpcyUmRj/miP7f7L9UbfqvGr/oh+wEAtOZnH/gH+zuHexP5Y/ta/FP4bOniTRQEChSUeLr+6t/y+6F/9+84jvM4mL3dNTIhyWuaJIkaLvpzu/+DcsNPtPu3yRxkPwCA2tTctOWzwWkg4l8++hcyZb7rI4kNmW6iZf3bbX/V9ysX/aXsH9JK5YAMiVvai4dHhov+q3bXO+WGX8J8ux/ZDwCgqfUP2OVP5PdDHv/ruln24rD3a8TbdZ/a8/m1n72iP2f/1dDBnz4hg6KW7uRhynDR/6nd1T6H/IYkVfPtfmQ/AICu1s82tkilVL8e/+Hp/acsXYgVLE+ZghM9a/F/bfaK/rwA+DnMwd/yRP/wF78zbZERCds35v+eZFnz2/3IfgAAv5m5BUtGWl78h3T078iy1BkfH/57NaLhn6e2M7GnftC64Ftz/gyb/XuVZTKMhyEUBZANozf983bXR2XJX/xaVSKDkP0AAH2mlqRa/8LsNGe/SnjjP2pp3q9JPmkXWN53dvYlf46u28/+61b2guR+mof7zIpZPUnyKfLNPwOydtelquQv2ik5MgnZDwDQs/hQqvU/XGzv98foRiGNf+3Z2gIHXmClTouDOpp8pMb3Dd/WB/r//xeAHT7qPw4FzcOf5wDjZMIzHvNXlvwbtqdBJiH7AQA65uXgn56bErd9ojRICOO/qLvpFx9JsuX6784mIrypztkvHJy4aWfnxse+w3f+xiZpMam8v8nlgJHbtn1j/k3tD9YkZD8AQHu6b0Gu9c94f8/ZP5Ay/vfrJbolZd1yf5KX+wOTn6fnEc9z8lTVp2kyne/5On06p3/W6FakLCYdPiwb3PJr2D0vVId9quMo+SP7AQBmeJOfa/2CIvv1QhX/m+oNttGU/OW29KsIz6xvi+wPu3Xtwz9p8CP+Obvrk/KWf3YcJX9kPwBMuOvBf3/Jq/UHy35Sx//qIY1bXD3HNqqSv1ybPu1+jfbuZP+G9uGf4pLJqB3aPW95PJIl7HGU/JH9ADDJOPi5yS9q/YGzn5Txn2uMOf6L6oG1UZX85QfqRcRzTtSNt2MKu6TlicYUD/+YsYZ/w+75EomckqwujiaZhewHgInFwc9N/vl7LHj2kzr+x3r2r2xiyp/Jjemzvmk/cZcu7FLiGw2Kh3/UWMM/Z/df9bvQ/HudzEL2A8Bk+kfeuew2DUQBdAabOH7EsTdF5SHYIrrkF5BmLCctIlKEwKXNKiWo0EpUIryFQIBACLHjY/g2CJ7m1i/iJHOdcTirqqvGnubMfcydrPg3rmwSgQT3M5j5n5z622PV8AC6/JPclnR+TWjqhMW87Ewn1YjQVXniJzHICfy3sQr+J+GU13mdfuIUAPYiqY37G7qnNSnlZzEodTVN10kt0XVNcym1ePozUU1r6w2yFuieTx1+BodSX2vLfmWteHWknqUVr491eZbINPS2plFKeRI6eWGe3iLrxvWrGfFDd5809zPQ/wpO/hWVrA+lza0ZJ8b7xN1+ryafLc54MOWJMyCHOYE/FEwkMwyn/Mzr9HsKzxSXW0R1bNOnBv8XFtVMm9SFhq41KZ8JdTW9Ph8qB12jvBCDaqYMn9htzXXKPMv2+tlLGi34DyvGor63NtuozdPjfMDWTQJIcT/QGw2jFbT+d4tS/k8gHbAkR8kY9VOnI86r92vi/uN45PGdbOA/CHDu8e1FiXJ/ptPvMXT6IXOJqIxtugYvh+F66n+9655r8TkwXK2eaY12s8x7o95yi6M518Okvqn+CqkQ2KGVx3K1um8ALsDkPhA/tPXLdT9wMoyq7v07hln+Se7Ju6fmYaI2/Xx6zG8ohvuoTlccgswJ/AOckf6jEPhaeI1Pn2GjtPtbvsXnw2q2ibK0PJcvBNVqpixbK/vi6BKbC4svgEFrupnCwF5wRTrNGqXZ0iX+rWAe8YP7H7Gl2R8fVNr79wiuqEswkFjIHiW6/cRsv3eng/3Uus84D2F4lhP478BwBJn0E+X+5yyFCPtHDBsU9/t0Fi3Z4gcMNfUPqqrBp1ru/elNXhqKmFUoZpb/aSl8Ug0mnU1rEfE7fAmsGvofMv0lxQ/ulxX+HWX1H6EV/+8VXN97X2IDey9MBPgfOxPeMjaqyQF/Yfi9nMB/F+UO/8ch8DPujUgwhM0ULijup3wW+qySuOnwxbE0xbKSU1XVRP/LvD+dco7rftuX8TRdr1hd5RafQarBwfhTTJcvj+Mruc8uCvg3goLmPnz3A3DyD734fycoOMW/K7OOPUyc5BfH/F6IZvUhUx7R+5AT+G+jTPcZh8D39AG/KsN+Jd0v4cu9qU5MYvsWl4ThF8V3qrjfbnKO636dcllYReryeCmqEZ9dZrmTuWhoFpeF66nzr1Zc4c8J+G+A+CtyP/A4p/X/YCy7ON5FPOEHHIWJq+Y/i9v8ejU54M8OT5Mg2+ko/xCl2S8KgTfpA35Vhv0Kul/oY03sb1IuFcckeajh/obGOa77TYtLxTBzP0fJJUaqwOOz0RHyJuWxlG5H2Tx/MchwEQb4VOh+IL/1PxpKzf4fF1zdvyf3Zvp+IsJ/IQL/2HERU56BeBqngT8MPOpiNPuNQuBb5yNLsV9d2K+c+2Pzr4n9Ib6SiJFX0VDC/brFcd3flv84NZKHq1DS3ykh37nWJJcOUZXN8+eCLOdgZO8q3A+cTIv/QF9e9n+3oFwtjrUxSYySgf9LEfj3xW+VJ1Y+Y2w73QIZQNFEGv0Q+JIN+/vVhf2Kub/hy7UkWSV2uspfm13NnO8P3h2q+1uUA7juN9VJ+tt8Nj4pjfd3Tf4H7r8A3k+V+Ce9fWq4/w9Hdx+iZf93UMv9wMGZof4Q+I9rcshPPKYuY4N0ij+A+Qiy2A/P8DUT9o8qDPvVcr/0LyZLJ7iUL13Uyf6LvL+WwxHcj7AtLLUSDWWS/h6fTenFoFscAYsoxuWbYmZfiovn/2b6VXI/m/T+PQ1Rsv9F5f57csfVCWFF4g8Wgf+nZ3Vp9N+epvp3U2f6doIYJo9hCPzIhP29qMIuCZXcD/aQiN8glQKZVWSSmf+Vu980OJb7s9bCd39TmaS/w2firHb7xClRh0m4vxHkcCMO+BV0/x96J8Mop/f/iC3DoOh0v+xgthclNC8C/181ucmPHU5LIHuJvn5w/x6ThejijzMlHzJh/zisMFmikPuRbOm0SPV4BkfH8Aiwavf7CNrAt1ZxyKyrkvS3+WxKLoQWbJ/W0v2XN89v3Qjy2NiKK/zKun8CDP4BDpa59qebG7RCY7s87uZV/D+JyrXyDCDa30l2QjyR3egv5B5Fcco/Hfbvh1UejFTG/QhBP7Ry41M+Rq1DRWPe99egONrAXxycFGApkvSXl/L3OBY+WTEXNq9dhWg/xbk40a+8+9kk+98PMzxdtPnvGJyWAHLcsuhFCWe97/zlm5j0rzzQEnkffoQnJe3VQ04/Tvlnwv6HUDypAFXcn0gZ1/u7qeHyynAbBFiZ+xsObsjYRlwcpABfkUr3b/bOpNVpKIrjiYmZmqbpRlAUBVeiuPIjuIil1YqF8nCsK1tFrWDBAQecJ8QJxI1uXLgUXDgsFT+EG7+Kxt56cmNikt6Te2/6+t/5hNeXmzS/e/5nuDmW1hP9VGoKbwH0d67dBNSPa92atX+O5K0K+wNo/YsV/02C4tqXWM4Pg+wQRQf+ZLjf7apM9e2C038wsi8C9h/BXafD0/qOz3HGE8f/QsBHkrDf2lOqLCREIoAKWSa4zsLYb7jl2sX+nvKkzuW1gxITSpwt/zRfC+ceoeUcUN399VvWbl6zofUfbd+xBeJ9DPafDnhpcHGEEf53U+L7/fiDanvDaI0aGe73pirFfmehLmIf1Rqxt4U70R/C/lCX4re9zXcckhTsN9w9Jcv9H/yrGvRTob849tdNZPYi7AsRPt+VwlLyc2z/Mh4AuEdlSVd4am0rU2s279yooGoNYQMfQe0/S/h/NLXUD/+AmpPRIjVynN+jqkz2OwfG/nGq2o+wH22jRML+79O7GQv7e0M4u5eTtiogjuzPzuZWEf4Q9POTCYspgv2Gg8xerpaQl05dKUx/F6HmIAn9C8v+DZu2zGz+KrM/1OTEkCn8/0+pH34GY0gf53clhP/VihzhvxeMfWKWnIP/QGzyI2H/52eJPfzn25x9EgnYn/piqh78i1Wjy1vPkH3/sDwbFQn9+KlqQwbTv4bQa1D+N8xQeGptanJ/8y4K+1Vn/2+NofivePF/YisflPrhakCT60bI/lcVSfgfiDghh6KrdryF2eRHwv6rTxIr+i5wd/zFs/9/L6ZqwT83BqW/tuz7h3XNKhb68cvUPAlM/zyWv3D071G4aksS9besT2jerz77Ayj+o9XP7v3fmzjVD0r9kNWfEi3a5/eGzPuTXvshuD9Amf4tIpR7T8L+h6+SGvkGbVg/ThLOfowXkxwnr8CV8JdZF8R+CzHfjj7zgS1otiUw/V2GzQdGUkaaCUcRrY8Y/Gs2r92ZGusvBvtDweDfAqP/9qZ4+wcBdJg6Q8ett/4m/EeB9OpGeH8ETH9gP4pLQsL+R0lp/TOH29xNEsHszwamzNZ4DBVCZfNlPxabVbQ1xU9Vm8JN/1qezxfuRqkKV21bs2bH2rVb1mcyf3HYH6SF/6P/TP7fBxCjBAY3rlZoej0NE/4VOc4nUugfnI6a/i20Bn8I+28nePu9EUz14SbB7Dcy3q8S81GOVD9IE8D+Bh438J0UZnJbwneUPoLvkHQVlWZ/Xi0W+0NB+B/V+UT7H4BGCQrb0NUbUnns3r1Zh/+FQHZR26T9YAKgsv/ENOy/djWh0q/fFmCRiGJ/gZhEWmecfsMKl8Wd/TUTgRtYZjV+qloXbvrn+Hr44u0o4WP9krV47P+tXmLx/zDJ/u8ms/8QwAxZkzY1wf9Bp/OkIiP9qfTIqYjL38Jr8Cc5kYcPE0YdnxCR7A9Esb9IOZW8NXGRmbYSyDI4s98tK2bk93Qo/5PDcCIAL8u/Jr4IRVMWX7KwPxQU/0c1ijf/H00+rW8fTKjH1nn6ANr7nWvtaoz1PRYF/CGokcRkfx/CfrqTD872GwdcJYr9BbLF8ocohrtHCrkGV/ZrZfnFKAkFhKC9KXiqnZ9z/Yo7B0v2V5j9oSbk4B9a/RXAR1p7/yko88dW73A0fA2b/F+RzYDsiub4D0QW7iga+4kp8iShwY/MReK+TCLZr+/JL5nHkMiCfoA/F/bXS8oV8ywFUZnj7vgJupwtf3u+Pgnpv1OySTb2/9aZk+cPJ1T/k/R/Kvu78GN0Tei09YPOm4qY/pHeB2oeYhdtuM+QnNj/LNb3COjn3gspkP2Gs4e/nD90XFD0A/x5sN9Fga/YCgo1A75CTf8ay1idjIKMJfsLsz+QUFD9F0v/nwn2poz2aYU6GJSj8zTG7lfF9O9G8yP7IPuPxn7SBHHnSZtufQD0nwh4SyD7vaJcU9Wm9ltNVZXJ9WdGv6mqlqaRK3NY4c+N/X658NUZltPT/khVTUa72hdq+vt5RxLjV0w45LumWaqaY++z+JKU/QFU/8U0/JFiVsOP0QUz6Sfkn1duVqPS/wiE+lT2H4v9pNDvVecZzXlAfz8QoN0KiCf79QKA0Gw9jgbfchC6uhCkslBfa9SVmGq65jnI1f747Mey5FXMZVWb/zwn9QasZnH2G0JNf5d1nq8+D/U9TY/B3ND9pirNWL/cWiXsD5Vk/79Ogjy0+JWj+Hi6y9M495PsgT9dAAlj/lozHQ+YRIozr72Jh/0rs0pNISu0RgHxY39ux9/zU2Fdsz3x3cgJ1jTLhcGlmZjwx2d/s7AjoYaK80zFwpbT1NMRrmuqOdfEBw/T9Me3/E3kbalnp19K3W66S/bLq/EKXf3/ohXq+WhlEICgna0srdAsezr955dAbtGNj6f+ugAtnKG+JLh/eO1qLOw/IRL9wtiv5XoXNYyMwMx2xaYnm3OC385OzDfm3Fb4PNhfKwB9y6cjSV3XLBXYj4Ats5nt5tR9zyz8LNiYK45v+VuYYb+a/Uwajaa7Kkf7VID9oSYXRzH2v5+W/wP/z0H3ejnq013+H9qhbl8KpBa1I4KEPxL7e4dJod9DKuwXjn5B7M9hGTu2oeSQrhYNQEUP8nV8Q8klw5/L/Lc5sN/KealW6u5N91UABxO2nNwXXNfcgvtAE/GJwrf863hhvwW/K4v/lrNkv7Qi6f8Z+19M4QL83wcoK0MEdNDBPiFt7Q8CmUU1+MMpSEjsP08K/WK9/b2RWPSXw34Edqj5w3NdFTXatz5PzqHQxzdUEeMLs5cw19+RxRPDVlVmbJnFbqdBJYoMnJQO/Bqulr+D9nCqYMwU3kNZyipQZdgf6szJ3/x/CeyP8B+q2krTmG5XH0772q/cCmQWxX7ohUBhP+l8vN25TfX2j4eC0S+I/RYG+UG2iTDQJVWYLegOXBj2zgbkGMjsL8/dMObjHqgJv2EO/GevPt5uEt/ybyJVopiNObYmmrOKRvtUi/2hxt+A/VH9hLL1snSSGlO3Qvzue1LX+1GdjzASsUXEMgexd5hYH3doQ2RWnXle3MIQ9ktS+j7FRqPcobo6viuLH6OC7MLOvyec/Q4TDpulUYvOpphKphy09cZ/uGo4G1PPmNP1sswl+6VVN5n9z1uhJiXyBsbT/4F/jxjeneuBxKImHoE50kI4zKc/W4DH0Un+K23o6xckGdmvGUpxaZxL/YFQZcWoIKPwJ/li2W8y8iAvtlyKfsX9FBXrJuOb/jXWMgObw0heIwz+G8oqUFXZvy9e/v8u/OnbcPx/ifwfAfxnO4Gbnc7dQF5F2Q/n+u1FYP+FWWv/m8jog97fm7ISCJN87Hfq5Zfd5UUGave0y5CGrxe1GOoi2e8xrm+DzxRDXVURGFyS6e+zbvA8PtUvvrkaxvpVlv1/CvoHEf5PO/8i8//KUG8UyWSPZ3FvR+Jif+qUA8L8sxjsH7eJ43/tKszwGYR+vwRHHUjGfsvgUHNvcU/2Q9DPJ/R3DGHsN5lBaPEaYFxD8N5LMv1dRrPB4NURahjKKlBV2U9q1ID/wH7CfzL/H1fjwxH492eBf+dGIKuo9gdynE8Xgf294WzncxP6+y6222CMCNRxudjvc2m4MxHeV14xIDI7ow2z2FZDFPtddlPFRGhn4BiAA4e5Wv7e/F+GVVakj8L+/UG1FGU/8P8jsB90mDQAlgT/AcGfzPCn2E/y/PuDQ8zsPz+r8YdCv/GoLbzAf6q9MrGf0T+0Obb5NXD9fnzfXxfDfsvg1TlpK1xkCPljfNaP9PLZQ6siaEdhfzeoloD9oJmb/SL5/H/MBMAA+BYJ/DuydvrtgwwJLF6wj5X9JNn/uEMc/2EPivzmOrhvYdlv1nkN2PX4Ov6ugUIhl5frL/Ysdw2hYBNRngjT32P1rszlEXxL9qex/yuM/48dAIiXADgJ8I8E/rK2+cdGHZP0Pxv7Idn/aOb4Dwajv2bLJJhDi8p+s86v667G0/G3hBwe0BTAfhvt8ZHn9Lh8bpKCKoP1oarLtX+qvBaL/b9JNg7n/ySqvzLpIcO/T6JfeeEP7I+mAI6wsB9GHD6Z1fifuAg2y5lAuORhP0b+tmbyKXHSuaIfZPGp9ReKfgXZueFRfoDd6WazfqC/DPuVJfvT2f9HZ07C/H90AwDgPxwPCAPlhX8i+w91mdjfG82S/Y+utomkaO2Tjv04pVs+nxZ/RwD6Af6lX6NQ9Nf3ILCW+5pbCl/L30H4m11lqV/sncuP0lAUxouYMuXRcf6r26agRpKmUdS64mFETCAB3zqO75jxkZi40I2Ja3euXRk3Ltz5zwjDxUML2BbuufeU6bfQ8QktzfzO/e53zj3O7J+oPvBcB8UAAPg3ei5vdCMLf97VF7pNlzZif5Nv9t+79ypcWvmMgsiwvyJ31p6OviMNUFAFf0Mu+w2JHntBk6eT0t+QvvGOTjme+ZXpmLF/+VE+vrcQAIAWQF8A/EezFTBZ+POuviD77U3Y7zmzgufACWpEZLwxFfYDOOS48QZO0A+/icqUEPezQPKvdI9cb1pRthFhbFwqxyy3M205+69FsB/U6zTbznK1R53eZvB3eGnxkiz8A+zn5/pdXZ/9cOmPq4ehu9ljRESE/XuyX3wHm07Rtip+2j8vkf2msA+Q3JJVejViRj9XIvZNtEzbzv7T8dgfvQHQcL11egA7QT9hvzqF/y1GTUH2Mzuk0+v2OB6GNvsbJHb6p7pAgv1lBIcWzaMtYTb3RUsvos8wsgKS3CleJJdSq0g2/fWNa5/dLOWvaRn7E7Af1Bs2W6sLAL++xpAf0KcJ+ikO+RHKfrjsg+q9N86c+gTi/fAwUGB/oST/1StIW+74o+cqBeyFv4K4BohWh9+RynJNf2Pj689n7NeOOfsvJmN/tAEAEQAoABLD/+49ovCPYP+F9dC/Xw3k/No0Mn6k2C80tH0SucuvJOa6KA8vxpvFHK0SQbv6lFzT30yE7eTsP04H7x9b9p9en/1gALQFFAD1wH/y6g6H/2tGShHsr62F/lcvD+7O3bMOoyUK7Dc1oSrivugOQogB7S3kEdiPu4Q8SZD9Jammv755UjWXsV/L2L82+0F1aAFYVgDEygDU+wHXewb/J0TS7nOwPy+E/VDt7Ac2+kldLxH2F0ryVmmgIhoH8Nun9SLuwj/5ns12sz9ec0VFnq2jZ+yPVsb+jdgP6sIOwPIQYFRyfeTMaXCfw/8+JRgGD/BnZ9dnP6CfNvlJsD8vmoxIY30h9K38nLkK7s1d0/FP8bl5ETJk2jzm5tsLOWKjEVOvE2OKpks1cLE3Yj/0AI5cZ6Xc0dCPGfdvdcfwJ9frF2L/meTsB/Sng/wU2F/URMtE2oyH3n7lbWh51Lsrv0sDlKc4jVYvyHuQdQGPbjbN/0gZ+4WwH+RDBGBFCKC7onJowV9z689m8KeT+Aux/7wd1GUWU3CloCZJ8lNgv/hv4wai3XBKveOfzPU3ENiP+QnmqY30PdKOPNPfEJAsiFkWZtpe9l8B9kdM+xNQAERbAHV3fpj9kyq1xF+I/XZIydsaQE1GVFcR2a9q9aEjvvCEuRSGpp3EvL8qo5p5i+Je9W4s05+K5a9ZFDdO0qz0sX+Kr0sLBQGwH7MAaLleeBagB3/aYQ+rXLeJrIkFsX+wiP42kStccs2I7Ffm3ubQlj27yjP+iWf7VrDZX4J/uH2n989UlLWQ1kV8ohZJ8yTFSiH7zy6B1rUI9gvJAIDa/fkcoN9yuBo+e36nSmrG30r2n4/P/kGz4aQI/crZn9NAkvNimMQtoK+pSohz9uXP8Qflaa5Z92R5PYaIEsOyyB2KkG6lkP1As/B2v9hr6Q08txFVAfihZr9+/dH9KtdNRkCr2H+W2ydRqneW90K26KJfOftRQlsV8S8NizIqnnQ+bhmCzP6SkssyNLmqyDJ7TBHPlmVROwwx5Uot+2vB3xPPfpgDAHsAK3YBhv7wHx8bw3Hij+v+A6Zcl1aw/8z0x6gpSKuuvUHm4B567EfKGxVE4wMMBTIxKr2AlvZTsewH9tM0/ctyPnZdSLFl0Syg0qsUsv/ikoP8zgL7MeR3RmABRMn1b1bp5P2Dy/sr9kwXo9jf7Sw6/e1mGtCvmv2GhiITaW1epvRNNY+WxVOy7Ierotjlp52SczMMIQ0kFtECKrVKIftPA+YBaZjsBwug6Tpx1Bxv+nM9Q7bGk5/fz3V9+uNK7recsN6Mup1UoB+L/Yq3xfM4TCwRWvbzhT/K3rjKvEaeKLdKcmY6mELqyiLRAiq1Si37rwajfvjshxRAv+1EqNE6ePGYn+n/nClQNPsvwA2Ld9zht+dsmA70s/NI7FebNjqJQ49TlJb98TFpILJ/F+Gjo5lSN2UMddDFVHI5UkXqFiiF7K+BjR0oByK2r+VXAM7d/YMXh49VLv3D7L9hc52d3rIbsWcct7ssHYb/WDYK+1U3wes4UacylZD/VDqW6S8gr4HP/iLFub4ljBdJ/mHmCGVSt0KpZb8dGOYim/1QAbhOtNruyBv4XYataPaftrmuwiDEWE0NTVZ36Tf3UWB/WcNSEaPJr0TtG+oOkumv6iwGKGgIzqOPtcVyioTlP3GEMtdf0441+88tTqO9BOyXr67vxUwCtty+5/k+ixAi+y/aXKevzm5iN06MocN6rdSgH4f96kfemxhIPJUs/oavCpI9riTpBy+u/vFZqh38alYXZFYZSY5gzLSV7Gd8w5qBbK7zTJ18MAFiFQFynIDLwP7AUT616Vf/ecdvDu5CQx8cWtSnj34k9iuHZB5jzWOSG5mSw3lHayT9tqlLZJOZjiVky39HzMYJqJxN9o3F/hpLmy5BRB0ANxVTraaTTO1JFdDxfSyi1iDSFzjCt3/01edVtUnzz9OXr+Ym+I3Iz/Cnwv6yhqZdDPbTC6EZOLvySuG7Z1GFfxHdizBFPbNWBv+xjjf7z4TDftfosB8omVht1x0d1QE+Cvt7vu/9srneOvynRbneoF5/XX3hzDRi3bbDNWRpEAr71Xu2JxHIsUsvOx23za+CxH4MbOxaVOG/h13P6sIernIG/7GON/uvhzl/2p7pClOujiNCDdd1+95Y/kRsLU3+5W97ou/csf9gc72bfvU+fFLh0TlF9Zt3YNHfGLBBA75Ogy6jsJ/AUXcIQbU9Iqf4zGsHpcpSlrYDAFIMqlewyyFD2MO1ZyVQsaJl2j72c9TX2EKCjcTFLIH/3TeHL17s7991NpLLNfJWqj/9G9B++M6e6Av/1Reb68PHaQkApQYcT/jw6b0DeM0uHFbQpt7bx1VDYT+BBXJBPDfK6iuaBe2iQFpt2K5sJZEZAVvZ78xAtfwrAn0vUCE70W8L2V8LD/I5Y890jREQXycHtX9YHeve48PmyHUbjgwB+z/wX723ufjvf5xQfzTkaQNO/uoh1Cge81tOilJ+ytmPmonLiWc/gYpmUQWMU1sUZTWhnYLoqvUUrheiC9xRKFiJtJf5/lvH/ivQ0BdKsBFpWugtZfubF/eqEz15cNQY6Hte0w3H7JHZ/3W23c+rgN8+4wLyP953YKFfHznp2urHYz+BTFxOuDt/kqDlD6a/UEqrymrCGAWavn8J1/Q3BBotO1YylTPff9vYz8LBPpsY+1kdTPfQ4h/oD+MB/KHn9ZHMgLcB9ttcP/0fcAcD5J+z+x1vzsFopcTvx2M/gSPY88I71PIELf/Ypr+BwH60MqdsJVRZ1oQaE9X0N4WUcFCpZkv/v+ydSW/TQBiGHVI5S9uU/quxNXRRLVlWScGcnAQ1DVKQUig7ZStilxAc4AASHEEcWCQkxCIhIcSBK/+FOJn4s+sEnHSm/sb2c6EsYqmKnpn3Wybd7l+C4j6M+LEsAAeGA/NyAaef3b7Zs//l4YGBbTcsy4KKPSf302qvc/C3zjhKwusQjFNd8+9Q36W/aVLp8v543R++NSJ3fwXlm+iqFol5mYYZSxpWcZVEhv4q19+6rI1LOav6J8v9a3pgwn8Bn/sJ6cA6XKsWzP57+t+6EeHhwC4daOEbIxjwegJf6i675iGWYeXPgAt3z3TND4X+asewKJWrv3/AYSHuj7/cr5S4u7+M4F818Sc7J8L9iigK2tgUosbh4mcqVWFfsiUhBygglwX/SXI/c9gReKAG0YD/gFYN1HnSpAFuPe2W/q/dNiZdIjwS4x/P90NP5BrZ9Yrf6euHmPkZjtGAA4sp06W/y6IQ9yMYzZ7iLUQV4cC5y0EBno77Fd28NgHlkiKeosAvgQrfN6IK2gQUsxW/yXH/QnCaf1EHVggajDbYs9ncrO7S//ZNiP6FsRK43+uMw2TDNxVh3L62y/ymbZtw6ZenyS9+94fuGLjdP6Xh2uU/YFZAG0Js5X64Xk9CWXzZf05c6K/yypTgAJXZP9Xud40GL9Ayka2iGfD3aIDvLYM0zNDG/CtDL//cT0lr7DtwQFrynkO6cbVbgLi5TYFao2VSOSv9sbtfEYrK2/15jBN+LgJq87HPaeS1ycgJv/uXhYX+Jd6f8LKW2T/V7ier7CFaf5S9wa60mGj6rs8NQpqs8g+cfXTn3PUbRBjr/mx/Q/dqJXoPcvnuta7571yiQNVqOtSjZhP5iM/9OUUsvP8KRZzlfvhsc5yDiz/i6HkLY/I/H+VQJCjyHz+jyOyfavcfh4Tfc/86piE/j04VPOp2zLUc7wcg/f96VZT+F+FABC8dn2Ctfl/Ou9uGts8GzG87/u8RGRHjfgxz8Lzdn9MQPivrkue/2S/+iYYpTcNp/1lRB0CV//+YnDYxxexd/wS4f3FQuIbVPstHWRSAjGbbX0cnXU56+gcuvf8oRP9rvkLIMZ1xjLX6vTh0rn/lB9cHmhKdJpGS40Lcj8GSvN1f0Dg8DSiCOf6NeVr8wU1Fm5xCXlWEMSPoVFTi3yAzXdAmJ5fZ3+9+TN1xY5WxwfSsn43l2eiwaz77NwjofxfvnIZBOLPk64k84UX+lz/rLj+3adD8nToFTBnj/h5LQtyPwZIzvH2IoIlhKNP8/2YItumpZW0PFMSl1gcFhf4Vrq0k8HfFGqDIxQFEU3HRWYGuNXD/KrIhP8Cq+jvpCNN/jYapO40W4QRsOw5G/i/OHLqvuzyjPmpWoBmhJtdIPxL3q4pYcnzdP4VgX9EIBLg/9pXMg084vtR6WkzorwoJyiranijns11/MrufHPGF/seY+4+z3nWENJ1gNx3p0bLqw5/vtU7yStthxA8i/2+H/uguLynQthzqAgcUiRHjfgw35FjcX1FiIMe9GoFgRhMurROTE3M6qQgJ/UtCWivVGW1vFOaztj+J3e9rWScLrMlvEWGjf6DjH3Bs0sdoONUR7/dvNmyyVxagMmL80Pu83L73JPh4f7Xt1JJjflHuj71azN/9BxHk4CMocnc/jvJG79+FL7UuCclEKmIipdmCxsia/lPo/sNe3xq4H2ejv4dtBvzaaRJGq9OmI6i3rZP2nj9Ni6dvX7/m5vw9XlH6yv+ov2mawT9TcvMTckSI+zHckDm7P49zq59LnvsEApJNBr1LK7rUWi0ICP1VQV9akFdlbX8pdL8XYG+A+48i2+g/3P5Au2HAT1kmHUnN3LTs1uTxyCd3lO+dznhG6Wvvcb9a3S07JKLDD9BD7sf5dn7s7p/H2uavKHPcI4n42/x3Jdaomv6LAkL/ksBXAjL7p9b9ZFXvswzuJ+wHENNyaFj/cP8379F/UDMdqxH1DHDh9O1T188/1F1q25fYXb/La0rf6i7PaXW3+KuyTvWlxf1FvvrKxf8s8SimuLsfw34GJn+E9p8TcAisCMrJwvJHuzERNbK6fw1205/ofwsDbZjx9vqD/n2+NW58/HYpwiN9jmXZtk1CXD7dVf6pra0z3TW9V67s7DzXXaiL+yFL+lm5v0qD1Dryre/F5f6xLxICkvCcZHuKR6ByH8dH09rQlT9C+5f5n4xETlWE5Y/1tQS8yOr+dXi1d5Htr/EeqMGN0ajTIPVNmwAXLl59717UI1EzXd647PTYvuRC+zzTXe67Hz7xRf79NOAJDeAkIOzP3D+m+2NfdbePq3gQjPiB/PHZf557N8RchK+s2OWf5uRfVvev6AOOee4/jLvZDxiy2Lfdafn9f+Pu1pWdR7fo3ngyaO5jJX7W3P88NN1fbyTkyu+yIsb9GN67i+J+uVbd4XL/PnlAHZ6Gx/rA/yz3Cchi5OZBjt3+2QP/yXc/OaIz1gbux9/sBxiNNg1hWrZBgNO3r25d2dMJ4IF3wX+sM54MPn4J4u8kosrvsSDG/RjS8RS5P8fd/RgObz4vYgutZ3iH/gXBJ63ZssaJYjq3/Ujrfni0f8PbWb+MdrPfEJqdOg1TawcPAJdvdFv2zl15usOC/LG47/XzP9T7PPdOBK+SKf7M/Wly/zipMa7WhpLGixynA8tBzqH/nPCBSjWncaKQV1KItO4/qg9Y9ty/hHez3wj9m6MW+3RsY3fX/tYZt33v0aV7NCp6j37hHyL/114a0E6e+MW5H8N0OG/3Y+l9n7gPUVr3c7i1cu5QnOYc+hf34Qsrr/FiJoVlf2ndT1b1AAteFnCCSITRaFdH9/O77fyBX93r47+69eHDh35b39lRLYBVWmfh/n3ftV9/PDgHPK9tnkxQjR+F+4dpV373j2EW2d0fYc0cwqI/r+C/wvccWNiPAstUQePFfOqCf3ndvxZ2/wLOZ3z/R8sy/9fMv2lZDdu2m8PjA9vF6uJ0f2XbNNmG3he6ywPftf+196NrJLGsZ+7P3B8GX3mjhEtcpSjJFr/IfyaZJyiJkNf962H3r+Df7hMGFvtFxgwwMjdgs3zsA/Zx/TXmZw94sJi5PwHun0+++5XpHL/MenZf9vrO8ov8eY0oHIx0gsJc3oqLA1KassdyyP3kiATbfUZjd5wa5QSs83kL1/7lX/ZgG/IKSSyZ+5Pg/nwK3M9BXDxdWuT5hxT2bV3kdIXfCSpVT/wckGIkbihrYfdvyFfw34VhdxyTcuExi/nZtZ8F/SfkrIvI4P6hlszcL4/7I/9TUVb9i6r4vb4z3H6visKPubLGicKckh4kdv962P3rCRFb07Y2zb1kAFDu/2z9gjVIbjSS9Mg/c38i3F9Jh/sVZYqbuGZU8Xt9p3llCCWFI2oeUXwiDRK7Pxj6HyZyF/yH0bI7bvseHRvTbFvWd7bi+DisPyYpiPzJ8cz9CXB/Li3uV5Q8r+C/MCu8x+Igp8i/oCouCFsnikpakNn9XugPq3yPSDbhHxGD9fG3TZdaaAzAxbG62DY89McsvxA4Hm0kJBn5B0uZ+zP3y+R+RS3ikP8st9B/LqphEeYnlbQM+8ns/oWg+5NR8OdcElmC5cerpMuqFO8dZe7H4/6iMgZy7/XLK+OCrV9tj/XqGV6hfzGOV5NKf9k7nyY1gSCKj4nFXxH9VoSDQHlkCyzPW5bl9z/EmNFZXHR7YIBmut8tOWwSQvGbft39JkDSO5mJ5sz+pPzG/tN8Iv2HlHJFLpf0JnkiOtnVFGH20870XdjCfiGWQNN60JD8jSnT350kAtP57TL8ibA/S5XOyU32t7P1Dka7IpUq9o8DwTmxWTWz3wL2r4ix/x/9J7f9Q0Omf6yxSY+R/gtBQbNm/zFVquWgl/2ets59B2XVOBztUzvnIRpKmf1ALRB/B/+QY7+k/6TwX5sx/T2djCCM9Ccx8Ddr9if586B/crE9sRYiNflQp40Fv0wek6wWsx/+b0J2wY0u+9d2sd8M/QNn0FxfH63lr+iP5X4k3Jo3+z9SpWKvrIAyIa8ybaq6/ab1y/3MfjvYH8K+0Lax3wj9F4Pm+q4Blr/+0AA6+hMI+Zk3+5PiW8e/JOBqwyz/po5q0s/yaQhmv9nM/FBMoCVV9pug/+9Bc32dn3/I5K9Uf/q79sf7zpz9mSSbAv6ZwDQbQOe2sj+n0BDZMfvN5uYuxQSK/0Dk28h+Sf9phv1jEw/dRTBC8p7+2C50hovZ/zztp/rYOwotbX3Lf3fzAmZ91RGz3zT7fSBgJxDwWGIn+yX9J2n5B/1N/xjHG+VsAm75W8z+lmy/ggLgNGKPVOJBRSL8gNkP1hLvNxCWdBfZyn4hlt40t9Fu+5v+Xu+uAY60H9td/7mzf5c+u/4VR/slSdVS9h9TEvuPzH6wQtPD9IgjfefGfiFCAP3NL9FF/Y0gF9ECnR/wlr+t7E/yZ9f/xKZ/si/ayn4aKxAZsx8svI1PmLVtNfsl/cfm1qrvYTDGNULfTn+8ky4/iNnfXPNTytj0Vw+lWfbvCwoLfsx+re881iW/EAY4y9kv+/7jcmvT1/T3DFzCgIP+gbBas2f/01TbgU3/q/KWsj+jUfYz+zW0MOwfj7zit7We/d3pvxjw2BXPxvJ/PfOPd8x1NP2a/XWuzRq33LPpLzv7SgdV9meJ7WL2a/w8rF9A2F9sQ4D9nS+nXRrN9YXTO0Z4lLzSn/f8vrN//jBoFv6fbPonVctuf0Yi1+eqnNkPVow13HwBwxsJ9gux6VK2ro3m+sJdew+nkR6uueNvH/ufmtsfJC6r05n0O1Iq+5n9GoqwVj8w2Aki7BfOdsQVNcftZfq7WB/yMuA7fWxj/73wL//jrTiciHS2X+nSUvZXVMp+Zr8+ENHsY+udSQIy7BciAoxlmgrN9/ogMUa8Nd9o+yN99X8Ss7+t8C8l82pZ4+4Somo2QYrjbQKAStmf1Mx+uBY47zXxYUUZIfYD/u+NmetxH9Pfw2ciKYULnvazi/132B0/Zcu/opBbD+iBKN5/kin7k5TZbxooWzGy1rDClhT79Uv/aLhc37iz5b8Rwwq+wYg32OqNmP3ttDvt5SGAjsH9dsFPPYVdSmO3n9mvyf4YZ8PfhbGNFvuF2I5k+m+7Wy4xdhM9Ctj0t4n9SS07/AcJPEKoe5lyXHx5CDmhCQhmv4YclMnm0R+QBDX2C98dZcU/6m76e+jraGfN9/jbxH7Ju8vD7yZxa02r9nVj8rG++SI0kvxvOjL7dbTC2PXcwuxYeuwXkRb8jeX6wpHo4nqT3r5eOPtd78Xs/6ZS+tv31XYSt9W+Q39x/prmS+gotGP2T47ZvlrBLG2C7BfhCkeu7wskxtjyfFvlc7yPReyvHutskn1UV/xzif7TPenoqnNKaO+B2a+lGGHXMwSOslFkv3BWI9xAH3ZdIvDmsS8v4Y/1Not3Yva/mm3fNYJtioSaqvtzyNV+3yGltPbA7NeSg3DVCTaL7QqS7BeOO8KQ+rrjycudSU6ez9F+1rB/L5lXXlFHeNrvjv789GW/rya19ZAx+7W0xmf6B7DtfqLsF5E7vF/tdzP9Y5x5vi3yeMPfFvYntdpm/yA77VelUqdSXmx0S/kjda8hs19PG3ST/sAp/5gq+yVhITJjLsAx7s1ncO5/68Sel4Iw+y+p1OH2+Ve/IqQH+vOzGuw/FrSuNWT26ylE9wUElmQOWfbDi9bQyB8BN/1dhFf4vVDogjclbZUt7H84/bWEIKkmdxP96eXLoF9O7BD0yezvVAChcWsdF9iFoMt+xx28Vx13Mf3jOc3Mb5j9lrBfhdhnsgNAqsvdQP9nrQb9LtQ2HnJmv542yDJOfGAbljD7/7J3dr1qwmAAhkhAQVT+FfQCaXqJscRrY078/xdjZ8hrmZktsz20fZ+bLWeLk3Ncnr6fDTb6+9TSGafB9bL3+U5Iq4WdeqVA9//N13Oen3FC/Lm9ZqJ+Mvz2Dhn/1p8jELpfkWxh4Y9kITb22f1Bqr1SU8xI+ifLaRqRYOP7kJ8z7r+QB5z9WWfj0R5bQf0NgQo/92m0/xuO7ldku6huv0j2YnWv3b/S7v5c/cX3SxoWkSBF9zsCF1b6dNSnMT/GyQhtocJ/9C3jX5YE3T8z/lnGWpZQsgTht/sNdGhulScI15ZNyxXofkc4kZHbk/y5B+luxglAodhRE98y/uj+cEbn2IIC/0i2COu3+4OtdvcflD8QyZKWQ0oQofsdgZERevkWny/y71oCPNU6GPUu418ydL8y6wUF/qFkQOu7+1fa3Z+pXqiwX8LnRwnf3e/Ozpeh5A2313ki/46SZ8D3jWftjr+p0f3K5NViAv9I9q347v69/q0MO8Wkf7GUSRFpQs/d705Q2BHgyx/5n0D94vMfiV9bfdD94H7VBPJSFvuGsu/Ed/dH+t2/UTyBpTZc4SewRve7QjPd5N94IP8jeUHLxpoH9esiY3T/MsfFP7utNvLe/YF+98eJUtI/t2ef74MVut8VTgSg3fcXXJc/O5NXdONkP7mVXnFE988gXcZd5rH0+0D3G9jEvFb6ORT27PNF9zvn/rKdhL5l67j8GSevOP7+E//G+9D9PaGW11VfzKbzbWzQ/Sbcv1dK+qf2rcdD97vDiTzRfH/BafkLXX5ip+PVx2I/uh/cr2XML8kCjeSVHGmA7g9M3D+bKpwFcwu/t+h+h2jJE2fhC9y922zuZKBtyaTc8eXddQYDDbp/DqslXGyylQ370f1BZKJBo1DouSx+fkhEmfUSCl2KoPtlAn9yBz32UMfkD6X+83n62CcfrzBG98+3c5z8fNZ/JR32o/vNuD9XuFUhtdCg4Y8fd9VB90sF/uRUMuqq/Ds+ul488VzL8ubTPmMRju7XKt4kDzSRV5Js0P2yty/GmjMx8LPILdvn+026kMlWBdD97wL/9hH3DvVf91w4TvXTuiPPUDa2AZxL/yDofr2B/zYOtBCn0mE/ut/UaPpBWoyFZft8fxNXlVsfCr/dP8R99PoI9Rl1Uf6Q7+cX8QlJPar/WnoIul9bIKl3NetOOuxH9/dsjZSqM+nMQmph8DzMMdiYsUD3T4Et/l/8If9H4O9SKAwL/M+M8cl4H2sdnmx4B0P3a0iAGij5F5UkYYDuBynrNu5O0oy5dft8e4plLLRSA93/dqv/7SH/CxWr4Q4YEY4z9+F5R5qScV9b/H9To/s1REH6I6FNJUuE7u85GEpXbySPF4V1+3zhtGthtQLd/5IhBd6Od/gOpqSuDPpfOBloh2E+gDLGXWxsRPfrdz88ofl+v6iSrzig+yHlrz3ajiXVmNp2hd/Th86+nUTo/n9PvZ9H+f/5teFutPvf6XMK40QEas/VX57Q/RryyLrlnyfS/3KM7u+JjF28uJZKAuU25s13S7nASgl0v8SVPrfJ1rvb1YGOv0tDBuj9oTrgzjjxcov/yBHdr/PVQf5G1Q8cAnR/T2gsZN1LJWIKC2Pn/McXWswB3f9PLnSo9N8mpfAzIZYvub9TYU1hN+1l4PafbtD9pt0PbNXkb179YYDu74kMTmQklUQpP7XuCj/4D23fFUTo/rdZf85OYuAPYXJjZdG/a4T7+afq5xfv1V826H6doRCQ7IMPsZdXf5LZ6/48Dj5FnBrsySwkmgpyU/t8Iw0DfjZ2KaL73xngLObE27KsqcVF/yM8Sf1C/fSG6kf3V6He1wc25jr8If9qr/t3aaRhr4/+DvVcIrtQmNrnW63j4DNkSTVgYZciuv9trz+5i/K/C5twS7uoWwj6GagfOFJUf8nR/Zr7x4G1KY/Bo1ns/rCqwszoaWlrZhIueftXDh+sdSSfebF4W1Web/Zx1P1lPUnzw8g7u1o56X+5CkH/C/VfUf09BN2vu/YObP/bZZnKWSPJLHd/Va0z7clq4GBolcDeXMq/6kk3Hzpyej7d76r7HyV/2gny/xJS5609ef8jFYJ+UD+A6kf3g/v1Lo2Bor+JUj8Ulq13P9jfwPcsM7RCcF0YmJID94v2n69+3yf8nHV/eX7IX7Dkpey5UViAawV1Kwb9U/W7eGPBPDp0f2guCd+zi4PZxLtKhSKw2v3JqMrMTHtEqOeTr87mo+4f7B9/KOFv4y5idP+/YfyV/JvJ9bfNpVw80N0Ph5VHMoNS0uPqNcXq1Oj+0EQlFJhffz0klQrbwG73V0A43yiFOeWqHzfU1zHNT0olqyyYSZ5WPb4v9XPY/WO/H2dlB3FzPbkGjy49Toa3CicVUD9H9Qvc0P2hmXF7IP3F3rnsNgpDAdRMEBAS8vgr7AVgsQRBxBohlP9fTCbNcOOEPKA8jH3PqiN1KlrRHt+ne5nM3HY1iDrup9TtZy5vS4HJhtMs+iucsV7/3f43X0Tz+3uVdn8T7ucnP4YV+M3194to+YvvCv1J5d+o/6s+YgL5ArIY4xKi+42pmskAw+xsfoN2xCMquf+C0TltbR3pPNpy6G/Yj/f620ePdMR0aQc2RGXUdX8jf36RfyRkzYW8P5d3/+2Zs4Yw9q/ApAKvbx+ocksRul8K93fo9+tXf11ve9SMF+7+DX1m1+WnZq1sCkzaoL6nv8Ad9/V3j16fMycO96vtfr+CVDjs883+G7KW/V7fNGlJ98M1fnnIBDIfKdH9xjyBnu145Cu8o007cyRLd79JWzEOHvkGz7HpfNqyaX+OZOwEhO3sLfINa4NSimG/Fu6Hunh1/Rg24V8JuMxV/8b80N0vPHR+ZlcWNrMwLhG635gty+sezc/id/uVjFV1/wXXWX/w/+awnaPBDjjS/niT/A5uj5/8v7+enjDs18X9IPwUrAmmj0sma8M/mF88mTTCL3++nQUULqYkQfcbE609a2e3Mq1X9jvs7J5flKjs/n/YxsrctHt/Dcel2ZrUPDlS/h9+B7fOwXz56tHu2IqH/Yq73085ZMSL5CnJX4FAQ4kS/4L5bw8mHlYyccA/173B/wZD9xtkHvkDrrFamabX2Ms0D6vdlvZmayng/j39jOGs9s3PzTPN1dGwaS9ciwyKS/tymPB3EF6+m7Ut01zfXr3Zz08S8sdXmxOHTrhKTKKLNmWJJKegOEwYkIH572YV0+u3JXvDwleg+2V0/z/5S8JF/Qq4f0U7Iktv/WP355wl857vpBznJ/lQ3f0gfx74JWuoIfSXKvFfhJwBWeEDIYzxnziW+lsI0P3UIGrJ/6J+dH9HDDIwGzmehE6JSVRHefffDfeHBWcNOYT+wolgVoqMvTJ/kcMYv6B+Lkm+QgLQ/ZQaRCn5X9SP7p+/UG3Mvs+3l/slmU+QFPXdfyf3HNQKohf25fOzPx9VJJq/fdQ/808c8/2tnNH91CAqyd+wCLp/gIz/XHt9raW6X/2Mvxbuh2z5A0nQ8glJ6s9CfE5E87fv9OfpP/XLcVaRjhDdP2SW1XLor5FmH2wf90sQOF+QYTTN6juhsVT3e0R9tHA/FPUBMWguIqEaMDlBxtrMD06Dtb0njv39L8jQ/Vf3S7LNVa68qy7uhyrJ/G/CngyJSb9HmrsHJUYP90O1HBDiZiHxz6Jp7R+f4emEqT54MujqO3Fs8ntFhO6/uX/+Bm/p/gBr4v6RptL3vZ6FLNT9qm/10cr9EDu/SfzzWexfZeLzpKL5i0h41IBj0P+SBN0/dI/33qYzYZsE3d8Z2yPjYM+v0A/ul3hOQk60cT9MxwMPo31xzaa2f1En4rNUvkBcC72JRYlB/xsYun/wv1vels7CdkOIQu7/oE6Z+/x+OM5fNH/vftmrJvKhj/sFj4oX4GYxzNhN2PVXiLl+xrPizRW+weWfrCHCoP+JGN3fuH/pHX+ORQhRyP30HbKWSe7x+u7zXVwBShf16+T+68W9QF3xlhJ7EDEgGXHRb5xGTCA5x88LiRvC60FA5suH5idA94+Sr1zbdGLsm8PQ/bKonxB39hH5FW0H1Y/u73gjfn6u2Vv7i6H4sBF/yUSywBeJxSt8hW6EDGf626jQ/YL7F5v3b/L96P65T0zAodc+38W5Xx/16+Z+Pxay+nX+0f4sGjrGPp1zJpJDyN+S7WdJEJ8THOz7SIjub9y/xD+7zz9HZdzv0VcsoM2v517fLSFkcS+ho4/6tXO/0Dh/IWGf7c/rYrjYtE6YCK9Pzx2AXHgqYcd/jkH/C2p0v+D+ZYb+W1CYOu436QskT5bcY8xzhR+wo20s4NgpKfq5/9Hs7ZYPMiYG//GQmX4gq/xHKuGzwlPIGar/GyJ0/4jzSQebToB9Zwx0v1QB67rnPt/lzEnae6ITOrofpuRFxMJ7kfEnS/enSLOEPVI+nyiKh9W+P9P/WOr/hhzdP+Zs8saho+NsCIDul+DIBFh2r32+y3H/dkO0Qk/3+yf2mjwVVuwDPKsG8j6IXyQtRdGHERPJfOQlDN0/7l4S06CjYphEQB33t8bM8tdJRJx+MwdLcb9W+X6N3e+nDHiT+q8i9qj/boF3cC4T9p34KzHRwMvs+j/xpv4vidH9o+8k27t0NNwnW6jj/hUdEXsia3nz7fNtnzJc3vFJKnR1v5+xt0TpQ98dUJ6LL7Wf5ayFREgfCOIHeBKxJ3Cq/x0Bun+CfaRr+Au8JPPP3edv0NEwNmQitp33+S7i1fupmeiHtu73I/YengXQfPdA8j78L4KwzFkreXj6qgeQtzwQzva9pUL3T7KLfH1TwKLM39P98tdLXJNMxrrHcuFF2F+nyT50v+/H/+0csVck9UnYviuQ11Xx9DWDVLD+5xMD9AK0g2P9XxOi+8H9o2Lu6D+WUeeXxP1Nr+TSzkx3WL32+Up/8HQ06/FD9ze34eZFWr7RfxoEcOvOA0kZBtc4PziHWQTSb/N+Wjwv+QHvfyTCBv8PZOh+cP/IbI42HQj7uCEvUMv9hFgHd8Hmv+DMts8XMB00P7p/KPlHvh9X7zXMoyjKStaP/Mn7cXCuI9aF2kc+EKH7wf3jsx8k+N+905dq7r+ay6YDsTPJ1OxnusJPxBou+HdX2ppfb/f7qTA5dzqXnA0ML8MgFqRfhVnE2VdEJce7e77nL3v3sqM2DAZQOGkiruX2VsEL2xHLREmUdYQi3n9RZqbgdhjI1VzC+VZVF+1iRjrY2L9D8YX238lo2jH/v9dz55YBtv9oNRm/bLRmtef52jVf95H/5XvN8qH91+J/6n/UW/d1GcsvsVIq0ToU9UVlXp7/zFf9NQir7V/4leaObXO/0sK5C5P/cesV/33r5T/DD/Avf9MpXbPNwnmMTe15vtaNppNxtx2ntzzgR/tPDuf4G/le6Ug8iJkilKV81d92XNMvB3fje+62IdfznTc3Wm3cbRuut3AeZtHkCT/7FuvJbNvCePL24af9QXJtVq6MlU7FvZnxgYeQgT4tr/fT/rvz15OaK9nZku6fLaYbd9wgWY//zPSR2qf64skZ+Z753athNlm/3xgf2v+T5MYbOeYM4H2YucG74vwXMkCzK360/zH8qbe8kTLX9aa+gwv+ytu4bkVNl97qGY6lbVrN87Vv7q+9pfv7dvXdzdpnvU/7q+JvZCq9Wmp1kFl/WwTpaZ7APmS/v6mS9j+Hhe+vvaOJe7T0Pvg+S616RxJW3hf308Y7WvlP9IlpZf8Jv+5HYtbep437yTta+/4zfHJ6LrTfxD+/9RpPePMCoFKHWBUq0br9jYDzRcBdwQD/5jTtBywb1ZvnixdA+038rw7NbXIFMNW6RfcPWXBmFv0R+/31hbQfsG22rfbeV+deBu0/UnWv0Wdxkop+RclH941ci5OC/f4GxF+0H7DGrfOEH14B7f8QN9ljNw/1dBSdB/8Y5nh/uA9Qn6T9gHVjtvyHgvZ/ipuutWXcZQhApFUsg0syZdHf0p72A7aNttU41/kaaP+XLGzzXF4mldJa1Kd1qeS1/2GXCBb9bSnaD9i2qvOEH14C7f8rizrMzs+kVEoVWuvohzW+1oVSSsqsol4hi/72CtoP2ObVecIPL4H2n+zSh5Z3H4mTiEV/cyntB2z7/TTzfEH7+5M87m6d1OKsZNHfgqD9gGWjxz/hB9pvQRw+pr95Ic40b/a1kdN+wLbpUzzhB9rfuyx6wNI/T4QQPNTfjaT9gG2Tp57nC9rfhhmna172s8qUn+3+7hTtB2wbb6ssHbwI2n913z88BJdsll/nAVpKaD9g2eoZn/AD7e/gylDdVAZWSS0MzfD+DjTtByybMM93QGj/pUN4lyDHqTAivujvRNB+wLIx83wHhPbfXvqLJA9syFVI+fuT0X7AsinzfIeE9l/71v+skEHf9oWg/H3a037AMpd5vkNC+3+2K4Wh90GP8jKi/D1TtB+wa87l/kGh/XU2/kV02PX0rx5S8S9N+ftQ0H7Arg3zfAeF9tc8hi+Kfe/hFwVn+/sR0X7AqhGX+4eF9t8S/9eUMOmS/0x9C39Ycp+/JztB+wGrpttKKwevg/bXu4hn8r8LmsvjJBT/S2Nm+PVG0n7Arhkn/YaF9tfc+Te0kkEDWZxE4puw5MWePh1oP1DB+rLfc/BCaH+1PAnFN2kZy6CSjEstLhW8z9+zhPYDVs046TcwtL+OXZyKS6n+w969LKcNg2EYliqNfD5dlrzAZLokk3SyZphM7n/RmVD4UwLRAcvp737PpouWIgyT13IkM71tNtdOFjaH6XW7G6/Z41r//J7RfoCUCouVfiuD9kfsyr+0/Wg33vSA8Kcxov0AKZVY6bc2aL+/X5T/CM+v2NCXyAbtB0ipt1jptzZof+AO/f0YYff0iP186byh/QAJmQz39FsdtD/YZto/jN4ettMBF/rTekL7ARLKrVNmBLCC9kd5OUzb3eiw3U8HTPcX8Iz2A6SjrcW3964O2n+HX5tp2m+3DxcT/e12mg4bTPaX8nNE+wHSqS02+K0P2g/cbdB+gHSUxQa/FUL7gbsJ7QdIRlsPWgAzaD9wt0f7AVIxpXWTArhB+4G7B7QfIJXWeigEcIP2A3MvI9oPkIiyFvf1WSW0H5h7RPsBEikspv0rhfYDc09oP0Aa2mLav1Y/cJN54G2H9v9N94OU9iSTclAau69XplFtbY9qOfSNSKLJMO1fLbQfePs5Ltp+ab0p4Sub7T5pzVDbq7K2r3xndlJcpX0HSU8q/GnHszuO3RAznXVf6q7jPgda3GQ/oHgXRgSo8uzz+0v/xYzpx7R/vdB+4O3Av/3F1ViLYJUqIwaU+6ZL+t7MLWpCmMe1v6D+zNd+Sr9J3H5SF8JTJRfaYt9l1mJv/2qh/cDbK//2t7NcSDV53IBM5jfx196vMGbbd0WPibvdbBfTfnf6k7eflJ3woRa4qy4dBeztXy20H3h7Zt/+apYfqX0WO6Der13yc6yMM2+N8KTiXndjT9q52k9jaY1YqP30hC6mtreIeeXWYtq/Zmg/sPZzZN/+foZ5nJF3/JAufc47tCWOqXbMqgUag4wMVDVX+3Ma+zLtJ7UJSL8c1DtZJph+N8cnwhf4rRfaD6w98m9/ec/jKQnx7dc+/1T6X5iI+Fb3wvnfOn9focLbH5l+OhxSXVe52p+rs1Zm3i+e3ue8Ex90Qzlvg5X1lWELCVNoP7D2xL79jb2hnCf9RPsvOJAeo2x8pra98CLD20+XTGo6XGHtj0w/DViJYNfeiqqQfsdrsEft5+AWhZhNV4Z8yoEntB9Y27Fvf25v6WYelLilyuwl7Rzl4JraBhS5okcEtf+9UWVDh+vu9lP6l2g/0aXHhRI91376wnxVfmnfYX/fuqH9wNnLyL39Jrv7N6m99RNyiTd3rUfMjCNvSlLlvM5/pKL2hyS8/7PYv52h/ZT+ZdpPTO3+1MiZ0m+srZX+cp8oFvqtHtoPnL2xb39hbzMhZw9uQWsOKse0vxCu9ndUUa9XUAS1n0ZlTsewurv9lP6l2k+qzDWRrhyDC335UnWV+MB05ztDYaHf+qH9wNmeffulva2fdV2WDLpve/71tL8WzvaL0rPIx3ZnIrT95jRQQwf8rvZT+hdvP72PjeuNNjO0n9SypSWHoTIjgCu0Hzgbv7v9mbypiNzcT+rofQJlqzr9rj/f+F2GnYJUX077tUf71fFPz1cwBLWfWqjP4yvvbD+lf/n200ehdzxnK+7W2Zl0AthC+4Gxw7e3XybdTNXE7ROQF2kx3VA6hlrZS7njL93tN1RkjxJXwe0vz/+9phTFt5/Sv2j7Se1YQ5nRuUGiDx2u+P9H0H5g7Il9+0v7lzb8h2vv98sGnavAHtDEfwi41kvtP9W08FvpJ0Lb3/15GjqMeXz7Kf2F+I720wik66H/TPtLXPHnDO0Hxnbc268v0t+Ff6FPbmcZkinthfz2YkIlvNqvvcZTnZIb2P72dIZCJ0Amvv2U/m9rv2LW/kYAY7/Zu5ceKYEggOPFgv2ge3hcNBqNXo3Gkx9iqg/qxqNGN56N8fuffFuCNFA9E6HH+h1XB4dxs/8FikbaL/J1E3Jvv8EBCzhkE4YF23NdBHaxVNSwrv3gaTsLJdLAbb+jq9+/p/265PZT+v+D9hd4Dh2InF19OgqRqc+5t1/hkIKGvfkCR6pzFcHEDvurte23tJ2lST9W+6mU7eAkQJ3afkr/7tvf7aT9crE/c1cvj0Jk6k3u7bc40Pz1FXT/rv0ucuBf4kgDa9uvNE0HzH8Gjt1+PYh9S/ue0H5K/5bt7xf2v/7x5/tov5eL/ZmT9ots3YTc2+9xwP4d4DL5cJ2vx5F++rDfrWs/bdIuvv8GuO239I+wp/2o/eP0b9r+YmHO39BrT6NxRO7s/w9J+0W2Pufefjexjp/HgZrffrSQRumpH/Alb9CP2k976Bc/g5bVftptF1n4htV+Sv+m7VdL76I913g9nkzLnF/2pP0iW29yb38/cS69407uFed7tpqd2pBm3tlF7ad3Vy1MO9bAbD9N+o1XxuG0P5r+Ldf1U4s3hHq1eftlGf/8SftFrm5C7u2vccBOLdVjUm7Yqjt1lr3TCiyOtMBp/9Ki/krT32W0f3wxgab92O2n9G/b/oNeHKao8Afv4BQOT2VBZE/aL3L1Lvf2tzikJpfoVZytkMY6YDvgSAk1e4ep/bQ7amHSj9V+GiKc+BwqTvsp/bqFbduv/Ir3b5DebbpK0i+k/SJf17m3v5kcn++Zt1ErjPF9deq4n+5w5MBr/9Ki/jXtOaf9lsbiRhNshtN+Sv8Btm2/8zReGac8/tQ4SFZJ+oW0X2TrU9hD++PYN/fb6eN4DwsajNPGqoRxv7gemO2nRf3jGWp57Y8sGtTjd4rTfkr/tu3vNF3KXxd/XaptHuWj5QE+l0HaLzL1Mff2d5GT+5p5pG1xnqlgvQ5nacVtPxjKe3TSj9v+A/3NhGk/aj+lf8v2u7JGSv/a+GNtIU0pE/4C4OrzUYgMfQi5t9/jQEE9HDK8DZFoJdI3ZoHd/ipSdMp1yWx/7CFBxY9+rm8/pX+j9quq6nrPWy/H4G919c/b7x2Iy3D16ihEhl7m3v4DDnWx43jN3BJJqUSFMzxw20/n5+MVctz2q+nPxa6eSKhOPpItUv/rMUqXsEqrB09r5usxmZElfS6GtF/k6TrEPQWy2/b3sdXyFPtg2+KyXsE6BuMqfvtpLi8+6cdtf0dbjEz7cdp/gD20XxsHK7kGSeNS3zuflsf3XBBpv8jS2zDjFpDdtl/jgD/lXgKDy7w6edzPALf9tEEd/Z2lZbe/jjS7p5kERvvN9u33zJHMtkZSqn/Ufi+X+i+JtF9k6X3u7bfxW/k6ZD/Qp+PHn78trfjtpyTbyIdZA6f9VG4fvfhhee1Hs337ewc8pU677J/efl2CuCRPpf0iQy9C7u1v4n13CTfWVTUuKpKWGyQl8NtP++Njk37s9pto4T39S2va3/2O//bn/LllVQZJDxyYopEhvwtzS9ovMvQqzLkLZKftH/fdz83a17BMlRqXlCeN+9WQ0n760A7TDVfc9js6CRGb9mPe44c28fugKCctfzim/KnRqfEH1yQ+URf5ClnA/+I8vz4KkZsXYdZjIDttf4dD3ewgdgur6l+f6cGrDU6pktofX9Rfafoqp/0lbS0yq2C4a/ug3e7+fqvp82WqfFL8pfziq8fh9VGIzLwKswDITts/zrSbvWmvgXXa5iwH/k7j3xpIan98UX9LxWO0nyb94pcDtOKu6Yt2q/bTcj0e+Kzmx/+API2U/zKFt0ch8rJw2H8FXOnt10UM6+evhwGNIwpWUrbRGKVPWP3FJbafttdNNLwGbvvbSCg5037Ufor/Vu2nOyss8KmGHf8KGepOrvNfqqtrOfAXmVk47H8II/t7lo/BoboY0DjSAUPb1xhRJY/7lZDU/vii/hXtGKv9DXUyPu2X1zN8q1O+l1rNHPhzjcd1fCl39V2wR+HjUYicvA1kcdRvl+1XGnlq4Dn0GqeUqceGtUpuPwW2jUz6cdrvkF4Xn6M4rG8/xX+z9oOhr/IdPH9goLJ9oXFO0beyht9lux/Cu6MQ+Xj9Jsy6DX/aZfstch2Ay9anXLTHkRKS20+xbf5quAFu+3t63czDEXtG+yn+m7Xf0f9OAuUTvxertiyLwuOAL0zZyvH+/+BeCB/ltL/Ix8sw7wH8aZftL5DLAJvq8S/FJu2nRf3Hoa/Y7dd0jWSSxm80p/3QUPy3aT8YmqlIoDS9PNWhqiop/v/leQjhzYujEHm4CYFzh98e2++QTSvg63Cs3qr9lr42mPTjtt/iOpbTfuXpVRu0n74jzGlP5Jfl9gXHndvhq3cfjkLk4H2Ydw8G9tj+Evnsec4vbNX+8aL+lmLFan+B6xSM9g/iv037oaHf8FL4nzstBMPD8M31SznxLzLwOSx4DgN7bH+NfAUkaHfTfuiprfQ5Km77Ha7lGO0fxH+b9lfpR+50hkeDEAz3b4cf3t0chdi3T2HBExjaYfsrTOGAT+GI36T9VO1iNOnHbb/BtXpG+wfx36b9UDOuycR3SAiOW+GX92/l4F/s2c11WPAMhnbYfoMpeuBTu5n1Gy3qb6iAq9tPQ23FrB8V1cxUUvw3aD/NZlhp/5f27qa3TSAIwPBQKF+LwVxsNUqUXiNXOfVP7B4MVo+ObKtnK7Ly/w9NjKJxsYGdxYFNO8+pUqsGJ5FePmYXNpz5TKE9559ZC5f3ae/pZ1/7fWkkhiY+NMlsWeOHm/qfNDwBavsjnYm4CCtKSSXGf4T242kNt58N6FEdYf558I/Z6NdWdbmFGvvaH0kzGTSQodB9KY87Xvshxmm2CCNLan+C4WyBFSWlEuM/dPv77+8TcfuZkR+qZnt45st/ZhmN9H+HOvvan0gzaUtOnEjvLCMbrf24qT+eBlDb7+k9E8/lkSC2H3dbjAZuf/9lfjnP+jEj84VSivvPrLZbK4M7/ta1X8iaXHcqwG/9D9NINL3fHfkjth839fewcqT2h3qz8AK/r6T2wwTjP3T78VdL8Bo/NqCHmbpovX/hbX+YFZ5WqsvNHBoM+B4/FLVdlSKhuz5v2hQyPJjc9SpRnshzKYzYfhzwq/4wobbfl0e+5g8poLS/Hv8R2p+Zz3SK9285Y1SPqtl2Uyz5DgAb1e9SdZo9wIdzpD5Xa3F/or0LQNx7yaA3YvtxU3+Bn5vU/ineLug17Yftb4n/8O2H2Hh/n1Ae8Z68zMBP1W5VHl74DICNY7dRdqS/f/sz7Q37clk36blLYAIjth839Xfxc5PaH2M2tab9UlL76/Eftv3my/zw48TA2HXjj1blpnjmpwBsILvlq6fDWtmS/v7tT7UfwU9kXdiz/d6Y7cdN/XHSj9R+DwPXb9oP20+I/wDt9wOThOMhR8CYiZ8zhbpPAZ6WvBKQmUe98lJUDuU7dYE96e/dfp/wCD7We6FPKDXlMGL7MW6VEKjtT3Hood/zb2w/If4DtB/C9sUYXuhfPmC+7Ge9B/6I1uWmeFnyfQB25lct7mVlrczYMOZ3lfZPCavuclkX9TmkBMZsf/0TTUjtx577hB9TTGx/Pf5Dt1+0rx1xZeAKqHMDWfGAMUPzL8rQttwXxfOSXwjwH6nV/VBWVmoM99DEsvYn8m8B6cU1To9DSvzx2y/waIDSfvzbkLTXTWbSfhzJiLp+Dxy3gaC0HzmtM3vu+VJO4cZS8gt8WX/fZ6qndVke3k4DeC7w03uP+1NR2ZcVZZ3FN2hhU/snpPvwidYLfaSW1Ifx24/fvojQfuqkH/7rlNJ+FHXH35GtPLP2Z637+4QnSzndKHPdMD59hsJYH7d36nrWZbkv3k4E+IaAjXa1th/KylZ9LrOvc2hmV/tzjdF9NJV1uWH7gymADe3PcHKB2P6M9kzblUeC2v56/IdsP454CO2vyVf9zM76o+OZQLkpircBAb4rQEYPO96Sr5SfNO1d7m6hlVXtDyTqbpk4b7jZK+1DAXa0/z1uIVDb72Di+k77YfsJ8R+m/VM8bMrXjPlZP7uG2/uZGsKqfLUv3rw2im8O6FlWqqrj3Xhr78d/rEXnNb9V7c+Il2uJxob8IpXtglwA2NJ+vB4ntR8n/XSlGtshASH+w7TfDwwWdAS8nx+7mse7hRpLebQvKstX//aNgt3yRHGiRCvFzt3cP0A3m9p/lmlBfeVfejFlrhPIy+IwAwB72u9j30ntz6kPtTN5lNHbX4//kO2HsO2L+lEqzySRD4xd0e3j1x9fFso6ayzipji1RAOdLyxRU7/xQTqX/Ipuvtx9/TYHhoTnus7pKUDspG4mgP1bvGnoBDj0x+H/aH8A7IdBFT94HHUAAAAASUVORK5CYII=',
                        width: 130, alignment: 'left', color: 'blue', margin: [40, 40, 40, 40]
                    },
                ]
            },
            content: [
                { text: 'fait le : ' + new Date().toLocaleDateString(), alignment: 'right', fontSize: 13, margin: [0, 0, 0, 0] },
                { text: doc.titre_document, blod: true, alignment: 'center', fontSize: 18, margin: [20, 20, 20, 20] },
                { text: 'A: ' + doc.id_candidat.nom_candidat + " " + doc.id_candidat.prenom_candidat, alignment: 'right', fontSize: 15, margin: [0, 15, 0, 15] },
                { text: 'Objet: ' + doc.objet_document, alignment: 'left', fontSize: 15, margin: [0, 15, 0, 15] },
                { text: doc.corps_document, alignment: 'justify', fontSize: 12,
                    width: 100 },
                { text: '', style: 'font-family: Times, "Times New Roman", Georgia, serif;' },
                { text: 'Signature: ' + doc.signature_document, alignment: 'right', fontSize: 14 },
            ], pageMargins: [50, 100, 50, 50],
            footer: {
                columns: [
                    { text: '__________________________________________________________________________________________\nAdresse : Lot N°38, Amerchich Daoudiate - Marrakech-Médina (AR)\n05-24-30-04-62 , 05-24-30-79-73 - tzidi@norsys.fr ,www.norsys.fr', fontSize: 10, alignment: 'center', color: 'black', margin: [-30, 0, -30, -30] },
                ],
                styles: {
                    pageSize: 'A4',
                    pageOrientation: 'portrait',
                    solid: true,
                }
            }
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
    };
    DocumentsPage.prototype.downloadPdf = function (document) {
        var _this = this;
        this.createPdf(document);
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // Save the PDF to the data Directory of our App
                _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                });
            });
        }
        else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    };
    DocumentsPage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        });
    };
    DocumentsPage = DocumentsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-documents',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\documents\documents.html"*/'<ion-content>\n<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage"></a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n  <div id="user-nav" class="navbar navbar-inverse">\n    <ul class="nav">\n      <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n      <li class=""><a title="" href="" (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n        <span class="text">Déconnexion</span></a></li>\n    </ul>\n  </div>\n  <!--close-top-Header-menu-->\n  <div id="sidebar">\n    <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n    <ul>\n      <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i><span>Accueil</span></a></li>\n      <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n      <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>  \n      <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n      <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n      <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n    </ul>\n  </div>\n  <div id="content">\n    <div id="content-header">\n      <div id="breadcrumb"> <a href="" navPush="DocumentPage" title="page document" class="tip-bottom"><i class="icon-file"></i> Document</a></div>\n    </div>\n    <!-- Page Content -->\n    <div class="container-fluid">\n      <div class="row-fluid">\n        <div class="span12">\n          <div class="widget-box">\n            <div class="widget-title" title="ajouter un document" navPush="DocumentAddPage">\n              <span class="icon"><i class="icon-plus"></i></span> \n                <h5>Liste des Documents</h5>\n            </div>\n            <div class="widget-content nopadding">\n              <div class="controls">\n                <input type="text" class="span11" placeholder="Recherche..."  [(ngModel)]="search"  name="search" (input)="Search()" style="width: 100%; margin: 10px 0 15px;">\n              </div>\n              <table class="table table-bordered table-striped table-doc"> \n                <thead>\n                  <tr>\n                    <th>Date</th>\n                    <th>Titre</th>\n                    <th>Déstinataire</th>\n                    <th>Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor="let document of pagedItems">\n                    <td>{{document.date_creation_document}}</td>\n                    <td>{{document.titre_document}}</td>\n                    <td>{{document.id_candidat.nom_candidat}} {{document.id_candidat.prenom_candidat}}</td>\n                    <td class="center">\n                      <a detail-push navPush="DocumentEditPage"\n                        [navParams]="{document: document}"><span class="icon" color="primary"><i class="icon-edit"></i></span></a>\n                       <a (click)="deleteDoc(document.id)"><span class="icon"><i class="icon-trash"></i></span></a>\n                       <a (click)="downloadPdf(document)"><span class="icon"><i class="icon-print"></i></span></a>\n                    </td>\n                </tr>\n                </tbody>\n              </table>\n              <div class="pagination alternate">\n                <!-- Pagination -->\n                <!-- pager -->\n                <ul *ngIf="pager.pages && pager.pages.length" class="pagination">\n                  <li [ngClass]="{disabled:pager.currentPage === 1}">\n                    <a (click)="setPage(1)">&#x3C;&#x3C;</a>\n                  </li>\n                  <li [ngClass]="{disabled:pager.currentPage === 1}">\n                    <a (click)="setPage(pager.currentPage - 1)">&#x3C;</a>\n                  </li>\n                  <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}">\n                    <a (click)="setPage(page)">{{page}}</a>\n                  </li>\n                  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">\n                    <a (click)="setPage(pager.currentPage + 1)">></a>\n                  </li>\n                  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">\n                    <a (click)="setPage(pager.totalPages)">>></a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>      \n        </div>\n      </div>\n    </div>\n        </div>\n        <div class="row-fluid">\n          <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n        </div>\n</ion-content>  '/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\documents\documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_document_document__["a" /* DocumentProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_pagination_pagination__["a" /* PaginationProvider */]])
    ], DocumentsPage);
    return DocumentsPage;
    var DocumentsPage_1;
}());

//# sourceMappingURL=documents.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(securityprovider, navCtrl, navParams) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.user_info = localStorage.getItem('user_info');
    };
    HomePage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\home\home.html"*/'<ion-content>\n<!--Header-part-->\n    <div id="header">\n        <h1><a href="#" navPush="HomePage"></a></h1>\n    </div>\n    <!--close-Header-part--> \n    <!--top-Header-messaages-->\n    <div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n    <!--close-top-Header-messaages--> \n    <!--top-Header-menu-->\n    <div id="user-nav" class="navbar navbar-inverse">\n            <ul class="nav">\n                <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n                <li class=""><a title="" href="" (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n                 <span class="text">Déconnexion</span></a></li>\n            </ul>\n    </div>\n    <!--close-top-Header-menu-->\n      <div id="sidebar">\n        <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n        <ul>\n          <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i><span>Accueil</span></a></li>\n          <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n          <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>  \n          <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n          <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n          <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n        </ul>\n      </div>\n      <div id="content">\n        <div id="content-header">\n          <div id="breadcrumb"><a href="" navPush="HomePage" title="Go to Home" class="tip-bottom"><i class="icon-home"></i> Home</a></div>\n        </div>\n    <!-- Page Content -->\n    <div class="container-fluid">\n        <div class="row-fluid">\n            <div class="span12">    \n                <div class="row-fluid">\n                    <div class="span12">\n                        <div class="thumbnail" style="margin-top: 5px">\n                            <h2><a href="" navPush="HomePage">Recrute Sourcing </a></h2>\n                            <h4> Accélérez vos recrutements en seulement quelques clics </h4>\n                            <div class="caption">\n                                <p>Recrute Sourcing est une application de recrutements et de gestion de candidatures dédié aux entreprises désireuses d\'améliorer leurs performances de recrutement. \n                                C\'est une application innovante qui permet de réduire le cycle d’un processus de recrutement et d\'éviter les tâches \n                                répétitives pour une bonne gestion du temps. Notre application <strong>Recrute Sourcing </strong>, s’appuyant sur des fonctionnalités innovantes de haute performance qui permet notamment d\'ajouter des candidats et d’intégrer rapidement leurs CV, leurs photos, d’archiver automatiquement les emails et les documents ,d’effectuer des recherches dynamiques efficaces sur des profits pertinents sans oublier de visualiser le reporting annuel en clin oeil.</p>\n                            </div>\n                            <div class="ratings">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            <div class="row-fluid"></div><BR>\n                <div class="row-fluid">\n                    <div class="span3">\n                        <div class="thumbnail" navPush="RecherchePage">\n                            <img src="assets/images/gallery/src111.png" alt="">\n                            <div class="caption">\n                                <h4><a href="#">Consultez votre propre vive de candidats à partir des réseaux sociaux </a></h4>\n                                <p> Si vous pouviez classer et catégoriser vos candidats selonvos propres critères? \n                                    Avec Recrute Sourcing  chaque recruteur personnalise ces catégories, crée ses propres paniers de candidats et utilise ses propres filtres à savoir:Classement et recherche par critères en se basant sur l\'api google costum search pour affiner le classement et personnaliser l\'apparence des résultats de recherche.     \n                                </p>\n                            </div>\n                            <div class="ratings"></div>\n                        </div>\n                    </div>\n                    <div class="span3">\n                        <div class="thumbnail" navPush="RapportPage">\n                            <img src="assets/images/gallery/src11.png" alt="">\n                            <div class="caption">\n                                <h4><a href="#">Analyses poussées pour des décisions éclairées</a></h4>\n                                <p>  Notre application Recrute Sourcing  vous permet de réaliser des analyses innovantes et probantes des indicateurs de processus, de la qualité et des spécialités.\n                                    <br> Grâce à notre application, nous mettons à votre disposition le module rapport qui regroupe les évaluations centrales qui facilitent votre quotidien au travail et vous permet de bénéficier d\'informations pertinentes qui vous aident dans vos décisionset suivre votre activité annuelle.\n                                </p>\n                            </div>\n                            <div class="ratings"></div>\n                        </div>\n                    </div>\n                    <div class="span3">\n                        <div class="thumbnail" navPush="DocumentPage">\n                            <img src="assets/images/gallery/src112.png" alt="">\n                            <div class="caption">\n                                <h4><a href="#">Accablé par documents? Réduire le temps de recherche de plusieurs heures à quelques secondes.</a></h4>\n                                <p>  Recrute Sourcing  est une application intuitive et hautement performante de gestion de documents qui offre les avantages\n                                        d\'un système de gestion de documents aux moyennes et grandes entreprises. \n                                       Ce module aide les organisations dans le monde à prendre le contrôle de leurs documents, en mettant l\'accent sur l\'accès rapide aux fichiers.\n                                </p>\n                            </div>\n                            <div class="ratings"></div>\n                        </div>\n                    </div>\n                    <div class="span3">\n                        <div class="thumbnail" navPush="CandidatsPage">\n                            <img src="assets/images/gallery/src123.png" alt="">\n                            <div class="caption">\n                                <h4><a href="#"> Valorisez votre marque employeur </a></h4>\n                                <p> Les processus de recrutement sont importants, mais une excellente gestion des candidats est un moteur décisif pour la réussite de l\'entreprise. Recrute Sourcing  vous permet  de réagir rapidement de l\'envoi de l\'email  jusqu\'à l\'occupation du poste. vous pouvez vous fier à la gestion des candidats, sans paperasse et de réagir rapidement avec les meilleurs d\'entre eux. Invitez-les à passer un entretien en quelques minutes seulement. </p>\n                            </div>\n                            <div class="ratings"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.container -->\n</div>\n    <div class="row-fluid">\n        <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n    </div>\n</ion-content>  '/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recrute_recrute__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SelectionEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectionEditPage = /** @class */ (function () {
    function SelectionEditPage(navCtrl, navParams, recruteProvider, elem, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recruteProvider = recruteProvider;
        this.elem = elem;
        this.alertCtrl = alertCtrl;
        this.user = localStorage.getItem('user');
        this.cbChecked = [];
    }
    SelectionEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectionEditPage' + this.cbChecked.nom_candidat);
    };
    SelectionEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cbChecked = this.navParams.get('cbChecked');
        this.recruteProvider.getEtat().subscribe(function (data) {
            _this.etats = data;
            console.log('my etat' + data);
        });
    };
    SelectionEditPage.prototype.updateSelection = function () {
        var _this = this;
        console.log(this.cbChecked);
        var formData = new FormData();
        var date = new Date();
        var etati = this.elem.nativeElement.querySelector('#myetat');
        console.log('selection avant etat' + this.etat);
        var _loop_1 = function (index) {
            var element = this_1.cbChecked[index]['id'];
            formData.append('date_selection', date.toLocaleDateString());
            formData.append('id_candidat', element);
            formData.append('etat', this_1.etat);
            formData.append('user', this_1.user);
            this_1.recruteProvider.postSelectionEdit(formData).subscribe(function (res) {
                if (res.taille <= 0) {
                    console.log('selection bien ajouter candidat' + element.id);
                    console.log('selection bien ajouter etat' + _this.etat);
                    _this.presentAlert1();
                }
                else {
                    console.log('etat  occueid for' + res);
                    _this.presentAlert();
                }
            });
        };
        var this_1 = this;
        for (var index = 0; index < this.cbChecked.length; index++) {
            _loop_1(index);
        }
    };
    SelectionEditPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'candidat est déja dans cette etat',
            buttons: ['Ok']
        });
        alert.present();
    };
    SelectionEditPage.prototype.presentAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Etat du processus de recrutement est modifié avec succès',
            buttons: ['Ok']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myetat'),
        __metadata("design:type", Object)
    ], SelectionEditPage.prototype, "myetat", void 0);
    SelectionEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selection-edit',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\selection-edit\selection-edit.html"*/'<ion-content>\n  <div id="content">\n    <div id="content-header">\n      <div id="breadcrumb"> <a href="" navPush="RecrutePage" title="Go to Recrutement page" class="tip-bottom"><i class="icon-briefcase"></i> Recrutement</a></div>\n    </div>\n  <div class="container-fluid">\n    <div class="row-fluid">\n      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" id="exampleModalLabel" style="text-align: center">Modifier une etape de recrutement</h5>\n            </div>\n            <div class="modal-body" style="text-align: center">\n              <div *ngFor="let checkcan of cbChecked">\n                  candidat:  {{checkcan.candidat.nom_candidat}} {{checkcan.candidat.prenom_candidat}}\n              </div>\n              <form role="form" (ngSubmit)="updateSelection()">\n                <div class="form-group">\n                  <label for="exampleInputEmail1">Etats:</label>\n                    <select class="form-control" name="myetat" [(ngModel)]="etat">\n                      <option *ngFor="let etatt of etats" [value]="etatt.id">{{etatt.libelle_etat}}</option>\n                    </select>\n                </div>\n              </form>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-primary" data-dismiss="modal" navPush="RecrutePage">Fermer</button>\n              <button type="submit" class="btn btn-primary">Editer</button>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content> \n'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\selection-edit\selection-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_recrute_recrute__["a" /* RecruteProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SelectionEditPage);
    return SelectionEditPage;
}());

//# sourceMappingURL=selection-edit.js.map

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/candidat-add/candidat-add.module": [
		487
	],
	"../pages/candidat-details/candidat-details.module": [
		233
	],
	"../pages/candidats/candidats.module": [
		489
	],
	"../pages/document-add/document-add.module": [
		486
	],
	"../pages/document-edit/document-edit.module": [
		340
	],
	"../pages/documents/documents.module": [
		491
	],
	"../pages/etat/etat.module": [
		335
	],
	"../pages/footer/footer.module": [
		920,
		1
	],
	"../pages/header/header.module": [
		921,
		0
	],
	"../pages/home/home.module": [
		344
	],
	"../pages/login/login.module": [
		345
	],
	"../pages/rapports/rapports.module": [
		346
	],
	"../pages/recherche/recherche.module": [
		480
	],
	"../pages/recrute-edit/recrute-edit.module": [
		477
	],
	"../pages/recrute-message/recrute-message.module": [
		478
	],
	"../pages/recrute/recrute.module": [
		490
	],
	"../pages/register/register.module": [
		484
	],
	"../pages/selection-edit/selection-edit.module": [
		483
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 232;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatDetailsPageModule", function() { return CandidatDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__candidat_details__ = __webpack_require__(559);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CandidatDetailsPageModule = /** @class */ (function () {
    function CandidatDetailsPageModule() {
    }
    CandidatDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__candidat_details__["a" /* CandidatDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__candidat_details__["a" /* CandidatDetailsPage */]),
            ],
        })
    ], CandidatDetailsPageModule);
    return CandidatDetailsPageModule;
}());

//# sourceMappingURL=candidat-details.module.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_login_model__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, SecuriteProvider, elem, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SecuriteProvider = SecuriteProvider;
        this.elem = elem;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loginclass = new __WEBPACK_IMPORTED_MODULE_5__models_user_login_model__["a" /* Login */]();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.user_info = localStorage.getItem('user_info');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.SecuriteProvider.postToken(this.loginclass).subscribe(function (response) {
            if (response.status == 200) {
                _this.toast.presentToast("Connexion réussie");
                localStorage.setItem('token', response.value);
                localStorage.setItem('user', response.user.id);
                localStorage.setItem('user_info', response.user.firstname + " " + response.user.lastname);
                localStorage.setItem('token_id', response.id);
                _this.presentAlert1();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
            else if (response.status == 400) {
                _this.presentAlert();
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Authentification',
            subTitle: 'Réessayer: email ou mot de passe incorrects',
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage.prototype.presentAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Authentification',
            subTitle: 'Bienvenue ' + this.user_info,
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\login\login.html"*/'<div id="loginbox" style=" margin-top:10%;">            \n    <form id="loginform" class="form-vertical" (ngSubmit)="login()" #postForm="ngForm">\n        <div class="control-group normal_text"> <h3><img src="assets/img/logo.png" alt="Logo" /></h3></div>\n            <div class="control-group">\n                <div class="controls">\n                    <div class="main_input_box">\n                        <span class="add-on"><i class="icon-user"></i></span><input type="email" [(ngModel)]="loginclass.login" placeholder="Email" name="login" id="email"/>\n                    </div>\n                </div>\n            </div>\n            <div class="control-group">\n                <div class="controls">\n                    <div class="main_input_box">\n                        <span class="add-on"><i class="icon-lock"></i></span><input type="password" [(ngModel)]="loginclass.password" placeholder="mot de passe" name="password" id="mdp" />\n                    </div>\n                </div>\n            </div>\n            <div class="form-actions">\n                <span class="pull-right"><input type="submit" class="btn btn-success" value="Se connecter" [disabled]="!postForm.valid" /></span>\n                <span class="pull-left">\n                    <a href="#"  navPush="RegisterPage">Créer un compte</a></span>\n            </div>\n        </form>\n        <form id="recoverform"  class="form-vertical" >\n            <p class="normal_text">Enter your e-mail address below and we will send you instructions how to recover a password.</p>\n            <div class="controls">\n                <div class="main_input_box">\n                    <span class="add-on"><i class="icon-envelope"></i></span><input type="text" placeholder="E-mail address" />\n                </div>\n            </div>\n            <div class="form-actions">\n                <span class="pull-left"><a href="#" class="flip-link btn btn-inverse" id="to-login">&laquo; Back to login</a></span>\n                <span class="pull-right"><input type="submit" class="btn btn-info" value="Recover" /></span>\n            </div>\n        </form>\n    </div>\n    <div class="powered-by-footer">\n        <p class="normal_text"> Developpée par : </p>\n        <img src="assets/images/gallery/norsys.png" alt="norsys.png">\n    </div>\n\n'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecuriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SecuriteProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SecuriteProvider = /** @class */ (function () {
    function SecuriteProvider(http) {
        this.http = http;
        this.authtokensUrl = "http://localhost:8000/auth-tokens";
        this.registerUrl = "http://localhost:8000/users";
        console.log('Hello SecuriteProvider Provider');
    }
    // methode de register
    SecuriteProvider.prototype.postUser = function (user) {
        return this.http.post(this.registerUrl, user);
    };
    // methode pour l'auth
    SecuriteProvider.prototype.postToken = function (login) {
        return this.http.post(this.authtokensUrl, login);
    };
    // methode pour la deconnexion
    SecuriteProvider.prototype.deconnexion = function () {
        var idToken = localStorage.getItem('token_id');
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this.http.delete(this.authtokensUrl + "/" + idToken, { headers: headers });
    };
    SecuriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SecuriteProvider);
    return SecuriteProvider;
}());

//# sourceMappingURL=securite.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileUploaderService = /** @class */ (function () {
    function FileUploaderService(_http) {
        this._http = _http;
    }
    FileUploaderService.prototype.uploadImage = function (formdata) {
        var _url = 'http://localhost/fm-api/upload/fileUpload.php';
        return this._http.post(_url, formdata).catch(this._errorHandler);
    };
    FileUploaderService.prototype.uploadcv = function (formdata) {
        var _url = 'http://localhost/fm-api/upload/cvUpload.php';
        return this._http.post(_url, formdata).catch(this._errorHandler);
    };
    FileUploaderService.prototype.uploadImageupdate = function (formdata) {
        var _url = 'http://localhost/fm-api/upload/updateFile.php';
        return this._http.post(_url, formdata);
    };
    FileUploaderService.prototype.uploadcvupdate = function (formdata) {
        var _url = 'http://localhost/fm-api/upload/cvUploadupdate.php';
        return this._http.post(_url, formdata);
    };
    FileUploaderService.prototype._errorHandler = function (error) {
        console.error('Error Occured: ' + error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error || 'Some Error on Server Occured');
    };
    FileUploaderService.prototype.getFilesList = function () {
        var _url = 'http://192.168.1.96/fm-api/upload/getFilesFromDirectory.php';
        return this._http.get(_url).catch(this._errorHandler);
    };
    FileUploaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], FileUploaderService);
    return FileUploaderService;
}());

//# sourceMappingURL=file-uploader-service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtatPageModule", function() { return EtatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__etat__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EtatPageModule = /** @class */ (function () {
    function EtatPageModule() {
    }
    EtatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__etat__["a" /* EtatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__etat__["a" /* EtatPage */]),
            ],
        })
    ], EtatPageModule);
    return EtatPageModule;
}());

//# sourceMappingURL=etat.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_recrute_recrute__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_selection_etat_model__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_selection_selection_model__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recrute_edit_recrute_edit__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rapports_rapports__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pagination_pagination__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__recrute_recrute__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var EtatPage = /** @class */ (function () {
    function EtatPage(securityprovider, navCtrl, navParams, candidatProvider, recruteProvider, toast, elem, pagerService, alertCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candidatProvider = candidatProvider;
        this.recruteProvider = recruteProvider;
        this.toast = toast;
        this.elem = elem;
        this.pagerService = pagerService;
        this.alertCtrl = alertCtrl;
        this.pager = {};
        this.etat = new __WEBPACK_IMPORTED_MODULE_7__models_selection_etat_model__["a" /* Etat */]();
        this.selection = new __WEBPACK_IMPORTED_MODULE_8__models_selection_selection_model__["a" /* Selection */]();
        this.searchTerm = '';
        this.search = '';
        this.user = localStorage.getItem('user');
        this.id_selection = this.navParams.get('selectid');
    }
    EtatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user_info = localStorage.getItem('user_info');
        this.candidatProvider.getAllCandidat().subscribe(function (data) {
            _this.candidats = data;
            console.log('my candidats' + data);
        });
        this.recruteProvider.getEtat().subscribe(function (data) {
            _this.etats = data;
            console.log('my etat ORDRE' + data);
        });
        this.recruteProvider.getRecrute().subscribe(function (data) {
            _this.selections = data;
            _this.setPage(1);
            console.log('my recrute' + data);
        });
    };
    EtatPage.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.selections.length, page);
        // get current page of items
        this.pagedItems = this.selections.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    EtatPage.prototype.Search = function () {
        var _this = this;
        this.recruteProvider.getSearch(this.search).subscribe(function (data) {
            _this.recruteProvider.getRecrute();
            _this.selections = data;
            _this.setPage(1);
            console.log(data);
        });
    };
    EtatPage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    EtatPage.prototype.ajoutEtat = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('ordre_etat', this.etat.ordre_etat);
        formData.append('libelle_etat', this.etat.libelle_etat);
        formData.append('user', this.user);
        this.recruteProvider.postEtat(formData).subscribe(function (res) {
            if (res >= 0) {
                _this.presentAlert();
            }
            else {
                _this.presentAlert1();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__rapports_rapports__["a" /* RapportsPage */]);
            }
        });
    };
    //Popup d'alert
    EtatPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Cet élément déjà existe',
            buttons: ['Ok']
        });
        alert.present();
    };
    EtatPage.prototype.presentAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Nouvel état a été ajouter avec success',
            buttons: ['Ok']
        });
        alert.present();
    };
    EtatPage.prototype.addSelection = function () {
        var _this = this;
        var formData = new FormData();
        var date_today = new Date();
        formData.append('date_selection', "" + date_today);
        formData.append('etat', this.selection.etat);
        formData.append('candidat', this.selection.candidat);
        formData.append('user', this.user);
        this.recruteProvider.postSelection(formData).subscribe(function (res) {
            _this.selection;
            _this.toast.presentToast("Un recrutement a été bien Ajouté !!");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__recrute_recrute__["a" /* RecrutePage */]);
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
    };
    //method de supprission
    EtatPage.prototype.deleteEtat = function (id) {
        this.recruteProvider.deleteEtat(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__recrute_recrute__["a" /* RecrutePage */]);
    };
    EtatPage.prototype.presentAlert3 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Etat supprimé avec success',
            buttons: ['Ok']
        });
        alert.present();
    };
    EtatPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confiration',
            message: 'Voulez-vous Supprimer cet état ??',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'Annuler',
                    handler: function () {
                        console.log('Annuler clicked');
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.recruteProvider.deleteEtat(id).subscribe(function (data) {
                            _this.recruteProvider.getEtat();
                        });
                        _this.recruteProvider.getEtat();
                        _this.presentAlert3();
                        _this.recruteProvider.getEtat();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__recrute_recrute__["a" /* RecrutePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    //method de supprission
    EtatPage.prototype.deleteRecrute = function (id) {
        this.presentConfirm2(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__recrute_recrute__["a" /* RecrutePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__recrute_recrute__["a" /* RecrutePage */]);
    };
    EtatPage.prototype.presentAlert4 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Recrutement supprimé avec success',
            buttons: ['Ok']
        });
        alert.present();
    };
    EtatPage.prototype.presentAlert5 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Error 404',
            buttons: ['Ok']
        });
        alert.present();
    };
    EtatPage.prototype.presentConfirm2 = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confiration',
            message: 'Voulez-vous Supprimer ce recrutement??',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'Annuler',
                    handler: function () {
                        console.log('Annuler clicked');
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.recruteProvider.deleteSelection(id).subscribe(function (data) {
                            _this.presentAlert4();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__recrute_recrute__["a" /* RecrutePage */]);
                            _this.recruteProvider.getRecrute();
                        }, function (err) {
                            _this.presentAlert5();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EtatPage.prototype.updateRecrute = function (selection) {
        //let profileModal = this.modal.create('RecruteEditPage');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__recrute_edit_recrute_edit__["a" /* RecruteEditPage */]);
        //profileModal.present();
    };
    EtatPage.prototype.afficher = function (ids) {
        var x = document.getElementById("critere");
        var cmp = 0;
        var list;
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    };
    EtatPage.prototype.afficherEtat = function () {
        var x = document.getElementById("afficheretat");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    };
    EtatPage.prototype.presentAlert6 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Aucun "élément selectionner',
            buttons: ['Ok']
        });
        alert.present();
    };
    EtatPage.prototype.editerRecrute = function (mys) {
        var element = document.getElementById("checki");
        var cmp = 0;
        for (var index = 0; index < mys.length; index++) {
            var ele = mys[index];
            if (element.checked) {
                cmp = cmp + 1;
            }
            else {
                this.presentAlert6();
            }
        }
    };
    EtatPage.prototype.sendMail = function () {
    };
    EtatPage.prototype.gotoedit = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__recrute_edit_recrute_edit__["a" /* RecruteEditPage */], { etat: e });
    };
    EtatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-etat',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\etat\etat.html"*/'<ion-content>\n<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage">Recrute Sourcing</a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n<div id="user-nav" class="navbar navbar-inverse">\n  <ul class="nav">\n    <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n    <li class=""><a title=""  (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n      <span class="text">Déconnexion</span></a></li>\n  </ul>\n</div>\n<!--close-top-Header-menu-->\n<div id="sidebar">\n  <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n    <ul>\n      <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i> <span>Accueil</span></a></li>\n      <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n      <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i> <span>Recrutement</span></a></li>  \n      <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i> <span>Documents</span></a></li>\n      <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i> <span>Recherche</span></a></li>\n      <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i> <span>Rapports </span></a></li>\n    </ul>   \n</div>\n<div id="content">\n  <div id="content-header">\n    <div id="breadcrumb"> <a href="" navPush="RecrutePage" title="Go to Recrutement page" class="tip-bottom"><i class="icon-briefcase"></i> Recrutement</a></div>\n  </div>\n  <div class="container-fluid">\n    <div class="row-fluid">\n      <div>\n        <div class="widget-box">\n          <div class="widget-content tab-content" style="padding: 10px 0 !important">\n            <!-- Button trigger modal -->\n            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" style="margin-bottom: 10px; width: 290px;">\n                  Définition du processus de recrutement\n            </button>\n          </div> \n          <div class="widget-content">\n            <ul class="thumbnails">\n              <li class="span2" *ngFor="let etat of etats">\n                <div class="thumbnail lightbox_trigger">\n                  <span><span style="display: none;">2,4,9,7,12,10,12</span>\n                  </span><em>Etape : {{etat.ordre_etat}}</em>\n                  <div class="right"> {{etat.libelle_etat}} </div> \n                </div>\n                <div class="actions" style="background-color: transparent !important;">\n                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap" navPush="RecruteEditPage"\n                          [navParams]="{etat: etat}"><i class="icon-pencil icon-white"></i>\n                  </button>\n                </div>\n              </li></ul>\n          </div>\n        </div>\n      </div>\n    </div> \n  </div>\n</div>\n<!-- Modal -->\n<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\n        <h4 class="modal-title" id="myModalLabel">Ajouter une etape de recrutement</h4>\n      </div>\n      <div class="modal-body" style="text-align: center">\n        <form role="form" (ngSubmit)="ajoutEtat()">\n          <div class="form-group">\n            <label for="exampleInputEmail1">Ordre:</label>\n            <input type="number" class="form-control" name="order_etat"  [(ngModel)]="etat.ordre_etat">\n            <label for="exampleInputEmail1">Etape:</label>\n            <input type="text" class="form-control" name="libelle_etat" id="libelleetat" [(ngModel)]="etat.libelle_etat" />\n          </div>\n          <button type="submit" class="btn btn-danger">Ajouter</button>\n        </form>\n      </div>    \n      <div class="modal-footer">\n        <button type="button" class="btn btn btn-warning" data-dismiss="modal">Annuler</button>\n      </div>\n    </div>\n  </div>\n</div> \n<div class="row-fluid">\n  <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n</div>\n</ion-content> '/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\etat\etat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__["a" /* CandidatProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_recrute_recrute__["a" /* RecruteProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_11__providers_pagination_pagination__["a" /* PaginationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EtatPage);
    return EtatPage;
}());

//# sourceMappingURL=etat.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Etat; });
var Etat = /** @class */ (function () {
    function Etat() {
    }
    return Etat;
}());

//# sourceMappingURL=etat.model.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selection; });
var Selection = /** @class */ (function () {
    function Selection() {
    }
    return Selection;
}());

//# sourceMappingURL=selection.model.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectionProvider = /** @class */ (function () {
    function SelectionProvider(_httpClient) {
        this._httpClient = _httpClient;
        this.url = "http://localhost:8000/";
        console.log('Hello AnalyseProvider Provider');
    }
    // récupération des nbr des personnes ayant été convoqué pour chacune des étapes du processus de recrutement
    //url("filtrePr/{id_etat}")
    SelectionProvider.prototype.getCountPerByEtat = function (id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "filtrePr/" + id, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // récuperation des nbr de personnes pour chaque ètat par apport aux années 
    //("filtreA/{id}")
    SelectionProvider.prototype.getCountEtat = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "filtreA/" + user, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // Serving content
    SelectionProvider.prototype.getEtapeData = function (numero) {
        return this.getCountPerByEtat(numero);
    };
    // récupération des nbr des personnes ayant été retenues
    //url("filtrePrRetenu/{id}")
    SelectionProvider.prototype.getCountPerByEtatRetenu = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "filtrePrRetenu/" + user, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // récupération des nbr de femme ayant été convoquée pour chacunes des étapes du processus de recrutement
    //url("filtreAF/{id}")
    SelectionProvider.prototype.getCountFemmeEtat = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "filtreAF/" + user, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // récupération des nbr des personnes dans une spécialité donnée
    //url("filtrePrS/{id}")
    SelectionProvider.prototype.getCountPerSpecialite = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "filtrePrS/" + user, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    // récupération des nbr de femme dans une spécialité donnée
    //url("filtrePrFS/{id}")
    SelectionProvider.prototype.getCountFemmeSpecialite = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "filtrePrFS/" + user, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    SelectionProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    SelectionProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    SelectionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SelectionProvider);
    return SelectionProvider;
}());

//# sourceMappingURL=selection.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentEditPageModule", function() { return DocumentEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_edit__ = __webpack_require__(836);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentEditPageModule = /** @class */ (function () {
    function DocumentEditPageModule() {
    }
    DocumentEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__document_edit__["a" /* DocumentEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__document_edit__["a" /* DocumentEditPage */]),
            ],
        })
    ], DocumentEditPageModule);
    return DocumentEditPageModule;
}());

//# sourceMappingURL=document-edit.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Document; });
var Document = /** @class */ (function () {
    function Document() {
    }
    return Document;
}());

//# sourceMappingURL=document.model.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapportsPageModule", function() { return RapportsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rapports__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RapportsPageModule = /** @class */ (function () {
    function RapportsPageModule() {
    }
    RapportsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rapports__["a" /* RapportsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rapports__["a" /* RapportsPage */]),
            ],
        })
    ], RapportsPageModule);
    return RapportsPageModule;
}());

//# sourceMappingURL=rapports.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CandidatProvider = /** @class */ (function () {
    function CandidatProvider(_httpClient) {
        this._httpClient = _httpClient;
        this.url = "http://localhost:8000/";
    }
    //add
    CandidatProvider.prototype.addCandidat = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.post(_this.url + 'candidat', data).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //la method post pour inserer des candidat
    CandidatProvider.prototype.postCandidat = function (candidat) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.post(this.url + "candidats", candidat, { headers: headers });
    };
    //la method qui permet la recupuration des candidat
    CandidatProvider.prototype.getCandidat = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "candidats/" + user, { headers: headers });
    };
    CandidatProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CandidatProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    // la method pour modifier les donnee d'un candidat
    CandidatProvider.prototype.updateCandidat = function (candidat) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.put(this.url + "candidats/" + candidat.id, candidat, { headers: headers });
    };
    //la method qui permet la supprission  d'un candidat
    CandidatProvider.prototype.deleteCandidat = function (id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.delete(this.url + "candidat/" + id, { headers: headers });
    };
    //filtrage
    CandidatProvider.prototype.filterItems = function (searchTerm, items) {
        return items.filter(function (item) {
            return item.titre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    CandidatProvider.prototype.getSearch = function (titre) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "candidats/search/" + titre, { headers: headers });
    };
    CandidatProvider.prototype.getOrder = function (cond) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "candidats/tri/" + cond, { headers: headers });
    };
    //recherche parametré
    CandidatProvider.prototype.getSearchParam = function (genre, titre, adr, netude, exp, comp) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "candidats/search/" + genre + "/" + titre + "/" + adr + "/" + netude + "/" + exp + "/" + comp, { headers: headers });
    };
    // la method pour modifier une image
    CandidatProvider.prototype.updateCandidatimage = function (file, id) {
        var fd = new FormData();
        fd.append('photo_can', file);
        var headers;
        this._httpClient.patch(this.url + "candidat/image/" + id, fd, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).map(function (res) { return res; }).subscribe(function (data) { return console.log(data); });
    };
    //la method qui permet la recupuration des villes
    CandidatProvider.prototype.getVilles = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "villes", { headers: headers });
    };
    //la method qui permet la recupuration des specialite
    CandidatProvider.prototype.getSpecialites = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "specialites", { headers: headers });
    };
    //la method qui permet la recupuration des titres
    CandidatProvider.prototype.getTitres = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "titres", { headers: headers });
    };
    //la method qui permet la recupuration des experiences
    CandidatProvider.prototype.getExperiences = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "experiences", { headers: headers });
    };
    //la method qui permet la recupuration des niveau d'etude
    CandidatProvider.prototype.getNiveauEtude = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "niveauEtude", { headers: headers });
    };
    CandidatProvider.prototype.updateImage = function (id, image) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.put(this.url + "image/" + id, image, { headers: headers });
    };
    //la method qui permet la recupuration des niveau d'etude
    CandidatProvider.prototype.getAllCandidat = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "candidats", { headers: headers });
    };
    //la method post pour inserer des villes
    CandidatProvider.prototype.postVille = function (ville) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.post(this.url + "villes", ville, { headers: headers });
    };
    //la method post pour inserer des experiences
    CandidatProvider.prototype.postExperience = function (experience) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.post(this.url + "experiences", experience, { headers: headers });
    };
    //la method post pour inserer des specilaites
    CandidatProvider.prototype.postSpecilaite = function (specialite) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.post(this.url + "specialites", specialite, { headers: headers });
    };
    //la method post pour inserer des niveaux-etudes
    CandidatProvider.prototype.postNiveauetude = function (niveauetude) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.post(this.url + "niveauetude", niveauetude, { headers: headers });
    };
    //la method post pour inserer des Titres
    CandidatProvider.prototype.postTitres = function (titre) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.post(this.url + "titres", titre, { headers: headers });
    };
    CandidatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CandidatProvider);
    return CandidatProvider;
}());

//# sourceMappingURL=candidat.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruteEditPageModule", function() { return RecruteEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recrute_edit__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecruteEditPageModule = /** @class */ (function () {
    function RecruteEditPageModule() {
    }
    RecruteEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recrute_edit__["a" /* RecruteEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recrute_edit__["a" /* RecruteEditPage */]),
            ],
        })
    ], RecruteEditPageModule);
    return RecruteEditPageModule;
}());

//# sourceMappingURL=recrute-edit.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruteMessagePageModule", function() { return RecruteMessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recrute_message__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecruteMessagePageModule = /** @class */ (function () {
    function RecruteMessagePageModule() {
    }
    RecruteMessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recrute_message__["a" /* RecruteMessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recrute_message__["a" /* RecruteMessagePage */]),
            ],
        })
    ], RecruteMessagePageModule);
    return RecruteMessagePageModule;
}());

//# sourceMappingURL=recrute-message.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruteMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recrute_recrute__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recrute_recrute__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecruteMessagePage = /** @class */ (function () {
    function RecruteMessagePage(navCtrl, navParams, recruteProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recruteProvider = recruteProvider;
        this.alertCtrl = alertCtrl;
        this.cbChecked = [];
    }
    RecruteMessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecruteMessagePage');
    };
    RecruteMessagePage.prototype.sendemail = function () {
        var _this = this;
        var formData = new FormData();
        for (var index = 0; index < this.cbChecked.length; index++) {
            var element = this.cbChecked[index]['candidat']['email_candidat'];
            formData.append('to', element);
            formData.append('subject', this.sujet);
            formData.append('message', this.message);
            this.recruteProvider.postEmail(formData).subscribe(function (data) {
                _this.presentAlert();
                console.log('my msg' + data);
            });
        }
    };
    RecruteMessagePage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Votre message à été envoyé',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__recrute_recrute__["a" /* RecrutePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sujet'),
        __metadata("design:type", Object)
    ], RecruteMessagePage.prototype, "sujet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('message'),
        __metadata("design:type", Object)
    ], RecruteMessagePage.prototype, "message", void 0);
    RecruteMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recrute-message',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\recrute-message\recrute-message.html"*/'<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="exampleModalLabel">Nouveau message</h5>\n      </div>\n      <div class="modal-body">\n        <form>\n          <div class="form-group">\n            <label for="recipient-name" class="col-form-label">Objet:</label>\n            <input type="text" class="form-control" id="recipient-name" name="sujet" [(ngModel)]="sujet">\n          </div>\n          <div class="form-group">\n            <label for="message-text" class="col-form-label">Message:</label>\n            <textarea class="form-control" id="message-text" name="message" [(ngModel)]="message"></textarea>\n          </div>\n          <button type="button" class="btn btn-primary" (click)="sendemail()"> Envoyer message </button>\n        </form>\n      </div>\n      <div class="modal-footer">\n          <button type="button" class="btn btn-secondary" data-dismiss="modal" navPush="RecrutePage">Fermer</button>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\recrute-message\recrute-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_recrute_recrute__["a" /* RecruteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RecruteMessagePage);
    return RecruteMessagePage;
}());

//# sourceMappingURL=recrute-message.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Annuler');
        });
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecherchePageModule", function() { return RecherchePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recherche__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecherchePageModule = /** @class */ (function () {
    function RecherchePageModule() {
    }
    RecherchePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recherche__["a" /* RecherchePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recherche__["a" /* RecherchePage */]),
            ],
        })
    ], RecherchePageModule);
    return RecherchePageModule;
}());

//# sourceMappingURL=recherche.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecherchePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recherche_recherche__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecherchePage = /** @class */ (function () {
    function RecherchePage(securityprovider, navCtrl, navParams, http, sourcingService) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.sourcingService = sourcingService;
        this.user_info = localStorage.getItem('user_info');
    }
    RecherchePage.prototype.ngOnInit = function () {
        var _this = this;
        this.user_info = localStorage.getItem('user_info');
        if (this.search == null) {
            this.resultat = [];
        }
        else {
            var formData = new FormData();
            formData.append('q', this.search);
            formData.append('cr', this.region);
            formData.append('exactTerms', this.tri);
            formData.append('sort', 'date');
            this.sourcingService.getSearchgoogle(formData).subscribe(function (data) {
                _this.resultat = data;
                _this.result = _this.resultat.items;
                console.log('my titre: ' + _this.result);
                console.log('my result: ' + _this.resultat['items']);
            });
        }
    };
    //search linkedin
    RecherchePage.prototype.urlLinkedIn = function () {
        window.location.href = 'https://cse.google.com/cse/publicurl?cx=005036102548016141645:pczfojlrwum';
    };
    //search viadeo  
    RecherchePage.prototype.urlViadeo = function () {
        window.location.href = 'https://cse.google.com/cse/publicurl?cx=005036102548016141645:pczfojlrwum';
    };
    RecherchePage.prototype.gotourl = function (link) {
        window.location.href = link;
    };
    RecherchePage.prototype.Search = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('q', this.search);
        formData.append('cr', this.region);
        formData.append('exactTerms', this.tri);
        formData.append('sort', 'date');
        this.sourcingService.getSearchgoogle(formData).subscribe(function (data) {
            _this.resultat = data;
            _this.result = data;
            console.log(data);
        });
    };
    RecherchePage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        });
    };
    RecherchePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recherche',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\recherche\recherche.html"*/'<ion-content>\n<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage"></a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n  <div id="user-nav" class="navbar navbar-inverse">\n    <ul class="nav">\n      <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n      <li class=""><a title="" href="" (click)="deconnexion()"><i class="icon icon-share-alt"></i><span class="text">Déconnexion</span></a></li>\n    </ul>\n  </div>\n<!--close-top-Header-menu-->\n  <div id="sidebar">\n    <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n      <ul>\n        <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i><span>Accueil</span></a></li>\n        <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n        <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>  \n        <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n        <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n        <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n      </ul>\n  </div>\n  <div id="content">\n      <div id="content-header">\n        <div id="breadcrumb"> <a href="" navPush="RecherchePage" title="page recherche" class="tip-bottom"><i class="icon-search"></i> Recherche avancées</a></div>\n      </div>\n  <!-- Page Content -->\n  <div class="container-fluid">\n    <div class="row-fluid">\n      <div class="span12">\n        <div class="widget-box">\n          <div class="widget-title">\n            <h5>Recherche</h5>\n          </div>\n          <div class="widget-content" >\n            <div class="form-group">\n              <div class="span3">\n                <label for="exampleInputEmail1">Search For :</label>\n                <input  type="text"   [(ngModel)]="search" placeholder="Search for..." style="width: 100%">\n              </div>\n            <div class="span3">\n                <label for="exampleInputEmail1">Région:</label>\n                  <select  [(ngModel)]="region" style="width: 100%">\n                    <option value="ma">Maroc</option>\n                    <option value="fr">France</option>\n                  </select>\n            </div>\n            <div class="span3">\n                <label for="exampleInputEmail1">Affiner:</label>\n                  <select  [(ngModel)]="tri" style="width: 100%">\n                    <option value="expérience">Expérience</option>\n                    <option value="JAVA">JAVA</option>\n                    <option value="PHP">PHP</option>\n                  </select>\n            </div>\n            <div class="span3">\n              <div style="padding: 25px 0 0 0; text-align: center;">\n                <button (click)="Search()" style="border: none; background: none; margin: -7px 0 0 0">\n                  <span class="icon icon-search" style="margin-top: 4px"></span>\n                </button>\n                <button ion-button icon-only title="Search linkedin" (click)="urlLinkedIn()" style="border: none; background: inherit;box-shadow: none;">\n                 <img src="assets/imgs/linkedin.ico" style="width: 30px; margin-top: -16px;"/>\n                </button>\n                <button ion-button icon-only title="Search viadeo" (click)="urlViadeo()" style="border: none; background: inherit;box-shadow: none;">\n                  <img src="assets/imgs/viadeo.ico" style="width: 22px; margin-top: -11px;" />\n                </button>\n              </div>\n          </div>\n          <div style="clear: both"></div>\n        </div>\n      </div>\n      </div>\n    </div>\n    <div class="widget-box">\n    <div class="widget-title">\n      <span class="icon" ><i class="icon-search"></i></span>\n      <h5>Liste des Candidats</h5>\n    </div>\n    <div class="widget-content" >\n      <ul class="thumbnails">\n        <li class="span2"   *ngFor="let candidat of result ">\n          <a class="thumbnail lightbox_trigger" href="{{candidat.pagemap.metatags[\'0\'][\'og:image\']}}">\n          <img title="{{candidat.snippet}}" src="{{candidat.pagemap.metatags[\'0\'][\'og:image\']}}" alt=""alt="Avatar" style="width:100px;height:100px;border-radius: 50%;"  class="w3-circle" >\n          <div class="caption" style="text-align: center;">\n            <strong>{{candidat.title}}</strong>\n            <strong><a href="{{ candidat.link }}" >Consulter</a></strong>\n          </div>\n          </a>\n           <hr>\n          <div class="actions">\n            <!--  <a title="" href=""><i class="icon-pencil icon-white"></i></a>-->\n            <a title= "Supprimer" (click) = "delete(candidat.id)" ><i class="icon-remove icon-white"></i></a>\n          </div>\n          </li>\n          </ul>\n      </div>\n      </div>\n    </div>\n  </div>\n  </div>\n  <div class="row-fluid">\n    <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n  </div>\n</ion-content>  \n'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\recherche\recherche.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__providers_recherche_recherche__["a" /* RechercheProvider */]])
    ], RecherchePage);
    return RecherchePage;
}());

//# sourceMappingURL=recherche.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechercheProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RechercheProvider = /** @class */ (function () {
    function RechercheProvider(http) {
        this.http = http;
        this.urlPub = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDIqD1UL4RD03sY3FScnU_pYHYjscY7Lu0&cx=005036102548016141645:pczfojlrwum&q=";
        this.url = "http://localhost:8000/";
        console.log('Hello SourcingProvider Provider');
    }
    //la method qui permet la recupuration des candidat
    RechercheProvider.prototype.getSearchgoogle = function (data) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this.http.post(this.url + "searchgoogle", data, { headers: headers });
    };
    RechercheProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RechercheProvider);
    return RechercheProvider;
}());

//# sourceMappingURL=recherche.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionEditPageModule", function() { return SelectionEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_edit__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectionEditPageModule = /** @class */ (function () {
    function SelectionEditPageModule() {
    }
    SelectionEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selection_edit__["a" /* SelectionEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selection_edit__["a" /* SelectionEditPage */]),
            ],
        })
    ], SelectionEditPageModule);
    return SelectionEditPageModule;
}());

//# sourceMappingURL=selection-edit.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_user_model__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import {Validators, FormBuilder, FormGroup } from '@angular/forms';
var RegisterPage = /** @class */ (function () {
    // constructeur
    function RegisterPage(navCtrl, navParams, SecuriteProvider, elem, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SecuriteProvider = SecuriteProvider;
        this.elem = elem;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user_user_model__["a" /* User */]();
    }
    // la methode qui permet l'envoi des donnee vers l'api rest
    RegisterPage.prototype.register = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('firstname', this.user.firstname);
        formData.append('lastname', this.user.lastname);
        formData.append('email', this.user.email);
        formData.append('plainPassword', this.user.plainPassword);
        this.SecuriteProvider.postUser(formData).subscribe(function (res) { return _this.user; });
        this.presentAlert();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    // Alert de confirmation
    RegisterPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Authentification',
            subTitle: 'Utilisateur Bien ajouté',
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\register\register.html"*/'<div id="loginbox" style=" margin-top:10%;">            \n    <form id="loginform" class="form-vertical" (ngSubmit)="register()" #postForm="ngForm">\n        <div class="control-group normal_text"> <h3><img src="assets/img/logo.png" alt="Logo" /></h3></div>\n        <div class="control-group">\n          <div class="controls">\n              <div class="main_input_box">\n                <span class="add-on"><i class="icon-user"></i></span>\n                <input type="text" [(ngModel)]="user.firstname" placeholder="NOM" name="firstname" id="firstname"/>\n              </div>\n              <div class="main_input_box">\n                <span class="add-on"><i class="icon-user"></i></span>\n                <input type="text" [(ngModel)]="user.lastname" placeholder="PRENOM" name="lastname" id="lastname"/>\n              </div>\n          </div>\n        </div>\n        <div class="control-group">\n            <div class="controls">\n                <div class="main_input_box">\n                    <span class="add-on"><i class="icon-envelope"></i></span><input type="email" [(ngModel)]="user.email" placeholder="Email" name="email" id="email"/>\n                </div>\n            </div>\n        </div>\n        <div class="control-group">\n            <div class="controls">\n                <div class="main_input_box">\n                    <span class="add-on"><i class="icon-lock"></i></span><input type="password" [(ngModel)]="user.plainPassword" placeholder="mot de passe" name="mdp" id="mdp" />\n                </div>\n            </div>\n        </div>\n        <div class="form-actions">\n            <span class="pull-right"><input type="submit" class="btn btn-success" value="Enregistrer" [disabled]="!postForm.valid"></span>\n        </div>\n    </form>\n</div>\n  \n  '/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAddPageModule", function() { return DocumentAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_add__ = __webpack_require__(891);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentAddPageModule = /** @class */ (function () {
    function DocumentAddPageModule() {
    }
    DocumentAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__document_add__["a" /* DocumentAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__document_add__["a" /* DocumentAddPage */]),
            ],
        })
    ], DocumentAddPageModule);
    return DocumentAddPageModule;
}());

//# sourceMappingURL=document-add.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatAddPageModule", function() { return CandidatAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__candidat_add__ = __webpack_require__(488);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CandidatAddPageModule = /** @class */ (function () {
    function CandidatAddPageModule() {
    }
    CandidatAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__candidat_add__["a" /* CandidatAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__candidat_add__["a" /* CandidatAddPage */]),
            ],
        })
    ], CandidatAddPageModule);
    return CandidatAddPageModule;
}());

//# sourceMappingURL=candidat-add.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_candidat_candidat_model__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__candidats_candidats__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_ville_ville_model__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_experience_experience_model__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_specialite_specialite_model__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_niveauetude_niveauetude_model__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_titre_titre_model__ = __webpack_require__(897);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var CandidatAddPage = /** @class */ (function () {
    // constructeur
    function CandidatAddPage(securityprovider, navCtrl, navParams, restService, elem, toast, alertCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.elem = elem;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        //instanciation du class candidat
        this.candidat = new __WEBPACK_IMPORTED_MODULE_3__models_candidat_candidat_model__["a" /* Candidat */]();
        this.ville = new __WEBPACK_IMPORTED_MODULE_8__models_ville_ville_model__["a" /* Ville */]();
        this.experience = new __WEBPACK_IMPORTED_MODULE_9__models_experience_experience_model__["a" /* Experience */]();
        this.specialite = new __WEBPACK_IMPORTED_MODULE_10__models_specialite_specialite_model__["a" /* Specialite */]();
        this.niveauetude = new __WEBPACK_IMPORTED_MODULE_11__models_niveauetude_niveauetude_model__["a" /* NiveauEtude */]();
        this.titre = new __WEBPACK_IMPORTED_MODULE_12__models_titre_titre_model__["a" /* Titre */]();
        this.user = localStorage.getItem('user');
        this.user_info = localStorage.getItem('user_info');
    }
    CandidatAddPage_1 = CandidatAddPage;
    // la méthode qui permet l'envoi des donnee vers l'api rest
    CandidatAddPage.prototype.saveCandidat = function () {
        var _this = this;
        var file1 = this.elem.nativeElement.querySelector('#photo_can').files;
        var file2 = this.elem.nativeElement.querySelector('#cv_can').files;
        var photo = file1[0];
        var cv = file2[0];
        var formData = new FormData();
        formData.append('nom_candidat', this.candidat.nom_candidat);
        formData.append('prenom_candidat', this.candidat.prenom_candidat);
        formData.append('genre_candidat', this.candidat.genre_candidat);
        formData.append('photo_candidat', photo, this.candidat.photo_candidat);
        formData.append('ville', this.candidat.ville);
        formData.append('telephone_candidat', this.candidat.telephone_candidat);
        formData.append('email_candidat', this.candidat.email_candidat);
        formData.append('specialite', this.candidat.specialite);
        formData.append('niveau_etude', this.candidat.niveau_etude);
        formData.append('experience', this.candidat.experience);
        formData.append('titre', this.candidat.titre);
        formData.append('desc_candidat', this.candidat.desc_candidat);
        formData.append('cv_candidat', cv, this.candidat.cv_candidat);
        formData.append('user', this.user);
        this.restService.postCandidat(formData).subscribe(function (res) {
            _this.presentAlert();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__candidats_candidats__["a" /* CandidatsPage */]);
        });
    };
    // Popup de confirmation
    CandidatAddPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Candidat bien ajouté ',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__candidats_candidats__["a" /* CandidatsPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    CandidatAddPage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        });
    };
    CandidatAddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user_info = localStorage.getItem('user_info');
        //ville
        this.restService.getVilles().subscribe(function (data) {
            _this.villes = data;
            console.log(data);
        });
        //specialite
        this.restService.getSpecialites().subscribe(function (data) {
            _this.specialites = data;
            console.log(data);
        });
        //titre
        this.restService.getTitres().subscribe(function (data) {
            _this.titres = data;
            console.log(data);
        });
        //experience
        this.restService.getExperiences().subscribe(function (data) {
            _this.experiences = data;
            console.log(data);
        });
        //niveau d'etude
        this.restService.getNiveauEtude().subscribe(function (data) {
            _this.niveauEtude = data;
            console.log("niveau d'etude" + data);
        });
    };
    CandidatAddPage.prototype.reload_page = function () {
        this.navCtrl.setRoot(CandidatAddPage_1);
    };
    // ville -> la méthode qui permet l'envoi des donnee vers l'api rest
    CandidatAddPage.prototype.saveVille = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('libelle_ville', this.ville.libelle_ville);
        this.restService.postVille(formData).subscribe(function (res) {
            _this.presentAlert1();
            _this.navCtrl.setRoot(CandidatAddPage_1);
        });
    };
    // Popup de confirmation d'ajout d'une ville 
    CandidatAddPage.prototype.presentAlert1 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Ville bien ajoutée ',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(CandidatAddPage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    // Experience -> la méthode qui permet l'envoi des donnee vers l'api rest
    CandidatAddPage.prototype.saveExperience = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('libelle_experience', this.experience.libelle_experience);
        this.restService.postExperience(formData).subscribe(function (res) {
            _this.presentAlert2();
            _this.navCtrl.setRoot(CandidatAddPage_1);
        });
    };
    // Popup de confirmation
    CandidatAddPage.prototype.presentAlert2 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Experience bien ajoutée',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(CandidatAddPage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    // Specialite -> la méthode qui permet l'envoi des donnee vers l'api rest
    CandidatAddPage.prototype.saveSpecialite = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('libelle_specialite', this.specialite.libelle_specialite);
        this.restService.postSpecilaite(formData).subscribe(function (res) {
            _this.presentAlert3();
            _this.navCtrl.setRoot(CandidatAddPage_1);
        });
    };
    // Popup de confirmation
    CandidatAddPage.prototype.presentAlert3 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Spacialité bien ajoutée ',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(CandidatAddPage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    // Niveau Etude -> la méthode qui permet l'envoi des donnee vers l'api rest
    CandidatAddPage.prototype.saveNiveauEtude = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('libelle_NiveauEtude', this.niveauetude.libelle_NiveauEtude);
        this.restService.postNiveauetude(formData).subscribe(function (res) {
            _this.presentAlert4();
            _this.navCtrl.setRoot(CandidatAddPage_1);
        });
    };
    // Popup de confirmation
    CandidatAddPage.prototype.presentAlert4 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Niveau Etude bien ajouté ',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(CandidatAddPage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    // Titre -> la méthode qui permet l'envoi des donnee vers l'api rest
    CandidatAddPage.prototype.saveTitre = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('libelle_titre', this.titre.libelle_titre);
        this.restService.postTitres(formData).subscribe(function (res) {
            _this.presentAlert5();
            _this.navCtrl.setRoot(CandidatAddPage_1);
        });
    };
    // Popup de confirmation
    CandidatAddPage.prototype.presentAlert5 = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Titre bien ajouté ',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(CandidatAddPage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    CandidatAddPage = CandidatAddPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-candidat-add',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\candidat-add\candidat-add.html"*/'<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage">Recrute Sourcing</a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"><a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a><a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n  <!--close-top-Header-messaages--> \n  <div id="user-nav" class="navbar navbar-inverse">\n    <ul class="nav">\n      <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n      <li class=""><a title=""  (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n        <span class="text">Déconnexion</span></a></li>\n    </ul>\n  </div>\n  <!--close-top-Header-menu-->\n  <div id="sidebar">\n    <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n      <ul>\n        <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i><span>Accueil</span></a></li>\n        <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n        <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n        <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n        <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>\n        <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n      </ul>\n  </div>\n  <div id="content">\n    <div id="content-header">\n      <div id="breadcrumb"> <a href="" navPush="CandidatAddPage" title="Go to Home" class="tip-bottom"><i class="icon-user"></i> Ajouter un Candidat</a></div>\n    </div>\n    <div class="container-fluid">\n      <div class="row-fluid">\n        <div class="span12">\n          <div class="widget-box">\n            <div class="widget-title">\n              <span class="icon"><i class="icon-pencil"></i></span>\n              <h5>Ajouter un Candidat </h5>\n            </div>\n            <div class="widget-content nopadding">\n              <form id="form-wizard" class="form-horizontal" (ngSubmit)="saveCandidat()">\n                <div id="form-wizard-1" class="span6">\n                  <div class="control-group">\n                    <label class="control-label">Prénom : </label>\n                    <div class="controls">\n                      <input type="text"  name="prenom" [(ngModel)]="candidat.prenom_candidat" style="width: 96%"/>\n                    </div>\n                    <label class="control-label">Nom : </label>\n                    <div class="controls">\n                      <input type="text"  name="nom" [(ngModel)]="candidat.nom_candidat" style="width: 96%"/>\n                    </div>\n                    <label class="control-label">Genre : </label>\n                    <div class="controls">\n                      <select  name="genre" [(ngModel)]="candidat.genre_candidat" style="width: 100%">\n                        <option value="Homme">Homme</option>\n                        <option value="Femme">Femme</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class="control-group">\n                    <label class="control-label">Email : </label>\n                      <div class="controls">\n                        <input type="email"  name="email"  [(ngModel)]="candidat.email_candidat"  style="width: 96%"/>\n                      </div>\n                  </div>\n                  <div class="control-group">\n                    <label class="control-label">Téléphone : </label>\n                    <div class="controls">\n                      <input type="tel"  name="telephone" [(ngModel)]="candidat.telephone_candidat" style="width: 96%"/>\n                    </div>\n                  </div>\n                  <div class="control-group">\n                    <label class="control-label">Ville : </label>\n                      <div class="controls">\n                        <select name="ville" [(ngModel)]="candidat.ville" style="width: calc(100% - 35px)" >\n                          <option selected></option>\n                          <option value="{{ville.id}}" *ngFor="let ville of villes">\n                              {{ville.libelle_ville}} </option>\n                        </select>\n                        <button class="add-element-new" data-toggle="modal" data-target="#modal_ville" data-whatever="@mdo">\n                          <i class="icon icon-plus"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <div id="form-wizard-2" class="span6">\n                    <div class="control-group">\n                      <label class="control-label">Niveau d\'étude : </label>\n                        <div class="controls">\n                          <select name="netude"  [(ngModel)]="candidat.niveau_etude"style="width: calc(100% - 35px)" >\n                            <option selected></option>\n                            <option value="{{niveauEtude.id_niveauetude}}" *ngFor="let niveauEtude of niveauEtude">\n                                      {{niveauEtude.libelle__niveau_etude}} </option>\n                          </select>\n                          <button class="add-element-new" data-toggle="modal" data-target="#modal_etude" data-whatever="@mdo">\n                            <i class="icon icon-plus"></i>\n                          </button>\n                        </div>\n                    </div>\n                    <div class="control-group">\n                      <label class="control-label">Specialité : </label>\n                      <div class="controls">\n                          <select name="specialite"  [(ngModel)]="candidat.specialite" style="width: calc(100% - 35px)" >\n                            <option selected></option>\n                            <option value="{{specialite.id}}" *ngFor="let specialite of specialites">\n                                {{specialite.libelle_specialite}}</option>\n                          </select>\n                          <button class="add-element-new" data-toggle="modal" data-target="#modal_specialite" data-whatever="@mdo">\n                            <i class="icon icon-plus"></i>\n                          </button>\n                        </div>\n                    </div>\n                    <div class="control-group">\n                      <label class="control-label">Experience : </label>\n                      <div class="controls">\n                        <select name="experience"  [(ngModel)]="candidat.experience" style="width: calc(100% - 35px)">\n                          <option selected></option>\n                          <option value="{{experience.id_experience}}" *ngFor="let experience of experiences">\n                             {{experience.libelle_experience}} </option>\n                        </select>\n                        <button class="add-element-new" data-toggle="modal" data-target="#modal_experience" data-whatever="@mdo">\n                          <i class="icon icon-plus"></i>\n                        </button>\n                      </div>\n                    </div>\n                    <div class="control-group">\n                      <label class="control-label">Titre : </label>\n                      <div class="controls">\n                        <select name="titre" [(ngModel)]="candidat.titre" style="width: calc(100% - 35px)">\n                          <option selected></option>\n                          <option value="{{titre.id}}" *ngFor="let titre of titres">\n                              {{titre.libelle_titre}} </option>\n                        </select>\n                        <button class="add-element-new" data-toggle="modal" data-target="#modal_titre" data-whatever="@mdo">\n                          <i class="icon icon-plus"></i>\n                          </button>\n                      </div>\n                    </div>\n                    <div class="control-group">\n                      <label class="control-label">Déscription : </label>\n                      <div class="controls">\n                        <textarea  rows="2" name="desc" [(ngModel)]="candidat.desc_candidat"  style="width: 98%"></textarea>\n                      </div>\n                    </div>\n                    <div class="control-group">\n                      <label class="control-label">CV : </label>\n                        <div class="controls">\n                          <input type="file"  id="cv_can" name="cv_can"  [(ngModel)]="candidat.cv_candidat" style="width: 98%"/>\n                        </div>\n                    </div>\n                    <div class="control-group">\n                        <label class="control-label">Photo : </label>\n                        <div class="controls">\n                          <input type="file" id="photo_can"  name="photo_can"  [(ngModel)]=" candidat.photo_candidat" style="width: 98%"/>\n                        </div>\n                      </div>\n                  </div>\n                  <div class="form-actions">\n                    <input id="Retour" class="btn btn-primary" type="reset" value="Retour" />\n                    <input id="Suivant" class="btn btn-primary" type="submit" value="Suivant" />\n                    <div id="status"></div>\n                  </div>\n                  <div id="submitted"> </div>\n                </form>                                     \n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="modal fade" id="modal_ville" tabindex="-1" role="dialog" aria-labelledby="modal_ville" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" style="text-align: center">Ajouter une nouvelle ville</h5>\n            </div>\n            <div class="modal-body" style="text-align: center">\n              <form>\n                <div class="form-group">\n                  <label for="recipient-name" class="col-form-label">Libelle ville:</label>\n                  <input type="text" class="form-control" id="libelle_ville" name="libelle_ville" [(ngModel)]="ville.libelle_ville" placeholder="Libelle Ville">\n                </div>\n              </form>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-primary" data-dismiss="modal" (click)="reload_page()">Fermer</button>\n              <button type="button" class="btn btn-primary" (click)="saveVille()">Enregistrer</button>         \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="modal fade" id="modal_experience" tabindex="-1" role="dialog" aria-labelledby="modal_experience" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" style="text-align: center">Ajouter une nouvelle Experience</h5>\n            </div>\n            <div class="modal-body" style="text-align: center">\n              <form>\n                <div class="form-group">\n                  <label for="recipient-name" class="col-form-label">Libelle expérience:</label>\n                  <input type="text" class="form-control" id="libelle_experience" name="libelle_experience" [(ngModel)]="experience.libelle_experience" placeholder="Libelle Experience">\n                </div>\n              </form>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-primary" data-dismiss="modal" (click)="reload_page()">Fermer</button>\n              <button type="button" class="btn btn-primary" (click)="saveExperience()">Enregistrer</button>         \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="modal fade" id="modal_etude" tabindex="-1" role="dialog" aria-labelledby="modal_etude" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" style="text-align: center">Ajouter un niveau d\'étude</h5>\n            </div>\n            <div class="modal-body" style="text-align: center">\n              <form>\n                <div class="form-group">\n                  <label for="recipient-name" class="col-form-label">Libelle niveau d\'étude:</label>\n                  <input type="text" class="form-control" id="libelle_NiveauEtude" name="libelle_NiveauEtude" [(ngModel)]="niveauetude.libelle_NiveauEtude" placeholder="Libelle Etude">\n                </div>\n              </form>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-primary" data-dismiss="modal" (click)="reload_page()">Fermer</button>\n              <button type="button" class="btn btn-primary" (click)="saveNiveauEtude()">Enregistrer</button>         \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="modal fade" id="modal_titre" tabindex="-1" role="dialog" aria-labelledby="modal_titre" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" style="text-align: center">Ajouter un nouveau titre</h5>\n                  </div>\n                  <div class="modal-body" style="text-align: center">\n                    <form>\n                      <div class="form-group">\n                        <label for="recipient-name" class="col-form-label">Libelle titre:</label>\n                        <input type="text" class="form-control" id="libelle_titre" name="libelle_titre" [(ngModel)]="titre.libelle_titre" placeholder="Libelle Titre">\n                      </div>\n                    </form>\n                  </div>\n                  <div class="modal-footer">\n                      <button type="button" class="btn btn-primary" data-dismiss="modal" (click)="reload_page()">Fermer</button>\n                      <button type="button" class="btn btn-primary" (click)="saveTitre()">Enregistrer</button>         \n                  </div>\n          </div>\n        </div>\n      </div>\n      <div class="modal fade" id="modal_specialite" tabindex="-1" role="dialog" aria-labelledby="modal_specialite" aria-hidden="true">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title" style="text-align: center">Ajouter une nouvelle Specialité</h5>\n            </div>\n            <div class="modal-body" style="text-align: center">\n              <form>\n                <div class="form-group">\n                  <label for="recipient-name" class="col-form-label"> Libelle specialité:</label>\n                  <input type="text" class="form-control" id="libelle_specialite" name="libelle_specialite" [(ngModel)]="specialite.libelle_specialite" placeholder="Libelle Specialité">\n                </div>\n              </form>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-primary" data-dismiss="modal" (click)="reload_page()">Fermer</button>\n              <button type="button" class="btn btn-primary" (click)="saveSpecialite()">Enregistrer</button>         \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="row-fluid">\n        <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n      </div>\n  </div>\n'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\candidat-add\candidat-add.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__["a" /* CandidatProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CandidatAddPage);
    return CandidatAddPage;
    var CandidatAddPage_1;
}());

//# sourceMappingURL=candidat-add.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatsPageModule", function() { return CandidatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__candidats__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CandidatsPageModule = /** @class */ (function () {
    function CandidatsPageModule() {
    }
    CandidatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__candidats__["a" /* CandidatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__candidats__["a" /* CandidatsPage */]),
            ],
        })
    ], CandidatsPageModule);
    return CandidatsPageModule;
}());

//# sourceMappingURL=candidats.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecrutePageModule", function() { return RecrutePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recrute__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecrutePageModule = /** @class */ (function () {
    function RecrutePageModule() {
    }
    RecrutePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recrute__["a" /* RecrutePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recrute__["a" /* RecrutePage */]),
            ],
        })
    ], RecrutePageModule);
    return RecrutePageModule;
}());

//# sourceMappingURL=recrute.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function() { return DocumentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documents__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentsPageModule = /** @class */ (function () {
    function DocumentsPageModule() {
    }
    DocumentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__documents__["a" /* DocumentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__documents__["a" /* DocumentsPage */]),
            ],
        })
    ], DocumentsPageModule);
    return DocumentsPageModule;
}());

//# sourceMappingURL=documents.module.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(539);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_candidat_candidat__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_document_document__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_recherche_recherche__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_documents_documents__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_recherche_recherche__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_candidats_candidats__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_rapports_rapports__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_documents_documents_module__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_recherche_recherche_module__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_candidats_candidats_module__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_rapports_rapports_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_toast_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_candidat_add_candidat_add__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_candidat_add_candidat_add_module__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_candidat_details_candidat_details_module__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_document_add_document_add_module__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_pagination_pagination__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_document_edit_document_edit_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_opener__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_candidat_file_uploader_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_recrute_recrute_module__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_recrute_recrute__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_email_composer__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_charts_ng2_charts__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_selection_selection__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_recrute_recrute__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_toast__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_recrute_edit_recrute_edit__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_recrute_edit_recrute_edit_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_platform_browser_animations__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_etat_etat_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_etat_etat__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_selection_edit_selection_edit__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_selection_edit_selection_edit_module__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_recrute_message_recrute_message_module__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_recrute_message_recrute_message__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































//import { IonicImageViewerModule } from 'ionic-img-viewer';


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/candidat-details/candidat-details.module#CandidatDetailsPageModule', name: 'CandidatDetailsPage', segment: 'candidat-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/etat/etat.module#EtatPageModule', name: 'EtatPage', segment: 'etat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/footer/footer.module#FooterPageModule', name: 'FooterPage', segment: 'footer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document-edit/document-edit.module#DocumentEditPageModule', name: 'DocumentEditPage', segment: 'document-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rapports/rapports.module#RapportsPageModule', name: 'RapportsPage', segment: 'rapports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/header/header.module#HeaderPageModule', name: 'HeaderPage', segment: 'header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recrute-edit/recrute-edit.module#RecruteEditPageModule', name: 'RecruteEditPage', segment: 'recrute-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recrute-message/recrute-message.module#RecruteMessagePageModule', name: 'RecruteMessagePage', segment: 'recrute-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recherche/recherche.module#RecherchePageModule', name: 'RecherchePage', segment: 'recherche', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selection-edit/selection-edit.module#SelectionEditPageModule', name: 'SelectionEditPage', segment: 'selection-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/document-add/document-add.module#DocumentAddPageModule', name: 'DocumentAddPage', segment: 'document-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/candidat-add/candidat-add.module#CandidatAddPageModule', name: 'CandidatAddPage', segment: 'candidat-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/candidats/candidats.module#CandidatsPageModule', name: 'CandidatsPage', segment: 'candidats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recrute/recrute.module#RecrutePageModule', name: 'RecrutePage', segment: 'recrute', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documents/documents.module#DocumentsPageModule', name: 'DocumentsPage', segment: 'documents', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_45__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_documents_documents_module__["DocumentsPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_recrute_recrute_module__["RecrutePageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_recherche_recherche_module__["RecherchePageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_candidats_candidats_module__["CandidatsPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_rapports_rapports_module__["RapportsPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_candidat_add_candidat_add_module__["CandidatAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_candidat_details_candidat_details_module__["CandidatDetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_document_add_document_add_module__["DocumentAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_document_edit_document_edit_module__["DocumentEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_recrute_edit_recrute_edit_module__["RecruteEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_38_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_etat_etat_module__["EtatPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_selection_edit_selection_edit_module__["SelectionEditPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_recrute_message_recrute_message_module__["RecruteMessagePageModule"]
                //IonicPageModule.forChild(RapportsPage)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_documents_documents__["a" /* DocumentsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_recherche_recherche__["a" /* RecherchePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_candidats_candidats__["a" /* CandidatsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rapports_rapports__["a" /* RapportsPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_recrute_recrute__["a" /* RecrutePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_candidat_add_candidat_add__["a" /* CandidatAddPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_recrute_recrute__["a" /* RecrutePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_recrute_edit_recrute_edit__["a" /* RecruteEditPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_etat_etat__["a" /* EtatPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_selection_edit_selection_edit__["a" /* SelectionEditPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_recrute_message_recrute_message__["a" /* RecruteMessagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_candidat_candidat__["a" /* CandidatProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_document_document__["a" /* DocumentProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_recherche_recherche__["a" /* RechercheProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_pagination_pagination__["a" /* PaginationProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_securite_securite__["a" /* SecuriteProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_candidat_file_uploader_service__["a" /* FileUploaderService */],
                __WEBPACK_IMPORTED_MODULE_24__providers_toast_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_40__providers_selection_selection__["a" /* SelectionProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_recrute_recrute__["a" /* RecruteProvider */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecruteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RecruteProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RecruteProvider = /** @class */ (function () {
    function RecruteProvider(_httpClient) {
        this._httpClient = _httpClient;
        this.url = "http://localhost:8000/";
    }
    //la method qui permet la recupuration des etats de recrutement
    RecruteProvider.prototype.getEtat = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "etats/" + user, { headers: headers });
    };
    //la method qui permet la recupuration des recrutement enregidtree
    RecruteProvider.prototype.getRecrute = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "recrutes/" + user, { headers: headers });
    };
    //la method post pour Ajouter un processus de recrutement
    RecruteProvider.prototype.postEtat = function (etat) {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.post(this.url + "etats", etat, { headers: headers });
    };
    //la method post pour Ajouter un recrutement
    RecruteProvider.prototype.postSelection = function (selection) {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.post(this.url + "recrutes", selection, { headers: headers });
    };
    //la method post pour Ajouter un recrutement
    RecruteProvider.prototype.postSelectionEdit = function (selection) {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.post(this.url + "recrutes/edit", selection, { headers: headers });
    };
    // la method pour modifier les donnee d'une etat
    RecruteProvider.prototype.updateEtat = function (etat, id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.put(this.url + "etats/" + id, etat, { headers: headers });
    };
    //la method qui permet la supprission  d'une etat
    RecruteProvider.prototype.deleteEtat = function (id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.delete(this.url + "etats/" + id, { headers: headers });
    };
    // la method pour modifier les donnee d'un recrutement
    RecruteProvider.prototype.updateSelection = function (recrute) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.put(this.url + "recrutes/" + recrute.id, recrute, { headers: headers });
    };
    //la method qui permet la supprission  d'un recrutement
    RecruteProvider.prototype.deleteSelection = function (id) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.delete(this.url + "recrutes/" + id, { headers: headers });
    };
    RecruteProvider.prototype.getFirstEtat = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.get(this.url + "etats/first/" + user, { headers: headers });
    };
    //filtrage tables
    RecruteProvider.prototype.filterItems = function (searchTerm) {
        var items = this.getRecrute();
        return items.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    RecruteProvider.prototype.getSearch = function (titre) {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('user');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        // let options = new RequestOptions({ headers:headers});
        return this._httpClient.get(this.url + "recrutes/search/" + titre, { headers: headers });
    };
    //la method post pour Ajouter un processus de recrutement
    RecruteProvider.prototype.postEmail = function (email) {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('X-Auth-Token', token);
        return this._httpClient.post(this.url + "recrutes/email", email, { headers: headers });
    };
    RecruteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RecruteProvider);
    return RecruteProvider;
}());

//# sourceMappingURL=recrute.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__candidats_candidats__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_candidat_file_uploader_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CandidatDetailsPage = /** @class */ (function () {
    function CandidatDetailsPage(securityprovider, navCtrl, navParams, restService, elem, toast, fileUploader, alertCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.elem = elem;
        this.toast = toast;
        this.fileUploader = fileUploader;
        this.alertCtrl = alertCtrl;
        this.desc = [];
        this.candidat = this.navParams.get('candidat');
        //this.comp = this.candidat.competence.libelle_competence.split(' ');
        this.desc = this.candidat.desc_candidat.split(' ');
    }
    //La fonction qui permet la modification d'un candidat
    CandidatDetailsPage.prototype.editCandidat = function () {
        var _this = this;
        console.log(this.candidat);
        this.restService.updateCandidat(this.candidat).subscribe(function (successCode) {
            _this.candidat[''] = successCode;
            _this.presentAlert();
            _this.restService.getCandidat();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__candidats_candidats__["a" /* CandidatsPage */]);
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    // la methode qui permet l'envoi des donnee vers l'api rest
    CandidatDetailsPage.prototype.updateImage = function () {
        var _this = this;
        var files = this.elem.nativeElement.querySelector('#selectFile').files;
        var formData = new FormData();
        var file = files[0];
        //let file1 = files[1];
        formData.append('selectFile', file, file.name);
        formData.append('id', this.candidat.id);
        this.fileUploader.uploadImageupdate(formData).subscribe(function (res) {
            _this.presentAlert1();
        });
        this.presentAlert1();
    };
    CandidatDetailsPage.prototype.updateCV = function () {
        var _this = this;
        var files = this.elem.nativeElement.querySelector('#cv').files;
        var formData = new FormData();
        var file = files[0];
        formData.append('cv', file, file.name);
        formData.append('id', this.candidat.id);
        this.fileUploader.uploadcvupdate(formData).subscribe(function (res) {
            _this.presentAlert1();
        });
        this.presentAlert1();
    };
    // Popup de confirmation
    CandidatDetailsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Candidat modifié avec succès',
            buttons: ['Ok']
        });
        alert.present();
    };
    // Popup de confirmation
    CandidatDetailsPage.prototype.presentAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Bien édité',
            buttons: ['Ok']
        });
        alert.present();
    };
    CandidatDetailsPage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        });
    };
    CandidatDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user_info = localStorage.getItem('user_info');
        //ville
        this.restService.getVilles().subscribe(function (data) {
            _this.villes = data;
            console.log(data);
        });
        //specialite
        this.restService.getSpecialites().subscribe(function (data) {
            _this.specialites = data;
            console.log(data);
        });
        //titre
        this.restService.getTitres().subscribe(function (data) {
            _this.titres = data;
            console.log(data);
        });
        //experience
        this.restService.getExperiences().subscribe(function (data) {
            _this.experiences = data;
            console.log(data);
        });
        //niveau d'etude
        this.restService.getNiveauEtude().subscribe(function (data) {
            _this.niveauEtude = data;
            console.log("niveau d'etude" + data);
        });
    };
    CandidatDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-candidat-details',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\candidat-details\candidat-details.html"*/'<ion-content>\n<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage">Recrute Sourcing</a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n<div id="user-nav" class="navbar navbar-inverse">\n  <ul class="nav">\n    <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n    <li class=""><a title=""  (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n        <span class="text">Déconnexion</span></a>\n    </li>\n  </ul>\n</div>\n<!--close-top-Header-menu-->\n<div id="sidebar">\n  <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n    <ul>\n      <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i><span>Accueil</span></a></li>\n      <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n      <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n      <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n      <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>\n      <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n    </ul>\n</div>\n<div id="content">\n  <div id="content-header">\n    <div id="breadcrumb"> <a href="" navPush="CandidatsPage" title="Go to CandidatsPage" class="tip-bottom"><i class="icon-user"></i>Candidat détails</a></div>\n  </div>\n  <div class="container-fluid">\n    <section style="padding-bottom: 50px; padding-top: 50px;">\n      <div class="row-fluid">\n        <div class="span4">\n          <img src="http://rs.creativetag.ma/web/assets/{{candidat.photo_candidat}}" class="img-rounded img-responsive" style="width:400px;height: 400px;"/>\n          <br />\n          <label for="file" class="label-file">Choisir une image</label>  \n          <input type="file" id="selectFile"  name="selectFile" class="input-file" />\n          <button (click)="updateImage()"><i class="icon icon-upload"></i></button>\n          <br />\n          <div class="alert alert-info">\n            <h2>{{candidat.nom_candidat}} {{candidat.prenom_candidat}}</h2>\n              <h4>{{candidat.titre.libelle_titre}}</h4>\n                <p>{{candidat.specialite.libelle_specialite}} </p>\n          </div>\n          <div >\n            <a  class="btn btn-social btn-facebook" *ngFor="let c of comp" >\n               &nbsp;  {{c}}</a>\n          </div>\n          <br /><br/>\n        </div>\n        <form id="form-wizard" class="form-horizontal" (ngSubmit)="editCandidat()">\n          <div class="span4">\n            <div id="form-wizard-1" class="step">\n              <div class="control-group">\n                <label class="control-label">Prénom : </label>\n                <div class="controls">\n                  <input type="text"  name="prenom" [(ngModel)]="candidat.prenom_candidat" style="width: 96%"/>\n                </div>\n                <label class="control-label">Nom : </label>\n                  <div class="controls">\n                    <input type="text"  name="nom" [(ngModel)]="candidat.nom_candidat" style="width: 96%"/>\n                  </div>\n                  <label class="control-label">Genre : </label>\n                  <div class="controls">\n                    <select  name="genre" [(ngModel)]="candidat.genre_candidat" style="width: 100%">\n                      <option value="Homme">Homme</option>\n                      <option value="Femme">Femme</option>\n                    </select>\n                  </div>\n                </div>\n                <div class="control-group">\n                  <label class="control-label">Email : </label>\n                    <div class="controls">\n                      <input type="email"  name="email"  [(ngModel)]="candidat.email_candidat"  style="width: 96%"   />\n                    </div>\n                </div>\n                <div class="control-group">\n                  <label class="control-label">Téléphone : </label>\n                    <div class="controls">\n                      <input type="tel"  name="telephone" [(ngModel)]="candidat.telephone_candidat" style="width: 96%"   />\n                    </div>\n                </div>\n                <div class="control-group">\n                            <label class="control-label">Ville : </label>\n                              <div class="controls">\n                                <select   name="ville"  [(ngModel)]="candidat.ville" style="width: 100%">\n                                  <option selected></option>\n                                  <option value="{{ville.id}}" *ngFor="let ville of villes">\n                                                  {{ville.libelle_ville}}\n                                  </option>\n                                </select>\n                               </div>\n                            </div>\n                          </div>\n                        </div>\n                <div class="span4">\n                        <div id="form-wizard-2" class="step">\n                            <div class="control-group">\n                                <label class="control-label">Niveau détude : </label>\n                                <div class="controls">\n                                  <select   name="netude"  [(ngModel)]="candidat.niveau_etude" style="width: 100%">\n                                    <option selected></option>\n                                    <option value="{{niveauEtude.id_niveauetude}}" *ngFor="let niveauEtude of niveauEtude">\n                                          {{niveauEtude.libelle__niveau_etude}}\n                                        </option>\n                                  </select>\n                                </div>\n                            </div>\n                            <div class="control-group">\n                                <label class="control-label">Specialité : </label>\n                                <div class="controls">\n                                  <select   name="specialite"  [(ngModel)]="candidat.specialite" style="width: 100%" >\n                                    <option selected></option>\n                                    <option value="{{specialite.id}}" *ngFor="let specialite of specialites">\n                                          {{specialite.libelle_specialite}}\n                                    </option>\n                                  </select>\n                                </div>\n                            </div>\n                            <div class="control-group">\n                                <label class="control-label">Experience : </label>\n                                <div class="controls">\n                                  <select   name="experience"  [(ngModel)]="candidat.experience" style="width: 100%" >\n                                    <option selected></option>\n                                    <option value="{{experience.id_experience}}" *ngFor="let experience of experiences">\n                                          {{experience.libelle_experience}}\n                                    </option>\n                                  </select>\n                                </div>\n                            </div>\n                            <div class="control-group">\n                                <label class="control-label">Titre : </label>\n                                <div class="controls">\n                                  <select   name="titre" [(ngModel)]="candidat.titre" style="width: 100%" >\n                                    <option selected></option>\n                                    <option value="{{titre.id}}"\n                                        *ngFor="let titre of titres">\n                                          {{titre.libelle_titre}}\n                                    </option>\n                                  </select>\n                                </div>\n                            </div>\n                            <div class="control-group">\n                                <label class="control-label">Déscription</label>\n                                  <div class="controls">\n                                    <textarea  rows="2" name="desc" [(ngModel)]="candidat.desc_candidat"    ></textarea>\n                                  </div>\n                            </div>\n                             <div class="form-actions">\n                                <input id="back" class="btn btn-primary" type="reset" value="Annuler" />\n                                <input id="next" class="btn btn-primary" type="submit" value="Valider" />\n                                <div id="status"></div>\n                             </div>\n                              <div id="submitted"></div>\n                                <a href="http://localhost/fm_api/web/bundles/{{candidat.cv_candidat}}">{{candidat.cv_candidat}}</a>\n                                  <label for="file" class="label-file">Choisir un fichier</label>  \n                                  <input type="file" id="cv"  name="cv" class="input-file" />\n                                  <a (click)="updateCV()"><i class="icon icon-upload"></i></a>\n                              </div>\n                    </div>\n                </form>\n            </div>\n            <div class="row-fluid">\n                    <div class="span4"></div>\n            </div>\n            <!-- ROW END -->\n        </section>\n        <!-- SECTION END -->\n    </div>\n    <!-- CONATINER END -->\n      <div class="row-fluid">\n      <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n    </div>\n  </div>\n</ion-content>  '/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\candidat-details\candidat-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__["a" /* CandidatProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_candidat_file_uploader_service__["a" /* FileUploaderService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CandidatDetailsPage);
    return CandidatDetailsPage;
}());

//# sourceMappingURL=candidat-details.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationProvider = /** @class */ (function () {
    function PaginationProvider(http) {
        this.http = http;
        console.log('Hello PaginationProvider Provider');
    }
    PaginationProvider.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 6; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_2_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PaginationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PaginationProvider);
    return PaginationProvider;
}());

//# sourceMappingURL=pagination.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecrutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_recrute_recrute__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_selection_etat_model__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_selection_selection_model__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recrute_edit_recrute_edit__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rapports_rapports__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_pagination_pagination__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection_edit_selection_edit__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var RecrutePage = /** @class */ (function () {
    function RecrutePage(securityprovider, navCtrl, navParams, candidatProvider, recruteProvider, toast, pagerService, alertCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.candidatProvider = candidatProvider;
        this.recruteProvider = recruteProvider;
        this.toast = toast;
        this.pagerService = pagerService;
        this.alertCtrl = alertCtrl;
        this.pager = {};
        this.searchTerm = '';
        this.search = '';
        this.etat = new __WEBPACK_IMPORTED_MODULE_7__models_selection_etat_model__["a" /* Etat */]();
        this.selection = new __WEBPACK_IMPORTED_MODULE_8__models_selection_selection_model__["a" /* Selection */]();
        this.user = localStorage.getItem('user');
        this.id_selection = this.navParams.get('selectid');
        this.cbChecked = [];
    }
    RecrutePage_1 = RecrutePage;
    RecrutePage.prototype.ngOnInit = function () {
        var _this = this;
        this.user_info = localStorage.getItem('user_info');
        this.candidatProvider.getAllCandidat().subscribe(function (data) {
            _this.candidats = data;
            console.log('my candidats' + data);
        });
        this.recruteProvider.getEtat().subscribe(function (data) {
            _this.etats = data;
            console.log('my etat' + data);
        });
        this.recruteProvider.getRecrute().subscribe(function (data) {
            _this.selections = data;
            _this.setPage(1);
            console.log('my recrute' + data);
        });
    };
    RecrutePage.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.selections.length, page);
        // get current page of items
        this.pagedItems = this.selections.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    RecrutePage.prototype.Search = function () {
        var _this = this;
        this.recruteProvider.getSearch(this.search).subscribe(function (data) {
            _this.recruteProvider.getRecrute();
            _this.selections = data;
            _this.setPage(1);
            console.log(data);
        });
    };
    RecrutePage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    RecrutePage.prototype.ajoutEtat = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('ordre_etat', this.etat.ordre_etat);
        formData.append('libelle_etat', this.etat.libelle_etat);
        formData.append('user', this.user);
        this.recruteProvider.postEtat(formData).subscribe(function (res) {
            if (res >= 0) {
                _this.presentAlert();
            }
            else {
                _this.presentAlert1();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__rapports_rapports__["a" /* RapportsPage */]);
            }
        });
    };
    RecrutePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Cet élément déjà existe',
            buttons: ['Ok']
        });
        alert.present();
    };
    RecrutePage.prototype.presentAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Nouvel état a été ajouter avec success',
            buttons: ['Ok']
        });
        alert.present();
    };
    RecrutePage.prototype.addSelection = function () {
        var _this = this;
        var formData = new FormData();
        var date_today = new Date();
        formData.append('date_selection', "" + date_today);
        formData.append('etat', this.selection.etat);
        formData.append('candidat', this.selection.candidat);
        formData.append('user', this.user);
        this.recruteProvider.postSelection(formData).subscribe(function (res) {
            _this.selection;
            _this.toast.presentToast("Un recrutement a été bien Ajouté !!");
            _this.navCtrl.setRoot(RecrutePage_1);
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
    };
    //method de supprission
    RecrutePage.prototype.deleteEtat = function (id) {
        this.recruteProvider.deleteEtat(id);
        this.navCtrl.push(RecrutePage_1);
    };
    RecrutePage.prototype.presentAlert3 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Etat supprimé avec success',
            buttons: ['Ok']
        });
        alert.present();
    };
    RecrutePage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confiration',
            message: 'Voulez-vous Supprimer cet état ??',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'Annuler',
                    handler: function () {
                        console.log('Annuler clicked');
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.recruteProvider.deleteEtat(id).subscribe(function (data) {
                            _this.recruteProvider.getEtat();
                        });
                        _this.recruteProvider.getEtat();
                        _this.presentAlert3();
                        _this.recruteProvider.getEtat();
                        _this.navCtrl.push(RecrutePage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    //method de supprission
    RecrutePage.prototype.deleteRecrute = function (id) {
        this.presentConfirm2(id);
        this.navCtrl.push(RecrutePage_1);
        this.navCtrl.setRoot(RecrutePage_1);
    };
    RecrutePage.prototype.presentConfirm2 = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confiration',
            message: 'Voulez-vous Supprimer ce recrutement??',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'Annuler',
                    handler: function () {
                        console.log('Annuler clicked');
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.recruteProvider.deleteSelection(id)
                            .subscribe(function (data) {
                            _this.presentAlert4();
                            _this.navCtrl.push(RecrutePage_1);
                            _this.recruteProvider.getRecrute();
                        }, function (err) {
                            _this.presentAlert5();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    RecrutePage.prototype.presentAlert4 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Recrutement supprimé avec success',
            buttons: ['Ok']
        });
        alert.present();
    };
    RecrutePage.prototype.presentAlert5 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Error 404',
            buttons: ['Ok']
        });
        alert.present();
    };
    RecrutePage.prototype.updateRecrute = function (selection) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__recrute_edit_recrute_edit__["a" /* RecruteEditPage */]);
    };
    RecrutePage.prototype.afficherEtat = function () {
        var x = document.getElementById("afficheretat");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
    };
    RecrutePage.prototype.presentAlert6 = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Aucun "élément selectionner',
            buttons: ['Ok']
        });
        alert.present();
    };
    RecrutePage.prototype.editerRecrute = function (mys) {
        var element = document.getElementById("checki");
        var cmp = 0;
        window.alert(mys.etat.libelle_etat);
        for (var index = 0; index < mys.length; index++) {
            var ele = mys[index];
            if (element.checked) {
                cmp = cmp + 1;
            }
            else {
                this.presentAlert6();
            }
        }
    };
    RecrutePage.prototype.afficher = function (chBox, event) {
        var x = document.getElementById("recr");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        var cbIdx = this.cbChecked.indexOf(chBox);
        if (event.target.checked) {
            if (cbIdx < 0) {
                this.cbChecked.push(chBox);
                console.log(chBox);
            }
        }
        else {
            if (cbIdx >= 0) {
                this.cbChecked.splice(cbIdx, 1);
                console.log(cbIdx);
            }
        }
    };
    RecrutePage.prototype.editSelection = function () {
        //inthe method is just fpor the redirection
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__selection_edit_selection_edit__["a" /* SelectionEditPage */], { cbChecked: this.cbChecked });
    };
    RecrutePage.prototype.sendemail = function () {
        var _this = this;
        var formData = new FormData();
        for (var index = 0; index < this.cbChecked.length; index++) {
            var element = this.cbChecked[index]['candidat']['email_candidat'];
            formData.append('to', element);
            formData.append('subject', this.sujet);
            formData.append('message', this.message);
            this.recruteProvider.postEmail(formData).subscribe(function (data) {
                _this.presentAlertMessage();
                console.log('my msg' + data);
            });
        }
    };
    RecrutePage.prototype.reload_page = function () {
        this.presentAlertMessage();
    };
    RecrutePage.prototype.presentAlertMessage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Votre message à été envoyé',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.setRoot(RecrutePage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sujet'),
        __metadata("design:type", Object)
    ], RecrutePage.prototype, "sujet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('message'),
        __metadata("design:type", Object)
    ], RecrutePage.prototype, "message", void 0);
    RecrutePage = RecrutePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recrute',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\recrute\recrute.html"*/'<ion-content>\n<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage"></a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n<div id="user-nav" class="navbar navbar-inverse">\n  <ul class="nav">\n    <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n    <li class=""><a title="" href="" (click)="deconnexion()"><i class="icon icon-share-alt"></i><span class="text">Déconnexion</span></a></li>\n  </ul>\n</div>\n<!--close-top-Header-menu-->\n  <div id="sidebar">\n    <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n      <ul>\n        <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i> <span>Accueil</span></a> </li>\n        <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n        <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>  \n        <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n        <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n        <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n      </ul>\n  </div>\n  <div id="content">\n    <div id="content-header">\n      <div id="breadcrumb"> <a href="" navPush="RecrutePage" title="recrutement page" class="tip-bottom"><i class="icon-briefcase"></i> Recrutement</a></div>\n    </div>\n    <!-- Page Content -->\n    <div class="container-fluid">\n      <div class="row-fluid">\n        <div class="span12">\n          <button type="button" class="btn btn-primary btn-recrute" navPush="EtatPage" style="position: absolute; right: 0;\n                      border:none; background-color:#49CCED; margin: 10px 20px 0 0;"><i class="icon-check">\n                      </i> VOIR PROCESSUS DE RECRUTEMENT<i class="icon-chevron-right"></i>\n          </button>\n        </div>\n      </div>\n      <div class="row-fluid">\n       <div class="span12">\n        <div class="widget-box">\n          <div class="widget-title"><span class="icon"><i class="icon-th"></i></span>\n            <h5>Historique du recrutement</h5>\n          </div>\n          <div class="widget-content" style="padding: 12px 0">\n            <div class="controls">\n              <input type="text" class="span11" placeholder="Recherche..." [(ngModel)]="search" name="search" (input)="Search()" style="width: 100%; margin: 10px 0 15px;">\n            </div>\n            <div class="row-fluid">\n              <div class="span12" id="recr" style="display: none; margin: 0px 0 10px 0;">\n                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" \n                                    (click)="editSelection()">\n                  <i class="icon-user"></i> \n                </button>\n                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal22" data-whatever="@mdo"\n                                    (click)="sendemail()">\n                  <i class="icon-envelope"></i>\n                </button>\n              </div>\n              </div>\n              <table class="table table-bordered table-striped with-check table-recture1">\n                <thead>\n                        <tr>\n                          <th>#</th>\n                          <th>Prenom</th>\n                          <th>Nom</th>\n                          <th>Etat</th>\n                          <th>Date de selection</th>\n                        </tr>\n                </thead>\n                      <tbody>\n                        <tr *ngFor="let selection of pagedItems">\n                          <td>\n                              <div class="checkbox-element" style="margin: -5px 0 0 5px;">\n                                  <input type="checkbox" name="options" id="1-{{selection.candidat.id}}" value="{{selection}}"\n                                  [checked]="cbChecked.indexOf(selection) >= 0"\n                                  (change)="afficher(selection, $event)"/>\n                                  <label for="1-{{selection.candidat.id}}"></label>\n                                </div> \n                            </td>\n                          <td>{{selection.candidat.prenom_candidat}}</td>\n                          <td>{{selection.candidat.nom_candidat}}</td>\n                          <td>{{selection.etat.libelle_etat}}</td>\n                          <td>{{selection.date_selection}}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <table class="table table-bordered table-striped with-check table-recture2" style="width: 100%">\n                      <thead style="width: 100%">\n                        <tr style="width: 100%">\n                          <th style="width: 10%">#</th>\n                          <th style="width: 45%">Prénom<br>Nom</th>\n                          <th style="width: 45%">Etat<br>Date</th>\n                        </tr>\n                      </thead>\n                      <tbody style="width: 100%">\n                        <tr *ngFor="let selection of pagedItems" style="width: 100%">\n                          <td style="width: 10%">\n                              <div class="checkbox-element" style="margin: -5px 0 0 5px;">\n                                  <input type="checkbox" name="options" id="2-{{selection.candidat.id}}" value="{{selection}}"\n                                  [checked]="cbChecked.indexOf(selection) >= 0"\n                                  (change)="afficher(selection, $event)"/>\n                                  <label for="2-{{selection.candidat.id}}"></label>\n                                </div> \n                            </td>\n                          <td style="width: 45%">{{selection.candidat.prenom_candidat}}<br>\n                          {{selection.candidat.nom_candidat}}</td>\n                          <td style="width: 45%">{{selection.etat.libelle_etat}}<br>\n                          {{selection.date_selection}}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n<div class="pagination alternate">\n<!-- Pagination -->\n<!-- pager -->\n  <ul *ngIf="pager.pages && pager.pages.length" class="pagination">\n    <li [ngClass]="{disabled:pager.currentPage === 1}">\n      <a (click)="setPage(1)">&#x3C;&#x3C;</a>\n    </li>\n    <li [ngClass]="{disabled:pager.currentPage === 1}">\n      <a (click)="setPage(pager.currentPage - 1)"> &#x3C; </a>\n    </li>\n    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}">\n      <a (click)="setPage(page)">{{page}}</a>\n    </li>\n    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">\n      <a (click)="setPage(pager.currentPage + 1)">></a>\n    </li>\n    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">\n      <a (click)="setPage(pager.totalPages)"> >> </a>\n    </li>\n  </ul>\n    </div>\n    </div>\n    </div>\n    </div>\n    </div>\n    </div>\n    </div>\n         <div class="modal fade" id="exampleModal22" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel22" aria-hidden="true">\n          <div class="modal-dialog" role="document">\n            <div class="modal-content">\n              <div class="modal-header">\n                <h5 class="modal-title" id="exampleModalLabel22" style="text-align: center">Nouveau message</h5>\n              </div>\n              <div class="modal-body" style="text-align: center">\n                <form>\n                  <div class="form-group">\n                    <label for="recipient-name" class="col-form-label">Objet:</label>\n                    <input type="text" class="form-control" id="recipient-name" name="sujet" [(ngModel)]="sujet">\n                  </div>\n                  <div class="form-group">\n                    <label for="message-text" class="col-form-label">Message:</label>\n                    <textarea class="form-control" id="message-text" name="message" [(ngModel)]="message"></textarea>\n                  </div>\n                </form>\n              </div>\n              <div class="modal-footer">\n                  <button type="button" class="btn btn-primary" data-dismiss="modal" (click)="reload_page()">Fermer</button>\n                  <button type="button" class="btn btn-primary" (click)="sendemail()">Envoyer message</button>         \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="row-fluid">\n          <div id="footer" class="span12"> 2018 &copy; RS.<a>www.RecruteSourcing.fr</a></div>\n        </div>\n</ion-content> '/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\recrute\recrute.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__["a" /* CandidatProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_recrute_recrute__["a" /* RecruteProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_pagination_pagination__["a" /* PaginationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RecrutePage);
    return RecrutePage;
    var RecrutePage_1;
}());

//# sourceMappingURL=recrute.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_document_document_model__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_document_document__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents_documents__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_candidat_candidat__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DocumentEditPage = /** @class */ (function () {
    function DocumentEditPage(securityprovider, navCtrl, navParams, documentProvider, candidatProvider, alertCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentProvider = documentProvider;
        this.candidatProvider = candidatProvider;
        this.alertCtrl = alertCtrl;
        //instances des classes
        this.document = new __WEBPACK_IMPORTED_MODULE_2__models_document_document_model__["a" /* Document */];
        this.document = this.navParams.get('document');
        this.user = localStorage.getItem('user');
        this.user_info = localStorage.getItem('user_info');
    }
    DocumentEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.candidatProvider.getCandidat().subscribe(function (data) {
            _this.candidats = data;
            console.log('my Documents' + data);
        });
    };
    //popup d'alert
    DocumentEditPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Document modifier avec success !!',
            buttons: ['Ok']
        });
        alert.present();
    };
    // la methode qui permet l'envoi des donnee vers l'api rest
    DocumentEditPage.prototype.saveDocument = function () {
        var _this = this;
        this.documentProvider.updateDocument(this.document).subscribe(function (successCode) {
            _this.document[''] = successCode;
            _this.presentAlert();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__documents_documents__["a" /* DocumentsPage */]);
        }, function (errorCode) { return _this.statusCode = errorCode; });
    };
    DocumentEditPage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        });
    };
    DocumentEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-document-edit',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\document-edit\document-edit.html"*/'<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage">Recrute Soursing</a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n  <div id="user-nav" class="navbar navbar-inverse">\n    <ul class="nav">\n      <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n      <li class=""><a title=""  (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n        <span class="text">Déconnexion</span></a></li>\n      </ul>\n  </div>\n  <!--close-top-Header-menu-->\n    <div id="sidebar">\n      <a href="#" navPush="DocumentsPage" class="visible-phone"><i class="icon icon-file"></i> Document</a>\n      <ul>\n        <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i> <span>Accueil</span></a> </li>\n        <li> <a href="" navPush="CandidatsPage"><i class="icon icon-user"></i> <span>Candidats </span></a> </li>\n        <li> <a href="" navPush="DocumentsPage"><i class="icon icon-file"></i> <span>Documents</span></a> </li>\n        <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i> <span>Recherche</span></a></li>\n        <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i> <span>Recrutement</span></a></li>\n        <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i> <span>Rapports </span></a></li>\n      </ul>\n    </div>\n    <div id="content">\n      <div id="content-header">\n        <div id="breadcrumb"> <a href="" navPush="DocumentAddPage" title="Go to Document" class="tip-bottom"><i class="icon-file"></i>Editer un Document</a></div>\n      </div>\n      <div class="container-fluid">\n        <div class="row-fluid">\n          <div class="span12">\n            <div class="widget-box">\n              <div class="widget-title">\n                <span class="icon">\n                  <i class="icon-pencil"></i>\n                </span>\n                  <h5>Editer un document  +</h5>\n              </div>\n              <div class="widget-content nopadding">\n                <form id="form-wizard" class="form-horizontal" (ngSubmit)="saveDocument()" #postForm="ngForm">\n                  <!--\n                    input *ngIf="document.id != null" type="hidden"  name="id" #id = "ngModel"  [(ngModel)]="document.id"    />\n                  -->\n                  <div id="form-wizard-1" class="step">\n                    <div class="control-group">\n                      <div style="clear: both"></div>\n                        <label class="control-label">Titre : </label>\n                        <div class="controls">\n                          <input type="text"  name="titre_document" [(ngModel)]="document.titre_document"/>\n                        </div>\n                        <label class="control-label">Objet : </label>\n                        <div class="controls">\n                          <input type="text"  name="objet_document" [(ngModel)]="document.objet_document" />\n                        </div>\n                        <label class="control-label">Déstinataire : </label>\n                          <div class="controls">\n                            <div class="control-group">\n                              <select  name="ca" [(ngModel)]="document.candidat" class="select_dest" style="width: 97%">\n                                <option value="{{candidat.id}}" *ngFor="let candidat of candidats">\n                                      {{candidat.nom_candidat}},{{candidat.prenom_candidat}}-{{candidat.titre.libelle_titre	}}\n                                </option>\n                              </select>\n                            </div>\n                          </div>\n                        </div>\n                        <div class="control-group">\n                          <label class="control-label">Date:</label>\n                            <div class="controls">\n                              <input type="date"  name="date_creation_document" [(ngModel)]="document.date_creation_document" style="width: 96%"/>\n                            </div>\n                        </div>\n                        <div class="control-group">\n                          <label class="control-label">Signature : </label>\n                            <div class="controls">\n                              <input type="text"  name="signature_document"  [(ngModel)]="document.signature_document" />\n                            </div>\n                        </div>\n                        <div class="control-group">\n                          <label class="control-label">Corps du Document : </label>\n                            <div class="controls">\n                              <textarea  rows="10" name="corps_document"  [(ngModel)]="document.corps_document"    ></textarea>\n                            </div>\n                        </div>\n                      </div>\n                      <div style="width:100%; height:100%">\n                        <input class="btn btn-primary" type="submit" value="Enregistrer"  style="display: block; margin: 0 auto;"[disabled]="!postForm.valid"><br><br>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n      <div class="row-fluid">\n        <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n      </div>\n    </div>\n'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\document-edit\document-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_document_document__["a" /* DocumentProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_candidat_candidat__["a" /* CandidatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DocumentEditPage);
    return DocumentEditPage;
}());

//# sourceMappingURL=document-edit.js.map

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 354,
	"./af.js": 354,
	"./ar": 355,
	"./ar-dz": 356,
	"./ar-dz.js": 356,
	"./ar-kw": 357,
	"./ar-kw.js": 357,
	"./ar-ly": 358,
	"./ar-ly.js": 358,
	"./ar-ma": 359,
	"./ar-ma.js": 359,
	"./ar-sa": 360,
	"./ar-sa.js": 360,
	"./ar-tn": 361,
	"./ar-tn.js": 361,
	"./ar.js": 355,
	"./az": 362,
	"./az.js": 362,
	"./be": 363,
	"./be.js": 363,
	"./bg": 364,
	"./bg.js": 364,
	"./bm": 365,
	"./bm.js": 365,
	"./bn": 366,
	"./bn.js": 366,
	"./bo": 367,
	"./bo.js": 367,
	"./br": 368,
	"./br.js": 368,
	"./bs": 369,
	"./bs.js": 369,
	"./ca": 370,
	"./ca.js": 370,
	"./cs": 371,
	"./cs.js": 371,
	"./cv": 372,
	"./cv.js": 372,
	"./cy": 373,
	"./cy.js": 373,
	"./da": 374,
	"./da.js": 374,
	"./de": 375,
	"./de-at": 376,
	"./de-at.js": 376,
	"./de-ch": 377,
	"./de-ch.js": 377,
	"./de.js": 375,
	"./dv": 378,
	"./dv.js": 378,
	"./el": 379,
	"./el.js": 379,
	"./en-au": 380,
	"./en-au.js": 380,
	"./en-ca": 381,
	"./en-ca.js": 381,
	"./en-gb": 382,
	"./en-gb.js": 382,
	"./en-ie": 383,
	"./en-ie.js": 383,
	"./en-il": 384,
	"./en-il.js": 384,
	"./en-nz": 385,
	"./en-nz.js": 385,
	"./eo": 386,
	"./eo.js": 386,
	"./es": 387,
	"./es-do": 388,
	"./es-do.js": 388,
	"./es-us": 389,
	"./es-us.js": 389,
	"./es.js": 387,
	"./et": 390,
	"./et.js": 390,
	"./eu": 391,
	"./eu.js": 391,
	"./fa": 392,
	"./fa.js": 392,
	"./fi": 393,
	"./fi.js": 393,
	"./fo": 394,
	"./fo.js": 394,
	"./fr": 395,
	"./fr-ca": 396,
	"./fr-ca.js": 396,
	"./fr-ch": 397,
	"./fr-ch.js": 397,
	"./fr.js": 395,
	"./fy": 398,
	"./fy.js": 398,
	"./gd": 399,
	"./gd.js": 399,
	"./gl": 400,
	"./gl.js": 400,
	"./gom-latn": 401,
	"./gom-latn.js": 401,
	"./gu": 402,
	"./gu.js": 402,
	"./he": 403,
	"./he.js": 403,
	"./hi": 404,
	"./hi.js": 404,
	"./hr": 405,
	"./hr.js": 405,
	"./hu": 406,
	"./hu.js": 406,
	"./hy-am": 407,
	"./hy-am.js": 407,
	"./id": 408,
	"./id.js": 408,
	"./is": 409,
	"./is.js": 409,
	"./it": 410,
	"./it.js": 410,
	"./ja": 411,
	"./ja.js": 411,
	"./jv": 412,
	"./jv.js": 412,
	"./ka": 413,
	"./ka.js": 413,
	"./kk": 414,
	"./kk.js": 414,
	"./km": 415,
	"./km.js": 415,
	"./kn": 416,
	"./kn.js": 416,
	"./ko": 417,
	"./ko.js": 417,
	"./ky": 418,
	"./ky.js": 418,
	"./lb": 419,
	"./lb.js": 419,
	"./lo": 420,
	"./lo.js": 420,
	"./lt": 421,
	"./lt.js": 421,
	"./lv": 422,
	"./lv.js": 422,
	"./me": 423,
	"./me.js": 423,
	"./mi": 424,
	"./mi.js": 424,
	"./mk": 425,
	"./mk.js": 425,
	"./ml": 426,
	"./ml.js": 426,
	"./mn": 427,
	"./mn.js": 427,
	"./mr": 428,
	"./mr.js": 428,
	"./ms": 429,
	"./ms-my": 430,
	"./ms-my.js": 430,
	"./ms.js": 429,
	"./mt": 431,
	"./mt.js": 431,
	"./my": 432,
	"./my.js": 432,
	"./nb": 433,
	"./nb.js": 433,
	"./ne": 434,
	"./ne.js": 434,
	"./nl": 435,
	"./nl-be": 436,
	"./nl-be.js": 436,
	"./nl.js": 435,
	"./nn": 437,
	"./nn.js": 437,
	"./pa-in": 438,
	"./pa-in.js": 438,
	"./pl": 439,
	"./pl.js": 439,
	"./pt": 440,
	"./pt-br": 441,
	"./pt-br.js": 441,
	"./pt.js": 440,
	"./ro": 442,
	"./ro.js": 442,
	"./ru": 443,
	"./ru.js": 443,
	"./sd": 444,
	"./sd.js": 444,
	"./se": 445,
	"./se.js": 445,
	"./si": 446,
	"./si.js": 446,
	"./sk": 447,
	"./sk.js": 447,
	"./sl": 448,
	"./sl.js": 448,
	"./sq": 449,
	"./sq.js": 449,
	"./sr": 450,
	"./sr-cyrl": 451,
	"./sr-cyrl.js": 451,
	"./sr.js": 450,
	"./ss": 452,
	"./ss.js": 452,
	"./sv": 453,
	"./sv.js": 453,
	"./sw": 454,
	"./sw.js": 454,
	"./ta": 455,
	"./ta.js": 455,
	"./te": 456,
	"./te.js": 456,
	"./tet": 457,
	"./tet.js": 457,
	"./tg": 458,
	"./tg.js": 458,
	"./th": 459,
	"./th.js": 459,
	"./tl-ph": 460,
	"./tl-ph.js": 460,
	"./tlh": 461,
	"./tlh.js": 461,
	"./tr": 462,
	"./tr.js": 462,
	"./tzl": 463,
	"./tzl.js": 463,
	"./tzm": 464,
	"./tzm-latn": 465,
	"./tzm-latn.js": 465,
	"./tzm.js": 464,
	"./ug-cn": 466,
	"./ug-cn.js": 466,
	"./uk": 467,
	"./uk.js": 467,
	"./ur": 468,
	"./ur.js": 468,
	"./uz": 469,
	"./uz-latn": 470,
	"./uz-latn.js": 470,
	"./uz.js": 469,
	"./vi": 471,
	"./vi.js": 471,
	"./x-pseudo": 472,
	"./x-pseudo.js": 472,
	"./yo": 473,
	"./yo.js": 473,
	"./zh-cn": 474,
	"./zh-cn.js": 474,
	"./zh-hk": 475,
	"./zh-hk.js": 475,
	"./zh-tw": 476,
	"./zh-tw.js": 476
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 871;

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_document_document_model__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_document_document__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documents_documents__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_candidat_candidat__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DocumentAddPage = /** @class */ (function () {
    function DocumentAddPage(securityprovider, navCtrl, navParams, documentProvider, candidatProvider, plt, file, alertCtrl) {
        this.securityprovider = securityprovider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentProvider = documentProvider;
        this.candidatProvider = candidatProvider;
        this.plt = plt;
        this.file = file;
        this.alertCtrl = alertCtrl;
        //instances des classes
        this.document = new __WEBPACK_IMPORTED_MODULE_2__models_document_document_model__["a" /* Document */]();
        this.user = localStorage.getItem('user');
        this.user_info = localStorage.getItem('user_info');
    }
    DocumentAddPage.prototype.ngOnInit = function () {
        var _this = this;
        //candidat
        this.candidatProvider.getAllCandidat().subscribe(function (data) {
            _this.candidats = data;
            console.log('my Documents' + data);
        });
    };
    // la methode qui permet l'envoi des donnee vers l'api rest
    DocumentAddPage.prototype.saveDocument = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('titre_document', this.document.titre_document);
        formData.append('objet_document', this.document.objet_document);
        formData.append('date_creation_document', this.document.date_creation_document);
        formData.append('corps_document', this.document.corps_document);
        formData.append('signature_document', this.document.signature_document);
        formData.append('id_candidat', this.document.candidat);
        formData.append('user_id', this.user);
        this.documentProvider.postDocument(formData).subscribe(function (res) { return _this.document; });
        this.presentAlert();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__documents_documents__["a" /* DocumentsPage */]);
        //this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    DocumentAddPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Document Bien Ajouté !!',
            buttons: ['Ok']
        });
        alert.present();
    };
    DocumentAddPage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        });
    };
    DocumentAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-document-add',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\document-add\document-add.html"*/'<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage">Recrute Sourcing</a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n<div id="user-nav" class="navbar navbar-inverse">\n  <ul class="nav">\n    <li class="" ><a title="" href="#"><i class="icon icon-user"></i><span class="text">{{user_info}}</span></a></li> \n    <li class=""><a title=""  (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n      <span class="text">Déconnexion</span></a></li>\n  </ul>\n</div>\n<!--close-top-Header-menu-->\n<div id="sidebar">\n  <a href="#" navPush="DocumentsPage" class="visible-phone"><i class="icon icon-file"></i> Document</a>\n  <ul>\n    <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i><span>Accueil</span></a></li>\n    <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n    <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n    <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n    <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>\n    <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n  </ul>\n</div>\n<div id="content">\n  <div id="content-header">\n    <div id="breadcrumb"><a href="" navPush="DocumentAdPage" title="Go to Home" class="tip-bottom"><i class="icon-file"></i> Ajouter un Document</a></div>\n  </div>\n  <div class="container-fluid">\n    <div class="row-fluid">\n      <div class="span12">\n        <div class="widget-box">\n          <div class="widget-title">\n            <span class="icon"><i class="icon-pencil"></i></span>\n            <h5>Créer un document  +</h5>\n          </div>\n          <div class="widget-content nopadding">\n            <form id="form-wizard" class="form-horizontal" (ngSubmit)="saveDocument()" #postForm="ngForm">\n              <!--\n                <input *ngIf="document.id != null" type="hidden"  name="id" #id = "ngModel"  [(ngModel)]="document.id"    />\n               -->\n              <div id="form-wizard-1" class="step">\n                <div class="control-group">\n                  <div style="clear: both"></div>\n                    <label class="control-label">Objet : </label>\n                      <div class="controls">\n                        <input type="text"  name="objet_document" [(ngModel)]="document.objet_document"    />\n                      </div>\n                      <label class="control-label">Titre : </label>\n                      <div class="controls">\n                        <input type="text"  name="titre_document" [(ngModel)]="document.titre_document"    />\n                      </div>\n                      <label class="control-label">Déstinataire : </label>\n                      <div class="controls">\n                        <div class="control-group" style="position: relative">\n                          <ion-select name="candidat" [(ngModel)]="document.candidat" class="select_candidat" multiple="true"\n                          Text="Okay" cancelText="Annuler">\n                            <ion-option value="{{candidat.id}}" *ngFor="let candidat of candidats">\n                                {{candidat.nom_candidat}},{{candidat.prenom_candidat}}</ion-option>\n                          </ion-select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="control-group">\n                      <label class="control-label">Date:</label>\n                        <div class="controls">\n                          <input type="date"  name="date_creation_document" [(ngModel)]="document.date_creation_document" style="width: 96%"/>\n                        </div>\n                    </div>\n                    <div class="control-group">\n                      <label class="control-label">Signature : </label>\n                        <div class="controls">\n                          <input type="text"  name="signature_document"  [(ngModel)]="document.signature_document"/>\n                        </div>\n                    </div>\n                    <div class="control-group">\n                      <label class="control-label">Corps du Document : </label>\n                      <div class="controls">\n                      <textarea   name="corps_document"  [(ngModel)]="document.corps_document"    ></textarea>\n                      </div>\n                    </div>\n                  </div>\n                  <div style="width:100%; height:100%">\n                    <input class="btn btn-primary" type="submit" value="Créer"  style="display: block; margin: 0 auto;"[disabled]="!postForm.valid"><br><br>\n                  </div>\n                  <div></div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    <div class="row-fluid">\n      <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n    </div>\n  </div>\n'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\document-add\document-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_document_document__["a" /* DocumentProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_candidat_candidat__["a" /* CandidatProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DocumentAddPage);
    return DocumentAddPage;
}());

//# sourceMappingURL=document-add.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Candidat; });
var Candidat = /** @class */ (function () {
    function Candidat() {
    }
    return Candidat;
}());

//# sourceMappingURL=candidat.model.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ville; });
var Ville = /** @class */ (function () {
    function Ville() {
    }
    return Ville;
}());

//# sourceMappingURL=ville.model.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experience; });
var Experience = /** @class */ (function () {
    function Experience() {
    }
    return Experience;
}());

//# sourceMappingURL=experience.model.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Specialite; });
var Specialite = /** @class */ (function () {
    function Specialite() {
    }
    return Specialite;
}());

//# sourceMappingURL=specialite.model.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiveauEtude; });
var NiveauEtude = /** @class */ (function () {
    function NiveauEtude() {
    }
    return NiveauEtude;
}());

//# sourceMappingURL=niveauetude.model.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Titre; });
var Titre = /** @class */ (function () {
    function Titre() {
    }
    return Titre;
}());

//# sourceMappingURL=titre.model.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_pagination_pagination__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_recrute_recrute__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CandidatsPage = /** @class */ (function () {
    function CandidatsPage(securityprovider, restService, toastr, navCtrl, pagerService, elem, recruteProvider, alertCtrl) {
        this.securityprovider = securityprovider;
        this.restService = restService;
        this.toastr = toastr;
        this.navCtrl = navCtrl;
        this.pagerService = pagerService;
        this.elem = elem;
        this.recruteProvider = recruteProvider;
        this.alertCtrl = alertCtrl;
        this.search = '';
        this.tri = '';
        // pager object
        this.pager = {};
        this.searchResults = this.candidats;
        this.cbChecked = [];
    }
    CandidatsPage_1 = CandidatsPage;
    CandidatsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad etat');
        this.recruteProvider.getFirstEtat().subscribe(function (data) {
            _this.etat = data;
            console.log('ionViewDidLoad etat : ' + data.id);
        });
    };
    CandidatsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user_info = localStorage.getItem('user_info');
        this.user = localStorage.getItem('user');
        this.restService.getCandidat().subscribe(function (data) {
            _this.candidats = data;
            _this.searchResults = data;
            _this.setPage(1);
            console.log('my data' + data);
        });
        //ville
        this.restService.getVilles().subscribe(function (data) {
            _this.villes = data;
            console.log(data);
        });
        //specialite
        this.restService.getSpecialites().subscribe(function (data) {
            _this.specialites = data;
            console.log(data);
        });
        //titre
        this.restService.getTitres().subscribe(function (data) {
            _this.titres = data;
            console.log(data);
        });
        //experience
        this.restService.getExperiences().subscribe(function (data) {
            _this.experiences = data;
            console.log(data);
        });
        //niveau d'etude
        this.restService.getNiveauEtude().subscribe(function (data) {
            _this.niveauEtude = data;
            console.log("niveau d'etude" + data);
        });
    };
    CandidatsPage.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.candidats.length, page);
        // get current page of items
        this.pagedItems = this.candidats.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //method de supprission
    CandidatsPage.prototype.delete = function (id) {
        this.presentConfirm(id);
        this.navCtrl.push(CandidatsPage_1);
        this.navCtrl.setRoot(CandidatsPage_1);
    };
    CandidatsPage.prototype.Search = function () {
        var _this = this;
        this.restService.getSearch(this.search).subscribe(function (data) {
            _this.restService.getCandidat();
            _this.candidats = data;
            _this.setPage(1);
            console.log(data);
            if (data == 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Message',
                    subTitle: 'Aucun profile ne correspond à la recherche.',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        });
    };
    CandidatsPage.prototype.Tri = function () {
        var _this = this;
        this.restService.getOrder(this.tri).subscribe(function (data) {
            _this.restService.getCandidat();
            _this.candidats = data;
            // initialize to page 1
            _this.setPage(1);
            console.log(data);
        });
    };
    CandidatsPage.prototype.hideshow = function () {
        var x = document.getElementById("critere");
        if (x.style.display === "none") {
            x.style.display = "block";
            this.restService.getCandidat();
        }
        else {
            x.style.display = "none";
            this.restService.getCandidat();
        }
    };
    CandidatsPage.prototype.searchCandidat = function () {
        var _this = this;
        var genrex = this.elem.nativeElement.querySelector('#genrex').value;
        var titrex = this.elem.nativeElement.querySelector('#titrex').value;
        var adrx = this.elem.nativeElement.querySelector('#adrx').value;
        var netudex = this.elem.nativeElement.querySelector('#netudex').value;
        var expx = this.elem.nativeElement.querySelector('#expx').value;
        var compx = this.elem.nativeElement.querySelector('#compx').value;
        if (genrex == "") {
            genrex = "*";
        }
        if (titrex == "") {
            titrex = "*";
        }
        if (adrx == "") {
            adrx = "*";
        }
        if (netudex == "") {
            netudex = "*";
        }
        if (expx == "") {
            expx = "*";
        }
        if (compx == "") {
            compx = "*";
        }
        this.restService.getSearchParam(genrex, titrex, adrx, netudex, expx, compx).subscribe(function (data) {
            _this.candidats = data;
            console.log(data);
            if (data == 0) {
                var alert_2 = _this.alertCtrl.create({
                    title: 'Message',
                    subTitle: 'Aucun profile ne correspond à la recherche',
                    buttons: ['Ok']
                });
                alert_2.present();
            }
        });
    };
    CandidatsPage.prototype.deconnexion = function () {
        var _this = this;
        this.token = localStorage.getItem('token');
        this.securityprovider.deconnexion().subscribe(function (res) {
            res;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        });
    };
    CandidatsPage.prototype.afficher = function (chBox, event) {
        var x = document.getElementById("recr");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        var cbIdx = this.cbChecked.indexOf(chBox);
        if (event.target.checked) {
            if (cbIdx < 0) {
                this.cbChecked.push(chBox);
                console.log(chBox);
            }
        }
        else {
            if (cbIdx >= 0) {
                this.cbChecked.splice(cbIdx, 1);
                console.log(cbIdx);
            }
        }
    };
    CandidatsPage.prototype.addSelection = function () {
        var _this = this;
        console.log(this.cbChecked);
        var formData = new FormData();
        var date = new Date();
        var _loop_1 = function (index) {
            var element = this_1.cbChecked[index];
            formData.append('date_selection', date.toLocaleDateString());
            formData.append('id_candidat', element.id);
            formData.append('etat', '1');
            formData.append('user', this_1.user);
            this_1.recruteProvider.postSelection(formData).subscribe(function (res) {
                if (res.taille <= 0) {
                    console.log('selection bien ajouter candidat' + element);
                    console.log('selection bien ajouter etat' + _this.etat.id);
                }
                else {
                    console.log('etat  occueid for' + res);
                }
            });
        };
        var this_1 = this;
        for (var index = 0; index < this.cbChecked.length; index++) {
            _loop_1(index);
        }
    };
    // Popup de confirmation
    CandidatsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Message',
            subTitle: 'Candidat supprimé avec success',
            buttons: ['Ok']
        });
        alert.present();
    };
    CandidatsPage.prototype.presentConfirm = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confiration',
            message: 'Voulez-vous Supprimer ce candidat ??',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'Annuler',
                    handler: function () {
                        console.log('Annuler clicked');
                    }
                },
                {
                    text: 'Supprimer',
                    handler: function () {
                        _this.restService.deleteCandidat(id).subscribe(function (data) {
                            _this.restService.getCandidat();
                        });
                        _this.restService.getCandidat();
                        _this.presentAlert();
                        _this.restService.getCandidat();
                        _this.navCtrl.push(CandidatsPage_1);
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('x'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CandidatsPage.prototype, "x", void 0);
    CandidatsPage = CandidatsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-candidats',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\candidats\candidats.html"*/'<ion-content>\n<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage">Recrute Sourcing</a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero"> <a class="top_message tip-left" title="Manage Files"><i class="icon-file"></i></a> <a class="top_message tip-bottom" title="Manage Users"><i class="icon-user"></i></a> <a class="top_message tip-bottom" title="Manage Comments"><i class="icon-comment"></i><span class="label label-important">5</span></a> <a class="top_message tip-bottom" title="Manage Orders"><i class="icon-shopping-cart"></i></a> </div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n<div id="user-nav" class="navbar navbar-inverse">\n  <ul class="nav">\n    <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">{{user_info}}</span></a></li> \n    <li class=""><a title="" href="" (click)="deconnexion()"><i class="icon icon-share-alt"></i>\n      <span class="text">Déconnexion</span></a></li>\n  </ul>\n</div>\n<!--close-top-Header-menu-->\n<div id="sidebar">\n  <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n  <ul>\n    <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i><span>Accueil</span></a></li>\n    <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a></li>\n    <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>  \n    <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a></li>\n    <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i> <span>Recherche</span></a></li>\n    <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i> <span>Rapports </span></a></li>\n  </ul>\n</div>\n<div id="content">\n  <div id="content-header">\n    <div id="breadcrumb"> <a href="" navPush="CandidatPage" title="Go to Candidat" class="tip-bottom"><i class="icon-user"></i> Candidats</a></div>\n  </div>\n<!-- Page Content -->\n  <div class="container-fluid">\n    <div class="row-fluid">\n      <div class="span12">\n        <div class="widget-box">\n          <div class="widget-title" style="background-color:#49CCED ">\n            <h5>Filtrage</h5>\n          </div>\n          <div class="widget-content" >\n            <ul class="thumbnails"  style="margin-bottom: 0">\n              <li class="span4" style="margin-bottom: 0px">\n                <label>Trier</label>\n                <select  [(ngModel)]="tri"  name="tri" (change)="Tri()" \n                          style="width: 100%">\n                    <option value="nomCandidat">Nom</option>\n                    <option value="prenomCandidat">Prenom</option>\n                    <option value="titre">Titre</option>\n                    <option value="experience">Expérience</option>\n                    <option value="niveauEtude">Niveau d\'étude</option>\n                </select>\n                </li>                     \n                <li class="span4" style="margin-bottom: 0px">\n                  <label>Recherche par mot clé</label>\n                  <input type="text" placeholder="Titre , Nom..."  [(ngModel)]="search"  name="search" (input)="Search()" style="width:  95%">\n                </li>\n                <li class="span4" style="margin-bottom: 0px">\n                  <label>&nbsp;</label>\n                  <button (click)="hideshow()" style="color: #fff; background-color: #00b894;\n                          border: 1px solid #00b894;text-transform: uppercase;font-size: 14px;\n                          padding: 4px 5px 3px;margin-bottom: 0; width: 100%"> Affiner Votre Recherche\n                          <span class="icon" >\n                            <i class=" icon-arrow-down"></i>            \n                          </span>                 \n                  </button>\n                </li>\n                <div class="row-fluid" id="critere" style="display: none;">\n                  <div class="span12" style="text-align: left">\n                    <form  (ngSubmit)="searchCandidat()">\n                      <fieldset class="fssearch" style="padding: 20px;margin: 1cm;background-color: aliceblue;">\n                      <div class="span4" style="margin-bottom: 15px">\n                        <label>Genre:</label>\n                        <select id="genrex" name="genrex" style="width: 100%">  \n                          <option value=""></option>          \n                          <option value="Homme">Homme</option>\n                          <option value="Femme">Femme</option>\n                        </select>\n                      </div>\n                      <div class="span4" style="margin-bottom: 15px">\n                        <label>Titre:</label>\n                          <select  name="titrex" id="titrex" style="width: 100%" > \n                            <option selected></option>\n                            <option value="{{titre.libelle_titre}}" *ngFor="let titre of titres">\n                                {{titre.libelle_titre}}\n                            </option>\n                          </select>\n                      </div>\n                      <div class="span4" style="margin-bottom: 15px">\n                        <label> Ville:</label>\n                          <select  name="adrx" id="adrx" style="width: 100%" >  \n                            <option selected></option>\n                            <option value="{{ville.libelle_ville}}" *ngFor="let ville of villes">\n                                {{ville.libelle_ville}}\n                            </option>\n                          </select>\n                      </div>  \n                      <div class="span4" style="margin-bottom: 15px">\n                        <label>Niveau d\'étude:</label> \n                          <select  name="netudex" id="netudex" style="width: 100%">  \n                            <option selected></option>\n                            <option value="{{niveauEtude.libelle__niveau_etude}}" *ngFor="let niveauEtude of niveauEtude">\n                                {{niveauEtude.libelle__niveau_etude}}\n                            </option>\n                          </select>\n                      </div>\n                      <div class="span4" style="margin-bottom: 15px">\n                        <label> Expérience:</label>\n                        <select  name="expx"  id="expx" style="width: 100%;margin-right: 1cm;">      \n                          <option selected></option>\n                          <option value="{{experience.libelle_experience}}" *ngFor="let experience of experiences">\n                              {{experience.libelle_experience}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class="span4" style="margin-bottom: 15px">\n                        <label for="comp">Specialité:</label> \n                          <select  name="compx" id="compx" style="width: 100%">      \n                            <option selected></option>\n                            <option value="{{specialite.libelle_specialite}}" *ngFor="let specialite of specialites">\n                                {{specialite.libelle_specialite}}\n                            </option>\n                          </select>\n                      </div>\n                      <div class="span4" style="    float: right; margin: 0 20px 0 0;">\n                        <input class="btn btn-primary" type="submit" value="Recherche"  (click)="searchCandidat()"/>\n                      </div>\n                       </fieldset>\n                    </form>\n                   </div>\n                 </div>\n                </ul>\n            </div>\n            </div>\n            </div>\n            </div>\n            <div class="row-fluid">\n            <div class="span12">\n              <div class="widget-box">\n                  <div class="widget-title" title="ajouter un candidat" navPush="CandidatAddPage">\n                    <span class="icon"><i class="icon-plus"></i></span> \n                    <h5>Liste des Candidats</h5>\n                  </div>\n                <div class="row-fluid" id="recr" style="display: none; text-align: right">\n                  <button class="btn" (click)="addSelection()"  style="background-color: #49CCED;\n                          color: black;\n                          border: none;\n                          margin: 10px 10px 9px 0;"><i class="icon-check"></i>Selectionner des candidats à recruter <i class="icon-chevron-right"></i>\n                  </button>\n                </div>\n                <div style="clear: both"></div>\n                <div class="widget-content" >\n                  <ul class="thumbnails">\n                    <li class="span2"  *ngFor="let candidat of pagedItems">\n                      <div class="checkbox-element">\n                        <input type="checkbox" name="options" id="{{candidat.id}}" value="{{candidat}}" [checked]="cbChecked.indexOf(candidat) >= 0" (change)="afficher(candidat, $event)" />\n                        <label for="{{candidat.id}}"></label>\n                      </div>    \n                      <div class="thumbnail lightbox_trigger">\n                        <img src="http://rs.creativetag.ma/web/assets/{{candidat.photo_candidat}}" alt=""alt="Avatar" style="width:100px;height:100px;border-radius: 50%;"  class="w3-circle" >\n                        <div class="caption" style="text-align: center;">\n                            <h4 style="height: 40px">{{candidat.nom_candidat}} {{candidat.prenom_candidat}}</h4>\n                            <p style="height: 40px; text-align: left;margin: 0;">{{candidat.titre.libelle_titre}}</p>\n                        </div>\n                      </div>\n                    <hr>\n                      <div class="actions">\n                       <a title="" href="" navPush="CandidatDetailsPage"\n                        [navParams]="{candidat: candidat}"><i class="icon-pencil icon-white"></i></a>\n                        <a title= "Supprimer" (click) = "delete(candidat.id)" ><i class="icon-remove icon-white"></i></a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n                <div class="pagination alternate">\n                <!-- Pagination -->\n                <!-- pager -->\n                  <ul *ngIf="pager.pages && pager.pages.length" class="pagination">\n                    <li [ngClass]="{disabled:pager.currentPage === 1}">\n                      <a (click)="setPage(1)">&#x3C;&#x3C;</a>\n                    </li>\n                    <li [ngClass]="{disabled:pager.currentPage === 1}">\n                     <a (click)="setPage(pager.currentPage - 1)">&#x3C;</a>\n                    </li>\n                    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}">\n                      <a (click)="setPage(page)">{{page}}</a>\n                    </li>\n                    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">\n                      <a (click)="setPage(pager.currentPage + 1)">></a>\n                    </li>\n                    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">\n                      <a (click)="setPage(pager.totalPages)">>></a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    <div class="row-fluid">\n      <div id="footer" class="span12"> 2018 &copy; RS.  <a>www.RecruteSourcing.fr</a> </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\candidats\candidats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_securite_securite__["a" /* SecuriteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_candidat_candidat__["a" /* CandidatProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_pagination_pagination__["a" /* PaginationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_8__providers_recrute_recrute__["a" /* RecruteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CandidatsPage);
    return CandidatsPage;
    var CandidatsPage_1;
}());

//# sourceMappingURL=candidats.js.map

/***/ })

},[534]);
//# sourceMappingURL=main.js.map