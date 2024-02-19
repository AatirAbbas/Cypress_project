import 'cypress-file-upload';
describe('File Uploads', ()=>{
    it('Single File Upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('Holiday List 2023.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload - Rename', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'Holiday List 2023.pdf', fileName:'Holiday.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload - Drag and Drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('Holiday List 2023.pdf', {subjectType:'drag-n-drop'});
        //cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .contains('Holiday List 2023.pdf');
        //cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('Multiple File Upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['Holiday List 2023.pdf', 'test.pdf']);
        //cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get(':nth-child(6) > strong').should('have.text', 'Files You Selected:');
       // cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it.only('File Upload - Shadow Dom', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-ui-component', {includeShadowDom:true}).attachFile('Holiday List 2023.pdf');
        cy.wait(5000);
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('Holiday List 2023.pdf');
        //cy.get(':nth-child(6) > strong').should('have.text', 'Files You Selected:');
       // cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })
})