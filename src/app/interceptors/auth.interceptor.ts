import { HttpInterceptorFn } from '@angular/common/http';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token = sessionStorage.getItem('token')

  if(token){
    const cloneReq  = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next(cloneReq);
  }
  return next(req);
};
