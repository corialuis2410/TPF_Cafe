$(document).ready(function () {
    const $select = $("#email");

$("#btnLimpiar").click(limpiar);
    const limpiar = () => {$select.empty();
};

$("#btnEnviar").click(enviar);
    const enviar = () => {$select.submit();
};
})

