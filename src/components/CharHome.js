import React,{useState,useRef,useEffect} from 'react';

import * as d3 from 'd3';

const CharHome = () => {
    
    const data =  [
        {name: "A", value: 199},
        {name: "B", value: 205},
        {name: "C", value: 206},
        {name: "D", value: 499},
        {name: "E", value: 305},
        {name: "F", value: 506}
    
    ]

    const pieChart= useRef();
    useEffect(()=>{

        const piedata= d3.pie().value(d => d.count)(data)

        const arc= d3.arc().innerRadius(0).outerRadius(200)

        const colors = d3.scaleOrdinal(['#ff0000','#c68d5e','#af75c2','#0f75c2','#0faa95','#98aa95'])

        //configuration
        const svg= d3.select(pieChart.current).attr('width',200)
        .attr('height',180)
        .style('background','white').append('g')
        .attr("transform",'translate(300,300)');


        //dessiner 
        svg.append('g')
        .selectAll('path')
        .data(piedata)
        .join('path')
        .attr('d',arc)
        .attr('fill',(d,i)=>colors(i))
        .attr('stroke','blue');


    },[data]);


    return (
       <div>
           <svg ref={pieChart}></svg>
       </div>
    );
};

export default CharHome;