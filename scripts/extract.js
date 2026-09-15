const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegPath);

const videoPath = path.join(__dirname, '..', 'public', 'hero_video (2).mp4');
const outDir = path.join(__dirname, '..', 'public', 'frames');
const outPath = path.join(outDir, 'frame-%03d.webp');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

console.log('Starting extraction using:', ffmpegPath);
ffmpeg(videoPath)
  .outputOptions([
    '-vf', 'scale=1280:-1',
    '-r', '24',
    '-c:v', 'libwebp',
    '-q:v', '80'
  ])
  .output(outPath)
  .on('end', () => console.log('Extraction complete!'))
  .on('error', (err) => console.error('Error during extraction:', err))
  .run();
