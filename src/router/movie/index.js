export default {
    path: '/movie',
    component: () =>
        import ("@/views/Movie"),
    children: [{
            // 按需引入不可以加入回调函数的大括号，否则路由无法显示
            path: 'city',
            component: () =>
                import ("@/components/City")
        },
        {
            path: 'comePlay',
            component: () =>
                import ("@/components/ComePlay")
        },
        {
            path: 'nowPlay',
            component: () =>
                import ("@/components/NowPlay")
        },
        {
            path: 'search',
            component: () =>
                import ("@/components/Search")
        },
        {
            path: '/movie',
            redirect: "/movie/nowPlay"
        }
    ]
}