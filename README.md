# Hide Specific Ads & Skip Video Ads

**Hide Specific Ads & Skip Video Ads** is a Chrome extension that helps you:
- Hide banner ads and popups on websites.
- Remove ad iframes.
- Automatically skip short video ads.
- Automatically click the "Skip" or "Skip after x seconds" button, even when the button is inside an iframe player (`goatembed.com`).

---

## ✨ Features

- Hide ad elements with common classes: `.sspp-area`, `.display-single`, `.sspp-modal`, `.popup`, etc.
- Remove ad iframes containing keywords like: `ad`, `qc`, `banner`, `vpromolink`.
- Automatically skip HTML5 video ads with duration ≤ 90 seconds.
- Skip the first 5 seconds of the main video if there is an intro ad.
- Automatically click the "Skip" button when it appears, including inside embedded video iframes.

---

## 📥 Installation Guide

### 1. Download the source code
You can get the extension in two ways:

- **Clone from GitHub**:
  ```bash
  git clone https://github.com/bu1devgenie/Rophim-with-No-Ads.git
Download as ZIP:

Go to the GitHub repository page.

Click the Code button → Download ZIP.

Extract the ZIP file.

### 2. Install on Google Chrome
Open Google Chrome (or any Chromium-based browser such as Brave, Edge, Opera).

Navigate to:
chrome://extensions/
Enable Developer mode in the top right corner.

Click Load unpacked.

Select the folder containing the manifest.json file (the folder you downloaded or cloned in step 1).

The extension will now appear in your Extensions list and run automatically.

### 3. Verify it’s working
Visit a website with banner ads, popups, or video ads.

The extension will:

Immediately hide banner and popup ads.

Automatically skip video ads.

Automatically click the "Skip" button when it appears.

⚙ Configuration
manifest.json is set to run on 1 sites (https://www.rophim.me) if they change the domain just coppy new domain and replace old domain in manifest.json
