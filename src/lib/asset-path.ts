/**
 * Utility function to generate correct paths for assets
 * This handles the base path prefix for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  // If path is already an absolute URL, return it as is
  if (path.startsWith('http')) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use the fixed base path for GitHub Pages
  return `/portfolio/${cleanPath}`;
}
