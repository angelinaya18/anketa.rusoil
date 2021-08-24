const company_type_set="./data/company_type_set.json";
const position_set="./data/position_set.json";
const struct_div_set="./data/struct_div_set.json";

const personal_form = {
    view:"form", id:"personal_data",minWidth:350,
    scroll:"y",
    elements:[
        {type:"section", template:"Пожалуйста, введите Ваши данные"},
        {view:"text", name:"family", label:"Фамилия",placeholder:"Введите данные...", invalidMessage:"Введите фамилию"},
        {view:"text", name:"name", label:"Имя",placeholder:"Введите данные...", invalidMessage:"Введите имя"},
        {view:"text", name:"otch", label:"Отчество",placeholder:"Введите данные...", invalidMessage:"Введите отчество"},
        {view:"richselect", name:"company_type", label:"Тип предприятия", labelPosition:"top", labelAlign:"center",
            placeholder:"Нажмите, чтобы выбрать...",
            options:{
                url:company_type_set,
                body:{
                    template:"#value#"
                }
            }
        },
        {view:"text", name:"company_name", label:"Название предприятия",labelPosition:"top", labelAlign:"center",
            placeholder:"Введите наименование предприятия",
        },
        {view:"richselect", name:"position", label:"Должность", labelPosition:"top", labelAlign:"center",
            placeholder:"Нажмите, чтобы выбрать...",
            options:{
                url:position_set,
                body:{
                    template:"#value#"
                }
            }
        },
        {view:"richselect", name:"structural_division", label:"Структурное подразделение", labelPosition:"top", labelAlign:"center",
            placeholder:"Нажмите, чтобы выбрать...",
            options:{
                url:struct_div_set,
                body:{
                    template:"#value#"
                }
            }
        },
        { view:"checkbox", name:"personal_agree",labelRight:"Я согласен на обработку персональных данных", labelWidth:0,
        value:0},
        {
            margin:10,
            cols:[
                {},
                {
                    view:"button", id:"btn_save", minWidth:65, value:"Далее",height:50,css:"button_ns",
                    click: form_save
                },
                {}
            ]
        },
        {}
    ],
    rules:{ 
        family:webix.rules.isNotEmpty,
        name:webix.rules.isNotEmpty,
        otch:webix.rules.isNotEmpty,
        company_type:webix.rules.isNotEmpty,
        company_name:webix.rules.isNotEmpty,
        position:webix.rules.isNotEmpty,
        structural_division:webix.rules.isNotEmpty,
        personal_agree:webix.rules.isChecked
    }
}

function form_save(){
    const personal_form = $$("personal_data");
    const vals=personal_form.getValues();
    if(personal_form.validate()){
        webix.ajax().post("../core/form_save.php", 
        {
            action:"newEmployer",
            family:vals.family,
            name:vals.name,
            otch:vals.otch,
            company_type:vals.company_type,
            company_name:vals.company_name,
            position:vals.position,
            structural_division:vals.structural_division
        }
        );
        window.location.href = 'anketa.html';
    }
    else{
        webix.alert({
            title: "Необходимо заполнить все поля!"
        })
    }
}