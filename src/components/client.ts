import * as Prismic from "@prismicio/client";

const accessToken =
  "MC5ZSlQwR0JJQUFDWUFqMWd1.77-977-977-977-977-977-977-977-9DmYJITsuGDrvv73vv73vv73vv70p77-977-9U1FkOlwu77-977-977-9"; // This is where you would add your access token for a Private repository

export const prismicClient = Prismic.createClient(
  "https://the-catalyst-africa-website.cdn.prismic.io/api/v2",
  { accessToken }
);
