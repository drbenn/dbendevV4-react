# Deploy on namecheap
1. yarn build
2. go to dist folder, cmd, npx hhtp-server to test
3. zip files in dist folder so that index.html is in root of zip file
4. go to namecheap file manager, public html folder
5. upload zip file, extract. Site should be up in less than 1 min




# Deploy on gh-pages  - DIDNT WORK
// https://towardsdev.com/deploying-react-application-to-github-pages-with-vite-2d3e32ae97e7
1. create normal repo and work project from it
2. yarn build
3. add base to vite.config(js in this case)  =>   base: "/dbendevV4-react",
4. git add dist -f        - this pushes dist folder to repo as it is usually included in gitignore
    ---- I also commented out dist & dist-ssr in gitignore
5. git commit -m "Adding dist"
6. git subtree push --prefix dist origin gh-pages
