import './example.test.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';   


const test = QUnit.test;

const dog =
    {
        name: 'Boogie',
        breed: 'corgi',
        age: 5,
        id: 2,
        description: 'Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.',

    };

test('renderDogCard is a function that will return DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=2"><div class="dog-card"><p>Boogie</p><img src="./assets/corgi.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'returns dog-card div');
});


test('renderDogDetail is a funtion that will return DOM node', (expect) => {

    const expected = '<div class="dog-detail"><p class="name">Boogie</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">corgi</p></div><p class="description">Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.</p></div>';

    const actual = renderDogDetail(dog);

    expect.equal(actual.outerHTML, expected, 'returns dog-detail div');

});


