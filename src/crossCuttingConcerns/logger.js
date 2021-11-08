//loglama sınıfı ve fonksiyonu
export class BaseLogger {
    log(data) {
        //console.log(data)
        console.log("Default Logger: " + data)
    }
}

//Bir class başka bir classtan miras alabilir.Bu işleme kalıtım denir.
export class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Elastic" + data)
    }
}

//Bir class başka bir classtan miras alabilir.Bu işleme kalıtım denir.
export class MongoBaseLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Mongo" + data)
    }
}