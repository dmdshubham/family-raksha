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
mkdir -p "$DEST/testimonials"

# Copy assets
echo -e "${BLUE}Copying logo...${NC}"
cp "$SRC/images/logo.webp" "$DEST/" 2>/dev/null

echo -e "${BLUE}Copying background images...${NC}"
cp "$SRC/images/bg1.webp" "$DEST/" 2>/dev/null
cp "$SRC/images/bg2.webp" "$DEST/" 2>/dev/null
cp "$SRC/images/bg17.webp" "$DEST/" 2>/dev/null
cp "$SRC/images/bg20.webp" "$DEST/" 2>/dev/null
cp "$SRC/images/bg22.webp" "$DEST/" 2>/dev/null

echo -e "${BLUE}Copying timeline images...${NC}"
cp "$SRC/images/startup.webp" "$DEST/" 2>/dev/null
cp "$SRC/images/the-end.webp" "$DEST/" 2>/dev/null

echo -e "${BLUE}Copying main banner...${NC}"
cp "$SRC/images/main-banner/main-banner.webp" "$DEST/main-banner/" 2>/dev/null

echo -e "${BLUE}Copying icons...${NC}"
cp "$SRC/images/icon/"*.webp "$DEST/icon/" 2>/dev/null

echo -e "${BLUE}Copying testimonial assets...${NC}"
cp "$SRC/images/testimonials/"*.webp "$DEST/testimonials/" 2>/dev/null

echo -e "${BLUE}Copying service images...${NC}"
cp "$SRC/images/services/term-insurance.webp" "$DEST/services/" 2>/dev/null
cp "$SRC/images/services/investment-insurance.webp" "$DEST/services/" 2>/dev/null
cp "$SRC/images/services/health-insurance.webp" "$DEST/services/" 2>/dev/null
cp "$SRC/images/services/woman-term-insurance.webp" "$DEST/services/" 2>/dev/null

echo -e "${BLUE}Copying term insurance images...${NC}"
cp "$SRC/images/services/terms/"*.webp "$DEST/services/terms/" 2>/dev/null

echo -e "${BLUE}Copying investment images...${NC}"
cp "$SRC/images/services/investment/"*.webp "$DEST/services/investment/" 2>/dev/null

echo -e "${BLUE}Copying health images...${NC}"
cp "$SRC/images/services/health/"*.webp "$DEST/services/health/" 2>/dev/null

echo -e "${BLUE}Copying partner logos...${NC}"
cp "$SRC/images/partners/"*.svg "$DEST/partners/" 2>/dev/null

echo -e "${GREEN}Asset migration completed successfully!${NC}"
echo -e "${GREEN}All assets have been copied to $DEST${NC}"

# List copied files
echo -e "\n${BLUE}Summary:${NC}"
echo "Files copied to public directory:"
find "$DEST" -type f 2>/dev/null | wc -l | xargs echo "Total files:"

