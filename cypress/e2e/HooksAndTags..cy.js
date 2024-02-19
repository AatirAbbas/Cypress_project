//before
//after
//beforeEach
//afterEach

const { after } = require("mocha");

describe('MyTestSuite', ()=>{

    before(()=>{     //Will be executed once only entirely
        cy.log('****************** Launch App *************************');

    })

    after(()=>{     //Will be executed once only entirely
        cy.log('****************** Close App *************************');

    })

    beforeEach(()=>{     //Will be executed before every block
         cy.log('****************** Login *************************');

    })

    afterEach(()=>{     //Will be executed after every block
        cy.log('****************** Logout *************************');

    })

    it.only('search', ()=>{             //to execute only 1 block

        cy.log('********** Searching *********************');
    })

    it.skip('advanced search', ()=>{             //to skip a block

        cy.log('********** Advanced Searching *********************');
    })
})