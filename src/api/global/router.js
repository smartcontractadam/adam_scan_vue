export default class {
    config =[
        {
            path: '/global',
            name: 'global',
            component: () => {
                return import ('@/views/global/globalMain');
            },
            meta: {keepAlive: true},
        },
    ]
}
