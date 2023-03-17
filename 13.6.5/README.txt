Instruktioner:

1) Ni ska skapa en sida baserat på strukturen nedan (syns även i videon).
2) Ni ska på dessa sidor inkludera tre filer (header.php, navigation.php och
   footer.php), dvs. ingen av sidorna ska vara en komplett HTML-sida av sig själv
   utan inklduerar delar genom PHP-filer.
3) Det är upp till er att placera PHP-filer i relevanta mappar, dvs. allting får
   inte ligga i en och samma mapp.

Strukturen:

- Hem (index.php)
- Om SKK (about.php)
- Hundar (dogs.php)
    - Collie (collie.php)
    - Tax (tax.php)
    - Shiba (shiba.php)

Vad gäller innehåll på de olika sidorna kan ni kopiera från valfri plats (eller
www.skk.se), så länge det finns en rubrik och brödtext så är det godtagbart.
Observera att hundarna (de enskilda) ska ha en egen undermeny på sidan "Hundar".

Inkluderade filer:

- header.php, denna filen ska innehåll allt från <!DOCTYPE html> till och med starttaggen för <body>.
- navigation.php, denna filen ska innehålla huvudmenyn (inte undermenyn för "Hundar").
- footer.php, denna ska innehålla en enkel sidfot samt avslutande taggar för <body> och <html>.

För att visa ett kort exempel från "index.php":

<?php
  require_once "header.php";
  require_once "navigation.php";

  <h1>Välkommen till startsidan!</h1>
  <p>Hej och hå!</p>

  require_once "footer.php";
?>