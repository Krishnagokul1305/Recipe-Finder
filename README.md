# Recipe Finder App

## Overview
The **Recipe Finder App** is a JavaScript-based web application where users can search for recipes, like their favorite ones, and save them for future reference. It also features pagination to navigate through search results efficiently. The application utilizes Bootstrap for its styling and provides a smooth user experience.

## Features
- **Search Recipes**: Users can search for recipes using keywords.
- **Like Recipes**: Users can like their favorite recipes.
- **Save Recipes**: Users can save liked recipes to bookmarks.
- **Pagination**: Search results are paginated to enhance navigation.
- **Bootstrap Integration**: The app uses Bootstrap CSS for responsive and polished styling.

## File Structure

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
│   ├── searchview.js              # Handles the recipe search functionality
│   └── view.js                    # Parent view class for handling UI updates
├── .hintrc                        # Code style configuration for JS Hint
├── README.md                      # Project documentation
├── app.js                         # Main JavaScript file, orchestrating app logic
├── index.html                     # HTML file for the UI structure
├── model.js                       # Data management and state handling for the app
├── package-lock.json              # Locked versions of npm dependencies
├── package.json                   # Project metadata and npm scripts
├── style.css                      # Additional custom CSS for the app
```

##Technologies Used
- **JavaScript (ES6)**: Core programming language.
- **HTML5**: Structure and content of the app.
- **CSS**: Custom styles.
- **Bootstrap CSS**: Styling framework for responsive design.
- **npm**: For managing project dependencies.
