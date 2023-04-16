$(document).ready(function () {
    const $select = $("#email");

const limpiar = () => {$select.empty();

$("#btnLimpiar").click(limpiar);
   
};

const enviar = () => {$select.submit();
$("#btnEnviar").click(enviar);
 
};
})

