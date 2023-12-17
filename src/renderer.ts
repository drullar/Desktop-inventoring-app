let information = document.getElementById('info')
// @ts-expect-error
information.innerText = `Node.js (v${versions.node}), and Electron (v${versions.electron})`