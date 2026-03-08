export const DOMAIN = (process.env.NEXT_PUBLIC_URL_API || "").replace(/\/+$/, "");

export const API = {
  // --------------- PRODUCT ---------------
  PRODUCT: `${DOMAIN}/product`,

  // --------------- AUTH ---------------
  AUTH: `${DOMAIN}/auth`,

  // --------------- CHECKOUT ---------------
  CHECKOUT: `${DOMAIN}/checkout`,
  MOMOPAYMENT: `${DOMAIN}/momo`,

  // --------------- IMAGE ---------------
  IMAGE: `${DOMAIN}/image`,

  // --------------- PDF ---------------
  PDF: `${DOMAIN}/pdf`,
  SEND_RECRUITMENT: `${DOMAIN}/send-recruitment`,

  // --------------- ORDER ---------------
  ORDER: `${DOMAIN}/order`,

  // --------------- BLOG ---------------
  BLOG: `${DOMAIN}/blog`,

  // --------------- CATEGORY BLOG ---------------
  CATEBLOG: `${DOMAIN}/cate-blog`,

  // --------------- Cloudflare ---------------
  USERIP: `${DOMAIN}/cloudflare`,
};

export const LOCAL_STORAGE = {
  TOKEN: "token",
  USER: "user_remember",
};

export const ROLE = {
  DIRECTOR: 1,
  MANAGER: 2,
  SALE: 3,
};

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  ERROR: 500,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
};
