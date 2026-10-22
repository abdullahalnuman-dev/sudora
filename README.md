# Sudora website

Static information site and Privacy Policy for **Sudora: Sudoku Puzzle** (Android application ID `com.dvexo.sudora`).

- `index.html`: homepage (features, how to play, ads disclosure, privacy summary)
- `privacy-policy.html`: Privacy Policy (effective 22 October 2026)
- `assets/css/style.css`, `assets/js/main.js`: shared styles and small progressive enhancements. Both pages work without JavaScript.
- `assets/vendor/`: Bootstrap 5.3.3 and Bootstrap Icons 1.11.3 (MIT licences included), served locally
- `assets/fonts/`: Poppins (SIL Open Font License, see `OFL.txt`), the same font as the app
- `assets/images/`, `favicon.ico`: generated from the app icon (`composeApp/src/commonMain/composeResources/drawable/app_icon.png`)

No build step, backend, cookies, analytics or third-party requests. Upload the folder as-is to any static host (GitHub Pages, Netlify, Cloudflare Pages, Firebase Hosting, etc.). All paths are relative.

## Must be completed before publishing

1. **Privacy contact email.** Replace `[PRIVACY CONTACT EMAIL — to be added before publication]` in `privacy-policy.html` (section 22) and remove both `.placeholder-note` boxes (sections 3 and 22).
2. **Publisher identity.** The publisher is **Dvexo** (confirmed by the owner on 22 October 2026; the same name is in the app's About screen and the desktop installer vendor). If required in your jurisdiction, add the legal form and a postal address in section 22.
3. **Domain.** Once the domain is known:
   - add `<link rel="canonical">` and absolute `og:url`/`og:image` URLs;
   - optionally add `robots.txt` and `sitemap.xml`.
4. **Store links.** Add the Google Play link to the homepage hero only when the listing is live.
5. **In-app link.** Build the release with `-Papp.privacyPolicyUrl=https://<domain>/privacy-policy.html` (or set it in `local.properties`). Otherwise the app's Settings → Privacy policy entry stays hidden.

## Keep in sync with the app

The policy describes the app's actual behaviour as of 22 October 2026. Review it whenever any of these change:

- ads, ad SDK versions or consent;
- update checks;
- notifications;
- backup rules;
- new SDKs (analytics, crash reporting, billing);
- accounts;
- an iOS release.

Then update the "Last updated" date.
