export default class {
    config =[
        {
            path: '/',
            name: 'home',
            component: () => {
                return import ('@/views/home/homeMain');
            },
            meta: {keepAlive: true,allowBack: false},
            alias: '/home'
        },
    ]
}
