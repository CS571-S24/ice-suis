Setup with `npm install`.

Development work with `npm run dev`. Be sure to run this command in *this directory*.

Production build with `npm run build` followed by `docker build . -t ctnelson1997/s24-xsrf`

Production deploy with `docker run -d --restart=always -p 53705:80 ctnelson1997/s24-xsrf`