build:
	- rm -rf dist/resources
	jspm bundle-sfx --minify app/main dist/main.min.js
	html-dist index.html --remove-all --minify --insert main.min.js -o dist/index.html
	cp -r resources* dist/


deploy:
	s3-cli sync --acl-public --region=eu-west-2 dist/ s3://omada-spe/
