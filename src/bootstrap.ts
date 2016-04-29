import {enableProdMode} from "angular2/core";
import {bootstrap, ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/browser';

const ENV_PROVIDERS = [];
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'prod') {
  enableProdMode();
} else {
  ENV_PROVIDERS.push(ELEMENT_PROBE_PROVIDERS);
}

/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppComponent} from './client/components/app.component';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
  return bootstrap(AppComponent, [
    ...ENV_PROVIDERS
  ])
  .catch(err => console.error(err));
});
