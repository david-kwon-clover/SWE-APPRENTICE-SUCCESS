/* Define a new class called Athlete
    The constructor will take the following arguments and set them as properties of any new instance.
            * @param {string} name 
    * @param {array} events -  

            
    Methods to define
        addEvent
            * @param {string} event
            pushes the event argument to the events array property

            deleteEvent
            * @param {string} event
            find and deletes the event from the events array


*/

export default class Athlete {
    constructor(name, events = []) {
        this.name = name;
        this.events = events;
    }

    addEvent(event) {
        this.events.push(event);
    } 

    deleteEvent(event) {
        if(this.events.includes(event)) {
            this.events.splice(this.events.indexOf(event), 1);
        }
    }
}


