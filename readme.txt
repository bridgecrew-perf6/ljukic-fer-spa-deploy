interpolation/one-way binding - DA (src/components/PersonalDataComponent.vue, :12-14, :18)
two-way binding - DA (src/components/PersonalDataComponent.vue, :6, :7)
methods - DA (src/components/EurHrk.vue, :42-48)
computed properties - DA (src/components/PersonalDataComponent.vue, :39-47)
barem jedan scoped style - DA (src/components/EurHrk.vue, :53)
koristiti barem jedan lifecycle hook - DA (src/components/PersonalDataComponent.vue, :50)
routing (više stranica) - DA (src/App.vue, :7-10 ; src/router/index.js, :13)
use history mode, aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i heroku-nesto.com/stranica1, heroku-nesto.com/stranica2) - DA
dinamičko usmjeravanje s 404 stranicom ("catch all") - DA (src/router/index.js, :31 ; src/views/NotFound.vue)
(barem) dvije komponente - DA
komponenta bez stanja, koristiti properties
komponenta sa stanjem - DA (src/components/Converter.vue)
barem jedna komponenta mora emitirati barem jedan event - NE
store - DA (src/components/UserLogin.vue, :29 ; src/App.vue, :30)
asinkroni dohvat podataka s backenda, možete:
koristiti Firebase ili Back4App, Mocky, itd.
vlastiti storage, ili
možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis
ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente) - DA (src/main.js, :9)