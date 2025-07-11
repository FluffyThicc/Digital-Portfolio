# Video Intro Troubleshooting Guide

## Common Issues and Solutions

### 1. Video Not Playing Automatically

**Problem**: Video doesn't autoplay when the page loads.

**Solutions**:
- Modern browsers require user interaction before allowing autoplay
- The video is muted by default to comply with autoplay policies
- Click anywhere on the page to trigger video playback
- If autoplay fails, a "Play Video" button will appear

### 2. Video File Not Found

**Problem**: Video shows "Video failed to autoplay" error.

**Solutions**:
- Ensure `Lightning.mp4` exists in `public/videos/` folder
- Check file permissions
- Verify the video file is not corrupted
- Test video playback at: `http://localhost:3000/test-video.html`

### 3. Video Path Issues

**Problem**: Video loads but doesn't play due to path issues.

**Solutions**:
- The component tries multiple paths:
  - `${PUBLIC_URL}/videos/Lightning.mp4`
  - `/videos/Lightning.mp4`
  - `./videos/Lightning.mp4`
- Check browser console for path-related errors

### 4. Browser Compatibility

**Problem**: Video works in some browsers but not others.

**Solutions**:
- Ensure browser supports MP4 format
- Check if browser blocks autoplay
- Try enabling autoplay in browser settings
- Test in different browsers (Chrome, Firefox, Safari, Edge)

### 5. Development vs Production

**Problem**: Video works in development but not in production.

**Solutions**:
- Check if `PUBLIC_URL` is set correctly in production
- Verify video file is included in build
- Check server configuration for serving static files
- Test with `npm run build` and serve the build folder

## Debugging Steps

1. **Open Browser Console**: Press F12 and check for errors
2. **Test Video File**: Visit `/test-video.html` to test video directly
3. **Check Network Tab**: Verify video file is being requested
4. **Clear Local Storage**: Remove `hasSeenIntro` to force video to show
5. **Test Different Browsers**: Try Chrome, Firefox, Safari

## Console Logs

The component logs various events to help debug:
- "Video load started"
- "Video loaded successfully"
- "Video can play"
- "Video can play through"
- "Attempting to play video..."
- "Video started playing successfully"
- "User interaction detected"

## Manual Testing

1. Clear browser cache and local storage
2. Open the website
3. Check if video intro appears
4. Click anywhere on the page
5. Verify video starts playing
6. Check if "Skip Intro" button works

## File Structure

```
public/
  videos/
    Lightning.mp4 (21MB)
  test-video.html (for testing)
src/
  components/
    VideoIntro.js
    VideoIntro.css
```

## Common Error Messages

- **"Video play failed"**: Autoplay blocked by browser
- **"Video error"**: File not found or corrupted
- **"Manual play failed"**: Browser doesn't support video format

## Browser Autoplay Policies

- **Chrome**: Requires user interaction or muted video
- **Firefox**: Requires user interaction
- **Safari**: Requires user interaction
- **Edge**: Requires user interaction or muted video

The component handles these policies by:
1. Muting the video by default
2. Detecting user interaction
3. Providing manual play fallback
4. Showing helpful error messages 