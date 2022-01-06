
export default function (headHtml) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
        <style>
        html, body {
          width: 100%;
          height: 100%;
      }
      #root {
        width: 100%;
        height: 100%;
      }
      .top {
        width: 100%;
        height: 100%;
      }
        </style>
    
          <title>React Storybook</title>
          ${headHtml}
        </head>
        <body>
          <div id="root" />
          <script src="./previewSetup.js"></script>
        </body>
      </html>
    `;
  }
  