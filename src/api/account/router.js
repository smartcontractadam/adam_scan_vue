export default class {
    config =[
        {
            path: '/account',
            name: 'account',
            component: () => {
                return import ('@/views/account/accountMain');
            },
            meta: {keepAlive: true},
        },
    ]
}
