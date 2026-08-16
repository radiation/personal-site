#!/bin/sh
set -eu

TAG="$(git rev-parse --short HEAD)"
IMAGE="us-central1-docker.pkg.dev/bryanchoate/bootstrap/personal-site:${TAG}"

docker buildx build \
  --platform linux/amd64 \
  -t "$IMAGE" \
  --push \
  .

gcloud run deploy personal-site \
  --image="$IMAGE" \
  --region=us-central1 \
  --service-account=personal-site-runtime@bryanchoate.iam.gserviceaccount.com \
  --allow-unauthenticated \
  --min=0 \
  --max=2 \
  --port=8080

