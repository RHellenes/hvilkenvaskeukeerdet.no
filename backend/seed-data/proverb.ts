export interface IProverb {
  ordtak: string;
  betydning: string;
  coolPerson: string;
}
const proverbs: IProverb[] = [
  {
    ordtak: 'Ikke slå hodet i veggen.',
    betydning: 'Å prøve å oppnå det umulige.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Ikke tørk bakenden på døra.',
    betydning: 'Ikke undervurder viktigheten av det mundane.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Den som spiser flammer, bæsjer gnister.',
    betydning: 'Ikke bli overrasket av utfallet.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Ikke tilstå til djevelen.',
    betydning: 'Ikke avslør hemmelighetene dine til fienden din.',
    coolPerson: 'René',
  },
  {
    ordtak: 'Se til at herringen steker.',
    betydning: 'Pass på at alt går etter planen.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Ikke finn hunden i gryta.',
    betydning: 'Ikke kom for sent til middag (og finne at alt er spist opp).',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Ikke sitt i asken mellom to stoler.',
    betydning: 'Ikke vær ubeslutsom.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Ikke vær en person som bæsjer på verden',
    betydning: 'En person som hater alt.',
    coolPerson: 'René',
  },
  {
    ordtak: 'Der henger kniven',
    betydning: 'Å utfordre noen',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'To tåper i en hette',
    betydning: 'Dumme mennesker omgås gjerne med hverandre.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Den vokser ut av vinduet',
    betydning: 'Det kan ikke bli skjult',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Å løpe som om bakenden er i flammer',
    betydning: 'Å være i stor nød',
    coolPerson: 'René',
  },
  {
    ordtak: 'Å se på storken',
    betydning: 'Å kaste bort tiden',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Å fiske bak garnet',
    betydning: 'Å gå glipp av en mulighet',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Det kommer ann på hvordan kortene faller.',
    betydning: 'Å være ubeslutsom.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Hai spiser mindre fisk.',
    betydning:
      'Alt hva folk sier vil bli satt i perspektiv i henhold til hvor viktige de er.',
    coolPerson: 'René',
  },
  {
    ordtak: 'De bæsjer ut av samme hull',
    betydning: 'De er uatskillelige venner.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Å kaste ens penger i vannet.',
    betydning: 'Å kaste bort penger.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Å gjespe mot ovnen.',
    betydning: 'Å prøve å gjøre mer enn man klarer.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Å lete etter øksa.',
    betydning: 'Å lete etter en unnskyldning.',
    coolPerson: 'René',
  },
  {
    ordtak:
      'Aldri tro på en person som bærer flamme i en hand og vann i den andre',
    betydning: 'De skaper drama.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Å kaste roser foran svin.',
    betydning: 'Å kaste bort innsats på de uverdige.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Man må bøye seg for å komme videre i verden.',
    betydning: 'For å vinne må man være villig til å ofre seg av og til.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Å fylle brønnen etter at kalven har druknet.',
    betydning: 'Å vente med å handle til etter at katastrofen har intruffet.',
    coolPerson: 'René',
  },
  {
    ordtak: 'Å holde lys for djevelen.',
    betydning: 'Å vilkårlig smigre og velge venner.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Å være en skummende øse.',
    betydning: 'Å være en parasitt.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Å sitte på varmt kull.',
    betydning: 'Å være utolmodig.',
    coolPerson: 'Sunniva',
  },
  {
    ordtak: 'Å holde en ål i halen.',
    betydning: 'Å prøve på noe vanskelig.',
    coolPerson: 'René',
  },
  {
    ordtak: 'Å falle gjennom bøtta.',
    betydning: 'Å bli avslørt.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Å beholde hønas egg men la andens gå.',
    betydning: 'Å gjøre et dårlig valg.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: "Her er'n med lampa si!",
    betydning: 'Å endelig ha muligheten til å vise talentet sitt.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Den som har spilt grøten sin kan ikke skrape den opp igjen!',
    betydning: 'Når noe er gjort, så kan det ikke bli ugjort.',
    coolPerson: 'René',
  },
  {
    ordtak: 'Å sette en eike gjennom noens hjul',
    betydning: 'Å sabotere noen planen.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Ingen ser etter andre i ovnen om de ikke har vært der selv.',
    betydning: 'Å se etter ondskap i andre er et tegn på ondskap i en selv.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Å ha verden spinnende på ens tommel.',
    betydning: 'Å ha enhver fordel.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Når porten er åpen vil grisene løpe til kornet.',
    betydning: 'Katastrofe følger uforsiktighet.',
    coolPerson: 'René',
  },
  {
    ordtak: 'Når grisen blir større blir .',
    betydning: 'Katastrofe følger uforsiktighet.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Å ha tannverk bak øra.',
    betydning: 'Å være en person med munchhausen syndrom.',
    coolPerson: 'Sunniva',
  },
  {
    ordtak: 'Å tisse mot månen.',
    betydning: 'Å kaste bort tiden på noe umulig.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Å gifte seg under sopelimen.',
    betydning: 'Å bo sammen uten å være gift.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Å ha hull i taket.',
    betydning: 'Å være uintelligent.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Etterlat alltid ett egg i redet.',
    betydning: 'Ha alltid noe i reserve.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Ikke vær en høneføler.',
    betydning: 'Ikke vær gjerrig.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Å få lokket på hodet.',
    betydning: 'Å ende opp med å ta ansvar.',
    coolPerson: 'Sunniva',
  },
  {
    ordtak: 'Ikke stek herringen for å få rognen.',
    betydning: 'Ikke kryss bekken for å hente vann.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Å kaste fjær i vinden.',
    betydning: 'Å jobbe fruktløst.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Å ikke kunne se solen skinne i vannet.',
    betydning: 'Å være sjalu på andres suksess.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'En fot skodd, den andre bar.',
    betydning: 'Balanse er avgjørende.',
    coolPerson: 'René',
  },
  {
    ordtak: 'Å falle fra oksen på bakenden av en rumpe.',
    betydning: 'Tøffe tider.',
    coolPerson: 'Jenny',
  },
  {
    ordtak: 'Hvem vet hvorfor endene går barbent?.',
    betydning: 'Det er en grunn til alt, selv om den ikke alltid er åpenbar.',
    coolPerson: 'Sondre',
  },
  {
    ordtak: 'Hvis jeg ikke har ansvar for de, lar jeg gjess være gjess.',
    betydning: 'Ikke bland deg i saker du ikke har noe med.',
    coolPerson: 'Sofie',
  },
  {
    ordtak: 'Hvis jeg ikke har ansvar for de, lar jeg gjess være gjess.',
    betydning: 'Ikke bland deg i saker du ikke har noe med.',
    coolPerson: 'Sunniva',
  },
];

export default proverbs;
