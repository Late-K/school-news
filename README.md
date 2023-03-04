# A-Level School Project, School News Website

This repo contains the code for my A-level school project. It is a react/express application for a school news website.

## How to run

To run, first create a local database using the following commands:

```sql
CREATE TABLE Authors (
    ID int auto_increment primary key,
    LastName varchar(255),
    FirstName varchar(255),
    Email varchar(255)
);

CREATE TABLE Articles (
    ID int auto_increment primary key,
    AuthorID int,
    Title varchar(255),
    Copy varchar(5000),
    Image varchar(255),
    UploadDateTime datetime,
    FOREIGN KEY (AuthorID) REFERENCES authors(ID)
);

INSERT INTO authors
(`LastName`,
`FirstName`,
`Email`)
VALUES
(
"Kiermasz",
"Jeremi",
"kiermaszjeremi@email.com"),(
"Doe",
"John",
"johndoe@email.com"),(
"Jane",
"Doe",
"janedoe@email.com"),(
"Brian",
"September",
"brian-s@email.com");

INSERT INTO articles
(`AuthorID`,
`Title`,
`Copy`,
`Image`,
`UploadDateTime`)
VALUES
(
1,
"Test Article",
"Welcome to my test article! This is a great one.
\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Euismod quis viverra nibh cras pulvinar. Ornare arcu odio ut sem. Proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue. Iaculis at erat pellentesque adipiscing commodo. Parturient montes nascetur ridiculus mus mauris vitae. Vitae et leo duis ut diam quam nulla. Morbi tempus iaculis urna id volutpat lacus laoreet non. Curabitur gravida arcu ac tortor dignissim convallis aenean. Magna eget est lorem ipsum dolor. Venenatis tellus in metus vulputate eu scelerisque. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Scelerisque eu ultrices vitae auctor eu augue ut. Risus nec feugiat in fermentum posuere urna.
\n
Nullam vehicula ipsum a arcu cursus. Neque volutpat ac tincidunt vitae semper. Elementum eu facilisis sed odio morbi quis commodo. Molestie nunc non blandit massa enim nec. In vitae turpis massa sed elementum tempus egestas. Netus et malesuada fames ac. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Congue quisque egestas diam in arcu cursus euismod. Semper quis lectus nulla at volutpat. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pellentesque habitant morbi tristique senectus et. Suscipit adipiscing bibendum est ultricies integer. Lacus luctus accumsan tortor posuere ac ut. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien pellentesque habitant morbi. Non odio euismod lacinia at quis.
\n
Lectus nulla at volutpat diam ut. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Ut placerat orci nulla pellentesque. Sed sed risus pretium quam. Nunc congue nisi vitae suscipit tellus mauris. Mi proin sed libero enim sed faucibus turpis in. Interdum velit laoreet id donec ultrices tincidunt. Enim sed faucibus",
"https://wallpapercave.com/wp/P7tCEd7.jpg",
"2023-03-03 11:57:00"),
(
3,
"Test Article 2",
"Welcome to another test my test article! This is a great one.
\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Euismod quis viverra nibh cras pulvinar. Ornare arcu odio ut sem. Proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue. Iaculis at erat pellentesque adipiscing commodo. Parturient montes nascetur ridiculus mus mauris vitae. Vitae et leo duis ut diam quam nulla. Morbi tempus iaculis urna id volutpat lacus laoreet non. Curabitur gravida arcu ac tortor dignissim convallis aenean. Magna eget est lorem ipsum dolor. Venenatis tellus in metus vulputate eu scelerisque. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Scelerisque eu ultrices vitae auctor eu augue ut. Risus nec feugiat in fermentum posuere urna.
\n
Nullam vehicula ipsum a arcu cursus. Neque volutpat ac tincidunt vitae semper. Elementum eu facilisis sed odio morbi quis commodo. Molestie nunc non blandit massa enim nec. In vitae turpis massa sed elementum tempus egestas. Netus et malesuada fames ac. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Congue quisque egestas diam in arcu cursus euismod. Semper quis lectus nulla at volutpat. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pellentesque habitant morbi tristique senectus et. Suscipit adipiscing bibendum est ultricies integer. Lacus luctus accumsan tortor posuere ac ut. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien pellentesque habitant morbi. Non odio euismod lacinia at quis.
\n
Lectus nulla at volutpat diam ut. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Ut placerat orci nulla pellentesque. Sed sed risus pretium quam. Nunc congue nisi vitae suscipit tellus mauris. Mi proin sed libero enim sed faucibus turpis in. Interdum velit laoreet id donec ultrices tincidunt. Enim sed faucibus",
"https://www.pixelstalk.net/wp-content/uploads/2016/05/Awesome-Really-Cool-Background.jpg",
"2023-03-04 09:20:00"),
(
4,
"Cool Article",
"Very cool.
\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Euismod quis viverra nibh cras pulvinar. Ornare arcu odio ut sem. Proin nibh nisl condimentum id venenatis a. Sed augue lacus viverra vitae congue. Iaculis at erat pellentesque adipiscing commodo. Parturient montes nascetur ridiculus mus mauris vitae. Vitae et leo duis ut diam quam nulla. Morbi tempus iaculis urna id volutpat lacus laoreet non. Curabitur gravida arcu ac tortor dignissim convallis aenean. Magna eget est lorem ipsum dolor. Venenatis tellus in metus vulputate eu scelerisque. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Scelerisque eu ultrices vitae auctor eu augue ut. Risus nec feugiat in fermentum posuere urna.
\n
Nullam vehicula ipsum a arcu cursus. Neque volutpat ac tincidunt vitae semper. Elementum eu facilisis sed odio morbi quis commodo. Molestie nunc non blandit massa enim nec. In vitae turpis massa sed elementum tempus egestas. Netus et malesuada fames ac. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Congue quisque egestas diam in arcu cursus euismod. Semper quis lectus nulla at volutpat. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pellentesque habitant morbi tristique senectus et. Suscipit adipiscing bibendum est ultricies integer. Lacus luctus accumsan tortor posuere ac ut. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien pellentesque habitant morbi. Non odio euismod lacinia at quis.
\n
Lectus nulla at volutpat diam ut. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Ut placerat orci nulla pellentesque. Sed sed risus pretium quam. Nunc congue nisi vitae suscipit tellus mauris. Mi proin sed libero enim sed faucibus turpis in. Interdum velit laoreet id donec ultrices tincidunt. Enim sed faucibus",
"https://www.pixelstalk.net/wp-content/uploads/2016/05/Really-Cool-Image.jpg",
"2023-03-04 12:27:00");
```

Next, install dependencies in frontend and server

```
cd server
npm i
```

In another terminal

```
cd frontend
npm i
```

Once dependencies have installed, run npm start in both the server and frontend terminal

```
npm start
```
