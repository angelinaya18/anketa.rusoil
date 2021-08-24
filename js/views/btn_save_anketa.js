const btn_save_anketa={
    view:"button",minWidth:65, value:"Сохранить",css:"button_ns",click:anketa_save
}

function anketa_save(){
    const comp_treetable = $$("comp_treetable");
    const specialty = $$('specialty').getValue();
    var res=comp_treetable.find(function(obj){
        return obj.$level == 1;
    });
    var check_id;
    var isChecked;
    var check_comp;
    for(i=0;i<res.length;i++){
        check_id=res[i].id;
        check_comp=res[i].nname;
        isChecked = comp_treetable.isChecked(check_id);
        switch(isChecked){
            case true:
                webix.ajax().post("core/estim.php", 
                {
                    comp_id:check_id,
                    comp_name:check_comp,
                    estim:1,
                    specialty:specialty
                });
                break;
            default:
                webix.ajax().post("core/estim.php", 
                {
                    comp_id:check_id,
                    comp_name:check_comp,
                    estim:0,
                    specialty:specialty
                });
                break;
        }
    }
    webix.alert({
        title:"Сохранено, спасибо за участие!",
        ok:"ОК!"
    }).then(() => {
        window.location.href = 'index.html';
   });
    
}