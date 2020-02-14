import faker from 'faker';

const USER_ITEM_COUNT = 10;
export const getUsers = () => {
  const userItemCounts = Array.from(
    { length: USER_ITEM_COUNT },
    (value, index) => index + 1
  );
  const users = userItemCounts.reduce((accum, id) => {
    const user = {
      id,
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
      content: faker.lorem.paragraph(),
      countryCode: faker.address.countryCode()
    };
    return accum.concat(user);
  }, []);
  return users;
};
