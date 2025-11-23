import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');
const destPath = path.join(publicDir, 'hero-video.mp4');
const philosophyPath = path.join(publicDir, 'philosophy-video.mp4');

// List of potential hero video URLs
const videoUrls = [
    'https://videos.pexels.com/video-files/856882/856882-hd_1920_1080_30fps.mp4', // Abstract lights
    'https://videos.pexels.com/video-files/2022395/2022395-uhd_3840_2160_30fps.mp4', // Abstract shapes
    'https://videos.pexels.com/video-files/5377684/5377684-uhd_3840_2160_25fps.mp4'  // Ink
];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const request = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://www.pexels.com/'
            }
        }, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301 || response.statusCode === 307) {
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error(`Status Code ${response.statusCode}`));
                return;
            }
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    const stats = fs.statSync(dest);
                    if (stats.size < 1000) {
                        reject(new Error(`File too small (${stats.size} bytes)`));
                    } else {
                        resolve(stats.size);
                    }
                });
            });
        });
        request.on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
};

async function tryDownload() {
    console.log('Attempting to download hero video...');

    for (const url of videoUrls) {
        try {
            console.log(`Trying URL: ${url}`);
            const size = await downloadFile(url, destPath);
            console.log(`Success! Downloaded ${(size / 1024 / 1024).toFixed(2)} MB`);
            return;
        } catch (err) {
            console.error(`Failed: ${err.message}`);
        }
    }

    console.log('All downloads failed. Using philosophy video as fallback.');
    if (fs.existsSync(philosophyPath)) {
        fs.copyFileSync(philosophyPath, destPath);
        console.log('Fallback applied.');
    } else {
        console.error('No fallback available.');
    }
}

tryDownload();
