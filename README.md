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
| `images/lexiconic-logo.png` | Header logo on every page |
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

## Add more photos to a project

In `featured-projects.html`, copy one `<li>...</li>` line inside that project's `<ul class="carousel-track">`, change the file name, and write a one-sentence `alt` description of the photo. The arrow buttons show up on their own once there are more photos than fit.

## Add photos to Dreamr Studio

In `featured-projects.html`, replace the `Photos Coming Soon` line with a carousel block copied from another project.

## Contact form

The form opens the visitor's email app with their message ready to send to info@lexiconicinteriors.com. It needs no outside service. It will not work for visitors who only use webmail with no email app set up. A free form service such as Formspree can replace it later. To change the address, edit `contact.html` and `js/main.js`.

## Keep it accessible when you edit

- Each page has one main heading (`<h1>`).
- Every photo needs an `alt` description of what is in it. Skip phrases like "image of".
- Link text should say where it goes, never "click here".
