const comp_treetable={
    body:{
        view:"treetable",
        id:"comp_treetable",
        css:"tree_style",
        select:"row",
        resizeRow:true,
        type:{
            folder:function(obj){
                if(obj.$level == 1)
                    return "<span class='webix_icon mdi mdi-account-cog'></span>";
                if (obj.$level == 2)
                    return "<span class='webix_icon mdi mdi-school'></span>";
            }
        },
        columns:[
            { id:"nname",   header:["Компетенции",{ content:"textFilter",placeholder:"Поиск...",}], fillspace:true,
            template:custom_treetable
            }
        ],
        checkboxRefresh:true,
        fixedRowHeight:false,
        on:{
            "onresize":webix.once(function(){ 
                this.adjustRowHeight("nname", true);
            })
        },
        }
    
}

function custom_treetable(obj, common){
    if(obj.$level == 1)
        return common.treecheckbox(obj, common)+common.space(obj, common) +
        common.treetable(obj, common)+obj.nname;
    if (obj.$level == 2)
        return "<a href='https://rusoil.net/files/СТУДЕНТУ/Documents/Polozhenie_OPOP.pdf'><span class='webix_icon mdi mdi-file-search'></span></a>"+common.space(obj, common)+common.treetable(obj, common)+obj.nname;
};

