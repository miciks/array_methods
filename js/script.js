let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let animals=["Cat", "Dog", "Elephon", "Rabid"]

/* 1)fruits arrayini araya cizgi (-) koyarak ekrana yaz*/
    const element = fruits.join("-");
    console.log(element);

/* 2 ) animals arrayindeki son elemani sil */
    const lastDel = animals.pop();
    console.log(animals);

/* 3 ) fruits arayine (kivi) ekle*/
    const kiwi = fruits.push("kivi");
    console.log(fruits);

/* 4 ) animals arrayinin ilk ogesini sil */
    const firstDel = animals.shift();
    console.log(animals);

/* 5 ) fruits arrayinden (lemon, apple,mango) elemanlarini silip Kiwi ekle */
    const delEkle = fruits.splice(2, 3, "Kivi");
    console.log(delEkle);

/* 6 ) fruits ve animals araylerini birlestir */
    const fruitsAnimals = fruits.concat(animals);
    console.log(fruitsAnimals);

/* 7 ) iki arayin son elemanlarinin index numaralarini ekrana yazdir */
    const indexFruitNu = fruits.length -1 ;
    console.log(indexFruitNu);

    const indexAnimalNu = animals.length -1 ;
    console.log(indexAnimalNu);
    