$(document).ready(function(){
    $('.tele').mask('(00)0-0000.0000');

    $('.cpf').mask('000.000.000-00');
    $('.end').mask('0000-000')


    $('.meu-form').validate({
        rules: {
                nome: {
                    required: true,
                
                },
                email: {
                    required: true,
                    email:true,
                },
                telefone: {
                    required: true,
                },
                cpf:{
                    required:true,
                },
                end:{
                    required:true,
                },
                cep:{
                    required:true,
                },
        messages:{
                nome: 'insira seu nome.'
                },
        submitHandler: function(form){
                    console.log(form)
                },
            /*invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                console.log(form)
                    }
                },*/
        }
    })

})