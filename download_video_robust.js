import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Using a different, high-quality abstract video
const videoUrl = 'https://videos.pexels.com/video-files/2604142/2604142-uhd_3840_2160_30fps.mp4';
const destPath = path.join(publicDir, 'philosophy-video.mp4');

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const request = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        }, (response) => {
            // Handle Redirects
            if (response.statusCode === 302 || response.statusCode === 301 || response.statusCode === 307) {
                console.log(`Redirecting to ${response.headers.location}...`);
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }

            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: Status Code ${response.statusCode}`));
                return;
            }

            const file = fs.createWriteStream(dest);
            response.pipe(file);

            file.on('finish', () => {
                file.close(() => {
                    const stats = fs.statSync(dest);
                    if (stats.size < 1000) {
                        reject(new Error(`Downloaded file is too small (${stats.size} bytes). Likely an error page.`));
                    } else {
                        console.log(`Download complete. File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
                        resolve();
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

console.log('Starting robust video download...');
downloadFile(videoUrl, destPath)
    .then(() => console.log('Success!'))
    .catch(err => console.error('Error:', err));
