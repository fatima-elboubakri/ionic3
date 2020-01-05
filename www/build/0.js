webpackJsonp([0],{

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPageModule", function() { return HeaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__(923);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderPageModule = /** @class */ (function () {
    function HeaderPageModule() {
    }
    HeaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* HeaderPage */]),
            ],
        })
    ], HeaderPageModule);
    return HeaderPageModule;
}());

//# sourceMappingURL=header.module.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
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


var HeaderPage = /** @class */ (function () {
    function HeaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeaderPage');
    };
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-header',template:/*ion-inline-start:"c:\xampp\htdocs\FrontPro\src\pages\header\header.html"*/'<!--Header-part-->\n<div id="header">\n  <h1><a href="#" navPush="HomePage">FM JOB </a></h1>\n</div>\n<!--close-Header-part--> \n<!--top-Header-messaages-->\n<div class="btn-group rightzero">\n  <a class="top_message tip-left" title="Manage Files">\n    <i class="icon-file"></i>\n  </a> \n  <a class="top_message tip-bottom" title="Manage Users">\n    <i class="icon-user"></i>\n  </a> \n  <a class="top_message tip-bottom" title="Manage Comments">\n    <i class="icon-comment"></i>\n    <span class="label label-important">5</span>\n  </a> \n  <a class="top_message tip-bottom" title="Manage Orders">\n    <i class="icon-shopping-cart"></i>\n  </a> \n</div>\n<!--close-top-Header-messaages--> \n<!--top-Header-menu-->\n<div id="user-nav" class="navbar navbar-inverse">\n  <ul class="nav">\n    <li class="" ><a title="" href="#"><i class="icon icon-user"></i> <span class="text">Profile</span></a></li>\n    <li class=" dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages" class="dropdown-toggle"><i class="icon icon-envelope"></i> <span class="text">Messages</span> <span class="label label-important">5</span> <b class="caret"></b></a>\n      <ul class="dropdown-menu">\n        <li><a class="sAdd" title="" href="#">new message</a></li>\n        <li><a class="sInbox" title="" href="#">inbox</a></li>\n        <li><a class="sOutbox" title="" href="#">outbox</a></li>\n        <li><a class="sTrash" title="" href="#">trash</a></li>\n      </ul>\n    </li>\n    <li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">préferences</span></a></li>\n    <li class=""><a title="" href="" (click)="deconnexion()" ><i class="icon icon-share-alt"></i>\n       <span class="text">Déconnexion</span></a></li>\n  </ul>\n</div>\n<div id="search">\n  <input type="text" placeholder="Search here..."/>\n  <button type="submit" class="tip-left" title="Search"><i class="icon-search icon-white"></i></button>\n</div>\n<!--close-top-Header-menu-->\n<div id="sidebar">\n  <a href="#" navPush="HomePage" class="visible-phone"><i class="icon icon-home"></i> Accueil</a>\n  <ul>\n    <li class="active"><a href="#" navPush="HomePage"><i class="icon icon-home"></i> <span>Accueil</span></a> </li>\n    <li><a href="" navPush="CandidatsPage"><i class="icon icon-user"></i><span>Candidats </span></a> </li>\n    <li><a href="" navPush="DocumentsPage"><i class="icon icon-file"></i><span>Documents</span></a> </li>\n    <li><a href="" navPush="RecherchePage"><i class="icon icon-search"></i><span>Recherche</span></a></li>\n    <li><a href="" navPush="RecrutePage"><i class="icon icon-briefcase"></i><span>Recrutement</span></a></li>\n    <li><a href="" navPush="RapportsPage"><i class="icon icon-signal"></i><span>Rapports </span></a></li>\n  </ul>\n</div>'/*ion-inline-end:"c:\xampp\htdocs\FrontPro\src\pages\header\header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ })

});
//# sourceMappingURL=0.js.map