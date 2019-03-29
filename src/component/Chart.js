import React, {Component} from 'react';
import data from '../data.json';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart; 
export default class Chart extends Component{
  constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
  }

  filterSeason(){
    const array = data.filter(each => {
      return each.Season === "Winter"
    })
    console.log("winter:"+array)
    return array;
  }

  filterMale(season){
    const array = season.filter(each => {
      return each.Sex === "Male"
    })
    return array;
  }

  filterFemale(season){
    const array = season.filter(each => {
      return each.Sex === "Female"
    })
    return array;
  }
  
  medalCount(gender){
    const array = gender.filter(each => {
      return each.Medal !== null
    })
    const arrayLength = array.length;
    return arrayLength;
  }

  render(){
    // console.log(data[0]);
    const winter = this.filterSeason();
    const female = this.filterFemale(winter);
    const male = this.filterMale(winter);
    const femaleMedal = this.medalCount(female);
    console.log(femaleMedal);
    const maleMedal = this.medalCount(male);
    console.log(maleMedal);
    // console.log(female.medalCount());
    // console.log(male.medalCount());


		const options = {
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Russia Medal Count Gender Breakdown - Summer Olympics",
				fontFamily: "verdana"
			},
			axisY: {
				title: "Medal Count",
				// prefix: "€",
				// suffix: "k"
			},
			toolTip: {
				shared: true,
				reversed: true
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [
			{
				type: "stackedColumn",
				name: "Female",
				showInLegend: true,
				yValueFormatString: "#,###k",
				dataPoints: [
					{ label: "1952", y: 80 },
					{ label: "1956", y: 140 },
					{ label: "1960", y: 128 },
					{ label: "1968", y: 125 },
					{ label: "1972", y: 144 },
					{ label: "1976", y: 169 },
					{ label: "1980", y: 182 },
					{ label: "1988", y: 303 },
					{ label: "1996", y: 212 },
					{ label: "2000", y: 84 },
					{ label: "2004", y: 98 },
					{ label: "2008", y: 98 }
				]
			},
			{
				type: "stackedColumn",
				name: "Male",
				showInLegend: true,
				yValueFormatString: "#,###k",
				dataPoints: [
					{ label: "1952", y: 37 },
					{ label: "1956", y: 29 },
					{ label: "1960", y: 39 },
					{ label: "1968", y: 49 },
					{ label: "1972", y: 48 },
					{ label: "1976", y: 45 },
					{ label: "1980", y: 104 },
					{ label: "1988", y: 134 },
					{ label: "1996", y: 88 },
					{ label: "2000", y: 31 },
					{ label: "2004", y: 89 },
					{ label: "2008", y: 91 }
				]
			},
			// {
			// 	type: "stackedColumn",
			// 	name: "Sales",
			// 	showInLegend: true,
			// 	yValueFormatString: "#,###k",
			// 	dataPoints: [
			// 		{ label: "Jan", y: 13 },
			// 		{ label: "Feb", y: 13 },
			// 		{ label: "Mar", y: 15 },
			// 		{ label: "Apr", y: 15 },
			// 		{ label: "May", y: 15 },
			// 		{ label: "Jun", y: 15 },
			// 		{ label: "Jul", y: 16 },
			// 		{ label: "Aug", y: 17 },
			// 		{ label: "Sept", y: 17 },
			// 		{ label: "Oct", y: 18 },
			// 		{ label: "Nov", y: 19 },
			// 		{ label: "Dec", y: 20 },
			// ]
			// },
			// {
			// 	type: "stackedColumn",
			// 	name: "IT",
			// 	showInLegend: true,
			// 	yValueFormatString: "#,###k",
			// 	dataPoints: [
			// 		{ label: "Jan", y: 14 },
			// 		{ label: "Feb", y: 8 },
			// 		{ label: "Mar", y: 6 },
			// 		{ label: "Apr", y: 6 },
			// 		{ label: "May", y: 5 },
			// 		{ label: "Jun", y: 5 },
			// 		{ label: "Jul", y: 6 },
			// 		{ label: "Aug", y: 3 },
			// 		{ label: "Sept", y: 9 },
			// 		{ label: "Oct", y: 5 },
			// 		{ label: "Nov", y: 8 },
			// 		{ label: "Dec", y: 2 },
			// 	]
      // }
    ]
		}
    
    return(
      <div>
        {this.props.display 
        ? <div>
            <CanvasJSChart options = {options} 
				      onRef={ref => this.chart = ref}
			      />
						<img src="./assets/mc-summer.png"/>
						<img src="./assets/mc-winter.png"/>
						<img src="./assets/p-summer.png"/>
						<img src="./assets/p-winter.png"/>
          </div>
        : ''}
      </div>
    )
  }
}


