export default [
    {
        path: '',
        name: 'Home Page',
        view: 'Home',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/about',
        name: 'About Page',
        view: 'About',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/member',
        name: 'Member Manage Page',
        view: 'Member',
        folder: 'members',
        children: [
            {
                path: 'lists',
                name: 'User Profile Page',
                view: 'Lists'
            },
            {
                path: 'add',
                name: 'Thêm hội viên',
                view: 'Add'
            }
        ]
    },
    {
        path: '/sign-in',
        name: 'Sign-In Page',
        view: 'SignIn'
    },
    {
        path: '/forgot-password',
        name: 'Forgot Password Page',
        view: 'Forgot'
    }
];
