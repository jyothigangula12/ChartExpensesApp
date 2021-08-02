import React from 'react';
import ChartBar from'./ChartBar'
import './Chart.css'
const Chart = props => {
   const maxValueArray =  props.chartDataPoints.map(data => data.value)
   const totalMax = Math.max(...maxValueArray)
   return(
       <div className = 'chart'>
        {  props.chartDataPoints.map(data =>(
            <ChartBar key = {data.label}
            label = {data.label}
            value = {data.value}
            maxValue ={totalMax} />

   )) }
       </div>
   )
}
export default Chart