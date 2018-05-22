## Reader
Aplikacija primarno za mobitel razvijena pomoću React Native i ExpoKit

# Prije pokretanja

Pokrenuti komande:

npm install -g exp
npm install
Nakon npm install-a je potrebno kopirati sadržaj foldera node_modules_fix unutar node_modules.

sudo exp detach ili samo exp detach za korisnike windowsa
( Pratiti sve korake )

Imati instaliran android studio.



# Pokretanje

npm exp start

zatim otvoriti folder android unutar Frontend foldera i pokrenuti unutar njega

# Dodatne informacije

Ukoliko se prilikom pokretanja unutar android studija pojavi greska da Android revision SDK nije dobre verzije:
  izmjeniti unutar build.gradle( Module:app ) staviti da je targetSdkVersion 27 i instalirati potrebne dodatke.
