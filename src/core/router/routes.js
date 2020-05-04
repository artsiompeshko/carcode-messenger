import { Home } from 'components/home';
import { ConversationsNavigation } from 'components/conversations/navigation';
import { ConversationsDialog } from 'components/conversations/dialog';

import { NotImplemented } from 'shared-components/not-implemented';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
export const routes = [
  {
    path: '/',
    exact: true,
    default: {
      main: {
        component: Home,
      },
      aside: {
        component: null,
      },
    },
  },
  {
    path: '/conversations',
    exact: true,
    default: {
      main: {
        component: Home,
      },
      aside: {
        component: ConversationsNavigation,
      },
    },
    sm: {
      main: {
        component: ConversationsNavigation,
        paper: true,
      },
    },
    xs: {
      main: {
        component: ConversationsNavigation,
        paper: true,
      },
    },
  },
  {
    path: '/conversations/:dealerPhoneNumber',
    exact: true,
    default: {
      main: {
        component: ConversationsDialog,
        paper: true,
      },
      aside: {
        component: ConversationsNavigation,
      },
    },
    sm: {
      main: {
        component: ConversationsDialog,
        paper: true,
      },
    },
    xs: {
      main: {
        component: ConversationsDialog,
        paper: true,
      },
    },
  },
  {
    path: '/calls',
    exact: true,
    default: {
      main: {
        component: Home,
      },
      aside: {
        component: NotImplemented,
      },
    },
    sm: {
      main: {
        component: NotImplemented,
        paper: true,
      },
    },
    xs: {
      main: {
        component: NotImplemented,
        paper: true,
      },
    },
  },
  {
    path: '/video-calls',
    exact: true,
    default: {
      main: {
        component: Home,
      },
      aside: {
        component: NotImplemented,
      },
    },
    sm: {
      main: {
        component: NotImplemented,
        paper: true,
      },
    },
    xs: {
      main: {
        component: NotImplemented,
        paper: true,
      },
    },
  },
];
