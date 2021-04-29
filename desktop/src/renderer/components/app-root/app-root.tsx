import { Component, h } from '@stencil/core'
import { match, Route } from '@stencil/router'
import { Router } from '../../router'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <main>
        <Router.Switch>
          <Route
            path={(path) =>
              path === '/' || path === '/renderer/main_window/index.html'
            }
          >
            <app-home></app-home>
          </Route>

          <Route path="/settings">
            <app-settings></app-settings>
          </Route>

          <Route
            path={match('/project/:path*')}
            render={({ path }) => <app-project projectDir={path}></app-project>}
          />
        </Router.Switch>
      </main>
    )
  }
}