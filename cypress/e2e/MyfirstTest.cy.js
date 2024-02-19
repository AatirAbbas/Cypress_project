

describe('My First Test', () => {
    it('verify title-positive', () => {
        cy.visit("https://qa-kalpnftm.p2eppl.com/")
        cy.title().should('eq','P2E NFT Marketplace')
    })
    it('verify title-negative', () => {
        cy.visit("https://qa-kalpnftm.p2eppl.com/")
        cy.title().should('eq','P2E NFT Marketplace right there')
    })
})