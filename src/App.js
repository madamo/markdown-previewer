import "./styles.css";
//import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

import { useState } from "react";

export default function App() {
  // const [text, setText] = useState(
  //   "# Welcome to my React Markdown Previewer!## This is a sub-heading...<br /> ### And here's some other cool stuff: <br /> Heres some code, `<div></div>`, between 2 backticks.<br /> ``` // this is multi-line code: function anotherExample(firstLine, lastLine) { if (firstLine == '```' && lastLine == '```') {  return multiLineCode; } ```<br /> You can also make text **bold**... whoa!<br /> Or _italic_.<br /> Or... wait for it... **_both!_** <br />And feel free to go crazy ~~crossing stuff out~~.<br /> There's also [links](https://www.freecodecamp.org), and<br /> > Block Quotes! <br />And if you want to get really crazy, even tables:<br />  - And of course there are lists.   - Some are bulleted.  - With different indentation levels.  - That look like this.  1. And there are numbered lists too. 1. Use just 1s if you want! 1. And last but not least, let's not forget embedded images: ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
  // );
  const [text, setText] = useState(
    /*   `# Welcome to my React Markdown Previewer!
 ## This is a sub-heading
 ### And here's some other cool stuff:
 Heres some code, \`\`<div></div>\`\`, between 2 backticks.
 \`\`\` // this is multi-line code: function anotherExample(firstLine, lastLine) { if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {  return multiLineCode; } \`\`\`
 There's also [links](https://www.freecodecamp.org)
 > Block Quotes!
 You can also make text **bold**... whoa!
 - And of course there are lists.
  - Some are bulleted. 
 And last but not least, let's not forget embedded images: ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
 `*/
    "# Welcome to my React Markdown Previewer!\n" +
      "## This is a sub-heading\n" +
      "### And here's some other cool stuff:\n" +
      "Heres some code, `<div></div>`, between 2 backticks.\n" +
      "``` // this is multi-line code: function anotherExample(firstLine, lastLine) { if (firstLine == 'string1' && lastLine == 'string2') {  return multiLineCode; } ```\n" +
      "There's also [links](https://www.freecodecamp.org)\n" +
      "> Block Quotes!\n" +
      "You can also make text **bold**... whoa!\n" +
      "- And of course there are lists.\n" +
      "And last but not least, let's not forget embedded images: ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
  );

  //Heres some code, ``<div></div>``, between 2 backticks.

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
      <textarea onChange={handleChange} id="editor" />
      <div id="preview" dangerouslySetInnerHTML={markup} />
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


 const renderedHTML = md.render(markdown);
  return {__html: renderedHTML};
}

export default function MarkdownPreview({ markdown }) {
  const markup = renderMarkdownToHTML(markdown);
  return <div dangerouslySetInnerHTML={markup} />;
}

*/
