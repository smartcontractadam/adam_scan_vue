export default class {
    config =[
        {
            path: '/resource',
            name: 'resource',
            component: () => {
                return import ('@/views/resource/resourceMain');
            },
            meta: {keepAlive: true},
        },
    ]
}
