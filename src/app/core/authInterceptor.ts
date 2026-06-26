import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, switchMap } from "rxjs";
import { SupabaseService } from "./services/supabase.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private supabaseService: SupabaseService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return from(this.supabaseService.getSession()).pipe(
      switchMap((response) => {
        const session = response.data.session;
        if (session && session.access_token) {
          const clonedRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${session.access_token}`
            }
          });
          return next.handle(clonedRequest);
        }
        return next.handle(request);
      })
    );
  }
}