const EventEmitter = require('event');

const uuid= require('uuid');

class Loger extends EventEmitter{
    log(msg){
        this.emit('message',{id:uuid.v4(),msg});
    }
}


module.exports = Loger