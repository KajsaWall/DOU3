"use strict";

function array_each (array, callback) {

  /*
  ARGUMENTS
    Funktionen tar emot två argument:
      - array: måste vara en array (kan dock vara tom)
      - callback: måste vara en funktion
    Ingen kontroll av argumenten behöver göras
  SIDE-EFFECT
    Funktionen loopar igenom array och för varje element i array anropar callback, med
    array-elementet som argument.
  RETURVÄRDE
    Funktionen returnerar ingenting (undefined).  
  */

  let index = 0;
  while (index < array.length) {
    callback(array[index]);
    index = index + 1;
  } 
}