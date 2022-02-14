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

### **TailwindCSS caveat on dynamic classes**

---

TailwindCSS do not recommend using dynamic classes

https://v2.tailwindcss.com/docs/just-in-time-mode#arbitrary-value-support

Adding to the safelist does not help as well.
The quick solution was adding the expected classes and comment it out.

https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss#comment125033103_69687962
