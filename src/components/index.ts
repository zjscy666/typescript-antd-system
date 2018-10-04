/*路由组件出口文件*/
// import * as Loadable from 'react-loadable';

// const Loading = () => <div>Loading...</div>;
// function LoadingComponent(props: {
//   error: boolean,
//   pastDelay: boolean,
//   timedOut: boolean,
//   retry: string
// }) {
//     if (props.error) {
//       // When the loader has errored
//       return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
//     } else if (props.timedOut) {
//       // When the loader has taken longer than the timeout
//       return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
//     } else if (props.pastDelay) {
//       // When the loader has taken longer than the delay
//       return <div>Loading...</div>;
//     } else {
//       // When the loader has just started
//       return null;
//     }
//   }


// let BundleBill = Loadable({
//     loader: () => import('./testPage/Bill'),
//     loading: LoadingComponent,
// });

// let BundleAlex = Loadable({
//     loader: () => import('./testPage/Alex'),
//     loading: LoadingComponent,
// });

// let BundleTom = Loadable({
//     loader: () => import('./testPage/Tom'),
//     loading: LoadingComponent,
// });

// let BundleLily = Loadable({
//   loader: () => import('./testPage/Lily'),
//   loading: LoadingComponent,
// });

import BundleBill from './testPage/Bill';
import BundleAlex from './testPage/Alex';
import BundleTom from './testPage/Tom';
import BundleLily from './testPage/Lily';


export default {
    BundleBill, BundleAlex, BundleTom, BundleLily
}