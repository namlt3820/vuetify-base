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
        folder: 'member',
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
        path: '/customer',
        name: 'Customer Manage Page',
        view: 'Customer',
        folder: 'customer',
        children: [
            {
                path: 'lists',
                name: 'Danh sách đối tác',
                view: 'Lists'
            },
            {
                path: 'add',
                name: 'Thêm đối tác',
                view: 'Add'
            },
            {
                path: 'detail',
                name: 'Chi tiết cửa hàng',
                view: 'Detail'
            }
        ]
    },
    {
        path: '/promotion-campaign/check-in',
        name: 'Promotion Campaign Page',
        view: 'CheckIn',
        folder: 'PromotionCampaign/CheckIn',
        children: [
            {
                path: 'add',
                name: 'Thêm Check-In',
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
