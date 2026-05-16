export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: 'az-ijaszat-alapjai',
    title: 'Az Íjászat Alapjai',
    excerpt: 'Ismerd meg az íjászat alapvető technikáit, biztonsági szabályait és első lépéseit.',
    author: 'Magyar Íjászati Közösség',
    date: '2026-05-15',
    category: 'Képzés',
    readTime: 8,
    content: `# Az Íjászat Alapjai

Az íjászat egy ősi sport, amely évezredek óta gyakorolják az emberek. 

## A Helyes Tartás

A helyes testhelyzet alapvető a sikeres íjászathoz:
- Vállas szélességű lábtávolság
- Az íj könyökének megfelelő szöge
- Az végtagok nyugalma a lövés során

## Biztonsági Protokollok

Mindig tartsd be az alábbi biztonsági szabályokat:
- Az íj csak az előírt célfelületre mutathat
- Mindig vegyen védőfelszerelést
- Az gyakorlást felügyelet alatt végezd

## Az Első Lövések

Az első lövések gyakorlása emocionális és fizikai kihívás. Tanácsos egy tapasztalt edzővel kezdeni.`,
  },
  {
    id: 'olimpiai-ijaszat',
    title: 'Olimpiai Íjászat',
    excerpt: 'Fedezd fel az olimpiai íjászat szabályait, technikáit és történelmét.',
    author: 'Olimpiai Kutatások',
    date: '2026-05-10',
    category: 'Versenysport',
    readTime: 10,
    content: `# Olimpiai Íjászat

## Történelem

Az íjászat az olimpiai játékoknak egy fontos része volt:
- 1900-ban először jelent meg az olimpiákon
- 1920 és 1940 között szünetelt
- 1972 óta állandó program

## Versenyfeladatok

Az olimpiai íjászat különböző versenyformákat tartalmaz:
- Egyéni recurve íjászat
- Csapatversenyek
- Vegyes párosok

## Teljesítményi Követelmények

Az olimpiai szinten az íjászoknak:
- Hihetetlen pontosságúak kell lenniük
- 100 méter távolságból lövniük kell
- Szélsőséges mentális képesség szükséges`,
  },
  {
    id: 'tradicionalis-ijaszat-technikak',
    title: 'Tradicionális Íjászati Technikák',
    excerpt: 'Klasszikus íjászati módszerek és gyakorlatok az ősi hagyományokból.',
    author: 'Hagyomány Őrzők',
    date: '2026-05-05',
    category: 'Történelem',
    readTime: 12,
    content: `# Tradicionális Íjászati Technikák

## Ősi Magyar Módszerek

A magyar őseink fejlett íjászati technikákat fejlesztettek ki:
- Az lovashátról való íjászat
- A gyors egymásutáni lövések
- Az erőt megtakarító teqnikák

## Felszerelés

A tradicionális íjászok hosszú íjakat és kézzel készített nyilakat használtak:
- Természetes anyagok alkalmazása
- Kézműves készítés módszere
- Tartósság és teljesítmény egyensúlya

## Modern Alkalmazás

Napjainkban a tradicionális technikákat:
- Történelmi újraélesztési versenyek
- Oktatási és kulturális célok
- Szenvedélyes hobbisták használják`,
  },
  {
    id: 'ijaszat-eroszito-gyakorlatok',
    title: 'Erősítő Gyakorlatok az Íjászathoz',
    excerpt: 'Szükséges testgyakorlatok az íjászati teljesítmény javítása érdekében.',
    author: 'Sportági Edző',
    date: '2026-05-01',
    category: 'Képzés',
    readTime: 9,
    content: `# Erősítő Gyakorlatok az Íjászathoz

## Felső Test Erősítés

Az íjászat elsősorban a felső testre összpontosít:
- Váll- és hátizmok fejlesztése
- Karizmok megerősítése
- Mellizom stabilizálása

## Magított Gyakorlatok

Az mag stabilizálása kritikus a pontos lövésekhez:
- Egyensúlyozó gyakorlatok
- Rotációs erősítés
- Kitartási gyakorlatok

## Nyújtási Rutinok

A rugalmasság ugyanilyen fontos, mint az erő:
- Napi nyújtás szükséges
- Karok és vállak nyújtása
- Teljes test rugalmasság fejlesztése`,
  },
  {
    id: 'versenyi-mentalis-felkeszules',
    title: 'Mentális Felkészülés a Versenyre',
    excerpt: 'A mentális technikák fontossága az íjászati versenyeken.',
    author: 'Pszichológus',
    date: '2026-04-28',
    category: 'Versenysport',
    readTime: 7,
    content: `# Mentális Felkészülés a Versenyre

## Koncentráció Technikai

Az íjászat 90%-ban mentális sportis:
- Teljes fokuszált figyelem szükséges
- Külső zavarok kizárása
- A pillanat élvezetez

## Stressz Kezelés

A verseny előtti stressz kezelése:
- Lélegzési technikák
- Meditáció gyakorlása
- Pozitív gondolkodás

## Versenyi Taktika

A sikeres versenyhez szükséges:
- Az ellenfél elemzése
- Az saját erőssesek kihasználása
- A hibák minimalizálása`,
  },
  {
    id: 'kezdo-ijaszok-gyakori-hibai',
    title: 'Gyakori Hibák az Íjászat Kezdeténél',
    excerpt: 'Kerüld el az íjászat leggyakoribb kezdeti hibáit.',
    author: 'Oktatási Koordinátor',
    date: '2026-04-25',
    category: 'Képzés',
    readTime: 8,
    content: `# Gyakori Hibák az Íjászat Kezdeténél

## Helyzet Hibái

A legtöbb kezdő helyzethiákat követ el:
- Helytelen testhelyzet
- Rossz kar pozíció
- Fej mozgása a lövés alatt

## Tartás Problémák

Az íj megfelelő tartása kritikus:
- Az ujjak rossz pozíciója
- Az feszültség túl magas
- Az középső ujj elég nyomása

## Lövési Hibái

A lövés technikai:
- Túl gyors kioldás
- A kar mozgása kioldásnál
- Az száraz lövés (íj terhelés nélkül)

## Felszerelés Kiválasztás

Gyakori hiba:
- Túl erős íj választása
- Nem megfelelő nyílak hossza
- Rossz védőfelszerelés`,
  },
  {
    id: 'ijaszati-versenyei-magyarorszagon',
    title: 'Íjászati Versenyei Hungaryarcheryon',
    excerpt: 'Ismerd meg a magyar íjászati versenyek típusait és rendezésének módját.',
    author: 'Verseny Szervező',
    date: '2026-04-20',
    category: 'Versenysport',
    readTime: 10,
    content: `# Íjászati Versenyei Hungaryarcheryon

## Versenytípusok

Hungaryarcheryon különféle versenyi típusokat rendeznek:
- Helyi klub versenyei
- Regionális bajnokságok
- Nemzeti és nemzetközi versenyei

## Verseny Formátumok

Az általános verseny formátumok:
- Olimpiai recurve
- 3D íjászat
- Tradicionális íjászat kategória

## Résztvevői Szintek

A versenyeken résztvevők:
- Amatőrök és kezdők
- Felsőbb szintű lövészek
- Versenyzők és bajnokok

## Rangsorolás Rendszer

A magyar íjászat rangsora:
- Pontrendszeri alapú
- Szezonális versenyekből összegyűjtött`,
  },
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
