const res_radar={
    view:"chart",
    id:"res_radar",
    type:"pie3D",
    value:"#estim#",
    borderless:true,
    color:custom_pie,
    tooltip:{
        template:"#estim#%", 
        dx:10, dy:20,
        delay: 100
    }
}

const res_text={
    view:"template",
    borderless:true,
    id:"res_general_txt",
    height:50,
    hidden:true,labelAlign:"right",
    template: "Качество образовательной программы по результатам опроса: <b>#estim#%</b>"
}

function res_radar_xAxis(obj, common){
    var res=obj.comp_name.slice(0, obj.comp_name.indexOf(' '));
    return res;
}

var count=0; //счетчик для обозначения цвета (0-качество, 1-остальное)

function custom_pie(){
        if (count==0)
        {
            count++;
            return "#008000";
        }
        else{
            count=0;
            return "#ffffff";
        }
            
};