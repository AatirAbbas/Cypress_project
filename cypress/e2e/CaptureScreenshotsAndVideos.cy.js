describe('mysuite', ()=>{

    it('Capture screenshots & Videos', ()=>{

        cy.visit("https://demo.opencart.com/");
        cy.screenshot("homepage");
        cy.wait(5000);
        cy.get("img[title='Your Store']").screenshot("logo");

        //automatically capture screenshot and video on failure - only when you execute through

        


    })
})