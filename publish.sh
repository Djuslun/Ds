#!/bin/bash

# Ensure the script stops on errors
set -e

# Function to display the interactive menu
show_menu() {
  echo "Select the version type to increment:"
  echo "1) Patch"
  echo "2) Minor"
  echo "3) Major"
  echo -n "Enter your choice (1-3): "
}

# Show the menu and read the user's choice
show_menu
read -r CHOICE

# Map the choice to a version type
case $CHOICE in
  1)
    VERSION_TYPE="patch"
    ;;
  2)
    VERSION_TYPE="minor"
    ;;
  3)
    VERSION_TYPE="major"
    ;;
  *)
    echo "Invalid choice. Exiting."
    exit 1
    ;;
esac

# Step 1: Building project
echo "Building project..."
npm run build

# Step 2: Increase the npm package version
echo "Increasing npm package version ($VERSION_TYPE)..."
VERSION=$(npm version $VERSION_TYPE)  # Use the selected version type
echo "New version: $VERSION"

# Step 3: Push the commit to the current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Pushing changes to current branch: $CURRENT_BRANCH"
git push origin $CURRENT_BRANCH

# Step 4: Publish the package to npm
echo "Publishing package to npm..."
npm publish

echo "Package $VERSION published successfully!"