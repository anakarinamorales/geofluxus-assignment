import { selectReportOptions } from '@/../../src/utils/constants';

beforeEach(() => {
    cy.visit('/');
});

context('Dashboard', () => {
    // describe('No report selected', () => {
    //     it('Renders a main with 3 children', () => {
    //         cy.get('main').find('section').should('have.length', 3);
    //     });
    //     it('Renders the first section with a title and a description', () => {
    //         cy.get('h2').contains('Bekijk rapport');
    //         cy.get('span').contains(
    //             'Selecteer een rapport dat je wilt verkennen voor een dieper inzicht in het afvalbeheer van uw organisatie.'
    //         );
    //     });
    //     it('Renders the report type form and with an select input showing a placeholder text', () => {
    //         cy.get('section form').should('exist');
    //         cy.get('label').contains('Rapporttype');
    //         cy.get('input[class="ant-select-selection-search-input"]').should(
    //             'exist'
    //         );
    //         cy.get('span[class="ant-select-selection-placeholder"]').should(
    //             'exist'
    //         );
    //         cy.get('span[class="ant-select-selection-placeholder"]').contains(
    //             'Selecteer een rapporttype'
    //         );
    //     });
    //     it('Renders the last section with only a text', () => {
    //         cy.get('main section')
    //             .last()
    //             .contains(
    //                 'Er zijn momenteel geen rapporten geselecteerd. Kies een rapport om de details te bekijken.'
    //             );
    //     });
    // });
});

context('Dashboard | Select options', () => {
    beforeEach(() => {
        cy.get('form input').click();
    });

    describe('With selected report', () => {
        // it('Opens the dropdown when clicling on the select component with its 3 options', () => {
        //     cy.get('.rc-virtual-list-holder-inner')
        //         .find('.ant-select-item-option')
        //         .should('have.length', 3);
        // });
        // it(`Changes the select value to ${selectReportOptions[0].label} when selecting it on the dropdown`, () => {
        //     cy.get(
        //         `.ant-select-item[title='${selectReportOptions[0].label}']`
        //     ).click();
        // });
        // it(`Changes the select value to ${selectReportOptions[1].label} when selecting it on the dropdown`, () => {
        //     cy.get(
        //         `.ant-select-item[title='${selectReportOptions[1].label}']`
        //     ).click();
        // });
        // it(`Changes the select value to ${selectReportOptions[2].label} when selecting it on the dropdown`, () => {
        //     cy.get(
        //         `.ant-select-item[title='${selectReportOptions[2].label}']`
        //     ).click();
        // });
        // it('', () => {});
        // it('', () => {});
    });

    describe(`Dashboard | ${selectReportOptions[0].label} option selected`, () => {
        beforeEach(() => {
            cy.get(
                `.ant-select-item[title='${selectReportOptions[0].label}']`
            ).click();
        });

        it(`Shows 3 report sections when selecting ${selectReportOptions[0].label}`, () => {
            cy.get('main.ant-layout-content section').first();
        });
        // it('', () => {});
    });
});

context('Dashboard | Submit form', () => {
    // describe('', () => {
    //     // it('', () => {});
    // });
});
