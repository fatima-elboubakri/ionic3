import { Component,OnDestroy,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { Chart } from 'chart.js';
import { SelectionProvider } from '../../providers/selection/selection';
import{Selection} from '../../models/selection/selection.model';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
import { Etat } from '../../models/selection/etat.model';
import { LoginPage } from '../login/login';
import { SecuriteProvider } from '../../providers/securite/securite';

@IonicPage()
@Component({
  selector: 'page-rapports',
  templateUrl: 'rapports.html',
})
export class RapportsPage implements OnInit  {

  barChartOption={
    scaleShowVerticalLines:false,
    responsive:true
  }
  barChartLabels = [];
  barChartLabels1 = [];
  barChartLabels2 = [];
  barChartLabels3 = [];
  barChartLabels4 = [];

  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [];
  barChartData1 = [];
  barChartData2 = [];
  barChartData3 = [];
  barChartData4 = [];
  
  lineChartLabels = [];
  lineChartLabels2 = [];

  lineChartType = 'line';
  lineChartLegend = true;
  lineChartData = [];
  lineChartData2 = [];

  public barChartColors1:Array<any> = [
    { // Bleu
      backgroundColor: '#f68c8c',
      borderColor: '#f68c8c',
      pointBackgroundColor: '#f68c8c',
      pointBorderColor: '#f68c8c',
      pointHoverBackgroundColor: '#f68c8c',
      pointHoverBorderColor: '#f68c8c'
    },
    { // rouge
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
    { // grey
      backgroundColor: '#fdc086',
      borderColor: '#fdc086',
      pointBackgroundColor: '#fdc086',
      pointBorderColor: '#fdc086',
      pointHoverBackgroundColor: '#fdc086',
      pointHoverBorderColor: '#fdc086'
    },
  { // 
    backgroundColor: '#8e9aab',
    borderColor: '#8e9aab',
    pointBackgroundColor: '#8e9aab',
    pointBorderColor: '#8e9aab',
    pointHoverBackgroundColor: '#8e9aab',
    pointHoverBorderColor: '#8e9aab'
  },
  { // grey
    backgroundColor: '#7fc97f',
    borderColor: '#7fc97f',
    pointBackgroundColor: '#7fc97f',
    pointBorderColor: '#7fc97f',
    pointHoverBackgroundColor: '#7fc97f',
    pointHoverBorderColor: '#7fc97f'
  }
  ];
  public lineChartColors:Array<any> = [
    { // vert
      backgroundColor: '#addd8e',
      borderColor: '#4daf4a',
      pointBackgroundColor: '#4daf4a',
      pointBorderColor: '#4daf4a',
      pointHoverBackgroundColor: '#4daf4a',
      pointHoverBorderColor: '#4daf4a)'
    }
  ];
  
  user_info:any;
  public token;
  constructor(public navCtrl: NavController,
              private securityprovider: SecuriteProvider, 
              private selectionService:SelectionProvider,
              public navParams: NavParams) {
                  this.user_info=localStorage.getItem('user_info');
    }

  ngOnInit(): void {
    this.selectionService.getCountEtat().subscribe(data => {
        this.barChartData = this.constructEtapeChartData(data);
        console.log(this.barChartData);
        this.barChartLabels = data[0].selection.map(element => element.annee);
        console.log(this.barChartLabels);
      });
      this.selectionService.getCountPerByEtatRetenu().subscribe(data => {
        this.lineChartData = this.constructEtapeChartData(data);
        console.log(this.lineChartData);
        this.lineChartLabels = data[0].selection.map(element => element.annee);
        console.log(this.lineChartLabels);
      });
      this.selectionService.getCountFemmeEtat().subscribe(data => {
        this.barChartData2= this.constructFEtapeChartData(data);
        console.log(this.barChartData2);
        this.barChartLabels2 = data[0].selection.map(element => element.annee);
        console.log(this.barChartLabels2);
      });
      this.selectionService.getCountPerSpecialite().subscribe(data => {
        this.barChartData3= this.constructSpecialiteChartData(data);
        console.log(this.barChartData3);
        this.barChartLabels3 = data[0].selection.map(element => element.annee);
        console.log(this.barChartLabels3);
      });
      this.selectionService.getCountFemmeSpecialite().subscribe(data => {
        this.barChartData4= this.constructSpecialiteChartData(data);
        console.log(this.barChartData4);
        this.barChartLabels4 = data[0].selection.map(element => element.annee);
        console.log(this.barChartLabels4);
      });
  }

  // Transform back end data to chart.js data structure
  constructEtapeChartData(data: Array<any>) {
    const chartData = [];
    // on boucle sur chaque etape
    for (const etapeData of data) {
      console.log(data);
      chartData.push({data: etapeData.selection.map(res => res.Selection_count), label: etapeData.nom});
    }
    return chartData;
  }

  constructFEtapeChartData(data: Array<any>) {
    const chartData = [];
    // on boucle sur chaque etape
    for (const etapeData of data) {
      console.log(data);
      chartData.push({data: etapeData.selection.map(res => res.Selection_count), label: etapeData.nom});
    }
    return chartData;
  }

  constructSpecialiteChartData(data: Array<any>) {
    const chartData = [];
    // on boucle sur chaque specialite
    for (const specData of data) {
      console.log(data);
      chartData.push({data: specData.selection.map(res => res.Selection_count), label: specData.nom});
    }
    return chartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);}

  public randomizee():void {
    // Only Change 3 values
    let data = [
       Math.round(Math.random() * 100),59,80,
      (Math.random() * 100),56,
      (Math.random() * 100),40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
 
   // adding data and updating the chart
  addData (chart,label,data){
     chart.data.labels.push(label);
     chart.data.datasets.foreach((dataset)=> {
       dataset.data.push(data);
     })
     chart.update();
   }
   
  deconnexion(){
  this.token=localStorage.getItem('token');
  this.securityprovider.deconnexion().subscribe(
    (res) =>{
          res
          this.navCtrl.setRoot(LoginPage);
              } 
  );
}
}
  