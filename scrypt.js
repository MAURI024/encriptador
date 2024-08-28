// Función para encriptar el texto
document.getElementById("encriptar").addEventListener("click", function() {
    let inputText = document.getElementById("ingresoTexto").value; // Obtener el texto desde el textarea
    if (inputText) {
        let encryptedText = btoa(inputText); // Encriptación Base64
        document.getElementById("result").innerHTML = `<p>${encryptedText}</p>`;
        document.getElementById("result").classList.add("presentacion__resultado--activo"); // Aplicar la clase CSS
        document.getElementById("result").classList.add("presentacion__contenido--activo");
    } else {
        document.getElementById("result").innerHTML = `
            <img class="presentacion__muneco" src="./images/Muñeco.png" alt="Muñeco">
            <strong class="presentacion__sintexto">Ningun mensaje fue encontrado</strong>
            <a class="presentacion__aviso ">Ingresa el texto que quieres encriptar o Desencriptar</a>
        `;
        document.getElementById("result").classList.remove("presentacion__resultado--activo"); // Quitar la clase CSS
    }
});

// Función para desencriptar el texto
document.getElementById("desencriptar").addEventListener("click", function() {
    let encryptedText = document.getElementById("ingresoTexto").value; // Obtener el texto desde el textarea
    if (encryptedText) {
        try {
            let decryptedText = atob(encryptedText); // Desencriptación Base64
            document.getElementById("result").innerHTML = `<p>${decryptedText}</p>`;
            document.getElementById("result").classList.add("presentacion__resultado--activo"); // Aplicar la clase CSS
            document.getElementById("result").classList.add("presentacion__contenido--activo");
        } catch (e) {
            document.getElementById("result").innerHTML = `
                <img class="presentacion__muneco" src="./images/Muñeco.png" alt="Muñeco">
                <strong class="presentacion__sintexto">El texto ingresado no es válido o no está encriptado correctamente.</strong>
                <a class="presentacion__aviso ">Ingresa el texto que quieres encriptar o Desencriptar</a>
            `;
            document.getElementById("result").classList.remove("presentacion__resultado--activo"); // Quitar la clase CSS
        }
    } else {
        document.getElementById("result").innerHTML = `
            <img class="presentacion__muneco" src="./images/Muñeco.png" alt="Muñeco">
            <strong class="presentacion__sintexto">Ningun mensaje fue encontrado</strong>
            <a class="presentacion__aviso ">Ingresa el texto que quieres encriptar o Desencriptar</a>
        `;
        document.getElementById("result").classList.remove("presentacion__resultado--activo"); // Quitar la clase CSS
    }
});
