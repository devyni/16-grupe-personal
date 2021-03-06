


class Services {
    /**
     * Constructor for Services object
     * @param {string} selector CSS-like selector for finding location for new content rendering
     * @param {Array} data list of objects that defines each service
     */
    constructor (selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
    }

    isValidSelector () {
        if (typeof this.selector !== 'string') {
            console.warn ('Selector should be  string type')
                        
            return false;
        }
        if (this.selector === '') {
            console.warn ('Selector should be not empty')    
            return false;
        }
        this.DOM = document.querySelector(this.selector);
        if(!this.DOM) {
            console.warn ('Could nor find any element')    
            return false;
        }

        return true;
    }

    render () {
        if ( !this.isValidSelector() ) return;
        
        let HTML = '';
        for (const service of this.data) {
            HTML += `<div class="service">
                        <i class="fa fa-${service.icon}"></i>
                        <a href="${service.link}">${service.name}</a>
                        <p>${service.description}</p>
                    </div>`;
        }

        this.DOM.innerHTML = `<div class="list">
        ${HTML}
        
        </div>`;
    }
}
export {Services};