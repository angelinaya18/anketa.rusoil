const ugsn={
    view:"richselect", id:"ugsn", label:"УГС", labelAlign:"left",labelWidth:160,
    placeholder:"Нажмите, чтобы выбрать...",
    options:"...",
    on:{
        onChange: select_unp
    }
}

const direction={
    view:"richselect", id:"direction", label:"Направление", labelAlign:"right",labelWidth:160,
    placeholder:"Нажмите, чтобы выбрать...",
    options:{
        body:{
            template:"#value#"
        }
    },
    on:{
        onChange: select_direction
    }
}

const specialty={
    view:"richselect", id:"specialty", label:"Профиль программы", labelAlign:"left",labelWidth:160,
    placeholder:"Нажмите, чтобы выбрать...",
    options:{
        body:{
            template:"#value#"
        }
    },
    on:{
        onChange: select_specialty
    }
}

function select_unp(){
    webix.ajax().post("...", {token:"...",
        func:"get_option_slov_napr",iparent:$$('ugsn').getValue()},
    function(text,data){
        $$('direction').define("options",data.json());
        $$('direction').refresh();
    });
}

function select_direction(){
    webix.ajax().post("...", {token:"...",
        func:"get_option_slov_title",iparent:$$('direction').getValue()},
    function(text,data){
        $$('specialty').define("options",data.json());
        $$('specialty').refresh();
    });
}

function select_specialty(){
    var specialty=$$('specialty').getValue();
    var result=webix.ajax().post("core/result.php", 
    {
        specialty:specialty
    });
    $$('chart_res').clearAll();
    $$('chart_res').define("data",result);
    $$('chart_res').refresh();  
    
    var result2=webix.ajax().post("core/result_general.php", 
    {
        specialty:specialty
    }); 
    
    $$('res_radar').clearAll();
    $$('res_radar').define("data",result2);
    $$('res_radar').refresh();
    $$('res_general_txt').define("data",result2);
    $$('res_general_txt').refresh();
    
    $$("chart_res").show();
    $$("res_radar").show();
    $$("res_general_txt").show();
    
}
