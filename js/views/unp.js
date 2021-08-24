const ugsn={
    view:"richselect", id:"ugsn", label:"УГС", labelAlign:"left",labelWidth:160,
    placeholder:"Нажмите, чтобы выбрать...",
    options:"post->...",
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
        onChange: competen
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

function competen(){
    webix.ajax().post("...", {token:"...",
        func:"get_comp",iparent:$$('specialty').getValue()},
    function(text,data){
        $$('comp_treetable').clearAll();
        $$('comp_treetable').parse(data.json(),"json",false);
    });
}