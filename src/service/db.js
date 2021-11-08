const db =[
    {
         "id": 1,
         "title": "fernet branca",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 10,
         "precio": 690,
         "img": "../image/fernet.jpg",
         "tipo": "conAlcohol"
    },
    {
         "id": 2,
         "title": "Fernet 1882",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 8,
         "precio": 450,
         "img": "../image/1882.jfif",
         "tipo": "conAlcohol"
    },
    {
         "id": 3,
         "title": "coca cola 2l",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 5,
         "precio": 150,
         "img": "../image/coca.jpg",
         "tipo": "sinAlcohol"
    },     {
         "id": 4,
         "title": "coca cola 2.25l",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 12,
         "precio": 180,
         "img": "../image/coca-2.25.jfif",
         "tipo": "sinAlcohol"
    },
    {
         "id": 5,
         "title": "cerveza quilmes",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 12,
         "precio": 180,
         "img": "../image/quilmes.jpg",
         "tipo": "conAlcohol"
    },     
    {
         "id": 6,
         "title": "cerveza Brahma",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 6,
         "precio": 180,
         "img": "../image/brahma.jfif",
         "tipo": "conAlcohol"
    },
    {
         "id": 7,
         "title": "cerveza stella",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 8,
         "precio": 220,
         "img": "../image/stella.jpg",
         "tipo": "conAlcohol"
    },
    {
         "id": 8,
         "title": "cerveza Budweiser",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 5,
         "precio": 190,
         "img": "../image/bud.jfif",
         "tipo": "conAlcohol"
    },
    {
         "id": 9,
         "title": "vino Balbo",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 10,
         "precio": 200,
         "img": "../image/balbo.jfif",
         "tipo": "conAlcohol"
    },     {
         "id": 10,
         "title": "frizze",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 6,
         "precio": 269,
         "img": "../image/frizze.jfif",
         "tipo": "conAlcohol"
    },
    {
         "id": 11,
         "title": "campari",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 3,
         "precio": 500,
         "img": "../image/campari.jfif",
         "tipo": "conAlcohol"
    },     
    {
         "id": 12,
         "title": "Gancia aperitivo",
         "desc": "En 1845, en Milán, Italia, el visionario boticario Bernardino Branca creo una bebida con propiedades singulares, a la que llamó Fernet. Así se inició la historia de una marca que sería reconocida mundialmente: Fernet Branca.",
         "stock": 5,
         "precio": 460,
         "img": "../image/gancia.jfif",
         "tipo": "conAlcohol"
    }

];

export const getFetch = new Promise ((resolve, reject) =>{
    setTimeout (() =>{
        resolve(db);
    },2000)
});