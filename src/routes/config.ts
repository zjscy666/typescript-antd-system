export default {
    // 菜单相关路由
    // 规则有子菜单，必须有subs，如果没有子菜单，必须有component
    menus: [
        {
            
            key: '/User', title: '用户',icon: 'scan',
            subs: [
                { key: '/User/Tom', title: 'Tom', component: 'BundleTom' },
                { key: '/User/Bill', title: 'Bill', component: 'BundleBill'},
                { key: '/User/Alex', title: 'Alex', component: 'BundleAlex'}
            ],
        },
        {
            key: '/test', title: 'test',icon: 'scan',
            subs: [
                { key: '/test/u1', title: 'Lily', component: 'BundleLily' },
                { key: '/test/u2', title: 'Bill', component: 'BundleBill'},
                { 
                    key: '/test/u3', title: 'Alex', icon: 'scan', subs: [
                        { key: '/test/u3/d1', title: 'Tom', component: 'BundleAlex' },
                        { key: '/test/u3/d2', title: 'Bill', component: 'BundleBill'},
                    ]
                }
            ],
        }
    ]
    // others: []  // 非菜单相关路由
}