export default class User {
    //yapıcı ,oluşturucu fonksiyonu çağırırız.
    constructor(id, firstName, lastName, city) {
        //console.log("user oluştu!")
        //bu classı işaret eder.(this)
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}