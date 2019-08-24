lint:
	npx eslint .

gamesStart:
	npx babel-node src/bin/brain-games.js

evenStart:
	npx babel-node src/bin/brain-even.js

calcStart:
	npx babel-node src/bin/brain-calc.js

gcdStart:
	npx babel-node src/bin/brain-gcd.js

progressionStart:
	npx babel-node src/bin/brain-progression.js

primeStart:
	npx babel-node src/bin/brain-prime.js

build:
	npm run build

publish:
	npm publish --dry-run

install:
	npm link

