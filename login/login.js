$(document).ready(function () {
    const $select = $("#email");

    const limpiar = () => {
        $select.empty();
      };
$("#btnLimpiar").click(limpiar);
const Enviar = () => {
    $select.submit();
  };
/* $("#btnEnviar").click(Enviar);
alert("Bienvenido Usuario")
  });*/
