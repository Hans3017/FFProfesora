import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartType,ChartDataset } from 'chart.js';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit{
  
  barChartOptions:ChartOptions={
    responsive:true
  }

  barChartLabels:string[]=[]
  barChartType:ChartType='bar'
  barChartLegend=true;
  barChartData:ChartDataset[]=[];
  
  constructor(private iS:IngredientService){

  }

  ngOnInit(): void {
    this.iS.getCount().subscribe((data)=>{
      this.barChartLabels=data.map(item=>item.nameDessert);
      this.barChartData=[
        {
          data:data.map(item=>item.quantityIngredients),
          label:'Cantidad de Ingredientes',
          backgroundColor: ['rgba(255, 0, 0, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(0, 0, 255, 0.7)']
    }]
    })
  }

}
