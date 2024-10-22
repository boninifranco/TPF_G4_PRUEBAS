import React, { useEffect, useState } from 'react'

export const AddCartones = () => {

    const [imagenes, setImagenes] = useState([])
    const [seleccionadas, setSeleccionadas] = useState([]); // Almacena las 90 imágenes seleccionadas
    const [casilleros, setCasilleros] = useState([]); // Almacena los casilleros generados
    const [filas, setFilas] = useState([]);
    const [cartones, setCartones] = useState([]);

    const totalCartones = 3; // Definimos cuántos cartones queremos (50 cartones)
    const casillerosPorCarton = 15; // Cada cartón tiene 15 casilleros (3 filas de 5 casilleros)
    const partida = {
        salaId: 1,
        horaInicio:"hoy",
        cantidadCartones: totalCartones,
        estadoPartida: false
    }

    
  const crearPartida = async()=>{
    try {
        await fetch('http://localhost:3000/sala',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                //body: {},
              });

              console.log('sala creada')
    } catch (error) {
        console.log('No se puedo crear la sala')
        
    }
    try {
        await fetch('http://localhost:3000/partidas',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(partida), 
              });
              console.log('Partida creada')

        
        
    } catch (error) {
        console.log('No se puedo crear la partida')
        
    }

    try {
        for (let i = 0; i < totalCartones;i++){
            await fetch('http://localhost:3000/cartones',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idPartida:1
                }),
              });
              console.log('cartones creados')
        }
        
    } catch (error) {
        console.log('No se pudieron crear los cartones')
        
    }
  }
    // Función para obtener imágenes desde el backend
  const obtenerImagenes = async () => {
    try {
      const response = await fetch('http://localhost:3000/imagenes'); // Asegúrate de que esta URL sea correcta
      if (!response.ok) {
        console.log(response)
        throw new Error('Error al obtener las imágenes');
      }
      const data = await response.json();
      setImagenes(data); // Guarda las imágenes en el state
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Función para seleccionar imágenes aleatorias
  const seleccionarImagenesAleatorias = (imagenes, cantidad) => {
    /*const seleccionadas = [];
    for (let i = 0; i < cantidad; i++) {
      const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
      seleccionadas.push(imagenes[indiceAleatorio]); // Cada imagen es un objeto con id, nombre, y url
    }*/
   const imgseleccionadas = new Set();
   while (imgseleccionadas.size < cantidad) {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    imgseleccionadas.add(imagenes[indiceAleatorio]); // El Set asegura que no se repita ninguna imagen
  }
  return Array.from(imgseleccionadas);
  
    //return seleccionadas;
  };
  //Función para enviar seleccionadas a la base de datos

  const enviarSeleccionadas = async()=>{
    try {
      for (const seleccionada of seleccionadas){
        await fetch('http://localhost:3000/img-seleccionadas',{
          method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    partidaId:1,
                    imagenId: seleccionada.imagenId,
                }),
              });
              console.log('Imagenes seleccionadas enviadas')

      }
    } catch (error) {
              console.log('No se pudieron enviar las imagenes seleccionadas')
      
    }
  }

  // Función para generar casilleros y cartones
  const generarCasillerosYFilas = (imagenesSeleccionadas) => {
    const totalFilas = totalCartones * 3;
    let idAutoincrement = 1;
    let idFilaAutoincrement = 1;
    const cartones = [];  //COMENTARIO...decia cartones
    const filasGeneradas = [];

    for (let carton = 0; carton < totalCartones; carton++) {
      const imagenesUsadasEnCarton = new Set();

      for (let fila = 0; fila < 3; fila++) {
        const filaActual = new Set();

        while (filaActual.size < 5) {
          const imagenAleatoria = imagenesSeleccionadas[Math.floor(Math.random() * imagenesSeleccionadas.length)];

          if (!filaActual.has(imagenAleatoria) && !imagenesUsadasEnCarton.has(imagenAleatoria)) {
            filaActual.add(imagenAleatoria);
            imagenesUsadasEnCarton.add(imagenAleatoria);

            // Agregamos el casillero COMENTARIO decia cartones.push...
            cartones.push({
              //id: idAutoincrement++,
              filaId: idFilaAutoincrement,
              salio: false,
              imagenId: imagenAleatoria.imagenId,
            });
          }
        }

        // Generar las filas
        filasGeneradas.push({
          //id: idFilaAutoincrement,
          cartonId: carton + 1, // Cada fila pertenece a un cartón
          aciertos: 0, // Inicializado en 0
        });

        idFilaAutoincrement++;
      }
    }
    console.log(cartones)
    console.log(filasGeneradas)
    //setCasilleros(casilleros);
    //setFilas(filasGeneradas);
    return { cartones, filasGeneradas }; //COMENTARI...decia cartones en el primer parametro
    
  }

  const enviarFilas = async (filas)=>{
    let filasGuardadas = [];
    for (const fila of filas){
        try {
            const responseFilas = await fetch('http://localhost:3000/filas', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(fila),
                //body: fila
              });
          
              if (!responseFilas.ok) {
                throw new Error('Error al enviar las filas');
              }
          
              const data = await responseFilas.json(); // Datos de la respuesta, incluye el ID generado
              filasGuardadas.push(data); // Obtener las filas con sus 'id' generados
          
              
          
                console.log('Filas enviadas correctamente');
            
        } catch (error) {
                console.error('Error al enviar las filas:', error);
            }
        }
    }

  const enviarCasilleros = async (casilleros)=>{
    for( const casillero of casilleros){
        try {
            const responseCasilleros = await fetch('http://localhost:3000/casilleros', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(casillero),
              });
          
              if (!responseCasilleros.ok) {
                throw new Error('Error al enviar los casilleros');
              }
              console.log('Casilleros enviados correctamente');
            
        } catch (error) {
            console.error('Error al enviar los casilleros:', error);
            
        }
    }
  }
    //console.log(`Estas son las filas recuperadas de la base de datos ${filasGuardadas}`)
    useEffect(() => {
        const cargarYSeleccionar = async () => {
        await  obtenerImagenes();
        };
    
        cargarYSeleccionar();
      }, []);    

    
    useEffect(() => {
        if (imagenes.length > 0) {
          const imagenesSeleccionadas = seleccionarImagenesAleatorias(imagenes, 90);
          setSeleccionadas(imagenesSeleccionadas);
        }
      }, [imagenes]);

      console.log(`Estas son las imagenes seleccionadas ${ JSON.stringify(seleccionadas)}`)

    useEffect(() => {
        if (seleccionadas.length > 0) {
            
            const { cartones, filasGeneradas } = generarCasillerosYFilas(seleccionadas);//COMENTARIO...decia cartones en primer parametro
            setCasilleros(cartones);// COMENTARIO...decia cartones
            setFilas(filasGeneradas);
          console.log('aca deberia haber guardado en filas')
          
    
          // Llamada al backend para enviar los casilleros y filas
          //enviarFilasYCasilleros(filasGeneradas, cartones);
        }
        
      }, [seleccionadas]);
      console.log(`Estas son las filas generadas en "filas" ${filas}`)
      console.log(filas.length)
      
      const addFilas = ()=>{
        enviarFilas(filas)
      }

      const addCasilleros = ()=>{
        enviarCasilleros(casilleros)
      }

      const addPartida = ()=>{
        crearPartida()
      }

      const addSeleccionadas = ()=>{
        enviarSeleccionadas()
      }
        
  return (
    <div>
          <h1>Bingo - Generación de Casilleros</h1>
          <p>Total de casilleros generados: {casilleros.length}</p>
          <button onClick={addPartida}>Crear Partida</button>
          <button onClick={addFilas}>Enviar Filas</button>
          <button onClick={addCasilleros}>Enviar Casilleros</button>
          <button onClick={addSeleccionadas}>Enviar Seleccionadas</button>
          <div className="grid-container">
            {Array.from({ length: totalCartones * 3 }, (_, fila) => (
              <div key={fila} className="fila-container">
                {casilleros
                  .filter(casillero => casillero.filaId === fila + 1)
                  .map((casillero, index) => (
                    <div key={index} className="casillero-item">
                      <img
                        src={imagenes.find((img) => img.id === casillero.imagenId)?.url}
                        alt={imagenes.find((img) => img.id === casillero.imagenId)?.nombre}
                        width="100"
                      />
                      <p>{imagenes.find((img) => img.id === casillero.imagenId)?.nombre}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
  )
}
