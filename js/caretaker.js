// File Upload Logic
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');

fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  fileList.innerHTML = ''; // Clear the list
  if (files.length > 0) {
    Array.from(files).forEach(file => {
      const listItem = document.createElement('p');
      listItem.textContent = `📁 ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
      fileList.appendChild(listItem);
    });
  } else {
    fileList.textContent = 'No files selected.';
  }
});

document.getElementById('uploadBtn').addEventListener('click', () => {
    const files = document.getElementById('fileInput').files;
    if (files.length > 0) {
        console.log('Files selected:', files);
    } else {
        console.error('No file selected!');
    }
});
