import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  
  return router.createUrlTree(['/login'], {
    queryParams: {returnUrl: state.url}
  });
};
