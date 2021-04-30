1.	¿Qué es un servidor HTTP? 
Un servidor HTTP procesa una aplicación del lado del servidor, realizando conexiones bidireccionales o unidireccionales y síncronas o asíncronas con el cliente y generando o cediendo una respuesta en cualquier lenguaje o aplicación del lado del cliente. El código recibido por el cliente es renderizado por un navegador web. Para la transmisión de todos estos datos suele utilizarse algún protocolo.

2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
GET: Obtiene el recurso indicado. Es el método que se utiliza cuando se pide el contenido de una página web, por ejemplo.
HEAD: Similar a GET, pero no se obtiene el cuerpo de respuesta, únicamente los metadatos de la cabecera.
POST: añade datos al servidor. Siempre es un método de creación.
PUT: es una solicitud para almacenar la entidad suministrada en el URI indicado. Si la entidad no existe, se crea. Si la entidad existe, se actualiza.
DELETE: elimina el recurso indicado.
TRACE: devolverá la misma información que se ha enviado en la solicitud. Es una especie de eco. Sirve para comprobar si la solicitud se ha visto modificada por servidores intermedios.
OPTIONS: Devuelve los métodos HTTP soportados por el servidor para la URL especificada.
CONNECT: Convierte la solicitud en un túnel TCP/IP. Normalmente se usa para crear comunicaciones HTTPS a través de proxys HTTP sin encriptación.
PATCH; Aplica modificaciones parciales al recurso especificado.
3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
Request: Petición al servidor web desde un ordenador.
Response: Respuesta del servidor web al ordenador.

4.	¿Qué es un queryString? (En el contexto de una url)
que se utiliza para hacer referencia a una interacción con una base de datos. Es la parte de una URL que contiene los datos que deben pasar a aplicaciones web como los programas CGI.




5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
Es un código de respuesta del servidor HTTP que nos ofrecerá el estatus ante una petición estándar correcta a la que puede responder sin problemas.
•	1xx: Los que empiezan por 100, son los códigos de mensaje referentes a mensajes informativos a nivel de protocolo HTTP no es típico encontrarlos.
•	2xx: Los que empiezan por 200 son los más comunes ya que indican el cliente ha tenido éxito a la hora de procesar su petición
•	3xx: Son los relativos a redirecciones e indican que el cliente debe realizar alguna acción adicional a la hora de completar de forma correcta la petición.
•	4xx: Hace referencia a un error que se ha producido desde el cliente al realizar la petición
•	5xx: Estos errores son menos comunes y hacen referencia a fallos que se han producido en el lado servidor.

6.	¿Cómo se envía data en un Get y cómo en un POST? 
GET: Lleva los datos de forma "visible" al cliente (navegador web). El medio de envío es la URL. Los datos los puede ver cualquiera.
POST: consiste en datos "ocultos" (porque el cliente no los ve) enviados por un formulario cuyo método de envío es post. Es adecuado para formularios. Los datos no son visibles.

7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
TRACE, ya que, devolverá la misma información que se ha enviado en la solicitud. Es una especie de eco. 

8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
JSON: Es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web (por ejemplo: enviar algunos datos desde el servidor al cliente, así estos datos pueden ser mostrados en páginas web, o vice versa).
Estructura: 
"members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },


XML: Es el nuevo estándar universal para intercambio electrónico de datos. Este estándar es un metalenguaje que puede ser utilizado para describir la estructura lógica y el contenido de una gran variedad documentos, y puede ser adaptado para satisfacer una gran cantidad de aplicaciones.
Estructura: <libreria> 
  <libro>
    <autores>
        <autor>Elizabeth Castro</autor> 
    <autores>
    <titulo>XML Guía de Aprendizaje</titulo> 
    <precio moneda="euros">30</precio>
    <descriptores>
        <descriptor>lenguajes<descriptor>
        <descriptor>XML<descriptor>
    <descriptores>
             
  </libro> 
</libreria>

9.	Explicar brevemente el estándar SOAP
Es un protocolo estándar que define cómo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML.

10.	Explicar brevemente el estándar REST Full
Es un servicio que funciona como un estándar para compartir información, en un sistema de doble vía: Consulta y Respuesta (Request => Response).
11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los HTTP headers son la parte central de los HTTP requests y responses, y transmiten información acerca del navegador del cliente, de la página solicitada, del servidor, etc. La primera línea es la línea del request, que contiene su información básica.
El key content-type en un header dice al cliente que tipo de contenido será retornado.
