// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);

// const { firstName, lastName, age: userAge, isAdmin: isAdmin = false } = user;
// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('userAge:', userAge);
// console.log('isAdmin:', isAdmin);
//* -----------------------------------------------------------------------------
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log(user);

// const { username, skills } = user;
// const { html, css, js } = skills;

// console.log('username:', username);
// console.log('skills:', skills);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);
//* -----------------------------------------------------------------------------
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {
//   username,
//   skills: { html, css, js },
// } = user;

// console.log('username:', username);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);
//* -----------------------------------------------------------------------------
// const fullNames = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// console.log(fullNames);

// const [fullNames1, fullNames2, fullNames3] = fullNames;
// console.log('fullNames1:', fullNames1);
// console.log('fullNames2:', fullNames2);
// console.log('fullNames3:', fullNames3);
//* -----------------------------------------------------------------------------
// const getUserCoordinate = () => {
//   const longitude = 50.426857;
//   const latitude = 30.56368;

//   return [longitude, latitude];
// };

// console.log(getUserCoordinate());

// const [lon, lat] = getUserCoordinate();

// console.log('lon:', lon);
// console.log('lat:', lat);
//* -----------------------------------------------------------------------------
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// const { firstName, lastName, ...otherProps } = user;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('otherProps:', otherProps);
