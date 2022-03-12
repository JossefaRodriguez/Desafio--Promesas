//Crear una función asíncrona que contenga la URL en una variable.
const mostrarTitulos = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/photos'
        await fetch(url)
                .then(response => response.json())
                .then(data => {
                         for(let i=0; i <= 20; i++){
                            console.log(data[i])
                        }
                    });

    } catch (error) {
        console.log(error)
    }
}
const getMensaje = () => {
    return new Promise((resolve) => {
    setTimeout(() => { resolve('Información enviada') }, 3000)
    })
    }
const llamadaFunciones = async () => {
    const titulos = await mostrarTitulos()
    const resp = await getMensaje();
    console.log(titulos)
    console.log(resp)
    }
llamadaFunciones()

//● Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente
//con el método fetch, utilizando a la vez await para que retorne directamente el valor
//de la promesa.
//● Utilizando métodos para iterar arreglos, como por ejemplo el forEach, solamente
//mostrar los primeros 20 títulos de álbumes de acuerdo al número de id indicados por
//la URL.