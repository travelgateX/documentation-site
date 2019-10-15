+++
title = "Style Guide"
pagetitle = ""
description = "Community Style Guide"
icon = "fa-info-circle"
weight = 1
+++


This document provides guidance for contributors to the TravelgateX Platform Community site.

* [Caveats](#caveats)
* [Types of documentation](#types-of-documentation)
* [Designing a doc](#designing-a-doc)
* [Visual assets](#visual-assets)
* [File organization in GitHub](#file-organization-in-github)
* [General content guidelines](#general-content-guidelines)
* [General style guidelines](#general-style-guidelines)
* [Markdown usage](#markdown-usage)
* [Voice and tone](#voice-and-tone)
* [Including source code](#including-source-code)
* [API documentation](#api-documentation)
* [Writing resources](#writing-resources)

## Caveats

Let's get these things out of the way right up front:

* Don't sell or do marketing. -> TBD
* Don't editorialize. Document.
* Assure that the content you're writting is not duplicated on another page, avoid incosistences. Unify.
* Don't make assumptions about your reader unless you state the assumptions up front.
* Don't use absolutes, such as "instantaneously," "perfectly," "absolutely," "totally," or "100%," unless you can back up what you're saying with documentation.
* Don't use superlatives, such as "the best solution," "the perfect answer," and so on.
* Don't use logos or trademarks unless you have explicit permission.
* Don't make performance claims unless you back them up with current data. This means either external links, or links to benchmarking code.
* Don't include diagrams or pictures that you have no legal rights to include.
* Don't alter or truncate TravelgateX Platform product names. For example, it’s HotelX, not hotelX.
* Don't alter or truncate other names. For example, it's Cloud BigQuery, not BigQuery.

## Types of documentation

Documentation submitted by contributors is usually one of this types:

* **Concept**: Helps the user gain deeper understanding of a product or
  architecture. Concept docs answer questions such as "What is X?" and "How
  does X work?" They don't provide specific walkthroughs. It's common the use of blockquotes to quote people. They might contain numbered steps as generic examples, but this is rare. 
  
  More info at [Writing a Concept doc](#Writing-a-Concept-doc).

* **Tutorial**: Walks a user through a real-world, industry-specific, or
  end-to-end development scenario that uses your product. Tutorials teach "how
  to do Y in the context of ABC." Tutorials contain numbered steps that
  prescribe what to do. They can have enough supporting conceptual information,
  interspersed among the steps, to help the reader understand what they're
  doing, why they're doing it, and how and why it works. The end result is a
  working example. Usually, code on GitHub supports the document. 
  
  More info at [Writing a Tutorial](#Writing-a-Tutorial).

* **Reference**: Programming concept explanation. Reference relates to an 
  specific topic. References must have a title, an overview with a general explanation and an generic example on a code block. They must be listed the fields available (if it applies) and will include if the field is required and optional values. Finally it will be related if it's required by any other topic (if it applies).
  
  More info at [Writing a Reference doc](#Writing-a-Reference-doc)

* **Plugin**: The plugins must have an explanation that indicates on a clear
  way the bennefits of using it and the improvements that it applies to the general HotelX behaviour. Plugins must have a title, general explanation and ... (This will be completed).
  
  More info at [Writing a Plugin doc](#Writing-a-Plugin-doc)

## Designing a doc

Just as you design an app before you start coding, designing how your doc works
before you write saves you writing time, helps focus your document, and helps to
make sure you're giving the reader the right information.
[A good way to design your document is by outlining](https://owl.english.purdue.edu/owl/resource/544/02/).

As you develop your outline, ask yourself:

* In one sentence, what is my doc about? You can reuse a version of this sentence as the opener in the doc.
* What does my reader need to know before they can understand the contents? This question can lead to a set of prerequisites.
* Why does the reader care? This information will be part of your introduction.
* Am I building concepts for the reader from most general to most specific?
* Am I introducing ideas in the right order?
* Is there anything I can remove?
* Is there anything missing?
* Have I made the right assumptions about my audience?

The following sections show the main, top-level organization for the concept and
tutorial doc types. Use these sections to start your outlines.

### Writing a Concept doc

A Concept doc has these major sections:

* Title
* Overview
    * Don't use the heading "Overview" or any other heading. Just start at the first sentence.
* Body
    * Provides the details.
    * Contains headings and subheadings as needed to make the content easy to skim.

**Example**: [GraphQL Overview](/learning-graphql/overview/)

### Writing a Tutorial

A Tutorial doc has these major sections. Items in bold below are literal heading names:

* Title
* Overview
    * First sentence tells what the page is about
    * Tell the user what they're going to learn and provide any concise background information that's helpful.
    * Don't use the heading "Overview." Just get right to it.

* **Objectives**
    * A short, bulleted list of what the tutorial teaches the reader.

* **Before you begin**
    * A numbered list of steps required to set up for the tutorial.
    * Any general prerequisites.
    * Don't assume anything about the user's environment. Assume that the user has only basic operating system installed. If doing the tutorial requires the user to have a specific environment, state what is required. For easy-to-install environment bits, just give them the instructions, such as "Run apt-get install…". For more complex setups, link to official documentation.

* **Costs** (optional)
    * Tell the reader which technologies will be used and what it costs to use them.
    * Link to the [Pricing Calculator](https://cloud.google.com/products/calculator/), preconfigured, if possible.
    * If there are no costs to be incurred, state that.

* Body
    * Use as many headings and subheadings as needed.
    * Use numbered steps in each section.
    * Start each step with the action: "Click," "Run," "Enter," and so on.
    * Keep numbered step lists to around 7 or less, if possible. If you need more steps, break it up into subheadings.
    * Provide context and explain what's going on.
    * Use screenshots when they help the reader. Don't provide a screenshot for every step.
    * Show what success looks like along the way. For example, showing console output or describing what happens helps the reader to feel like they're doing it right and help them know things are working so far.

* **Cleaning up**
    * Omit this section if you stated there are no costs in the Costs section.
    * Tell the user how to shut down what they built to avoid incurring further costs.

**Example**: [Configure HotelX Security Tutorial](/travelgatex/tutorials/howto-configure-permissions/)

### Writing a Reference doc

A Reference doc has these major sections:

* Title
* Overview
    * Don't use the heading "Overview" or any other heading. Just start at the first sentence.
* Code block
    * You can wrap your code between \''' and \''' 
* Body
    * Provides the details.
    * Contains headings and subheadings as needed to make the content easy to skim.

**Example**: [GraphQL AdminMutation](/travelgatex/reference/objects/adminmutation/)

### Writing a Plugin doc

A Plugin doc has these major sections:

* Title
* Overview
    * Don't use the heading "Overview" or any other heading. Just start at the first sentence.

(Provisional documentation not finished)

**Example**: [Aggregation plugin](/hotel-x/plugins/aggregation/)

## Visual assets

TravelgateX offers a set of logos and architectural diagram assets for your use:

[https://cloud.google.com/icons/](https://cloud.google.com/icons/)

## File organization in GitHub

Follow these guidelines for how to organize your documents:

* If necessary, create a new folder for your document.
* Name the folder by [slugifying](http://slugify.net/) your doc's title. You can omit articles such as "and" and "the."
* Name your new doc `index.md`.
* Store media in the same folder. i.e. `/images` as discused [here](https://discourse.gohugo.io/t/best-practices-assets-with-content/9984).

For example, if you submit a tutorial named "Identity and Access Management":

* **Folder name**: `security`
* **URL**: `https://cloud.google.com/travelgatex/security/identity-access-management`

If you don't have any additional files that go along with your tutorial, you can
simply make a top-level Markdown file within the `security/` folder, e.g.
`security/identity-access-management.md` instead of
`security/identity-access-manangement/index.md`.

## General content guidelines

This site seeks technical content. While it's fine and often appropriate to point out the advantages of a particular product or TravelgateX Platform, don't give sales pitches in the document. Here are some guidelines:

+  Write for a technical audience.
+  If the document looks like a sales brochure, it's not appropriate as TGX content.
+  Avoid superlatives. Don't say "the best," "amazing," "fantastic," and so on. No exclamation points.

### Ambiguity

Ambiguity is the enemy of technical content. Re-read what you've written to check whether it can be read to mean more than one thing.

### Repetition

Avoid needless repetition. Telling the reader a fact one time usually suffices.

## General style guidelines

Here are style guidelines to help you craft a great article.

### Acronyms

Don’t create acronyms from product or feature names.
Only use acronyms that your audience is familiar with. The A–Z word list has guidelines for many common acronyms, and some acronyms are so widely used that they’re in [The American Heritage Dictionary](https://ahdictionary.com/).

**For example:**
Conversation as a platform (CaaP) has the potential to make booking a flight as easy as sending a text message.
Developers are also looking to CaaP to make computing more accessible to users of all abilities.
Learn how to connect a USB device to your Microsoft Surface.

### Headings

Use headings to organize your page into sections and subsections. Headings make it easier for readers to skim and understand what the article is about. Capitalize only the first word and product names in your headings.

Avoid using an acronym for the first time in a title or heading, unless it’s a keyword that you need to place in the title or heading for SEO. If the first use of the acronym is in a title or heading, introduce the acronym (in parentheses, following the spelled-out term) in the following body text.

**For example:**

Creating a new object

**Not:**

Creating a New Object


### Lists

Lists help make your page more scannable.


### Numbered lists

Use numbered lists when it's essential that the items be done in a specific order. Otherwise, use a bulleted list. Don't use a numbered list as a way to count the things in the list.

**For example:**

1. Do this.
1. Do that.
1. Do another thing.

**Not:**

There are three colors that I like:

1. Red
1. Blue
1. Yellow

**Think about the order**. When writing instructions, give the reader orientation cues in the proper order. Think about moving someone's eyes around the screen.

**For example:**

"Click the OK button in the Cloud Console, on the VM instances page, in the Compute Engine section."

**Not this**, because it causes someone to visually search backwards:

"Click the OK button in the Compute Engine section of the VM instances page of the Cloud Console."


### Bulleted lists

Use bulleted lists for lists that don't imply a sequence. End each item with a period if the item is a sentence or a phrase. Don't use periods for lists of single words or if the list contains only product names.

**For example:**

I have three favorite colors:

* Red
* Blue
* Yellow

### Parallelism

Try to keep your language across list items in a similar format. For example, start each item with a noun or a verb, but don't mix the formats.

**For example:**

* Write the docs.
* Write them well.
* Enjoy the process.

**Not:**

* Write the docs.
* The docs should be great.
* You can have fun writing the docs.

### Tables

Tables are a great way to help the reader compare a set of items, such as mutually exclusive options. Tables work well when there's a consistent set of properties for each item in a list.

Use the parallelism principle previously described for table headings and the first column.

### Images

A well-designed diagram or a screen shot can save you a lot of writing and help the reader better understand a complex idea. Make sure any text is legible at the display size in the doc (800 pixels wide or less). If the image itself becomes too complex, consider breaking it up into more than one picture.

* Don't use images you don't have rights to use.
* Don't store the images in the same folder where your document's `index.md` file is stored, images must be saved in current_folder/images. 
* Don't embed SVG images on the .md files, so the SVG images must be in a separate svg file under /images dir.

### Code

Format code, command lines, paths, and file names as code font.

### Linking

Provide inline links to relevant information, where appropriate. For example, link to:

* "One source of truth" content.
* Anything that's likely to go out of date quickly if you copied it into your article.
* Information that gives more depth than is appropriate for the current context.

Provide direct links to pages in the Google Cloud Console when you give Cloud Console-based instructions. These _deep links_ save the reader time spent looking for the right page and can save you time writing descriptions of how to find the page. Deep links open the page with the project set to the user's last-used project.

* Write short link text (four or fewer words) that's descriptive and includes keywords.
* If it works, use the title or description of the target page as link text.
* Link to background and related information rather than summarizing it.

### Formatting common text elements

| Element | Convention | Example |
| ------- | ---------- | ------- |
| Database names | Bold. The capitalization of database names varies | **Contoso** database |
| Emphasis       | It’s OK to use italic formatting sparingly for emphasis | Cybercriminals might call you and claim to be from Microsoft. _Be aware that Microsoft will never call you to charge for security or software fixes._ |
| New terms | Italicize the first mention of a new term if you're going to define it immediately in text | Profile may consist of _buyer_ or _seller_ |
| Products, services, apps, and trademarks| Usually title-style capitalization | HotelX<br>Stats


## Markdown usage

This site uses Markdown when publishing tutorial content. The site recognizes
basic Markdown with a few extensions and edge cases.

### Autolinks

Publishing recognizes and adds links to URLs without `http://` or `https://`
prefixes when they are delimited by whitespace, parentheses, or text formatting
characters (`*_~`). Do not use `<` and `>` delimiters for these, as they will be
stripped out as raw HTML.

### Disallowed Raw HTML

Publishing strips *all* possible HTML from tutorial content, essentially anything contained within `<` and `>` delimiters. Note that this is stricter than standard GFM, which only strips certain "unsafe" HTML.

### Strikethrough

Publishing formats text delimited in tildes (`~`) as strikethrough, making
`~a bad example~`  look like ~a bad example~ in your document.

### Tables

Publishing formats text blocks as tables if they have  consistent pipe (`|`) separators and a second delimiter row with just hyphens (`-`), optionally using `:` to specify left, right, or centered alignment. Publishing converts this:

```markdown
| Table | header | row | default is centered |
| :---- | :----: | --: | ------------------- |
| Table | data | row | default is left |
```

into this:

| Table | header | row | default is centered |
| :---- | :----: | --: | ------------------- |
| Table | data | row | default is left |

You cannot create multi-line cells (although other Markdown dialects allow this), and while you can omit both the initial and final pipe separators, it can break table recognition if the first cell looks like a list item.

### Graphics and Theme Learn enhances

On our Hugo server we've got a theme that extends some shortcodes on Markdown.

#### Flowchart example

```markdown
{{</* mermaid align="left" */>}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{</* /mermaid */>}}
```

This code is rendered as:

{{<mermaid align="left">}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

#### Sequence example

```markdown
{{</* mermaid */>}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{</* /mermaid */>}}
```
This code is rendered as:

{{<mermaid>}}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
{{< /mermaid >}}

#### Gantt example

```markdown
{{</* mermaid */>}}
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
{{</* /mermaid */>}}
```

This code is rendered as:

{{<mermaid>}}
gantt
        dateFormat  YYYY-MM-DD
        title Adding GANTT diagram functionality to mermaid
        section A section
        Completed task            :done,    des1, 2014-01-06,2014-01-08
        Active task               :active,  des2, 2014-01-09, 3d
        Future task               :         des3, after des2, 5d
        Future task2               :         des4, after des3, 5d
        section Critical tasks
        Completed task in the critical line :crit, done, 2014-01-06,24h
        Implement parser and jison          :crit, done, after des1, 2d
        Create tests for parser             :crit, active, 3d
        Future task in critical line        :crit, 5d
        Create tests for renderer           :2d
        Add to mermaid                      :1d
{{< /mermaid >}}


More info on [Hugo Theme Learn](https://learn.netlify.com/en/shortcodes/)

### Code within lists

The site's Markdown parser does not understand code fences (triple backticks)
within lists. You should instead use indentation to signify code within lists.

## Voice and tone

### Active voice

**Use active voice**. Active voice makes it obvious who is performing the action, which makes your writing clearer and stronger.

**For example**:

"The logging agent writes a line to the log file."

**Not**:

"A line is written in the log file by the logging agent."

It's okay to use passive voice when you'd have to go out of your way to use active voice. For example, sometimes you don't need to include the actor in the sentence because the actor isn't relevant. Just use passive voice, instead.

**For example:**

"RFID tag readers are typically positioned in multiple locations in a retail store."

**Not:**

"System engineers typically place RFID tag readers in multiple locations in a retail store."

### Direct

**Speak to the reader**. Documentation reads better if you speak to the reader in the second person. That means use "you" and avoid "I" or "we."

**For example:**

"Now load your data into BigQuery. Follow these steps: ..."

**Not:**

"Now we'll load the data into BigQuery."

### Present tense

**Keep to present tense**. Avoid using future or past tenses.

**For example:**

"The Cloud Console downloads a JSON file to your computer."

**Not:**

"The Cloud Console will download a JSON file to your computer."

### Simple

**Keep it simple**. Use short, simple sentences. They are easier for readers to parse and understand. Omit unnecessary words.

**For example:**

"Click Change to set a new owner."

**Not:**

"It is possible for you to set a different owner by clicking the Change button."

Also, keep your paragraphs short and to the point. On the web, people skim more and expect shorter content than when they read books. Five sentences or less per paragraph is a good guideline.

If a sentence is long, even with straightforward word choices, break it up into multiple, shorter sentences.

Re-read what you wrote and then eliminate all the unnecessary words.

## Including source code

If you would like to include source code within your tutorial, you have two
options:

### Option 1

Just embed the source code directly in the tutorial. Wrap the code in three
backticks or indent by four spaces to achieve proper formatting.

This option is the simplest, but offer no way to test the code, and does not
allow the user to view actual source code files as they might exist in a real
project.

For an example, see [Run Koa.js on Google App Engine Flexible Environment](https://github.com/GoogleCloudPlatform/community/blob/master/tutorials/run-koajs-on-google-app-engine.md).

### Option 2

Instead of a Markdown file in the `tutorials/` directory, create a folder for
your files. The Markdown for the tutorial should be in an `index.md` file within
the new folder, and the rest of the source code files must be in the new folder
as well. You can use [EmbedMd](https://github.com/campoy/embedmd) to include
snippets from the source code files in the Markdown file. You should run the
`embedmd` program on  `index.md` to actually  include  the code block in the
Markdown source in one of the commits for your pull request.

This option is more complicated, but allows us to test the code, and allows the
user to view real source code files.

For an example, see [Using Node.js to Calculate the Size of a BigQuery Dataset](https://github.com/GoogleCloudPlatform/community/blob/master/tutorials/using-nodejs-to-calculate-the-size-of-a-bigquery-dataset).

## API Documentation

Here we'll fix some standarts on docummenting API's:

### Nested Nodes

```xml
<a>
  <b>
    <c>
      <d>content</d>
    </c>
  </b>
</a>
```

For documenting this we'll use a table with rows indicating the name of the node, all the path, the intermediate nodes will left the type empty:

| Element | number | type   | description |
| :------ | -----: | -----: | ----------- |
| a       | 1      |        | [...] |
| a/b     | 1      |        | [...] |
| a/b/c   | 1      |        | [...] |
| a/b/c/d | 1      | string | [...] |


## Writing resources

Learn more about strong writing.

* [What is plain language?](http://plainlanguagenetwork.org/plain-language/what-is-plain-language/#.V1HvQXUrLOF)
* [Purdue Online Writing Lab](https://owl.english.purdue.edu/sitemap/) (OWL)
* [Grammar Girl](http://www.quickanddirtytips.com/grammar-girl)
* [The Elements of Style](http://www.amazon.com/Elements-Style-Fourth-William-Strunk/dp/020530902X/ref=sr_1_1?ie=UTF8&qid=1463012361&sr=8-1&keywords=the+elements+of+style+book) (book by Strunk and White)
* [The Deluxe, Transitive Vampire](http://www.amazon.com/Deluxe-Transitive-Vampire-Ultimate-Handbook/dp/0679418601) (book by Karen Elizabeth Gordon)
* [Markdown Syntax](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) (Cheatsheet from GitHub)
