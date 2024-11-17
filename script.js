document.addEventListener('DOMContentLoaded', function () {
   
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) { 
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
    
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) { 
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    
    const carrito = [];
    
    document.querySelectorAll('.agregar-al-carrito').forEach(boton => {
        boton.addEventListener('click', function () {
            const producto = {
                nombre: this.dataset.nombre,
                precio: parseFloat(this.dataset.precio),
                cantidad: 1
            };
            agregarAlCarrito(producto);
        });
    });

    function agregarAlCarrito(producto) {
        const existe = carrito.find(item => item.nombre === producto.nombre);
        if (existe) {
            existe.cantidad++;
        } else {
            carrito.push(producto);
        }
        actualizarCarrito();
    }

    function actualizarCarrito() {
        console.log('Carrito:', carrito); 
    }
});
