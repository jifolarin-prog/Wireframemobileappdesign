import { createBrowserRouter } from 'react-router';
import { Home } from './screens/Home';
import { BrowseByChallenge } from './screens/BrowseByChallenge';
import { CreatePost } from './screens/CreatePost';
import { TipDetail } from './screens/TipDetail';
import { Profile } from './screens/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/browse',
    Component: BrowseByChallenge,
  },
  {
    path: '/create',
    Component: CreatePost,
  },
  {
    path: '/tip/:id',
    Component: TipDetail,
  },
  {
    path: '/profile',
    Component: Profile,
  },
]);
