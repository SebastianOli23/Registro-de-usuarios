let tabla=[    
    {
        "Cedula": "123456789",
        "IdUsuario": "001",        
        "Nombre": "Juan",
        "Apellido": "Perez",       
        "Direccion": "Calle 123",        
        "Telefono": "555-1234",        
        "Correo": "juanperez@example.com",        
        "Fecha de Nacimiento": "2005-04-07"    
    },   
     
    {        
        "Cedula": "987654321",        
        "IdUsuario": "002",        
        "Nombre": "María",        
        "Apellido": "García",        
        "Direccion": "Avenida Principal",       
         "Telefono": "555-5678",        
         "Correo": "mariagarcia@example.com",        
         "Fecha de Nacimiento": "2001-08-02"    
    }, 
       
    {    
        "Cedula": "456789123",        
        "IdUsuario": "003",        
        "Nombre": "Carlos",        
        "Apellido": "Rodríguez",        
        "Direccion": "Calle 456",        
        "Telefono": "555-2468",        
        "Correo": "carlosrodriguez@example.com",        
        "Fecha de Nacimiento": "2001-09-09"    
    }
];

let cuerpotabla=document.getElementById('tabla-usuarios')

function listar(){
    let listado="";
    for (let i = 0; i < tabla.length; i++) {
        listado+=`<tr><th scope="row">${(i+1)}</th>
        <td>${tabla[i].Cedula}</td><td>${tabla[i].IdUsuario}</td><td>${tabla[i].Nombre}</td><td>${tabla[i].Apellido}</td><td>${tabla[i].Direccion}</td><td>${tabla[i].Telefono}</td><td>${tabla[i].Correo}</td><td>${tabla[i]['Fecha de Nacimiento']}</td></tr>`
    }
    cuerpotabla.innerHTML=listado
}

function registrar(){
    let cedula=document.getElementById('cedula').value;

    // Verificar si la cédula ya existe en la lista de usuarios
    for (let i = 0; i < tabla.length; i++) {
        if (tabla[i].Cedula === cedula) {
            alert('El número de cédula ya está registrado');
            return;
        }
    }

    // Si la cédula no existe, continuar con el proceso de registro
    let idUsuario=document.getElementById('idUsuario').value;
    let nombre=document.getElementById('nombre').value;
    let apellido=document.getElementById('apellido').value;
    let direccion=document.getElementById('direccion').value;
    let telefono=document.getElementById('telefono').value;
    let correo=document.getElementById('correo').value;
    let fechadenacimiento=document.getElementById('fechadenacimiento').value;
    if (!nombre || !apellido || !direccion || !telefono || !correo || !idUsuario || !fechadenacimiento) {
        alert('Por favor, llenar todos los campos obligatorios.');
        return;
    }
    

    // Crear un objeto con los valores obtenidos
    let nuevoUsuario = {
        "Cedula": cedula,
        "IdUsuario": idUsuario,
        "Nombre": nombre,
        "Apellido": apellido,
        "Direccion": direccion,
        "Telefono": telefono,
        "Correo": correo,
        "Fecha de Nacimiento": fechadenacimiento
    };

    

    // Agregar el nuevo usuario al array
    tabla.push(nuevoUsuario);

    // Limpiar los campos de entrada
    document.getElementById('cedula').value = '';
    document.getElementById('idUsuario').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('fechadenacimiento').value = '';

    // Mostrar un mensaje de éxito
    alert('Usuario registrado correctamente');
    
    let listado="";
    for (let i = 0; i < tabla.length; i++) {
        listado+=`<tr><th scope="row">${(i+1)}</th>
        <td>${tabla[i].Cedula}</td><td>${tabla[i].IdUsuario}</td><td>${tabla[i].Nombre}</td><td>${tabla[i].Apellido}</td><td>${tabla[i].Direccion}</td><td>${tabla[i].Telefono}</td><td>${tabla[i].Correo}</td><td>${tabla[i]['Fecha de Nacimiento']}</td></tr>`
    }
    cuerpotabla.innerHTML=listado
}
