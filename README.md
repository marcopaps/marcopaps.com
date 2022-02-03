### **PostCSS with Next.js Compatibility**

---

```
$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

(This also fix the compatibility issue with Storybook)

Source: https://medium.com/@diogenis.panagiotis/tailwind-css-with-next-js-bc0cac47099c

---

### **Add custom relative paths**

---

In `tsconfig.json` file, add these fields and values on `compilerOptions`:

```
...
compilerOptions {
    "baseUrl": ".",
    "paths": {
        "@/*": ["./*"]
    }
}
```

---

### **Generate Contentful TS types**

---

```
$ yarn add -D contentful-typescript-codegen contentful-management dotenv
```

Source: https://dev.to/kojikanao/generate-types-from-contentful-49p8

---
