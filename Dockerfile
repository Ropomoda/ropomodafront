FROM node:lts as dependencies
WORKDIR /nextl
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder

ARG NEXT_PUBLIC_CONTEXT=landing
ARG NEXT_PUBLIC_LANDING_URL=https://hamravesh.com/
ARG NEXT_PUBLIC_STATUS_PAGE_URL=https://status.hamravesh.com/
ARG NEXT_PUBLIC_STATUS_PAGE_API_URL=https://api.status.hamravesh.ir

WORKDIR /nextl
COPY . .
COPY --from=dependencies /nextl/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /nextl
ENV NODE_ENV production
COPY --from=builder /nextl/next.config.js ./
COPY --from=builder /nextl/antd.custom.js ./
COPY --from=builder /nextl/next-i18next.config.js ./
COPY --from=builder /nextl/public ./public
COPY --from=builder /nextl/.next ./.next
COPY --from=builder /nextl/node_modules ./node_modules
COPY --from=builder /nextl/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]