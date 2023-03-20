Övning
======
Denna övning bygger på den föregående (Received Data), men denna gången ska ni
validera (dvs.  kontrollera att någonting stämmer) de olika fälten i formulären.
Ni ska utgå från kravlistan nedan när ni gör er validering av de olika fälten.

Hur ni väljer att presentera de olika felmeddelanden är upp till er, men - om
ett eller fler fält är inkorrekt ifyllt ska det visas mer än ett felmeddelande.
Så att användaren kan se alla fel dom gjort, samtidigt.

Jag demonstrerar detta i videon som ni finner i samma mapp som denna fil.

Kravlista
=========

# GET
- `name` can not be empty OR have less then 2 characters 
- `breed` can not be empty OR have less then 2 characters
- `age` can not be empty OR or have the value 0

# POST
- `first_name` can not be empty OR have less then 2 characters
- `last_name` can not be empty OR have less then 2 characters
- `email` can not be empty OR not contain the characters @ or . (dot)
- `phone` can not be empty OR not be exactly 10 digits
- `address` can not be empty OR have less then 6 characters
- `zipcode` can not be empty OR not be exactly 5 digits
- `city` can not be empty OR have less then 2 characters

EXTRA
=====

I min lösning (tänk på att det går att lösas på flera vis) ser ni nog snabbt att
det sker en hel del upprepning. Hade vi inte kunnat göra en funktion (eller ett
par) som hjälper oss med detta? Kanske en loop?