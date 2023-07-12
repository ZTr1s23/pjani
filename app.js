function validarCampos() {
      // Obtener referencias a los campos de entrada
      var nombre = document.getElementById("nombre");
      var apellidos = document.getElementById("apellidos");
      var correo = document.getElementById("correo");
      var contra = document.getElementById("contra");

      // Verificar si los campos están vacíos
      if (nombre.value === '' || apellidos.value === '' || correo.value === '' || contra.value === ''  ) {
        // Mostrar mensaje de error
        alert("NO PUEDEN EXISTIR CAMPOS VACIOS");
        nombre.value = '';
        correo.value = '';
        contra.value = '';
        barraCarga.value = '';
        
      } else {
        // Todos los campos están completos, enviar formulario
        alert("REGISTRO EXITOSO");
        nombre.value = '';
        correo.value = '';
        contra.value = '';
        barraCarga.value = '';
      }
      
};


function eliminarCampos() {
      // Obtener referencias a los campos de entrada
      var nombre = document.getElementById("nombre");
      var apellidos = document.getElementById("apellidos");
      var correo = document.getElementById("correo");
      var contra = document.getElementById("contra");
      var barraCarga = document.getElementById("barra-carga");

      if (nombre.value === '' && apellidos.value === '' && correo.value === '' && contra.value === '') {
        alert("NO EXISTE INFORMACION PARA BORRAR");
      } else {
        nombre.value = '';
        apellidos.value = '';
        correo.value = '';
        contra.value = '';
        barraCarga.value=0;
      }
      
};

function actualizarBarraCarga() {
  // Obtener referencias a los campos de entrada
      var nombre = document.getElementById("nombre");
      var apellidos = document.getElementById("apellidos");
      var correo = document.getElementById("correo");
      var contra = document.getElementById("contra");

  // Calcular el progreso
  var progreso = 0;
  var camposCompletos = 0;

  if (nombre.value !== '') {
    camposCompletos++;
  }

if (apellidos.value !== '') {
    camposCompletos++;
  }

  if (correo.value !== '') {
    camposCompletos++;
  }
  if (contra.value !== '') {
    camposCompletos++;
  }

  progreso = (camposCompletos / 4) * 100; 

  // Actualizar el ancho de la barra de carga
  var barraCarga = document.getElementById("barra-carga");
  barraCarga.style.width = progreso + "%";
};

