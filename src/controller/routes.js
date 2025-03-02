import { include } from 'named-urls';

export const routes = {
  home: include('', {
    self: '/',
    caseStudy:include('/case-study',{
      self:'',
      aiwarehouse:"Al-based-Warehouse-Management-Solution",
      forexcurrency: 'forex-currency-wallet-software-solution',
      Development: 'Development of integrated Tools',
      Innovative : 'Innovative B2B Collaboration Platform',

    }),
    aboutus:'/about-us',
    mobileAppDevelopmetDubai:'/mobile-app-development-dubai',
    contactus:'/contact-us',

  }),
  itservices: include('/it-services', {
    consulting: 'consulting',
    mobileAppDevelopmet: 'mobile-app-developmet',
    support: 'support',
    staffing: 'staffing',
    webDevelopment: 'web-development',
    digitaldransformation: 'digital-transformation',
    edi: 'edi',
  }),
  industries: include('/industries', {
    retail: 'retail',
    healthcare: 'healthcare',
    education: 'education',
    media: 'media',
    banking: 'banking',
    insurance: 'insurance',
  }),
  technologies: include('/technologies', {
    ai: 'ai',
    cloud: 'cloud',
  }),


 

};

