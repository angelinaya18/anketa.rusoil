const toolbar={
    view:"toolbar",
    css:"my_toolbar",
    cols:[
        {
            view:"label",
            template:"<div class='toolbar_logo'><img src='../img/usptu_logo.png' width='40' height='40'></div>"+
                        "<div class='toolbar_title'>Анкетирование<br>работодателей</div>"
        },
        {
            type:"icon",view:"button", id:"btn_res", type:"icon",minWidth:65, label:"Результаты",
            icon:"mdi mdi-align-vertical-bottom",
            width:200,
            css:"webix_transparent",
                on:{
                    onItemClick:function(){
                        window.location.href = 'result.html';
                    }
                }
        }
    ]
};