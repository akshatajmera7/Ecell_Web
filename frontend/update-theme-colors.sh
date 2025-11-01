#!/bin/bash

# This script will batch update all remaining files with old color values
# Run this in Git Bash or WSL in the frontend directory

# Define color mappings
OLD_BG="#0C233C"
OLD_PRIMARY="#296685"
OLD_SECONDARY="#FD8916"
OLD_TEXT="#F5EDE4"

echo "🎨 Starting theme color updates..."

# Function to update inline styles to Tailwind classes
update_files() {
    # Update background colors
    find src/components -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i "s/style={{ backgroundColor: '$OLD_BG'/className=\"bg-ecell-bg\"/g" {} +
    find src/components -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i "s/backgroundColor: '$OLD_BG'/backgroundColor: '#2a2a2a'/g" {} +
    
    find src/components -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i "s/backgroundColor: '$OLD_PRIMARY'/backgroundColor: '#6b5fff'/g" {} +
    find src/components -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i "s/backgroundColor: '$OLD_SECONDARY'/backgroundColor: '#d4ff00'/g" {} +
    
    # Update text colors
    find src/components -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i "s/color: '$OLD_TEXT'/color: '#ffffff'/g" {} +
    
    # Update border colors
    find src/components -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i "s/borderColor: '$OLD_PRIMARY'/borderColor: '#6b5fff'/g" {} +
    find src/components -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i "s/borderColor: '$OLD_SECONDARY'/borderColor: '#d4ff00'/g" {} +
    
    echo "✅ Batch updates complete!"
}

# Run the update
update_files

echo "🎉 Theme update script completed!"
echo "📝 Please review the changes and test the application"
