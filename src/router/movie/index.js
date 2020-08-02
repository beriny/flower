export default {
    path: "/movie",
    component: () =>
        import ("@/views/Movie"),
    children: [{
            path: "city",
            component: () => {
                import ("@/components/City")
            }
        },
        {
            path: "comePlay",
            component: () => {
                import ("@/components/ComePlay")
            }
        },
        {
            path: "nowPlay",
            component: () => {
                import ("@/components/NowPlay")
            }
        },
        {
            path: "search",
            component: () => {

                import ("@/components/Search")
            }
        },
        {
            path: "/movie",
            redirect: "/movie/nowPlay"
        }
    ]
}