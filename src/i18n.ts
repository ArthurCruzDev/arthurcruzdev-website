import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next';


i18next
.use(initReactI18next)
.use(resourcesToBackend((language, namespace, callback)=>{
    
    import(`./assets/translations/${language}.json`)
    .then(({ default: resources }) => { // with dynamic import, you have to use the "default" key of the module ( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#importing_defaults )
        callback(null, resources)
    })
    .catch((error) => {console.log(error);
        callback(error, null);
    })
}))
.init({
  lng: 'pt-br',
  fallbackLng: 'en-us',
});

export default i18next;