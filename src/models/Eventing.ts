export type Callback = () => void  // no arg no return function

export class Eventing {
  events: { [key: string]: Callback[] } = {}

  // on & trigger, !!! arraw function should be used 100%

  on = (eventName: string, callback: Callback) => {
    const handlers = this.events[eventName] || []
    handlers.push(callback)

    this.events[eventName] = handlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName] 
    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach(callback => {
      callback()
    })
  }
}