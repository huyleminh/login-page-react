import EventEmitter from "events"

export abstract class BaseEvent {
    protected readonly _event : EventEmitter;
    protected _listeners: any[]
    
    constructor() {
        this._event = new EventEmitter();
        this._listeners = []
    }

    public baseEmit(eventName : string, data : any) {
        this._event.emit(eventName, data)
    }

    public baseOn(eventName : string, data : any) {
        const item = {name: eventName, data: data};
        if (!this._listeners.includes(item))
            this._listeners.push(item);
        this._event.on(eventName, data)
    }

    public baseListenerCount(eventName: string) {
        const events = this._listeners.filter(item => {
            return (item.name === eventName)
        })
        return events.length
    }
    
}

export class GlobalEvent extends BaseEvent {
    public static Init = new GlobalEvent();
}

export class LoginEvent extends BaseEvent{
    public static Init = new LoginEvent();
}