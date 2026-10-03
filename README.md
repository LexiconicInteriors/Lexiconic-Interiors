# Lexiconic Interiors website

A simple website made of plain files. No tools or coding setup needed.

## What each file does
- `index.html` is the Home page.
- `featured-projects.html` is the Featured Projects page.
- `our-story.html` is the Our Story page (two photos with bios).
- `services.html` is the Services page.
- `contact.html` is the Contact page.
- `css/styles.css` holds all colors, fonts, and spacing for every page.
- `images/` holds your logo and the two Our Story photos (`our-story-lexi.jpg`, `our-story-justin.jpg`).

## Find what still needs your words
Everything that still needs your own content is in [square brackets], for example `[Client name]`.
Open a file, search for `[` (Ctrl+F or Cmd+F), and replace each one.

Your email (info@lexiconicinteriors.com) and Instagram (@lexiconicinteriors) are already filled in. If either changes, search for it in each `.html` file and replace it. The email appears in the footer and on `contact.html`, and in the `action="mailto:..."` part of the contact box. Instagram appears in the header, footer, and `contact.html`.

Also:
- Check that each Our Story photo is paired with the right person. If not, swap the two image file names in `our-story.html` and update each photo's `alt` description.

## Hidden sections (until your project photos are ready)
- On `index.html`, the large hero photo area and the "Featured projects" row are hidden inside HTML comments.
- On `featured-projects.html`, the project grid is hidden the same way, and the page says "New projects are coming soon."
- To show a section again, delete the `<!--` and `-->` lines around it, add your real photos (next section), and edit or remove the "coming soon" sentence.

## Add a real photo in place of a gray placeholder
1. Put your photo in the `images/` folder. Use a JPG about 1600 pixels wide, under 400 KB, with a lowercase-hyphen name like `lakeview-kitchen.jpg`.
2. Find the gray block, such as `<div class="placeholder" aria-hidden="true">[Project photo]</div>`.
3. Replace it with: `<img src="images/lakeview-kitchen.jpg" alt="Describe what is in the photo in one sentence" width="1600" height="1200">`
4. Always write real alt text (a short description for people who can't see the photo). Skip phrases like "image of".

## Keep it accessible when you edit
- Each page has exactly one `<h1>`. Sections use `<h2>`, then `<h3>`.
- Link text should say where it goes ("See all featured projects"), never "click here".
- Don't use gold for text. It does not have enough contrast on the off-white background.

## The contact box
The Contact page has one open text box. When a visitor presses "Send by email", their email app opens with their message ready to send to the address in the `action="mailto:..."` part of `contact.html`. It needs no outside service and no CAPTCHA. It will not work for visitors who only use webmail with no email app set up. A free form service can replace it later.
