const btn_save_result={
    view:"button",minWidth:65, value:"Сохранить",
            on:{
                onItemClick:function(){
                    webix.toExcel($$("chart_res"), {
                        rawValues:true,
                        filename:"Отчет о качестве ОП",
                        columns:{
                            "estim":{header:"Степень реализации, %",exportType:"number"},
                            "comp_name":{header:"Компетенция"}
                        }
                    })
                }
            }  
}