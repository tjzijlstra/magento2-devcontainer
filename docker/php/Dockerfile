ARG BASE_IMAGE
FROM ${BASE_IMAGE}

ARG TARGETARCH=amd64

RUN set -x && set -o pipefail \
  && curl -fsSL "https://github.com/axllent/mailpit/releases/download/v1.29.0/mailpit-linux-${TARGETARCH}.tar.gz" -o /tmp/mailpit.tar.gz \
  && tar -zx -C /usr/local/bin -f /tmp/mailpit.tar.gz mailpit \
  && rm /tmp/mailpit.tar.gz