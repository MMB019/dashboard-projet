import React,{useState,useRef,useEffect} from 'react';

import * as d3 from 'd3';

const PieHome = () => {
    const [data]=useState([25,50,35,15,94,10]);

    const svgRef= useRef();
    useEffect(()=>{
        const w = 200;
        const h= 180;
        const svg= d3.select(svgRef.current)
        .attr("width",w)
        .attr("height",h)
        .style("background","#d3d3d3")
        .style("overflow","visible");

        const xscale=d3.scaleLinear().domain([0, data.length-1])
        .range([0,w]);
        const yscale=d3.scaleLinear().domain([0,h]).range([h,0]);
        const generateScaleLine=d3.line().x((d,i)=>xscale(i)).y(yscale)
        .curve(d3.curveCardinal);

        const xAxis=d3.axisBottom(xscale).ticks(data.length).tickFormat( i=> i+1);
        const yAxis=d3.axisLeft(yscale).ticks(5);

        svg.append('g').call(xAxis).attr("transform",`translate(0,${h})`)
        svg.append('g').call(yAxis);

        svg.selectAll('.line').data([data]).join("path").attr('d',d =>generateScaleLine(d))
        .attr('fill','none')
        .attr('stroke','blue')
    },[data]);


    return (
       <div>
           <svg ref={svgRef}></svg>
       </div>
    );
};

export default PieHome;