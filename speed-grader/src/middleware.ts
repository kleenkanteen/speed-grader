import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // "/" will be accessible to all users
    publicRoutes: ["/"]
  });
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 