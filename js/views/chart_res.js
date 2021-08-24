const chart_res={
    view:"chart",
    id:"chart_res",
    type:"bar",
    value:"#estim#",
    label:"#estim#",
    gravity:1.5,
    borderless:true,
    radius:0,
    border:false,
    hidden:true,
    color:function(obj){
        if (obj.estim < 60)
            return "#FF0000";
        if ((obj.estim > 59)&&(obj.estim < 80))
            return "#FFA500";
        if (obj.estim > 79)
            return "#228B22";
    },
    tooltip:{
        template:"#comp_name#", 
        dx:10, dy:20,
        delay: 100
    },
    xAxis:{
        title:"Компетенции",
        template:""
    },
    yAxis:{
        title:"Степень реализации, %",
        start:0,
        end:100,
        step:10,
    },
    legend:{
        values:[{text:"Плохо",color:"#FF0000"},{text:"Хорошо",color:"#FFA500"},{text:"Отлично",color:"#228B22"}],
        valign:"middle",
        align:"right",
        width:90,
        layout:"y"
    },
}