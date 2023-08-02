export default{
    routes:[
        {
            path:'/',
            redirect:'/findmusic/personalView'
        },
        {
            path:'/findmusic',
            component: () => import('@/views/findMusic'),
            children:[
                {
                    path:'personalView',
                    component: () => import('@/views/findMusic/views/personalView'),
                },
                {
                    path:'listView',
                    component: () => import('@/views/findMusic/views/listView'),
                },
                {
                    path:'radioView',
                    component: () => import('@/views/findMusic/views/radioView'),
                },
                {
                    path:'rankView',
                    component: () => import('@/views/findMusic/views/rankView'),
                },
                {
                    path:'songerView',
                    component: () => import('@/views/findMusic/views/songerView'),
                },
                {
                    path:'latestView',
                    component: () => import('@/views/findMusic/views/latestView'),
                },
            ]
        },
        {
            path:'/personalFM',
            component: () => import('@/views/personalFM'),
        }




    ],
    mode:'history',

}