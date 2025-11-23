import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const videos = [
    { name: 'hero-video.mp4', url: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_24fps.mp4' },
    { name: 'work-video-1.mp4', url: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4' },
    { name: 'work-video-2.mp4', url: 'https://videos.pexels.com/video-files/5377684/5377684-uhd_3840_2160_25fps.mp4' },
    { name: 'work-video-3.mp4', url: 'https://videos.pexels.com/video-files/2022395/2022395-uhd_3840_2160_30fps.mp4' },
    { name: 'work-video-4.mp4', url: 'https://videos.pexels.com/video-files/856882/856882-hd_1920_1080_30fps.mp4' }
];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

async function downloadAll() {
    console.log('Starting downloads...');
    for (const video of videos) {
        console.log(`Downloading ${video.name}...`);
        try {
            await downloadFile(video.url, path.join(publicDir, video.name));
            console.log(`Downloaded ${video.name}`);
        } catch (err) {
            console.error(`Failed to download ${video.name}:`, err);
        }
    }
    console.log('All downloads complete.');
}

downloadAll();
