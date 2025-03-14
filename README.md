# 🍽️ Recipe Finder App

## 🌟 Overview

The **Recipe Finder App** is a JavaScript-based web application where users can search for recipes, like their favorite ones, and save them for future reference. It also features pagination to navigate through search results efficiently. The application utilizes Bootstrap for its styling and provides a smooth user experience.

## 🚀 Features

- 🔎 **Search Recipes**: Users can search for recipes using keywords.
- ❤️ **Like Recipes**: Users can like their favorite recipes for quick access.
- 📌 **Save Recipes**: Users can bookmark and save liked recipes.
- 📑 **Pagination**: Easily navigate through search results for better browsing.
- 🎨 **Responsive UI**: Styled with Bootstrap for a modern and user-friendly design.
- ⏳ **Loading Spinner**: Displays a loading animation while fetching data.

## 🏗️ Installation Steps

Follow these steps to run the Recipe Finder App on your local machine:

1. **Clone the Repository** 📂
   ```sh
   git clone <your-repo-url>
   ```
2. **Navigate to the Project Directory** 📁
   ```sh
   cd recipe-finder-app
   ```
4. **Open in Browser** 🌍
   Open `index.html` in your favorite browser.

## 📂 File Structure

```plaintext
.
├── asset
│   └── images
│       └── icons8-spinner-50.png  # Spinner image for loading state
├── node_modules/                  # Dependencies installed by npm
├── views/
│   ├── bookmarkview.js            # Handles the bookmarked recipes UI
│   ├── pagination.js              # Manages pagination of search results
│   ├── recipeview.js              # Renders the recipe details UI
│   ├── searchview.js              # Handles the search functionality UI
│   └── view.js                    # Parent view class for handling UI updates
├── .hintrc                        # Code style configuration for JS Hint
├── README.md                      # Project documentation
├── app.js                         # Main JavaScript file, orchestrating app logic
├── index.html                     # HTML file for the UI structure
├── model.js                       # Data management and state handling for the app
├── package-lock.json              # Locked versions of npm dependencies
├── package.json                   # Project metadata and npm scripts
├── style.css                       # Custom CSS styles

## 🛠️ Tech Stack
- **JavaScript (ES6)**: Core programming language.
- **HTML5**: Structure and content of the app.
- **CSS3**: Custom styles.
- **Bootstrap CSS**: Styling framework for responsive design.
- **npm**: For managing project dependencies.

## 🎯 Why I Built This
This was my **first ever project** where I explored the **MVC (Model-View-Controller) pattern** in JavaScript. The goal was to understand how to structure a scalable frontend application while leveraging external APIs. I also wanted to enhance my knowledge of modern JavaScript features and learn about rendering strategies in dynamic applications.
---
Feel free to contribute or give suggestions! 🚀


```
