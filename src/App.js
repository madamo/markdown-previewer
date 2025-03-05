import "./styles.css";
//import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

import { useState } from "react";

export default function App() {
  const [text, setText] = useState(
    "# Welcome to my React Markdown Previewer!\n" +
      "## This is a sub-heading\n" +
      "### And here's some other cool stuff:\n" +
      "Heres some code, `<div></div>`, between 2 backticks.\n" +
      "``` // this is multi-line code: function anotherExample(firstLine, lastLine) { if (firstLine == 'string1' && lastLine == 'string2') {  return multiLineCode; } ```\n" +
      "There's also [links](https://www.freecodecamp.org)\n" +
      "> Block Quotes!\n" +
      "You can also make text **bold**... whoa!\n" +
      "- And of course there are lists.\n"
  );

  function handleChange(event) {
    //const markdown = marked.parse(event.target.value);
    setText(event.target.value);
  }

  function renderMarkdownToHTML(text) {
    // This is ONLY safe because the output HTML
    // is shown to the same user, and because you
    // trust this Markdown parser to not have bugs.
    const renderedHTML = marked.parse(text);
    return { __html: renderedHTML };
  }

  const markup = renderMarkdownToHTML(text);

  return (
    <div className="App">
      <div class="panel">
        <h2 class="title">Enter markdown:</h2>
        <textarea onChange={handleChange} id="editor" />
      </div>
      <div class="panel">
        <h2 class="title">Preview:</h2>
        <div id="preview" dangerouslySetInnerHTML={markup} />
      </div>
    </div>
  );
}

/*
User Story #1: I can see a textarea element with a corresponding id="editor".

User Story #2: I can see an element with a corresponding id="preview".

User Story #3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

User Story #4: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

User Story #6: When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as br (line break) elements.

*/
