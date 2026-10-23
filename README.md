# Lexiconic Interiors website

A simple website made of plain files. No build tools needed. Hosted on GitHub Pages at www.lexiconicinteriors.com.

## What each file does

- `index.html` is the Home page.
- `featured-projects.html` is the Featured Projects page.
- `our-story.html` is the Our Story page.
- `services.html` is the Services page.
- `contact.html` is the Contact page.
- `css/styles.css` holds all colors, fonts, and spacing. Change the `:root` block at the top to restyle every page.
- `js/main.js` powers the photo arrows on Featured Projects and the Contact form.
- `images/` holds every photo (see the list below).
- `instagram-gold.png` is the Instagram icon in the header.
- `CNAME` points the custom domain at GitHub Pages. Do not delete it.

## Image file names

| File | Where it appears |
| --- | --- |
| `images/lexiconic-logo.svg` | Header logo on every page (vector, stays sharp at any size) |
| `images/stars.svg` | Home: the gold stars above the heading (vector, shown 100px wide) |
| `images/home-hero.jpg` | Home: large photo at the top |
| `images/home-1.jpg`, `home-2.jpg`, `home-3.jpg` | Home: row of three photos |
| `images/contact-neon.jpg` | Contact: photo beside the form |
| `images/our-story-lexi.jpg`, `our-story-justin.jpg` | Our Story |
| `images/services-material-board.jpg` | Services: material board |
| `images/projects/wandering-cone-1.jpg` to `-3.jpg` | Featured Projects: Wandering Cone Creamery |
| `images/projects/beachy-v1-1.jpg` to `-3.jpg` | Featured Projects: Beachy Bright Escape V1 |
| `images/projects/organized-start-1.jpg` to `-3.jpg` | Featured Projects: An Organized Start |
| `images/projects/beachy-v2-1.jpg` | Featured Projects: Beachy Bright Escape V2 |
| `images/projects/sunny-rv-1.jpg` to `-3.jpg` | Featured Projects: Sunny the RV |

Tips: use JPGs about 1600 pixels wide and under 400 KB (the home hero can be about 2000 pixels wide). Use lowercase names with hyphens.

## Full-size photos (the popup)

Clicking a photo on Featured Projects opens it full size in a popup. The popup loads from `images/projects/full/`, using the same file name as the tile photo. For example, the tile `images/projects/sunny-rv-1.jpg` opens `images/projects/full/sunny-rv-1.jpg`. Until a full-size file exists, the popup shows the tile photo instead, so nothing breaks. Use JPGs about 2000 pixels on the long side, under about 800 KB each.

## Add more photos to a project

Put the tile photo in `images/projects/` and the full-size version in `images/projects/full/`, with the same file name. Then, in `featured-projects.html`, copy one `<li>...</li>` line inside that project's `<ul class="carousel-track">`, change the file names (in both the link and the image) and write a one-sentence `alt` description. The arrow buttons show up on their own once there are more photos than fit.

## Add photos to Dreamr Studio

In `featured-projects.html`, replace the `Photos Coming Soon` line with a carousel block copied from another project.

## Contact form

The form sends each message by email to lexiconicinteriors@gmail.com through FormSubmit (formsubmit.co), a free service. The visitor stays on the page and sees a thank-you note. The address is in the form's `action` in `contact.html`: change it there to send messages somewhere else (the new address needs a one-time activation, like the first one).

- The very first message sent through the form triggers an activation email from FormSubmit. Click the link in it once, and every message after that goes straight to the inbox. Check spam if it doesn't show up.
- After activating, FormSubmit can give you a private "random string" address. Putting that in the form's `action` instead of the email hides the email address from people who read the page source.
- A hidden field (`_honey`) catches most spam bots. If spam gets through, tell me and I can add more protection.
- If the service is ever down, the page tells the visitor to email lexiconicinteriors@gmail.com directly.

## Keep it accessible when you edit

- Each page has one main heading (`<h1>`).
- Every photo needs an `alt` description of what is in it. Skip phrases like "image of".
- Link text should say where it goes, never "click here".
