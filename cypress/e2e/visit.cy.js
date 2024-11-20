describe('template spec', () => {

  beforeEach(() => {
    cy.log('init beafore')
    cy.acesso();
    cy.reload(); 
  });

  it('passes', () => {
    
    cy.get('h1').should('have.text', 'Automation Practice');  
    cy.get('ul').should('exist')
    cy.get('a').contains('Fill out forms').click();
    cy.get('.et_pb_menu__logo-wrap').should('exist');
    cy.get('#et_pb_contact_name_0').type('adriel teste');
    cy.get('#et_pb_contact_message_0').type('teste de teste');
    cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click();
    cy.wait(3000);
    cy.get('.et-pb-contact-message > p').contains('Thanks for contacting us')
    cy.get('.et-pb-contact-message > p').should('have.text','Thanks for contacting us')
  })
})