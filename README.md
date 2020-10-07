# Ejercicio-CO2
Ejercicio de control de viajes para .forEach

## Acerca de la Aplicacion
Lleva control de la emision de CO2 que generan tus empleados por viajes que tengan que realizar, a través de un simple formulario.

## Requisitos
MongoDB v4.2.5<br>
NodeJS v12.16.3

## Tecnologias
React v16.13.1<br>
Bootstrap v4.5.2<br>
Express v4.17.1

## Instrucciones de Ejecucion
1. Clone/Pull repositorio.
1. Abrir consola y ejecutar `npm install` en las carpetas **client** y **server** para instalar dependencias.
1. Abrir consola en carpeta **server** y ejecutar `npm start` para iniciar el Backend junto a la Base de Datos.
1. Abrir consola en carpeta **client** y ejecutar `npm run start` para iniciar el Frontend, abriendose en el navegador la aplicacion automaticamente al terminar de compilar.

## Consideraciones
Debido a falta de tiempo, hay features que restan implementarse:
- [ ] Compilar una build de Produccion del Frontend para que esté integrado al Backend y pueda ejecutarse de manera más simple.
- [ ] Al guardar un nuevo Viaje, la aplicacion debe redireccionar al listado de Viajes existentes.
<br>
Al no incluir en el formulario un campo para la fecha de viaje, se considera la fecha en la que se envió el formulario.
