class Ninja {
    constructor(nombre,salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    //Definimos metodos
    //Obtenemos valor de salud y sumamos 10
    drinkSake(){
        this.salud = this.salud + 10;
    }
    //Obtenemos el nombre registrado
    sayName(){
        console.log(`Ingresar Nombre:  ${ this.nombre }`);
    }
    //Mostramos en consola los atributos
    showStats(){
        console.log(`Nombre: ${ this.nombre }` +`, `+ `Salud: ${ this.salud }`+`, `+ `Velocidad: ${ this.velocidad }` +`, `+ `Fuerza: ${ this.fuerza }` );
    }
    
}
//Instanciamos el Objeto Ninja
//const ninja1 = new Ninja("Hyabusa",5);
//ninja1.sayName();
//ninja1.drinkSake();
//ninja1.showStats();

//Clase Hijo Sensei
class Sensei extends Ninja {
    constructor (nombre,salud){
        super(nombre,salud);
        this.salud = 200;
        this.sabiduria = 10;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses`)
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

