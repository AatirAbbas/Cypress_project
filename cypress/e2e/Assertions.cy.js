describe("Assertions Demo", ()=>{

    it.skip("implicit assertions", ()=>{

        cy.visit("https://qa-kalpnftm.p2eppl.com/login?redirectUri=/")

        //should and
        //cy.url().should('include', 'qa-kalpnftm')
        //cy.url().should('eq', 'https://qa-kalpnftm.p2eppl.com/')
        //cy.url().should('contain', 'kalpnftm')   //include and contain are same

        /*cy.url().should('include', 'qa-kalpnftm')
        .should('eq', 'https://qa-kalpnftm.p2eppl.com/')
        .should('contain', 'kalpnftm')*/

        // cy.url().should('include', 'qa-kalpnftm')
        // .and('eq', 'https://qa-kalpnftm.p2eppl.com/')
        // .and('contain', 'kalpnftm')
        // .and('not.contain', 'kalpnftmljh')

        // cy.title().should('include', 'Marketplace')
        // .and('eq', 'P2E NFT Marketplace')
        // .and('contain', 'NFT')

        // cy.get('.col-span-2 > .uppercase').should('be.visible')    //element visible
        // .and('exist')   //element exist

        // cy.xpath("//a")  //No of links

        cy.get('.mb-5 > .p-4').type('fahimabbas')     //provide value in inbox
        cy.get('.mb-5 > .p-4').should('have.value','fahimabbas')  //value
     
    })

    it("explicit assertions", ()=>{

        cy.visit("https://qa-kalpnftm.p2eppl.com/")

        cy.get('.lg\:hidden > .p-2').click()
        cy.get('.bg-\[\#0375df\]').click()
        cy.get("input[placeholder='Enter your username or email']").type('fahimabbas')
        cy.get("input[placeholder='Enter your password here']").type('Canada@1234')
        cy.get("button[class='w-[100%] mt-10 rounded-full border-none p-3 bg-[#0375DF] text-white cursor-pointer']").click()

    })
})