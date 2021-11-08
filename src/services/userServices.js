//Class oluşturuyoruz.İsmi büyük harfle başlar.
//export , dışardan import edilebilir anlamına gelir. default yani varsayılan olarak bunu seç anlamındadır.
export default class UserService {

    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }
    add(user) {
        this.users.push(user)
        this.loggerService.log(user)
    }
    list() {
        return this.users
    }
    getById(id) {
            return this.users.find(u => u.id === id)
        }
        /*
            add(user) {
                console.log("kullanıcı eklendi" + user)
            }

            list() {
                console.log("kullanıcılar listelendi")
            }

            getById(id) {
                console.log("kullanıcı detayı getirildi.")
            }
            */

}