import { CanActivateFn, Router } from '@angular/router';

export const loggedUserGuard: CanActivateFn = (route, state) => {
  const router: Router = new Router();
  return router.navigateByUrl('/login');
};
