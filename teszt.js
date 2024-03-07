import{fuggvenyem} from "./main.js";

//hozz létre teszteseteket

export function tesztesetek_fuggvenyemhez(){
    let szam = 1234;
    let vart = 4321;
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = 0;
    vart = 0;
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = 23,4;
    vart = 4,32;
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = -1234;
    vart = -4321;
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = "1234";
    vart = "hibaüzenet";
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = Number.MAX_VALUE;
    vart = "nagyon nagy szám";
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = Number.MAX_SAFE_INTEGER;
    vart = "nagyon nagy szám";
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = Number.MIN_SAFE_INTEGER;
    vart = "nagyon nagy szám";
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = null;
    vart = 0;
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);


    szam = 100;
    vart = 1;
    console.log(`szam: ${szam}, várt: ${vart}, kapott: ${fuggvenyem(szam)} eredmény: ${vart===fuggvenyem(szam)}`);
}



