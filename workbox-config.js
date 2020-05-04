module.exports = {
  globDirectory: process.env.NODE_ENV === 'development' ? 'src-local-sw' : './build/',
  globPatterns: ['**/*.{html,js,css,woff,woff2}'],
  globIgnores: ['*.map', 'asset-manifest.json'],
  swDest:
    process.env.NODE_ENV === 'development' ? './public/service-worker-builded.js' : './build/service-worker-builded.js',
  swSrc: './src/service-worker.js',
};
