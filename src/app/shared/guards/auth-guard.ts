import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);
  
  if (!isBrowser){
    return true;
  }
  
  const token = localStorage.getItem('token');
  
  if (token){
    return true;
  }

  return router.createUrlTree(['/login'], {
    queryParams: {returnUrl: state.url}
  });
};
