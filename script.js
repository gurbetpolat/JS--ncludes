/********INCLUDES METHODU*************/

/*includes methodu bir ifade de bizim belirlediğimiz değerin geçip geçmediğine bakıyor.
Ona göre true yada false değeri döndürüyor. Dizilerde ise birebir eşleşme arıyor.*/


const numbers=[1,2,3,4,5,6]


const deger=numbers.includes(5);

console.log(deger);//true


/*------------------------------------*/

const isimler=["Emre","Tayfun","Buse","sEDA","Deniz"]

const büyükküçükharf=isimler.includes("seda")
console.log(büyükküçükharf) //False

const isim=isimler.includes("Emre")
console.log(isim);//true

const isim_1=isimler[0].includes("re")

console.log(isim_1)//true


/*---------------------------------------*/


const numbers_2=[1,5,8,9]

const addNumber=(number)=>{

    if(!numbers_2.includes(number)){

        numbers_2.push(number)
    }

}

addNumber(9)//elemanı eklemez çünkü koşola uymuyor
addNumber(7)//ekler
addNumber(1)//eklemez
addNumber(3)//ekler

console.log(numbers_2)

/*-------------------------------------*/

const name1=["Emre","Deniz","Poyraz"]

/* dizi uzunluğu 
   index
   hesap=dizi uzunluğu + (index)=

 */

console.log(name1[2].includes("em"));//false
console.log(name1.includes("Emre",-3))//true