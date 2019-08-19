lint:
	npx eslint .

start1:
	npx babel-node src/bin/brain-games.js

start2:
	npx babel-node src/bin/brain-even.js

build:
	npm run build

publish:
	npm publish --dry-run

install:
	npm link

