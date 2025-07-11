# 🧙‍♂️ Venom Config Master

A slick, single-page web app to build, live-preview, export, import, and reset custom UI configurations — all without external dependencies. Powered by Tailwind CSS and a hint of dark magic 🪄

## ⚡ Features

- 🎨 Live styling of the page using form controls
- ⬇️ Export settings as `.venomcfg` (encoded + custom format)
- 📥 Import and apply previously exported configs
- 💾 LocalStorage saves your last config automatically
- 🧹 Reset button restores default styles & clears all settings
- 💻 Built with vanilla JavaScript + TailwindCSS
- 🛡️ Config files are encoded with a secret key so only your site can use them

---

## 📁 Project Structure

```plaintext
index.html        # The full app — one file does it all
README.md         # You're looking at it 😎
```

---

## 🚀 How to Use

1. Open `index.html` in any browser
2. Use the form to choose:
   - Background color
   - Text color
   - Font size
   - Theme (Light/Dark)
3. Click **💾 Apply Config** to apply changes
4. Click **⬇️ Export** to download a `.venomcfg` file
5. Click **📥 Import** to load a config and instantly apply it
6. Click **🗑️ Reset Config** to go back to default settings

---

## 🧪 File Format: `.venomcfg`

- Not plain JSON!
- Base64-encoded and tagged with a secret key
- Can only be read and used by this app
- Example encoded string:
  ```
  VENOM_SUPREME_1337::<json>
  ```

---

## 🔐 Security Tip

To change the internal signature (secret key), edit this line in the JS:

```js
const SECRET_KEY = "VENOM_SUPREME_1337";
```

Only configs signed with this key will work. 🛡️

---

## 🧙‍♂️ Live Demo (Optional)

Host it with GitHub Pages, Netlify, or locally.  
No backend needed. No build tools. Pure HTML+JS.

---

## 📜 License

MIT – Go wild, build your own config empire, but credit Venom if you're feeling kind.

---

## ✨ Author

Built by [Venom Vibes](https://github.com/Canol001)  
Crafted with ⚡ + 🧠 + 🎨

