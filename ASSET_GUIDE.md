# Asset Migration Guide

This guide will help you copy assets from the WordPress theme to the React application.

## Source Location
WordPress Theme: `/Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/`

## Destination Location
React App: `/Users/fantiger/Documents/GitHub/familyraksha_react/public/`

## Quick Copy Commands

Run these commands to copy all assets at once:

```bash
# Navigate to React project
cd /Users/fantiger/Documents/GitHub/familyraksha_react

# Create necessary directories
mkdir -p public/icon public/services/terms public/services/investment public/services/health public/partners public/main-banner

# Copy logo
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/logo.webp public/

# Copy background images
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/bg1.webp public/
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/bg2.webp public/
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/bg17.webp public/
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/bg20.webp public/
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/bg22.webp public/

# Copy timeline images
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/startup.webp public/
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/the-end.webp public/

# Copy main banner
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/main-banner/main-banner.webp public/main-banner/

# Copy icons
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/icon/*.webp public/icon/

# Copy service images
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/services/term-insurance.webp public/services/
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/services/investment-insurance.webp public/services/
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/services/health-insurance.webp public/services/
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/services/woman-term-insurance.webp public/services/

# Copy term insurance images
cp -r /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/services/terms/ public/services/

# Copy investment images
cp -r /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/services/investment/ public/services/

# Copy health images
cp -r /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/services/health/ public/services/

# Copy partner logos
cp /Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/partners/*.svg public/partners/

echo "All assets copied successfully!"
```

## Single Script to Copy All Assets

Save this as `copy-assets.sh` in your React project root:

```bash
#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting asset migration...${NC}"

# Source and destination
SRC="/Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets"
DEST="/Users/fantiger/Documents/GitHub/familyraksha_react/public"

# Create directories
echo -e "${BLUE}Creating directories...${NC}"
mkdir -p "$DEST/icon"
mkdir -p "$DEST/services/terms"
mkdir -p "$DEST/services/investment"
mkdir -p "$DEST/services/health"
mkdir -p "$DEST/partners"
mkdir -p "$DEST/main-banner"

# Copy assets
echo -e "${BLUE}Copying logo...${NC}"
cp "$SRC/images/logo.webp" "$DEST/"

echo -e "${BLUE}Copying background images...${NC}"
cp "$SRC/images/bg1.webp" "$DEST/"
cp "$SRC/images/bg2.webp" "$DEST/"
cp "$SRC/images/bg17.webp" "$DEST/"
cp "$SRC/images/bg20.webp" "$DEST/"
cp "$SRC/images/bg22.webp" "$DEST/"

echo -e "${BLUE}Copying timeline images...${NC}"
cp "$SRC/images/startup.webp" "$DEST/"
cp "$SRC/images/the-end.webp" "$DEST/"

echo -e "${BLUE}Copying main banner...${NC}"
cp "$SRC/images/main-banner/main-banner.webp" "$DEST/main-banner/"

echo -e "${BLUE}Copying icons...${NC}"
cp "$SRC/images/icon/"*.webp "$DEST/icon/" 2>/dev/null

echo -e "${BLUE}Copying service images...${NC}"
cp "$SRC/images/services/term-insurance.webp" "$DEST/services/"
cp "$SRC/images/services/investment-insurance.webp" "$DEST/services/"
cp "$SRC/images/services/health-insurance.webp" "$DEST/services/"
cp "$SRC/images/services/woman-term-insurance.webp" "$DEST/services/"

echo -e "${BLUE}Copying term insurance images...${NC}"
cp -r "$SRC/images/services/terms/"*.webp "$DEST/services/terms/" 2>/dev/null

echo -e "${BLUE}Copying investment images...${NC}"
cp -r "$SRC/images/services/investment/"*.webp "$DEST/services/investment/" 2>/dev/null

echo -e "${BLUE}Copying health images...${NC}"
cp -r "$SRC/images/services/health/"*.webp "$DEST/services/health/" 2>/dev/null

echo -e "${BLUE}Copying partner logos...${NC}"
cp "$SRC/images/partners/"*.svg "$DEST/partners/" 2>/dev/null

echo -e "${GREEN}Asset migration completed successfully!${NC}"
echo -e "${GREEN}All assets have been copied to $DEST${NC}"

# List copied files
echo -e "\n${BLUE}Summary:${NC}"
echo "Files copied to public directory:"
find "$DEST" -type f | wc -l | xargs echo "Total files:"
```

## Usage

1. Make the script executable:
```bash
chmod +x copy-assets.sh
```

2. Run the script:
```bash
./copy-assets.sh
```

## Manual Copy (if needed)

If you prefer to copy manually:

1. Open Finder
2. Navigate to source: `/Users/fantiger/Documents/personal/familyraksha-local/familyraksha/wp-content/themes/familyraksha/assets/images/`
3. Navigate to destination: `/Users/fantiger/Documents/GitHub/familyraksha_react/public/`
4. Copy folders and files as per the structure above

## Verify Assets

After copying, verify that all assets are present:

```bash
cd /Users/fantiger/Documents/GitHub/familyraksha_react
find public -type f -name "*.webp" -o -name "*.svg" | sort
```

You should see all the required image files listed.

## Troubleshooting

If images don't show up in the browser:
1. Clear browser cache (Cmd+Shift+R on Mac)
2. Restart the dev server (`npm run dev`)
3. Check browser console for 404 errors
4. Verify file paths match exactly (case-sensitive)

## Note

- All paths are case-sensitive
- Make sure source files exist before copying
- WebP and SVG formats are used for optimal performance
- The React app expects all assets in the `public/` directory

