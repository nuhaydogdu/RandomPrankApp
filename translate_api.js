// htttp://translation.googlepis.com/Language/translate/v2?target=tr&key=AIzaSyD1HQLs7eEdiOQExJsU1D9h1dtMhQVFEqE&q=car
// google translate api den aldığımız kod(temsili)

class TranslateApi {
    constructor(ingilizceSaka) {
        this.baseURL = 'htttp://translation.googlepis.com';

        this.aranacakCumle = ingilizceSaka;
        this.axiosNesnesi = axios.create({
            baseURL: this.baseURL,
            params: {
                target: 'tr',
                key: 'AIzaSyD1HQLs7eEdiOQExJsUlD9h1dtMhQVFEqE',
                q: this.aranacakCumle
            }
        });
    }

async ceviriYap(){
    
try {
    const ceviri= await this.axiosNesnesi.target('/Language/translate/v2');
    console.log(ceviri.data.data.translations[0].translatedText);
    
    return ceviri.data.data.translations[0].translatedText;

} catch (err) {
    console.log(err.response.data.error.message);
}
}

}