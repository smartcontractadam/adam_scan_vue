export default class {
    config =[
        {
            path: '/leaderboard',
            name: 'leaderboard',
            component: () => {
                return import ('@/views/leaderboard/boardMain');
            },
            meta: {keepAlive: true},
        },
    ]
}
