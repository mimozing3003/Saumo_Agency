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
    { name: 'philosophy-video.mp4', url: 'https://videos.pexels.com/video-files/2604142/2604142-uhd_3840_2160_30fps.mp4' }
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
    console.log('Starting philosophy video download...');
    for (const video of videos) {
        console.log(`Downloading ${video.name}...`);
        try {
            await downloadFile(video.url, path.join(publicDir, video.name));
            console.log(`Downloaded ${video.name}`);
        } catch (err) {
            console.error(`Failed to download ${video.name}:`, err);
        }
    }
    console.log('Download complete.');
}

downloadAll();
