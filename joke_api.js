class JokeApi {
    constructor() {
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
        });
    }

    async randomSakaGetir() {                                                    //async kullanarak promis yapısındaki then ve catch yapılarıyla  uğraşmamış oluyoruz

        try {
            const sakaResponse = await this.axiosNesne.get('/jokes/random');    //axiosName içerisinde bir aksioso instanceesi olduğu için bunun üzerinden get isteğini yapabiliriz
            console.log(sakaResponse.data.value);
            return sakaResponse.data.value;

        } catch (err) {
            console.log(err.response);                                         //tam olarak hatanın neden çıktığını göremizi sağlıyor
        } 

    }
}