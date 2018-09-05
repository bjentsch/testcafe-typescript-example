// derived from the devexpress example, @see: https://github.com/DevExpress/testcafe#getting-started
// @see: http://devexpress.github.io/testcafe/documentation/test-api/

import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `gutefrage question detail page`// declare the fixture
  .page `https://www.gutefrage.net/frage/powerpoint-animationen-gleichzeitig`;  // specify the start page


//then create a test and place your code there
test('Question author must be michael170', async t => {
  const menuButton = Selector('button.MenuButton[data-ref=menu-button]', { timeout: 30000 });
  await t
    .click(menuButton)

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(
      Selector('li.ContentMeta-contextMenuLabel:not(.Link) a.Link').innerText
    ).eql('michael170');
});
