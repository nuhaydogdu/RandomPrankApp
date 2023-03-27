class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID _kId_9U1c2xEG0WRNSDK5WSeI1NwLBib4Tiex_9ZwCQ'
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID                                               //document kısmından: unsplash sitesinden veri alabilmek için keyimizi bu şekilde belirtmemiz gerkiyor 
            },
            params:{                                                                       //params kısmınada dökümandan bakarak özelleştirmeler yapabiliyoruz 
                query:'animal',
                count:1                                                                    //dökümanda belirtilmiş: countu bir versek dahi bize bir array olarak döndürüyor.
            }
        });
    }

    async randomResimGetir() {                                              
 
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');           //yukarıda parma  ile aslında bu link yapısını oşuituruyoruz ('/photos/random?query=animal&count=1') 
            console.log(resimResponse.data[0].urls.regular);
            return resimResponse.data[0].urls.regular;

        } catch (err) {
            console.log(err.response);
            return 'https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318-1280x720.jpg';
        }

    }
}