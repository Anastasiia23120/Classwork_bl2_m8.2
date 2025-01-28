const users = [
  {
    username: 'Kate',
  },
  {
    username: 'Alex',
  },
  {
    username: 'Mark',
  },
];

console.log(users);

for (const { username } of users) {
  console.log(username);
}

users.forEach(({ username }) => {
  console.log(username);
});
