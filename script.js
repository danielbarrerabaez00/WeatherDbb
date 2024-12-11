addEventListener("load", cargar);

function cargar() {
  $("#enviar").click(function (e) {
    e.preventDefault;
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        $("#poblacion").val() +
        "&units=metric&appid=7927ffa1b13ea16f61dec670536d51d5",
      type: "GET",
      success: function (data) {
        mostrarDatos(data);
      },
      error: function (jqXHR, estado, error) {
        console.log(estado);
        console.log(error);
      },
      complete: function (jqXHR, estado) {
        console.log(estado);
      },
      timeout: 10000,
    });
  });

  // Se muestran los datos
  function mostrarDatos(data) {
    $(".t").html(
      "<h3>Datos de la temperatura en " +
        $("#poblacion").val() +
        ":</h3><br>" +
        "Temperatura actual: " +
        data.main.temp +
        "ºC <br>" +
        "Sensacion termica: " +
        data.main.feels_like +
        "ºC* <br><br>" +
        "Maxima: " +
        data.main.temp_max +
        "ºC <br>" +
        "Minima: " +
        data.main.temp_min +
        "ºC <br><br>" +
        "<i>*El viento puede alterar la sensacion de termica (Consultar pestaña de viento)</i>"
    );

    $(".p").html(
      "<h3>Datos de las precipitaciones en " +
        $("#poblacion").val() +
        ":</h3> <div class='pContenido'></div>"
    );

    $(".pContenido").html(
      "Estado del cielo: " +
        data.weather[0].description +
        "<img src='https://openweathermap.org/img/wn/" +
        data.weather[0].icon +
        "@2x.png'>"
    );

    $(".v").html(
      "<h3>Datos del viento en " +
        $("#poblacion").val() +
        ":</h3><br>" +
        "Velocidad del viento: " +
        data.wind.speed +
        "km/h <br>"
    );

    // Convertir la marca de tiempo de Unix a milisegundos
    var sunriseTimestamp = data.sys.sunrise * 1000;
    var sunsetTimestamp = data.sys.sunset * 1000;

    // Crear los objetos Date
    var salida = new Date(sunriseTimestamp);
    var puesta = new Date(sunsetTimestamp);

    // Aplicar la zona horaria
    var timezoneOffset = data.timezone * 1000;

    // Convertir segundos a milisegundos
    salida = new Date(salida.getTime() + timezoneOffset);
    puesta = new Date(puesta.getTime() + timezoneOffset);

    function formatTime(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;
      // El "0" se convierte en "12"
      minutes = minutes < 10 ? "0" + minutes : minutes; // Asegurar dos dígitos
      let strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }
    // Formatear e imprimir los resultados console.log("Salida del sol: " + formatTime(salida)); console.log("Puesta del sol: " + formatTime(puesta));

    $(".s").html(
      "<h3>Horas de salida y puesta del sol en " +
        $("#poblacion").val() +
        ":</h3><br>" +
        "Salida del Sol: " +
        formatTime(salida) +
        "<br>" +
        "Puesta del Sol: " +
        formatTime(puesta)
    );

    $(".h").html(
      "<h3>Datos de la humedad y presion en " +
        $("#poblacion").val() +
        ":</h3><br>" +
        "Humedad: " +
        data.main.humidity +
        "% <br>" +
        "Presion: " +
        data.main.pressure +
        "hPa"
    );
  }

  $("#accordion").accordion();

  var availableTags = [
    "Nueva York",
    "Los Ángeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Filadelfia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San José",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "Charlotte",
    "Indianápolis",
    "San Francisco",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "El Paso",
    "Nashville",
    "Detroit",
    "Oklahoma City",
    "Portland",
    "Las Vegas",
    "Memphis",
    "Louisville",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Mesa",
    "Kansas City",
    "Atlanta",
    "Miami",
    "Colorado Springs",
    "Raleigh",
    "Omaha",
    "Long Beach",
    "Virginia Beach",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Arlington",
    "New Orleans",
    "Wichita",
    "Cleveland",
    "Tampa",
    "Bakersfield",
    "Aurora",
    "Honolulu",
    "Anaheim",
    "Santa Ana",
    "Corpus Christi",
    "Riverside",
    "Lexington",
    "Stockton",
    "Henderson",
    "Saint Paul",
    "St. Louis",
    "Cincinnati",
    "Pittsburgh",
    "Greensboro",
    "Anchorage",
    "Plano",
    "Lincoln",
    "Orlando",
    "Irvine",
    "Newark",
    "Durham",
    "Chula Vista",
    "Toledo",
    "Fort Wayne",
    "St. Petersburg",
    "Laredo",
    "Jersey City",
    "Chandler",
    "Madison",
    "Lubbock",
    "Scottsdale",
    "Reno",
    "Buffalo",
    "Gilbert",
    "Glendale",
    "North Las Vegas",
    "Winston-Salem",
    "Chesapeake",
    "Norfolk",
    "Fremont",
    "Garland",
    "Irving",
    "Hialeah",
    "Richmond",
    "Boise",
    "Spokane",
    "Baton Rouge",
    "Tacoma",
    "San Bernardino",
    "Modesto",
    "Fontana",
    "Des Moines",
    "Moreno Valley",
    "Santa Clarita",
    "Fayetteville",
    "Birmingham",
    "Oxnard",
    "Rochester",
    "Port St. Lucie",
    "Grand Rapids",
    "Huntsville",
    "Salt Lake City",
    "Frisco",
    "Yonkers",
    "Amarillo",
    "Glendale",
    "Huntington Beach",
    "McKinney",
    "Montgomery",
    "Augusta",
    "Aurora",
    "Akron",
    "Little Rock",
    "Tempe",
    "Overland Park",
    "Grand Prairie",
    "Tallahassee",
    "Cape Coral",
    "Mobile",
    "Knoxville",
    "Shreveport",
    "Worcester",
    "Ontario",
    "Vancouver",
    "Sioux Falls",
    "Chattanooga",
    "Brownsville",
    "Fort Lauderdale",
    "Providence",
    "Newport News",
    "Rancho Cucamonga",
    "Santa Rosa",
    "Peoria",
    "Oceanside",
    "Elk Grove",
    "Salem",
    "Pembroke Pines",
    "Álava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Ávila",
    "Badajoz",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ciudad Real",
    "Córdoba",
    "La Coruña",
    "Cuenca",
    "Gerona",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "Islas Baleares",
    "Jaén",
    "León",
    "Lérida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Murcia",
    "Navarra",
    "Orense",
    "Palencia",
    "Las Palmas",
    "Pontevedra",
    "La Rioja",
    "Salamanca",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Santa Cruz de Tenerife",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza",
    "Abadiño",
    "Abrera",
    "Adra",
    "Aínsa-Sobrarbe",
    "Alaior",
    "Alameda",
    "Albuixech",
    "Alcalá de Guadaíra",
    "Alcalá de Henares",
    "Alcázar de San Juan",
    "Alcobendas",
    "Aldeamayor de San Martín",
    "Alicún",
    "Almadén",
    "Almansa",
    "Almazora",
    "Almendralejo",
    "Almonte",
    "Alsasua",
    "Alzira",
    "Amposta",
    "Aranda de Duero",
    "Aranjuez",
    "Arenas de San Pedro",
    "Arganda del Rey",
    "Arjona",
    "Arnedo",
    "Arroyomolinos",
    "Arucas",
    "Astorga",
    "Atarfe",
    "Avilés",
    "Ayamonte",
    "Azkoitia",
    "Azpeitia",
    "Baeza",
    "Balaguer",
    "Barakaldo",
    "Barbastro",
    "Basauri",
    "Baza",
    "Beas de Segura",
    "Bejar",
    "Benacazón",
    "Benalmádena",
    "Benavente",
    "Berja",
    "Betanzos",
    "Blanes",
    "Bolaños de Calatrava",
    "Bormujos",
    "Brenes",
    "Brihuega",
    "Bueu",
    "Bujalance",
    "Bullas",
    "Burguillos",
    "Cabrera de Mar",
    "Cabrils",
    "Cadrete",
    "Calahorra",
    "Calamocha",
    "Calatayud",
    "Camas",
    "Cambrils",
    "Cambre",
    "Campo de Criptana",
    "Canals",
    "Cangas de Onís",
    "Canyelles",
    "Capdepera",
    "Caravaca de la Cruz",
    "Carboneras",
    "Carcabuey",
    "Carranque",
    "Cartaya",
    "Casarabonela",
    "Caspe",
    "Castellar del Vallès",
    "Castilleja de la Cuesta",
    "Castro-Urdiales",
    "Catarroja",
    "Cedillo del Condado",
    "Cerdanyola del Vallès",
    "Cieza",
    "Ciudad Rodrigo",
    "Constantí",
    "Consuegra",
    "Corbera de Llobregat",
    "Cordovilla",
    "Coria",
    "Cornellà de Llobregat",
    "Corvera de Asturias",
    "Coslada",
    "Cox",
    "Cúllar",
    "Cullera",
    "Daimiel",
    "Dénia",
    "Dolores",
    "Dos Hermanas",
    "Durango",
    "El Astillero",
    "El Campello",
    "El Ejido",
    "El Espinar",
    "El Prat de Llobregat",
    "Elche",
    "Elda",
    "Esparreguera",
    "Espiel",
    "Estella",
    "Figueres",
    "Fiñana",
    "Fregenal de la Sierra",
    "Frigiliana",
    "Fuengirola",
    "Fuenlabrada",
    "Fuente Palmera",
    "Gandía",
    "Gavà",
    "Getafe",
    "Getxo",
    "Gijón",
    "Girona",
    "Godella",
    "Güejar Sierra",
    "Guernica",
    "Guia de Isora",
    "Guía",
    "Güimar",
    "Guissona",
    "Haro",
    "Hellín",
    "Hernani",
    "Herencia",
    "Huelva",
    "Huércal-Overa",
    "Huesca",
    "Ibiza",
    "Igualada",
    "Illescas",
    "Irun",
    "Isla Cristina",
    "Iznalloz",
    "Jaén",
    "Jerez de la Frontera",
    "Jijona",
    "Jódar",
    "La Bañeza",
    "La Carolina",
    "La Línea de la Concepción",
    "La Palma del Condado",
    "Lalín",
    "Las Gabias",
    "Las Rozas de Madrid",
    "Linares",
    "Llanes",
    "Lleida",
    "Logroño",
    "Lorca",
    "Los Barrios",
    "Lucena",
    "Lugones",
    "Mairena del Aljarafe",
    "Majadahonda",
    "Malgrat de Mar",
    "Manacor",
    "Manises",
    "Manzanares",
    "Maracena",
    "Marbella",
    "Marchena",
    "Mataró",
    "Mejorada del Campo",
    "Mérida",
    "Mislata",
    "Moguer",
    "Molina de Segura",
    "Moncada",
    "Montcada i Reixac",
    "Montilla",
    "Motilla del Palancar",
    "Motril",
    "Moya",
    "Muro de Alcoy",
    "Murcia",
    "Navalmoral de la Mata",
    "Noia",
    "Novo Sancti Petri",
    "Nules",
    "Olivares",
    "Ontinyent",
    "Orense",
    "Oviedo",
    "Palma de Mallorca",
    "Parla",
    "Paterna",
    "Pedro Muñoz",
    "Petrer",
    "Plasencia",
    "Pollença",
    "Polop",
    "Pontevedra",
    "Pozuelo de Alarcón",
    "Priego de Córdoba",
    "Puente Genil",
    "Puerto de Santa María",
    "Puerto del Rosario",
    "Puertollano",
    "Rafelbuñol",
    "Reus",
    "Riba-roja de Túria",
    "Rianxo",
    "Ripollet",
    "Roquetas de Mar",
    "Rosal de la Frontera",
    "Rubí",
    "Salamanca",
    "San Cristóbal de La Laguna",
    "San Fernando",
    "San Juan de Aznalfarache",
    "San Juan del Puerto",
    "San Sebastián",
    "San Sebastián de los Reyes",
    "San Vicente del Raspeig",
    "Sanlúcar de Barrameda",
    "Sant Adrià de Besòs",
    "Sant Boi de Llobregat",
    "Sant Cugat del Vallès",
    "Santa Comba",
    "Santa Cruz de Tenerife",
    "Santa Margarida i els Monjos",
    "Santa Pola",
    "Santiago de Compostela",
    "Santiponce",
    "Santoña",
    "Sarón",
    "Sestao",
    "Silla",
    "Sitges",
    "Soria",
    "Sueca",
    "Tafalla",
    "Talavera de la Reina",
    "Tarazona",
    "Tarragona",
    "Tenerife",
    "Teruel",
    "Tineo",
    "Toledo",
    "Tomares",
    "Torrent",
    "Torrelavega",
    "Torre-Pacheco",
    "Torremolinos",
    "Torres de la Alameda",
    "Totana",
    "Tres Cantos",
    "Trujillo",
    "Tudela",
    "Úbeda",
    "Utrera",
    "Valdepeñas",
    "Valencia",
    "Vallecas",
    "Valls",
    "Valladolid",
    "Valverde del Camino",
    "Vega de San Mateo",
    "Vélez-Málaga",
    "Vigo",
    "Vilafranca del Penedès",
    "Vilalba",
    "Vilanova i la Geltrú",
    "Villarreal",
    "Villaviciosa",
    "Villena",
    "Vinaroz",
    "Vitoria-Gasteiz",
    "Xàtiva",
    "Yecla",
    "Zafra",
    "Zaragoza",
  ];
  $("#poblacion").autocomplete({
    source: availableTags,
    minLength: 2,
  });

  $("#radioset").buttonset();

  $("#controlgroup").controlgroup();

  $("#tabs").tabs();
}
