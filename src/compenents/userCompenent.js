import { BaseLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userServices.js"

//Kullanıcıdan aldığımız bilgileri buraya yani objeye atıyoruz.
console.log("User compenent yüklendi.")

let logger1 = new BaseLogger()
    //let logger2 = new DefaultLogger()
    //let logger3 = new MongoLogger()

//oluşturduğumuz classı bu şekilde çağırırız. Çağırdığımızda otomatik olarak import kodumuz da yukarıya eklenir.
//ama sonuna .js eklemez bizim eklememiz gerekir.
let userServices = new UserService(logger1)


let user1 = new User(1, "Esra", "Demir", "Van")
let user2 = new User(2, "Engin", "Demiroğ", "Ankara")
userServices.add(user1)
userServices.add(user2)

console.log(userServices.list())
console.log(userServices.getById(2))

userServices.add()
userServices.getById(1)
userServices.list()