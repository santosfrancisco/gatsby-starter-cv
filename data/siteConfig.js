module.exports = {
  siteTitle: 'Gallinaro Marco',
  siteDescription: ``,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Gallinaro Marco',
  twitterUsername: '',
  githubUsername: '',
  authorAvatar: '/images/foto.cv.jpg',
  authorDescription: `Sono un perito informatico amante dello sport e con la passione per le nuove tecnologie al servizio della persona e dell'economia. Buona capacità comunicativa, organizzativa e di problem solving acquisita durante i periodi lavorativi e durante il periodo in cui ho assunto il ruolo di aiuto allenatore in 2 squadre di pallavolo.`,
  skills: [
    {
      name: 'Elaborazione informazioni',
      level: 90
    },
    {
      name: 'Problem solving',
      level: 77
    },
    {
      name: 'Microsoft Office™',
      level: 85
    },
    {
      name: 'Inglese',
      level: 70
    },
    {
      name: 'C#, HTML, CSS, PHP',
      level: 60
    },
    {
      name: 'Sap',
      level: 72
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
     {
      company: "Tecno Pack S.p.a.",
      begin: {
        month: 'ago',
        year: '2021'
      },
      duration: 'in corso...',
      occupation: "Junior Controller",
      description: "Wip, costificazione delle commesse, Rivalutazione tariffe, Slow moving, analisi spedizioni per coperture assicurative"
  
    },
    
     {
      company: "Tyrolit Vincent S.r.l.",
      begin: {
        month: 'gen',
        year: '2021'
      },
      duration: '5 mesi',
      occupation: "Ufficio logistica",
      description: "Gestione Spedizioni (Italia, CEE, UK), fatturazione, analisi Spedizioni per valutazioni assicurative, archiviazione e solleciti MRN"
  
    },
    {
      company: "DECATHLON ITALIA S.r.l.",
      begin: {
        month: 'set',
        year: '2019'
      },
      duration: '5 mesi',
      occupation: "Sales Assistant",
      description: "Accompagnare il cliente durante l'acquisto. Gestione e layout del merchandising del reparto"
  
    },  {
      company: "Tecno Pack S.p.a.",
      begin: {
        month: 'mag',
        year: '2019'
      },
      duration: '2 mesi',
      occupation: "Ufficio amministrativo",
      description: "Focus sui costi dei materiali quale componente strategico del costo delle commesse, Analisi dei materiali per la determinazione dello slow-moving, Rivalutazione delle tariffe."
  
    }, 
    {
      company: "Università degli studi di Verona",
      begin: {
        month: 'set',
        year: '2014'
      },
      duration: null,
      occupation: "studente",
      description: "Economia e Commercio"
    }, 
    {
      company: "Estel Group S.r.l.",
      begin: {
        month: 'giu',
        year: '2014'
      },
      duration: '1 mese',
      occupation: "Ufficio CED",
      description: "Gestione Backup azinedale, configurazione Pc azeindali, backup server virtuali con VEEM"
    }, 
     {
      company: "ITIS G.Chilesotti",
      begin: {
        month: 'set',
        year: '2009'
      },
      duration: '5 anni',
      occupation: "studente",
      description: "Perito informatico capotecnico"
    }, 
  ],
  
 
  portifolio: [
    {
      image: "https://raw.githubusercontent.com/gallinaro/gatsby-starter-cv/master/static/images/btc-img.png",
      description: "Cryptovalute blog",
      url: "https://gallinaro-4f379.netlify.app/"
    },
    {
      image: "https://raw.githubusercontent.com/gallinaro/gatsby-starter-cv/master/static/images/film-img.png",
      description: "Cinema blog",
      url: "https://marcofilm.netlify.app/"
    },
    {
      image: "https://raw.githubusercontent.com/gallinaro/gatsby-starter-cv/master/static/images/download_img.png",
      description: "CV",
      url: "https://github.com/gallinaro/gatsby-starter-cv/raw/master/static/images/CV.pdf"
    },
    /* more portifolio items here */
  ],
  social: {
       email: "marco.gallinaro95@gmail.com"
      
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '',
  googleAnalyticsId: '',
  background_color: '#212121',
  theme_color: '#636363',
  fontColor: "#FFFFFF",
  enableDarkmode: false, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/logo sito cv.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Progetti e Download',
      url: '/portifolio',
    }
  ]
}
