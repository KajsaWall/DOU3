Övning
======

Ni ska skapa ett enkelt JSON-baserat GET-API baserat på filen "users.json".
Följande GET-parametrar ska stödjas:

1. "id", ni ska returnera den användare vars ID är detsamma som denna parameter

2. "belowAge", ni ska returnera alla användare vars ålder är längre än denna
   parameter

3. "knows", ni ska returnera alla användare som har värdet för denna parameter
   inuti sin egen "knows"-array

4. "email", ni ska returnera alla användares email om denna parameter har värdet "export"

5. "search", ni ska returnera alla användare där deras för- och/eller efternamn
   innehåller värdet för denna parameter, tänk på att göra om denna samt
   användarens namn till små bokstäver (för att öka chansen att en användare
   hittas). Tips: str_contains och strtolower