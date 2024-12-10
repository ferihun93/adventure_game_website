export const CHARACTERS_DETAILS = [
  {
    characterName: "Joe",
    characterDescreption:
      "Joe képes manipulálni az energia különböző formáit. Képességek: Energia-pajzs, lézertámadás, gravitáció-manipuláció.",
    cardColor: "bg-green-600", // Kártya alap szín
    hoverColor: "hover:bg-green-400", // Hover szín
    border: "border-2 border-green-800", // Border szín
    story: [
      {
        text: "Joe egy rejtélyes laborba érkezik, tele ismeretlen eszközökkel.",
        options: [
          { text: "Felfedezed a labort.", nextPage: 1 },
          { text: "Kimenekülsz az épületből.", nextPage: 2 },
        ],
      },
      {
        text: "A laborban egy furcsa eszközt találsz, amely világítani kezd.",
        options: [
          { text: "Megvizsgálod az eszközt.", nextPage: null }, // Történet vége
          { text: "Hátralépsz és elhagyod a labort.", nextPage: null }, // Történet vége
        ],
      },
      {
        text: "Az épület körül különös zajokat hallasz.",
        options: [
          { text: "Követed a zaj forrását.", nextPage: null }, // Történet vége
          { text: "Visszatérsz a biztonságos helyre.", nextPage: null }, // Történet vége
        ],
      },
    ],
  },
  {
    characterName: "Ann",
    characterDescreption:
      "Ann genetikai fejlesztésekkel megerősített ember. Képességek: Szupererő, gyors regeneráció, éjjellátás.",
    cardColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-400",
    border: "border-2 border-blue-800",
    story: [
      {
        text: "Ann titkos ügynökként indul, hogy felfedezzen egy rejtett helyszínt.",
        options: [
          { text: "Felfedezést indítasz a közeli erdőben.", nextPage: 1 },
          { text: "Visszatérsz a bázisra.", nextPage: 2 },
        ],
      },
      {
        text: "Az erdő mélyén egy rejtélyes objektumot találsz.",
        options: [
          { text: "Megérinted az objektumot.", nextPage: null },
          { text: "Visszatérsz a bázisra jelenteni.", nextPage: null },
        ],
      },
      {
        text: "A bázison információkat találsz a küldetésedről.",
        options: [
          { text: "Folytatod a kutatást.", nextPage: null },
          { text: "Pihensz, és újratervezed a stratégiát.", nextPage: null },
        ],
      },
    ],
  },
  {
    characterName: "Marcus",
    characterDescreption:
      "Marcus egy titkos ügynök, aki képes álcázni magát. Képességek: Láthatatlanság, szuper gyors reakciók, fokozott erő.",
    cardColor: "bg-purple-600",
    hoverColor: "hover:bg-purple-400",
    border: "border-2 border-purple-800",
    story: [
      {
        text: "Marcus egy titkos küldetésre indul, hogy megakadályozzon egy kiber támadást.",
        options: [
          { text: "Elindulsz az alagúton keresztül.", nextPage: 1 },
          { text: "A főbejáraton próbálkozol.", nextPage: 2 },
        ],
      },
      {
        text: "Az alagútban egy elágazáshoz érsz.",
        options: [
          { text: "Balra mész.", nextPage: null },
          { text: "Jobbra mész.", nextPage: null },
        ],
      },
      {
        text: "A főbejáratot védik. Mit teszel?",
        options: [
          { text: "Álcázva próbálsz bejutni.", nextPage: null },
          { text: "Visszavonulsz és új tervet dolgozol ki.", nextPage: null },
        ],
      },
    ],
  },
  {
    characterName: "Sophie",
    characterDescreption:
      "Sophie egy mesterséges intelligencia, aki emberi testben él. Képességek: Telekinézis, telepátia, mesterséges intelligencia vezérlés.",
    cardColor: "bg-red-600",
    hoverColor: "hover:bg-red-400",
    border: "border-2 border-red-800",
    story: [
      {
        text: "Sophie egy ősi géphez érkezik, amit próbál aktiválni.",
        options: [
          { text: "Megpróbálod irányítani a gépet.", nextPage: 1 },
          { text: "Visszavonulsz és információkat gyűjtesz.", nextPage: 2 },
        ],
      },
      {
        text: "A gép váratlanul aktiválódik. Mit teszel?",
        options: [
          { text: "Megpróbálod leállítani.", nextPage: null },
          { text: "Kutatásba kezdesz a gép működéséről.", nextPage: null },
        ],
      },
    ],
  },
];
