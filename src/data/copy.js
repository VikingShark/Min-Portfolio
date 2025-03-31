import eHandel from '../assets/Linkedin-e-handel@2x.jpg';
import orderSumCard from '../assets/Linkedin-best-app - v2@2x.jpg';
import spotifyKlon from '../assets/spotify-klon.jpg';
import klarna from '../assets/Linkedin-klarna@2x.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import macHero from '../assets/mac-review.png';
import villeHero from '../assets/ville-1.png';

export const COPY = {
  hero: {
    title: 'Teknisk utvecklare med affärssinne',
    subtitle:
      'Jag kombinerar entreprenörskap, erfarenhet och webbutveckling för att skapa smarta digitala lösningar som ökar försäljningen och optimerar konverteringar.',
    cta1: {
      text: 'TA KONTAKT',
      callback: () => {
        window.open(
          'https://www.linkedin.com/in/villiam-mejlvang-strannerklint-7a769b216/',
          '_blank'
        );
      },
    },
    cta2: {
      text: 'SE PROJEKT',
      to: '/#projects',
    },
    statistic1: '2M+ SEK omsättning i e-handel',
    statistic2: 'Certifierad MERN-stack utvecklare',
  },
  aboutMe: {
    title: 'Villiam Mejlvang Strannerklint',
    subtitle:
      'Min expertis ligger i att kombinera teknisk utveckling med affärsstrategi för att skapa lösningar som driver tillväxt. Som utvecklare för J.V Ecoms e-handel har jag ansvarat för över två miljoner kronor i omsättning. Denna framgång har jag lyckats med genom att skalat och förbättrat digitala plattformar för att maximera försäljning och kundupplevelse. ',
    cta: {
      text: 'TA KONTAKT',
      callback: () => {
        window.open(
          'https://www.linkedin.com/in/villiam-mejlvang-strannerklint-7a769b216/',
          '_blank'
        );
      },
    },
    statistics: [
      { statistic: '2M+ kr', text: 'Omsättning i e-handel' },
      { statistic: '5+ år', text: 'Industrierfarenhet' },
    ],
    profilePicture: villeHero,
  },
  projects: [
    {
      img: eHandel,
      title: 'E-handelsplattform med 1 click checkout',
      listOfTechStack: ['React', 'Node', 'Express', 'API'],
      description:
        'E-handelsprojektet går ut på att utveckla en responsiv webbapplikation med React och en backend som integrerar Klarna Checkout som betalningslösning. Studenter arbetar i grupper om tre och hanterar projektet genom Git och GitHub. Målet är att bygga en fungerande webbutik med varukorg, betalningshantering och deployad frontend och backend.',
      links: [
        { Icon: GitHubIcon, href: 'https://github.com/' },
        { Icon: OpenInNewIcon, href: 'https://github.com/' },
      ],
      rightAlign: true,
    },
    {
      img: klarna,
      title: 'Klarna Checkout',
      listOfTechStack: ['Node', 'Express', 'API'],
      description:
        'För att effektivisera e-handeln och skapa en smidig betalningsupplevelse utvecklade jag en Klarna Checkout-lösning med Express och Node. Genom att integrera flera API:er säkerställde jag säkra transaktioner och ett enkelt flöde för både kunder och handlare. Resultatet är en användarvänlig betalningslösning som visar hur modern fintech och genomtänkt design kan driva affärer framåt.',
      links: [
        { Icon: GitHubIcon, href: 'https://github.com/' },
        { Icon: OpenInNewIcon, href: 'https://github.com/' },
      ],
      rightAlign: false,
    },
    {
      img: spotifyKlon,
      title: 'Spotify klon',
      listOfTechStack: ['React', 'MUI', 'SDK', 'API'],
      description:
        'Jag har byggt en Spotify-klon med React, Material UI och Spotifys API för att skapa en autentisk musikupplevelse. Projektet innehåller funktioner som musikuppspelning via Spotifys Web Playback SDK, autentisering och dynamisk hantering av spellistor. Det visar min förmåga att arbeta med avancerade API-integrationer, skapa responsiva gränssnitt och utveckla skalbara webbapplikationer.',
      links: [
        { Icon: GitHubIcon, href: 'https://github.com/' },
        { Icon: OpenInNewIcon, href: 'https://github.com/' },
      ],
      rightAlign: true,
    },
    {
      img: orderSumCard,
      title: 'Ordersummering',
      listOfTechStack: ['CVO', 'Responsivitet', 'CSS', 'Design'],
      description:
        'Jag byggde en orderöversiktsapplikation med fokus på pixelperfekt design och interaktivitet för att skapa en smidig användarupplevelse. Genom att implementera hover-effekter och klicklägen säkerställde jag ett dynamiskt gränssnitt som följer designriktlinjer.',
      links: [
        { Icon: GitHubIcon, href: 'https://github.com/' },
        { Icon: OpenInNewIcon, href: 'https://github.com/' },
      ],
      rightAlign: false,
    },
  ],
  reviews: [
    {
      author: 'Marcus Pousette',
      reviewText:
        'Villiam arbetar självständigt och gör otroliga framsteg i kursen. När han kör fast ber han om hjälp på ett produktivt sätt som bidrar till lösningen. Han ligger i framkant bland de vassaste eleverna jag har jobbat med.',
      img: macHero,
      title: 'Programchef på Techover',
    },
  ],
  contact: {
    title: 'Kontakta mig gärna på LinkedIn!',
    subtitle:
      'Vill du ta din e-handel till nästa nivå med smarta och skalbara digitala lösningar? Hör av dig så pratar vi om hur jag kan bidra till din e-handels framgång!',
    cta: {
      text: 'TA KONTAKT',
      callback: () =>
        window.open(
          'https://www.linkedin.com/in/villiam-mejlvang-strannerklint-7a769b216/',
          '_blank'
        ),
    },
  },
};
