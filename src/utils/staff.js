const admins = [
  {
    _id: '619f77b653cc5a1858ef3679',
    password: '$2a$10$FlImulLwJWxheOiW9VwI1..E7uPwIGmJwDqeLyoPu1rMJP25memDu',
    name: 'Sam L. Lankford',
    image: 'https://i.ibb.co/ZTWbx5z/team-1.jpg',
    email: 'sam@gmail.com',
    phone: '505-771-8879',
    role: 'Delivery Person',
    joiningData: '2021-11-25T11:46:54.266Z',
    createdAt: '2021-11-25T11:47:02.762Z',
    updatedAt: '2021-11-25T11:47:02.762Z',
    status: "Not Active"
  },
  {
    _id: '619f77b653cc5a1858ef367a',
    password: '$2a$10$lbsjK4IO4nWzyE9rGkOZGuN1sps.zBZVF8p.j2cB/Xjxffwangaoq',
    name: 'Dorothy R. Brown',
    image: 'https://i.ibb.co/d294W8Y/team-4.jpg',
    email: 'dorothy@gmail.com',
    phone: '708-628-3122',
    role: 'Security Guard',
    joiningData: '2021-11-25T11:46:54.384Z',
    createdAt: '2021-11-25T11:47:02.763Z',
    updatedAt: '2021-11-25T11:47:02.763Z',
    status: 'Not Active'
  },
  {
    _id: '619f77b653cc5a1858ef367b',
    password: '$2a$10$u/c1n7SN7HlWZOKajTZogOcaJB.xQ0WlFtwUifxX21Z2qLzrIKz.6',
    name: 'Alice B. Porter',
    image: 'https://i.ibb.co/m5B0hK4/team-8.jpg',
    email: 'alice@gmail.com',
    phone: '708-488-9728',
    role: 'Driver',
    joiningData: '2021-11-25T11:46:54.503Z',
    createdAt: '2021-11-25T11:47:02.763Z',
    updatedAt: '2021-11-25T11:47:02.763Z',
    status: 'Active'
  },
  {
    _id: '619f77b653cc5a1858ef367c',
    password: '$2a$10$hCpqj9DFeLKOZs.06vzK3.XoGs7tD/BD1QrgMxxJo5spTlXWbXL3y',
    name: 'Corrie H. Cates',
    image: 'https://i.ibb.co/SNN7JCX/team-6.jpg',
    email: 'corrie@gmail.com',
    phone: '914-623-6873',
    role: 'Accountant',
    joiningData: '2021-11-25T11:46:54.622Z',
    createdAt: '2021-11-25T11:47:02.763Z',
    updatedAt: '2021-11-25T11:47:02.763Z',
    status: 'Not Active'
  },
  {
    _id: '619f77b653cc5a1858ef367d',
    password: '$2a$10$rfUfzxP.na8JOEjS/J3hNevEP37LS45Ap6Q6Aas/7k.BTZMIWo1me',
    name: 'Shawn E. Palmer',
    image: 'https://i.ibb.co/GWVWYNn/team-7.jpg',
    email: 'shawn@gmail.com',
    phone: '949-202-2913',
    role: 'Manager',
    joiningData: '2021-11-25T11:46:54.739Z',
    createdAt: '2021-11-25T11:47:02.763Z',
    updatedAt: '2021-11-25T11:47:02.763Z',
    status: 'Active'
  },
  {
    _id: '619f77b653cc5a1858ef367e',
    password: '$2a$10$oA57JMj8GNmzbsknNYmVgOmXippehMzdhIJCpVjzw6ZPnf4tDohYu',
    name: 'Stacey J. Meikle',
    image: 'https://i.ibb.co/XjwBLcK/team-2.jpg',
    email: 'stacey@gmail.com',
    phone: '616-738-0407',
    role: 'CEO',
    joiningData: '2021-11-25T11:46:54.857Z',
    createdAt: '2021-11-25T11:47:02.764Z',
    updatedAt: '2021-11-25T11:47:02.764Z',
    status: 'Not Active'
  },
  {
    _id: '619f77b653cc5a1858ef367f',
    password: '$2a$10$9yEmqHukkgmuHpSwaVRTZe5p5wuWI.crRQft8YmWfpghDCiOq6jP6',
    name: 'Marion V. Parker',
    image: 'https://i.ibb.co/3zs3H7z/team-5.jpg',
    email: 'marion@gmail.com',
    phone: '713-675-8813',
    role: 'Admin',
    joiningData: '2021-11-25T11:46:54.976Z',
    createdAt: '2021-11-25T11:47:02.764Z',
    updatedAt: '2021-11-25T11:47:02.764Z',
    status: 'loggedIn'
  },
  {
    _id: '619f77b653cc5a1858ef3680',
    password: '$2a$10$.smllbNex9KkwU1DEAmzmOAPj.poVuHSP26/xVHBzZCWxLNWgBpnG',
    name: 'Admin',
    image: 'https://i.ibb.co/WpM5yZZ/9.png',
    email: 'admin@gmail.com',
    phone: '360-943-7332',
    role: 'Admin',
    joiningData: '2021-11-25T11:46:55.094Z',
    createdAt: '2021-11-25T11:47:02.764Z',
    updatedAt: '2021-11-25T11:47:02.764Z',
    status: 'Not Active'
  },
];

const adminData = admins.sort((a, b) => -1);
export default adminData;
