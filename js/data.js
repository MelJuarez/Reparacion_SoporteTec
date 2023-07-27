let data = [
    {   //1
        titulo: "Cambio de pasta térmica",
        img: "https://hardzone.es/app/uploads-hardzone.es/2019/08/Pasta-térmica.jpg",
        descripcion: "Cómo cambiar la pasta térmica del procesador",
        precio:100,
        herramientas: [
            "Destornillador",
            "Paño de microfibra",
            "Pasta térmica"
        ],
        pasoAPaso: [
            "Apaga la computadora y desconéctala de la corriente.",
            "Desmonta el disipador de calor y el ventilador del procesador.",
            "Limpia cuidadosamente la pasta térmica antigua del procesador con el paño de microfibra.",
            "Aplica una pequeña cantidad de pasta térmica nueva en el centro del procesador.",
            "Vuelve a colocar el disipador de calor y el ventilador en su lugar.",
            "Asegúrate de que estén bien sujetos y ajustados los tornillos.",
            "Conecta nuevamente la computadora a la corriente.",
            "Enciende la computadora y verifica la temperatura del procesador para asegurarte de que la pasta térmica esté funcionando correctamente."
        ]
    },
    {   //2
        titulo: "Instalación de Software",
        img: "https://static.vecteezy.com/system/resources/previews/005/163/462/non_2x/man-updating-software-on-computer-with-progress-bar-and-installation-software-system-illustration-vector.jpg",
        descripcion: "Cómo instalar software en una computadora",
        precio:100,
        herramientas: [
            "Computadora con sistema operativo instalado",
            "Software a instalar"
        ],
        pasoAPaso: [
            "Descarga el software desde una fuente confiable.",
            "Abre el archivo de instalación del software.",
            "Sigue las instrucciones del asistente de instalación.",
            "Acepta los términos y condiciones de uso, si es necesario.",
            "Selecciona la ubicación de instalación y las opciones adicionales, si corresponde.",
            "Espera a que finalice la instalación.",
            "Reinicia la computadora, si es requerido por el software instalado.",
            "Verifica que el software funcione correctamente."
        ]
    },
    {   //3
        titulo: "Resolución de problemas de red",
        img: "https://incuatro.com/wp-content/uploads/2019/06/Redes-informaticas.jpg",
        descripcion: "Cómo resolver problemas de conectividad de red",
        precio:100,
        herramientas: [
            "Computadora con conexión a internet",
            "Comprobador de cables de red",
            "Comprobador de conexiones de red"
        ],
        pasoAPaso: [
            "Verifica que los cables de red estén correctamente conectados en ambos extremos.",
            "Reinicia el módem y el enrutador para restablecer la conexión.",
            "Verifica la configuración de red en la computadora y asegúrate de que esté configurada correctamente.",
            "Ejecuta el solucionador de problemas de red en el sistema operativo.",
            "Verifica si hay conflictos de dirección IP en la red.",
            "Actualiza los controladores de red de la computadora.",
            "Revisa la configuración de firewall y antivirus, ya que pueden bloquear la conexión.",
            "Si el problema persiste, contacta al proveedor de servicios de internet (ISP)."
        ]
    },
    {   //4
        titulo: "Eliminación de malware",
        img: "https://images.ecestaticos.com/A9sGHgjs9-Wf7pTrmRGcEeX_WXQ=/3x130:1630x1040/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd0d%2F6e7%2F952%2Fd0d6e7952c575b655bb3886490d07abe.jpg",
        descripcion: "Cómo detectar y eliminar malware de una computadora",
        precio:100,
        herramientas: [
            "Antivirus actualizado",
            "Herramienta de eliminación de malware"
        ],
        pasoAPaso: [
            "Ejecuta un escaneo completo del sistema con el antivirus actualizado.",
            "Si se detectan amenazas, sigue las instrucciones para eliminarlas.",
            "Si el antivirus no puede eliminar el malware, utiliza una herramienta de eliminación de malware especializada.",
            "Asegúrate de eliminar por completo las amenazas detectadas.",
            "Realiza un segundo escaneo para confirmar que la computadora esté libre de malware."
        ]
    },
    {   //5
        titulo: "Actualización de controladores",
        img: "https://cifpn1.com/tic/wp-content/uploads/2020/05/drivers_1200x720-656x394.png",
        descripcion: "Cómo actualizar los controladores de hardware en una computadora",
        precio:100,
        herramientas: [
            "Conexión a internet",
            "Navegador web",
            "Administrador de dispositivos"
        ],
        pasoAPaso: [
            "Identifica los dispositivos que necesitan actualización en el Administrador de dispositivos.",
            "Abre el navegador web y visita el sitio web del fabricante del dispositivo o de la computadora.",
            "Busca la sección de descargas o soporte y encuentra los controladores más recientes para cada dispositivo.",
            "Descarga los controladores adecuados para el sistema operativo específico.",
            "Instala los controladores descargados siguiendo las instrucciones del asistente de instalación.",
            "Reinicia la computadora para aplicar los cambios.",
            "Verifica en el Administrador de dispositivos que los controladores se hayan instalado correctamente."
        ]
    },
    {   //6
        titulo: "Configuración de red inalámbrica",
        img: "https://www.redesinalambricas.es/wp-content/uploads/2019/03/redes-inalambricas.jpg",
        descripcion: "Cómo configurar una red inalámbrica en el enrutador",
        precio:100,
        herramientas: [
            "Computadora con conexión a internet",
            "Enrutador inalámbrico"
        ],
        pasoAPaso: [
            "Conecta la computadora al enrutador mediante un cable de red.",
            "Accede a la página de configuración del enrutador a través de un navegador web.",
            "Inicia sesión con las credenciales de administrador del enrutador.",
            "Busca la sección de configuración inalámbrica.",
            "Establece un nombre (SSID) para la red inalámbrica.",
            "Configura una contraseña segura para proteger la red.",
            "Selecciona el tipo de seguridad (WPA2 es recomendado) y establece la clave de seguridad.",
            "Aplica los cambios y desconecta la computadora del cable de red.",
            "Conéctate a la red inalámbrica con la contraseña configurada.",
            "Verifica que la conexión inalámbrica funcione correctamente."
        ]
    },
    {   //7
        titulo: "Recuperación de datos",
        img: "https://centribal.com/wp-content/uploads/2020/05/Tipos-RD-min.png",
        descripcion: "Cómo recuperar datos perdidos o borrados en una unidad de almacenamiento",
        precio:100,
        herramientas: [
            "Software de recuperación de datos",
            "Unidad de almacenamiento externa (opcional)"
        ],
        pasoAPaso: [
            "Detén cualquier escritura en la unidad de almacenamiento afectada para evitar sobrescribir datos.",
            "Conecta la unidad de almacenamiento a otra computadora o utiliza una unidad de almacenamiento externa para recuperar los datos.",
            "Descarga e instala un software de recuperación de datos confiable en la computadora.",
            "Inicia el software y selecciona la unidad de almacenamiento afectada para comenzar el escaneo.",
            "Espera a que el software realice un escaneo completo en busca de datos perdidos o borrados.",
            "Previsualiza los archivos encontrados y selecciona los que deseas recuperar.",
            "Elige una ubicación segura para guardar los archivos recuperados (no en la unidad de almacenamiento afectada).",
            "Inicia el proceso de recuperación y espera a que finalice.",
            "Verifica los archivos recuperados para asegurarte de que estén en buen estado."
        ]
    },
    {   //8
        titulo: "Optimización de rendimiento",
        img: "https://pandorafms.com/blog/wp-content/uploads/2017/12/Optimizacion-de-rendimiento-web-featured.png",
        descripcion: "Cómo mejorar el rendimiento de una computadora",
        precio:100,
        herramientas: [
            "Herramientas de limpieza y optimización del sistema",
            "Administrador de tareas"
        ],
        pasoAPaso: [
            "Ejecuta un escaneo completo del sistema con una herramienta de limpieza y optimización del sistema.",
            "Elimina archivos temporales y basura que puedan estar ralentizando la computadora.",
            "Desinstala programas innecesarios o que no se utilicen.",
            "Desactiva programas innecesarios que se inician automáticamente con el sistema.",
            "Verifica que haya suficiente espacio libre en el disco duro.",
            "Optimiza la configuración de energía para un mejor rendimiento.",
            "Actualiza los controladores de hardware para mejorar la compatibilidad y el rendimiento.",
            "Reinicia la computadora para aplicar los cambios y verifica si hay mejoras en el rendimiento.",
            "Utiliza el Administrador de tareas para identificar y cerrar procesos que estén consumiendo demasiados recursos.",
            "Considera agregar más memoria RAM si la computadora sigue teniendo problemas de rendimiento."
        ]
    },
    {   //9
        titulo: "Configuración de correo electrónico",
        img: "https://support.content.office.net/es-es/media/c3c7d4eb-cb54-48b6-aaf8-ca88fa9394db.png",
        descripcion: "Cómo configurar una cuenta de correo electrónico en un cliente de correo",
        precio:100,
        herramientas: [
            "Cliente de correo electrónico instalado (por ejemplo, Outlook, Thunderbird)",
            "Credenciales de correo electrónico"
        ],
        pasoAPaso: [
            "Abre el cliente de correo electrónico.",
            "Selecciona la opción para agregar una nueva cuenta de correo.",
            "Ingresa tu dirección de correo electrónico y contraseña.",
            "Selecciona el tipo de cuenta (POP3 o IMAP) y el servidor de correo entrante y saliente.",
            "Configura las opciones de seguridad, como SSL o TLS, según lo requiera tu proveedor de correo.",
            "Completa la configuración y realiza una prueba de conexión.",
            "Verifica que puedas enviar y recibir correos electrónicos correctamente.",
            "Si tienes problemas, verifica la configuración y las credenciales, o contacta al proveedor de correo electrónico para obtener ayuda."
        ]
    },
    {   //10
        titulo: "Reemplazo de teclado",
        img: "https://st.depositphotos.com/26268280/53960/i/600/depositphotos_539604562-stock-photo-wizard-repairs-laptop-with-tools.jpg",
        descripcion: "Cómo reemplazar un teclado dañado en una computadora portátil",
        precio:100,
        herramientas: [
            "Destornillador",
            "Teclado de reemplazo compatible"
        ],
        pasoAPaso: [
            "Apaga la computadora portátil y desconéctala de la corriente.",
            "Localiza los tornillos que aseguran el teclado actual en su lugar.",
            "Utiliza el destornillador para quitar los tornillos y levanta con cuidado el teclado.",
            "Desconecta el cable de cinta que conecta el teclado a la placa base.",
            "Conecta el cable de cinta del nuevo teclado en el conector correspondiente de la placa base.",
            "Coloca el teclado de reemplazo en su lugar y asegúralo con los tornillos.",
            "Vuelve a conectar la batería y enciende la computadora portátil.",
            "Verifica que todas las teclas del nuevo teclado funcionen correctamente."
        ]
    },
    {       //11
        titulo: "Configuración de impresora",
        img: "https://todosobrewindows.com/wp-content/uploads/2020/06/How-to-Get-Your-Printer-Back-Online-in-Windows-10.png",
        descripcion: "Cómo configurar una impresora en una computadora",
        precio:100,
        herramientas: [
            "Impresora con cables o conexión inalámbrica",
            "Controladores de impresora"
        ],
        pasoAPaso: [
            "Conecta la impresora a la computadora mediante un cable USB o a través de la red inalámbrica.",
            "Enciende la impresora y asegúrate de que tenga suficiente papel y tinta o tóner.",
            "Si la impresora no se detecta automáticamente, instala los controladores de impresora desde el sitio web del fabricante.",
            "Sigue las instrucciones del asistente de instalación para configurar la impresora.",
            "Si la impresora es inalámbrica, asegúrate de que esté conectada a la misma red Wi-Fi que la computadora.",
            "Realiza una prueba de impresión para verificar que la configuración sea exitosa.",
            "Ajusta las preferencias de impresión según tus necesidades (calidad, tamaño de papel, etc.).",
            "Verifica que la impresora funcione correctamente al imprimir documentos o imágenes."
        ]
    }
]

export {data}