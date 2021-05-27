import client from "../../client";

export function fetchMenu(result = ['aaa', 'dsadsa']) {
    return client.request(query);
};

const query = `
query MyQuery {
  menu {
    id
    menuList {
      id
      title
      endpoint
    }
  }
}
`;