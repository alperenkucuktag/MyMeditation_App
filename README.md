# MyMeditation_App



**Cloning the Repository**

```bash
git clone https://github.com/alperenkucuktag/MyMeditation_App.git
cd MyMeditation App
```

**Updating Dependencies**
To ensure your project is using the latest stable versions of Expo and React Native:

Run the Expo upgrade command:

```bash
expo upgrade
```

This will update package.json and install the correct versions of dependencies.

**Installation**

If you did not run, _expo upgrade_, then install the project dependencies manually using npm:

```bash
npm install
```

**Fixing Vulnerabilities**

If you see security vulnerabilities or warnings after running `npm install`, follow these steps:

1. **Check for vulnerabilities**

   ```bash
   npm audit
   ```

2. **Fix vulnerabilities**

   ```bash
   npm audit fix
   ```

**Running the Project**

The --clear flag clears the cache.

```bash
npx expo start --clear
```

🛠 Tech Stack


Expo

TypeScript

NativeWind (Tailwind CSS for RN)

Expo Router

Expo AV / Font / Linear Gradient
