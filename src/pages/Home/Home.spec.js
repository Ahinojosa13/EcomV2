describe('Home Page',()=>{
    beforeEach(()=>{
        cy.visit("https://main.d3w0azrv0ylvkf.amplifyapp.com/");
    });
    it('render Home Page', ()=>{
        cy.get('.homeblock').should('exist');
        cy.get('.block1').should('exist');
        cy.get('.block2').should('exist');
        cy.get('.block3').should('exist');
    });
    it('displays h1 and p tag',()=>{
        cy.get('.block1 h1').should('contain',"El Tigre's Gear");
        cy.get('.block1 p').should('contain','BEGIN YOUR JOURNEY');
    });
    it('Checks Button sends you to ETGP page',()=>{
        cy.get('.block1 button').click();
        cy.url().should('eq','https://main.d3w0azrv0ylvkf.amplifyapp.com/ETGP');
    });
    it('displays the Trainers Component', ()=>{
        cy.get('.block3').within(()=>{
            cy.get('.Trainers').should('exist');
        });
    });

})