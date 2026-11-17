const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectDir = __dirname;
const zipName = 'utkarsh-multimedia-website.zip';

console.log('Creating ZIP archive...');

try {
  // Use PowerShell to create zip (Windows native)
  const command = `powershell -Command "Compress-Archive -Path '${projectDir}\\*' -DestinationPath '${projectDir}\\${zipName}' -Force"`;
  execSync(command, { stdio: 'inherit' });
  console.log(`\n✅ Created: ${zipName}`);
  console.log(`📁 Location: ${path.join(projectDir, zipName)}`);
  console.log('\nTo use:');
  console.log('1. Download the ZIP file');
  console.log('2. Extract it');
  console.log('3. Run: npm install && npm run dev');
} catch (error) {
  console.error('Error creating ZIP:', error.message);
  console.log('\nAlternative: Use File Explorer to zip the "outputs" folder manually.');
}