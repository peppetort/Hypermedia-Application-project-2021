# Cattaneo-Francella-Sacchetti-Tortorelli

## Group Members

### Simone Cattaneo

- "Codice Persona": 10580991
- Mail: simone6.cattaneo@mail.polimi.it

1. Development of a third of the pages
2. Back-end database specification
3. Back-end API development
4. ChatBot development

### Martina Francella

- "Codice Persona": 10744619
- Mail: martina.francella@mail.polimi.it

1. Creation of the site design
2. Writing documentation

### Tommaso Sacchetti

- "Codice Persona": 10694822
- Mail: tommaso1.sacchetti@mail.polimi.it

1. Development of a third of the pages

### Giuseppe Tortorelli

- "Codice Persona": 10582962
- Mail: giuseppe.tortorelli@mail.polimi.it

1. Development of a third of the pages
2. Development of components
3. Development of the back-end function to populate the DB

## Technical Documentation

### Server

To implement the server we used the _Express_ framework.<br/>
By sending a request to the specific URL, the data is extracted from the database and sent back in the form of JSON

### DB

To implement the DB we used _Sequelize_.<br/>
For the purpose of the project every time we force the creation of the tables and repopulate the DB.<br/>
The population is done through a function that reads a json file in which the content for each table is specified. <br/> In json the images are specified as relative path, so they are read by the function and encoded in Base64.

(The "DB" folder has not been pushed to heroku but a git deployment branch has been created for ad the folder ignored)

### Components

#### **TheHeader.vue**

Repeated on each page and represents the navigation bar through which you can navigate the site. <br/>
In order to improve the responsiveness of the site, when the screen size drops below 900px, the menu turns into a _ burger menu _. Then the `<div class = "nav-mobile">` is shown and the `<div class =" nav ">` is hidden.

#### **TheFooter.vue**

Repeated on each page and represents the footer of the site.

#### **TheSection.vue**

Since the site structure has often repeated component patterns, we decided to reuse the component to represent a section with a horizontal layout. <br/>
In order to be able to increase the adaptability of the component, we have made it as customizable as possible.

- **`props`** list specifies the properties of the context:

1. the background color [```light``` or ``` strong```]
2. the orientation of the component [```right``` to have the text in the right half, ```left``` to have the text in the left half]
3. if present (optional) adds a button of the specified type [``` strong``` for a dark button, ```light``` for a light button]

- **`title`** attribute if specified (optional) inserts an element of type _h1_

- **`subtitle`** attribute if specified (optional) inserts an element of type _h2_

- **`text`** list creates an element of type _p_ for each element within it

- **`image`** attribute specifies the image to display

- **`alt`** attribute specifies the _alt_ for the image

- **`link`** attribute if present (optional) specifies the link to go to when the button is pressed

- **`button`** attribute if present (optional) specifies the text to disaply inside the button

#### **TheNavBar.vue**

Rappresenta le Orientation Info. Permette di vedere la propria posizione all'interno nel sito rispetto alle pagine genitori.

- **`path`** bi-dimensional list in which the name to be displayed with the respective path is specified
- **`look`** specifies the background color [```strong```, ```light```]

#### **CardFeature.vue**

Component that represents a card with a title an image and a text used to describe the features of a site object.

- **`title`** inserts an element of type _h3_
- **`text`** inserts an element of type _p_
- **`image`** attribute specifies the image to display
- **`alt`** attribute specifies the _alt_ for the image

#### **CardPreview.vue**

Clickable component formed by image and text used to show the preview of objects

- **`title`** inserts an element of type _p_
- **`ink`** specifies the link to go to when the component is pressed
- **`image`** attribute specifies the image to display
- **`alt`** attribute specifies the _alt_ for the image

#### **Chat.vue**

//TODO

### Plugins

//TODO

## Usage of Nuxt best practices

//TODO
