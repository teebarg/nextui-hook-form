.PHONY: help lint test dev build deploy
.EXPORT_ALL_VARIABLES:

help: ## Help for project
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# ANSI color codes
GREEN=$(shell tput -Txterm setaf 2)
YELLOW=$(shell tput -Txterm setaf 3)
RED=$(shell tput -Txterm setaf 1)
BLUE=$(shell tput -Txterm setaf 6)
RESET=$(shell tput -Txterm sgr0)

# Utilities
lint: ## Format code
	@echo "$(GREEN)Running linters for frontend...$(RESET)"
	npm run lint:check

test: ## Run project tests
	@echo "$(YELLOW)Running backend tests...$(RESET)"
	npm run test

dev: ## Develop package in editable mode
	@echo "$(BLUE)Running development in terminal...$(RESET)"
	npm run build:watch

# Deployment
build: ## Build the package
	@echo "$(GREEN)Building project image...$(RESET)"
	npm run build

deploy: ## Push to NPM
	@echo "$(RED)Staging for deployment...$(RESET)"
	npm publish

pre-commit: ## Prepare commit
	npx concurrently --kill-others-on-fail --prefix "[{name}]" --names "Lint,Prettier,Test" \
	--prefix-colors "bgRed.bold.white,bgGreen.bold.white,bgBlue.bold.white,bgMagenta.bold.white" \
    "npm run lint:check" \
    "npm run prettier:check" \
    "npm run test"

