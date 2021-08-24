const toolbar_anketa={
    view:"toolbar",
    css:"my_toolbar",
    cols:[
        {
            view:"label",
            template:"<div class='toolbar_logo'><img src='../img/usptu_logo.png' width='40' height='40'></div>"+
                        "<div class='toolbar_title'>Анкетирование<br>работодателей</div>"
        },
        {},
        {
            type:"icon",view:"button", id:"btn_anketa", type:"icon",minWidth:65, label:"На главную",
            width:200,
            css:"webix_transparent",
            icon:"mdi mdi-arrow-left-circle",
                on:{
                    onItemClick:function(){
                        window.location.href = 'index.html';
                    }
                }
        }
    ]
};