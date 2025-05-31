/**
 * Utility function to generate correct paths for assets
 * This handles the base path prefix for GitHub Pages deployment
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // If path is already an absolute URL (e.g., https://) return it as is
  if (cleanPath.match(/^https?:\/\//)) {
    return cleanPath;
  }
  
  // Use the configured base path from Vite
  return `/portfolio/${cleanPath}`;
}
