#!/bin/sh

aws s3 rm --recursive s3://beta.blackbird-lab.com
aws s3 cp public s3://beta.blackbird-lab.com --recursive --exclude "*.DS_Store" --acl public-read
aws cloudfront create-invalidation --distribution-id E2RJN31EWUFKJP --paths "/*"