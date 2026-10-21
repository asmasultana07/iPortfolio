/**
 * Resume Download Utility
 * Downloads Asma Sultana's PDF resume from Google Drive
 */

// Google Drive PDF download URL
// When user clicks "Download Resume", this PDF will be downloaded
const RESUME_DRIVE_URL = 'https://drive.google.com/uc?export=download&id=1C9sYVm2cmpArouszUuW3Coddr0w4FHGR';

export function downloadResumeFile(): void {
  // Direct download from Google Drive
  const link = document.createElement('a');
  link.href = RESUME_DRIVE_URL;
  link.download = 'Asma_Sultana_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
